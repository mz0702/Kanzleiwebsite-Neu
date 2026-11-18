# Erzeugt public/images/<rechtsgebiet>.svg — Aufruf: python3 scripts/illustrations.py public/images
"""Isometrische Kanzlei-Stillleben für die sechs Rechtsgebiete (SVG-Generator).

Orthografische Projektion von vorn-oben, Grundriss 45° gedreht. Flache Inhalte
(Dokumenttexte, Füller, Schlüssel …) werden in lokalen 2D-Koordinaten gezeichnet
und per affiner Matrix auf ihre Ebene projiziert. Malerverfahren: hinten → vorn.
"""
import math
import random
import re
import sys

E = math.radians(28)
SE, CE = math.sin(E), math.cos(E)
R2 = math.sqrt(2)

INK = "#2B2724"
PAPER, PAPER2 = "#FFFFFF", "#F7F4EF"
SIDE_L, SIDE_R = "#F1EDE6", "#E4DED4"
TEXT = "#C4BCB1"
ACC, ACC_D, ACC_L = "#9D2119", "#7A1812", "#C2483C"
DARK, DARK_T, DARK_S = "#2F2A27", "#45403B", "#211D1B"
METAL = "#D9D3C9"
PLINTH_TOP, PLINTH_SIDE = "#FCFBF8", "#F0ECE5"
SW = 1.0
SERIF = "Georgia, 'Times New Roman', serif"


def P(x, y, z):
    return ((x - y) / R2, (x + y) / R2 * SE - z * CE)


def f(v):
    return f"{v:.2f}".rstrip("0").rstrip(".")


def plane(cx, cy, z, rot):
    """Matrix lokale Ebene (u nach rechts, v nach vorn) -> Bildschirm."""
    a = math.radians(rot)
    ca, sa = math.cos(a), math.sin(a)
    o = P(cx, cy, z)
    pu = ((ca - sa) / R2, (ca + sa) / R2 * SE)
    pv = ((-sa - ca) / R2, (ca - sa) / R2 * SE)
    return (pu[0], pu[1], pv[0], pv[1], o[0], o[1])


def apply(m, u, v):
    return (m[0] * u + m[2] * v + m[4], m[1] * u + m[3] * v + m[5])


class Scene:
    def __init__(self):
        self.parts, self.pts = [], []

    def add(self, svg, pts=()):
        self.parts.append(svg)
        self.pts += list(pts)

    def path(self, pts2, fill="none", stroke=INK, close=True, sw=SW, extra=""):
        d = "M" + "L".join(f"{f(x)} {f(y)}" for x, y in pts2) + ("Z" if close else "")
        self.add(f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" stroke-linecap="round"{extra}/>', pts2)

    def poly(self, pts3, fill, **kw):
        self.path([P(*p) for p in pts3], fill, **kw)

    def flat(self, m, body, bbox, lift=0.0, under=None):
        """Lokale 2D-Zeichnung auf eine Ebene legen. `lift` = Materialstärke in px
        (dunkle Kopie darunter), `under` = deren Füllfarbe."""
        mt = "matrix(" + " ".join(f(v) for v in m) + ")"
        if lift:
            # Untere Kopie: nur die Form (class="top"), umgefärbt — Attribute ersetzen, nicht doppeln.
            body_under = "".join(
                re.sub(r'\s(fill|stroke)="[^"]*"', "", tag).replace('class="top"', f'fill="{under}" stroke="{under}"')
                for tag in re.findall(r'<[^>]*class="top"[^>]*/>', body))
            self.add(f'<g transform="translate(0 {f(lift)})"><g transform="{mt}">{body_under}</g></g>')
        self.add(f'<g transform="{mt}">{body}</g>', [apply(m, u, v) for u, v in bbox])

    def ellipse(self, c, r, fill, stroke=INK, sw=SW, extra=""):
        x, y = P(*c)
        self.add(f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="{f(r)}" ry="{f(r * SE)}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{extra}/>',
                 [(x - r, y - r * SE), (x + r, y + r * SE)])

    def shadow(self, c, rx, ry=None, o=0.13):
        x, y = P(c[0] + 3, c[1] + 3, c[2])
        ry = rx if ry is None else ry
        self.add(f'<ellipse cx="{f(x)}" cy="{f(y)}" rx="{f(rx)}" ry="{f(ry * SE)}" fill="rgba(43,39,36,{o})" filter="url(#sh)"/>')

    def shadow_rect(self, cx, cy, w, h, rot, z=0, o=0.14):
        m = plane(cx + 3, cy + 3, z, rot)
        pts = [apply(m, u, v) for u, v in ((-w / 2, -h / 2), (w / 2, -h / 2), (w / 2, h / 2), (-w / 2, h / 2))]
        d = "M" + "L".join(f"{f(x)} {f(y)}" for x, y in pts) + "Z"
        self.add(f'<path d="{d}" fill="rgba(43,39,36,{o})" filter="url(#sh)"/>')

    def cylinder(self, c, r, h, top=PAPER, side=SIDE_L, hatch=0, draw_top=True, stroke=INK):
        cx, cy, cz = c
        bx, by = P(cx, cy, cz)
        tx, ty = P(cx, cy, cz + h)
        d = (f"M{f(tx - r)} {f(ty)}L{f(bx - r)} {f(by)}A{f(r)} {f(r * SE)} 0 0 0 {f(bx + r)} {f(by)}"
             f"L{f(tx + r)} {f(ty)}A{f(r)} {f(r * SE)} 0 0 1 {f(tx - r)} {f(ty)}Z")
        self.add(f'<path d="{d}" fill="{side}" stroke="{stroke}" stroke-width="{SW}" stroke-linejoin="round"/>',
                 [(bx - r, by + r * SE), (tx + r, ty - r * SE)])
        if hatch:
            seg = "".join(
                f"M{f(bx + r * math.cos(t))} {f(by + r * SE * math.sin(t))}V{f(ty + r * SE * math.sin(t))}"
                for t in (math.pi * k / hatch for k in range(1, hatch)))
            self.add(f'<path d="{seg}" stroke="{stroke}" stroke-opacity="0.28" stroke-width="0.5"/>')
        if draw_top:
            self.ellipse((cx, cy, cz + h), r, top, stroke=stroke)

    def box(self, c, sx, sy, h, rot=0, top=PAPER, fills=None, deco=None, stroke=INK):
        cx, cy, cz = c
        a = math.radians(rot)
        ca, sa = math.cos(a), math.sin(a)

        def W(u, v, w):
            return (cx + u * ca - v * sa, cy + u * sa + v * ca, cz + w)

        hx, hy = sx / 2, sy / 2
        faces = {
            "+u": ([W(hx, -hy, 0), W(hx, hy, 0), W(hx, hy, h), W(hx, -hy, h)], (ca, sa)),
            "-u": ([W(-hx, hy, 0), W(-hx, -hy, 0), W(-hx, -hy, h), W(-hx, hy, h)], (-ca, -sa)),
            "+v": ([W(hx, hy, 0), W(-hx, hy, 0), W(-hx, hy, h), W(hx, hy, h)], (-sa, ca)),
            "-v": ([W(-hx, -hy, 0), W(hx, -hy, 0), W(hx, -hy, h), W(-hx, -hy, h)], (sa, -ca)),
        }
        for k, (pts, n) in faces.items():
            if n[0] + n[1] > 1e-6:
                fill = (fills or {}).get(k) or (SIDE_R if n[0] - n[1] > 0 else SIDE_L)
                self.poly(pts, fill, stroke=stroke)
                if deco and k in deco:
                    deco[k](W)
        self.poly([W(-hx, -hy, h), W(hx, -hy, h), W(hx, hy, h), W(-hx, hy, h)], top, stroke=stroke)
        if deco and "top" in deco:
            deco["top"](W)
        return W

    def bbox(self):
        xs = [p[0] for p in self.pts]
        ys = [p[1] for p in self.pts]
        return min(xs), min(ys), max(xs), max(ys)

    def svg(self, box, pad=10, style=""):
        x0, y0, x1, y1 = box[0] - pad, box[1] - pad, box[2] + pad, box[3] + pad
        w, h = x1 - x0, y1 - y0
        tw = max(w, h * 4 / 3)  # festes 4:3 für ruhige Kachel-Raster
        th = tw * 3 / 4
        x0 -= (tw - w) / 2
        y0 -= (th - h) / 2
        defs = '<defs><filter id="sh" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3.2"/></filter></defs>'
        css = "<style>" + style + "@media (prefers-reduced-motion:reduce){*{animation:none!important}}</style>" if style else ""
        return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{f(x0)} {f(y0)} {f(tw)} {f(th)}" fill="none">'
                + defs + css + "".join(self.parts) + "</svg>")


NS = ' vector-effect="non-scaling-stroke"'


# ---------------------------------------------------------------- Bausteine
def plinth(s, r=86, h=6):
    s.cylinder((0, 0, -h), r, h, top=PLINTH_TOP, side=PLINTH_SIDE, hatch=72)


def text_lines(u0, u1, v0, n, gap=5.2, seed=1, last_short=True):
    rnd = random.Random(seed)
    out = []
    for i in range(n):
        end = u1 - rnd.uniform(0, 10)
        if last_short and i == n - 1:
            end = u0 + (u1 - u0) * 0.45
        out.append(f'<path d="M{f(u0)} {f(v0 + i * gap)}H{f(end)}" stroke="{TEXT}" stroke-width="1.15" stroke-linecap="round"{NS}/>')
    return "".join(out)


def signature(u, v, cls="sig"):
    return (f'<path class="{cls}" d="M{f(u)} {f(v)}c2-5 5-7 6-3s-3 7 0 5 4-9 7-6-1 6 2 5 3-5 5-4 1 3 4 2 4-2 7-3"'
            f' stroke="{INK}" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"{NS}/>')


def sheet(s, cx, cy, rot, w=70, h=92, title=None, lines=8, seed=1, sig=True, extra="", z=0, shadow=True):
    if shadow:
        s.shadow_rect(cx, cy, w, h, rot, z)
    s.box((cx, cy, z), w, h, 1.1, rot, top=PAPER, fills={"+u": SIDE_R, "+v": SIDE_L, "-u": SIDE_L, "-v": SIDE_R})
    m = plane(cx, cy, z + 1.1, rot)
    body = ""
    v = -h / 2 + 13
    if title:
        fs = min(6.4, (w - 14) / (len(title) * 0.78))  # lange Titel passen auf die Seite
        body += (f'<text x="0" y="{f(v)}" text-anchor="middle" font-family="{SERIF}" font-size="{f(fs)}" '
                 f'letter-spacing="{f(fs * 0.16)}" fill="{INK}">{title}</text>')
        body += f'<path d="M-9 {f(v + 4)}H9" stroke="{INK}" stroke-width=".8"{NS}/>'
        v += 11
    body += text_lines(-w / 2 + 9, w / 2 - 9, v, lines, seed=seed)
    if sig:
        sv = h / 2 - 12
        body += f'<path d="M{f(-w / 2 + 9)} {f(sv + 3)}H{f(-w / 2 + 34)}" stroke="{TEXT}" stroke-width=".9"{NS}/>'
        body += signature(-w / 2 + 11, sv)
    s.flat(m, body + extra, [(-w / 2, -h / 2), (w / 2, h / 2)])
    return m


def wax_seal(u, v, r=8):
    pts = []
    for k in range(28):
        t = 2 * math.pi * k / 28
        rr = r * (1 + 0.07 * math.sin(5 * t) + 0.04 * math.cos(9 * t))
        pts.append(f"{f(u + rr * math.cos(t))} {f(v + rr * math.sin(t))}")
    blob = "M" + "L".join(pts) + "Z"
    ribbon = (f'<path d="M{f(u - 3)} {f(v + 3)}l-5 13 4-2 3 4 3-14Z" fill="{ACC_D}" stroke="{ACC_D}" stroke-width=".6"{NS}/>'
              f'<path d="M{f(u + 2)} {f(v + 4)}l5 12 2-4 4 1-6-12Z" fill="{ACC_D}" stroke="{ACC_D}" stroke-width=".6"{NS}/>')
    return (ribbon + f'<path d="{blob}" fill="{ACC}" stroke="{ACC_D}" stroke-width=".8"{NS}/>'
            f'<circle cx="{f(u)}" cy="{f(v)}" r="{f(r * 0.58)}" stroke="{ACC_L}" stroke-width=".9"{NS}/>'
            f'<text x="{f(u)}" y="{f(v + 2.3)}" text-anchor="middle" font-family="{SERIF}" font-size="6.5" fill="{ACC_L}">§</text>')


def stamp(u, v, r=11, rot=-14):
    return (f'<g transform="rotate({rot} {f(u)} {f(v)})" opacity=".88">'
            f'<circle cx="{f(u)}" cy="{f(v)}" r="{f(r)}" stroke="{ACC}" stroke-width="1.3"{NS}/>'
            f'<circle cx="{f(u)}" cy="{f(v)}" r="{f(r - 2.6)}" stroke="{ACC}" stroke-width=".7"{NS}/>'
            f'<text x="{f(u)}" y="{f(v + 3)}" text-anchor="middle" font-family="{SERIF}" font-size="9" fill="{ACC}">§</text>'
            f'<path d="M{f(u - r + 1)} {f(v + r + 4)}H{f(u + r + 6)}" stroke="{ACC}" stroke-width=".8"{NS}/></g>')


def paperclip(u, v):
    return (f'<path d="M{f(u)} {f(v + 4)}V{f(v - 5)}a3 3 0 0 1 6 0V{f(v + 6)}a4.5 4.5 0 0 1-9 0V{f(v - 2)}" '
            f'stroke="{ACC}" stroke-width="1.5" stroke-linecap="round"{NS}/>')


def pen(s, cx, cy, z, rot, length=86):
    """Füllfederhalter, liegend (Draufsicht auf Ebene z, mit Materialstärke)."""
    m = plane(cx, cy, z, rot)
    L = length / 2
    body = (f'<path class="top" d="M{f(-L + 3)} -3.2H{f(L - 24)}L{f(L - 18)} -2.4H{f(L - 14)}L{f(L)} 0L{f(L - 14)} 2.4H{f(L - 18)}'
            f'L{f(L - 24)} 3.2H{f(-L + 3)}A3.2 3.2 0 0 1 {f(-L + 3)} -3.2Z" fill="{DARK}" stroke="{INK}" stroke-width="{SW}"{NS}/>')
    nib = (f'<path d="M{f(L - 14)} -2.4L{f(L)} 0L{f(L - 14)} 2.4Z" fill="{METAL}" stroke="{INK}" stroke-width=".8"{NS}/>'
           f'<path d="M{f(L - 9)} 0H{f(L - 1)}" stroke="{INK}" stroke-width=".6"{NS}/>')
    ring = f'<path d="M{f(L - 30)} -3.2V3.2M{f(L - 28.5)} -3.2V3.2" stroke="{ACC_L}" stroke-width="1.1"{NS}/>'
    clip = f'<path d="M{f(-L + 6)} -1.4H{f(-L + 30)}" stroke="#8C847B" stroke-width="1.1" stroke-linecap="round"{NS}/>'
    hl = f'<path d="M{f(-L + 4)} -1.9H{f(L - 26)}" stroke="#6E665F" stroke-width=".5"{NS}/>'
    s.flat(m, body + hl + clip + ring + nib, [(-L, -4), (L, 4)], lift=2.6, under=DARK_S)


def key(s, cx, cy, z, rot):
    """Alter Bartschlüssel."""
    m = plane(cx, cy, z, rot)
    shape = (f'<path class="top" fill-rule="evenodd" d="M-31 0a10 10 0 1 0 20 0a10 10 0 1 0-20 0ZM-26 0a5 5 0 1 1 10 0a5 5 0 1 1-10 0Z'
             f'M-11.5 -2.2H22V2.2H-11.5ZM12 2H23V11H20V7H17V11H14V7H12Z" fill="{DARK}" stroke="{INK}" stroke-width="{SW}"{NS}/>')
    hl = f'<path d="M-9 -1H20" stroke="#6E665F" stroke-width=".5"{NS}/>'
    s.flat(m, shape + hl, [(-32, -11), (23, 11)], lift=2.2, under=DARK_S)


def glasses(s, cx, cy, z, rot):
    m = plane(cx, cy, z, rot)
    lens = ""
    for u in (-15, 15):
        lens += (f'<ellipse cx="{u}" cy="0" rx="12" ry="10.5" fill="rgba(214,224,228,.45)" stroke="{DARK}" stroke-width="2.1"{NS}/>'
                 f'<path d="M{u - 6} -5.5q3-3 7-3.2" stroke="#fff" stroke-width="1.2" stroke-linecap="round"{NS}/>')
    frame = (f'<path d="M-3 -2.5q3-4 6 0" stroke="{DARK}" stroke-width="2"{NS}/>'
             f'<path d="M-27 -3L-25 -34q0-4 3-5M27 -3L25 -34q0-4-3-5" stroke="{DARK}" stroke-width="1.6" stroke-linecap="round"{NS}/>')
    s.shadow((cx, cy, 0), 26, 16, o=0.1)
    s.flat(m, frame + lens, [(-28, -40), (28, 11)])


def ring(s, c, R=11, r=8.4, h=3.4):
    cx, cy, cz = c
    s.cylinder(c, R, h, top=PAPER, side=SIDE_R, hatch=10, draw_top=False)
    tx, ty = P(cx, cy, cz + h)
    dh = h * CE
    d = (f"M{f(tx - R)} {f(ty)}a{f(R)} {f(R * SE)} 0 1 0 {f(2 * R)} 0a{f(R)} {f(R * SE)} 0 1 0 {f(-2 * R)} 0Z"
         f"M{f(tx - r)} {f(ty)}a{f(r)} {f(r * SE)} 0 1 0 {f(2 * r)} 0a{f(r)} {f(r * SE)} 0 1 0 {f(-2 * r)} 0Z")
    s.add(f'<path d="{d}" fill="{PAPER}" fill-rule="evenodd" stroke="{INK}" stroke-width="{SW}"/>')
    wall = (f"M{f(tx - r)} {f(ty)}A{f(r)} {f(r * SE)} 0 0 1 {f(tx + r)} {f(ty)}"
            f"L{f(tx + r)} {f(ty + dh)}A{f(r)} {f(r * SE)} 0 0 0 {f(tx - r)} {f(ty + dh)}Z")
    s.add(f'<path d="{wall}" fill="{SIDE_L}" stroke="{INK}" stroke-width=".7"/>')


def coin_stack(s, x, y, n, seed=3, r=14, h=3.6):
    rnd = random.Random(seed)
    s.shadow((x, y, 0), r + 3)
    for i in range(n):
        ox, oy = rnd.uniform(-1, 1), rnd.uniform(-1, 1)
        s.cylinder((x + ox, y + oy, i * h), r, h, top=PAPER, side=SIDE_L, hatch=12)
    s.ellipse((x + ox, y + oy, n * h), r - 2.6, "none", sw=0.6)


def house(s, c, w=38, d=30, h=24, roof=16, rot=0):
    """Architekturmodell: weiß, Dach schraffiert statt farbig."""
    cx, cy, cz = c
    s.shadow((cx, cy, cz), w * 0.62, d * 0.75)

    def front(W):
        s.poly([W(-5, d / 2, 0), W(-13, d / 2, 0), W(-13, d / 2, 14), W(-5, d / 2, 14)], SIDE_R)
        s.poly([W(12, d / 2, 8), W(3, d / 2, 8), W(3, d / 2, 16), W(12, d / 2, 16)], PAPER)

    def side(W):
        s.poly([W(w / 2, -4, 9), W(w / 2, 6, 9), W(w / 2, 6, 17), W(w / 2, -4, 17)], PAPER)

    W = s.box(c, w, d, h, rot, deco={"+v": front, "+u": side})
    ov = 3
    rl, rr = W(-w / 2, 0, h + roof), W(w / 2, 0, h + roof)
    s.poly([W(w / 2, -d / 2, h), W(w / 2, d / 2, h), rr], SIDE_R)
    eave_l, eave_r = W(-w / 2, d / 2 + ov, h - 2), W(w / 2, d / 2 + ov, h - 2)
    s.poly([eave_l, eave_r, rr, rl], PAPER2)
    hatch = []
    for k in range(1, 12):
        t = k / 12
        a = [eave_l[i] + (eave_r[i] - eave_l[i]) * t for i in range(3)]
        b = [rl[i] + (rr[i] - rl[i]) * t for i in range(3)]
        hatch.append((P(*a), P(*b)))
    s.add('<path d="' + "".join(f"M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" for a, b in hatch)
          + f'" stroke="{INK}" stroke-opacity=".35" stroke-width=".55"/>')


def briefcase(s, c, rot=0):
    w, d, h = 74, 22, 46
    s.shadow(c, 46, 22, o=0.16)

    def front(W):
        y = d / 2 + 0.01
        s.poly([W(-w / 2 + 3, y, h - 15), W(w / 2 - 3, y, h - 15), W(w / 2 - 3, y, h - 3), W(-w / 2 + 3, y, h - 3)], DARK, stroke=INK)
        for u in (-22, 22):
            s.poly([W(u - 4, y, h - 19), W(u + 4, y, h - 19), W(u + 4, y, h - 12), W(u - 4, y, h - 12)], METAL)
        a, b = P(*W(-w / 2 + 6, y, 5)), P(*W(w / 2 - 6, y, 5))
        s.add(f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="#7D756D" stroke-width=".7" stroke-dasharray="2 2"/>')

    W = s.box(c, w, d, h, rot, top=DARK_T, fills={"+v": DARK, "+u": DARK_S}, deco={"+v": front})
    hp = [P(*W(u, 0, h + zz)) for u, zz in ((-13, 0), (-13, 8), (-10, 11), (10, 11), (13, 8), (13, 0))]
    d_ = "M" + "L".join(f"{f(x)} {f(y)}" for x, y in hp)
    s.add(f'<path d="{d_}" stroke="{INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"/>'
          f'<path d="{d_}" stroke="#6E665F" stroke-width="1" stroke-linejoin="round"/>', hp)


def ledger(s, cx, cy, rot):
    """Gebundenes Kassenbuch mit Lesebändchen."""
    w, d = 54, 72
    s.shadow_rect(cx, cy, w, d, rot, o=0.18)
    s.box((cx, cy, 0), w, d, 1.8, rot, top=DARK_T, fills={"+v": DARK, "+u": DARK_S, "-u": DARK, "-v": DARK_S})

    def pages(W):
        for k in range(1, 6):
            a, b = P(*W(w / 2 - 2.01, -d / 2 + 3, 1.8 + k * 1.4)), P(*W(w / 2 - 2.01, d / 2 - 3, 1.8 + k * 1.4))
            s.add(f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="{TEXT}" stroke-width=".5"/>')

    def pages_v(W):
        for k in range(1, 6):
            a, b = P(*W(-w / 2 + 3, d / 2 - 2.01, 1.8 + k * 1.4)), P(*W(w / 2 - 3, d / 2 - 2.01, 1.8 + k * 1.4))
            s.add(f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="{TEXT}" stroke-width=".5"/>')
        # Lesebändchen hängt vorn heraus
        r0 = P(*W(10, d / 2 - 2, 7)); r1 = P(*W(14, d / 2 - 2, 7))
        r2 = P(*W(15, d / 2 + 9, 0)); r3 = P(*W(10, d / 2 + 9, 0))
        s.path([r0, r1, r2, (r2[0] - 2, r2[1] + 2.5), r3], fill=ACC, stroke=ACC_D, sw=0.8)

    s.box((cx, cy, 1.8), w - 4, d - 4, 8, rot, top=PAPER, fills={"+u": PAPER2, "+v": PAPER2}, deco={"+u": pages, "+v": pages_v})
    W = s.box((cx, cy, 9.8), w, d, 1.8, rot, top=DARK_T, fills={"+v": DARK, "+u": DARK_S, "-u": DARK, "-v": DARK_S})
    m = plane(cx, cy, 11.6, rot)
    s.flat(m, f'<rect x="{f(-w / 2 + 6)}" y="{f(-d / 2 + 6)}" width="{f(w - 12)}" height="{f(d - 12)}" stroke="#8C847B" stroke-width=".6"{NS}/>'
              f'<rect x="-11" y="-14" width="22" height="9" stroke="#B9A57E" stroke-width=".7"{NS}/>',
           [(-w / 2, -d / 2), (w / 2, d / 2)])


def car_key(s, cx, cy, z, rot):
    m = plane(cx, cy, z, rot)
    fob = (f'<rect class="top" x="-11" y="-16" width="22" height="34" rx="8" fill="{DARK}" stroke="{INK}" stroke-width="{SW}"{NS}/>')
    btn = "".join(f'<circle cx="0" cy="{v}" r="2.6" stroke="#8C847B" stroke-width=".7"{NS}/>' for v in (-7, 1, 9))
    blade = (f'<path d="M-3 18H3V40L0 44L-3 40Z" fill="{METAL}" stroke="{INK}" stroke-width=".8"{NS}/>'
             f'<path d="M-0.6 21V39" stroke="#A39B90" stroke-width=".6"{NS}/>')
    ringp = (f'<path fill-rule="evenodd" d="M-8 -25a8 8 0 1 0 16 0a8 8 0 1 0-16 0ZM-6 -25a6 6 0 1 1 12 0a6 6 0 1 1-12 0Z" '
             f'fill="{METAL}" stroke="{INK}" stroke-width=".7"{NS}/>')
    s.shadow((cx, cy, 0), 16, 26, o=0.12)
    s.flat(m, ringp + blade, [(-9, -34), (9, 45)], lift=1.2, under="#A39B90")
    s.flat(m, fob + btn, [(-11, -16), (11, 18)], lift=3, under=DARK_S)


def warning_sign(s, px, py, height=30):
    s.shadow((px, py, 0), 8)
    s.cylinder((px, py, 0), 6, 2.5)
    s.poly([(px, py, 2.5), (px, py, height)], "none", sw=2.2, close=False)
    u = (1 / R2, -1 / R2)

    def sp(du, dz):
        return P(px + u[0] * du, py + u[1] * du, height + dz)

    s.path([sp(-20, 0), sp(20, 0), sp(0, 34)], fill=PAPER, sw=1.3)
    s.path([sp(-13.5, 4), sp(13.5, 4), sp(0, 25.5)], fill="none", stroke=ACC, sw=2.6)
    a, b, c = sp(0, 19), sp(0, 11.5), sp(0, 8)
    s.add(f'<path d="M{f(a[0])} {f(a[1])}L{f(b[0])} {f(b[1])}" stroke="{INK}" stroke-width="1.9" stroke-linecap="round"/>'
          f'<circle cx="{f(c[0])}" cy="{f(c[1])}" r="1.15" fill="{INK}"/>')


SIG_CSS = ".sig{stroke-dasharray:90;stroke-dashoffset:90;animation:sig 2.4s .6s ease-out forwards}@keyframes sig{to{stroke-dashoffset:0}}"


# ---------------------------------------------------------------- Szenen
def erbrecht():
    s = Scene()
    plinth(s)
    sheet(s, 8, -4, 9, title=None, lines=11, seed=7, sig=False, shadow=True)
    sheet(s, -2, -2, -11, title="TESTAMENT", lines=8, seed=2, extra=wax_seal(20, 31))
    pen(s, 52, -14, 0.5, 112, length=78)
    key(s, -24, 52, 0.5, -28)
    return s


def betreuungsrecht():
    s = Scene()
    plinth(s)
    sheet(s, 16, -10, 13, title="PATIENTENVERFÜGUNG", lines=9, seed=5, sig=False)
    sheet(s, -4, 8, -8, title="VORSORGEVOLLMACHT", lines=7, seed=3, extra=paperclip(-30, -48))
    glasses(s, 30, 40, 4, 16)
    pen(s, -56, 6, 0.5, 80, length=72)
    return s


def familienrecht():
    s = Scene()
    plinth(s)
    house(s, (-42, -40, 0), rot=0)
    sheet(s, 2, 12, -9, title="EHEVERTRAG", lines=8, seed=11, extra=stamp(18, 26))
    s.shadow((50, -12, 0), 24, 18, o=0.1)
    ring(s, (44, -22, 0))
    ring(s, (56, -6, 0))
    return s


def insolvenzrecht():
    s = Scene()
    plinth(s)
    ledger(s, -28, -20, 12)
    coin_stack(s, 34, -34, 6, seed=2)
    coin_stack(s, 54, -8, 3, seed=5)
    sheet(s, 6, 30, -12, w=72, h=60, title="RESTSCHULDBEFREIUNG", lines=4, seed=4, extra=stamp(22, 14, r=9))
    return s


def arbeitsrecht():
    s = Scene()
    plinth(s)
    briefcase(s, (-22, -28, 0))
    sheet(s, 20, 24, -14, title="ARBEITSVERTRAG", lines=8, seed=9, extra=paperclip(-30, -48))
    pen(s, -44, 34, 0.5, 26, length=66)
    return s


def verkehrsrecht():
    s = Scene()
    plinth(s)
    warning_sign(s, -30, -44)
    sheet(s, -12, 12, -10, title="BUSSGELDBESCHEID", lines=8, seed=6, extra=stamp(19, 27))
    car_key(s, 48, 16, 0.5, -32)
    return s


SCENES = dict(erbrecht=erbrecht, betreuungsrecht=betreuungsrecht, familienrecht=familienrecht,
              insolvenzrecht=insolvenzrecht, arbeitsrecht=arbeitsrecht, verkehrsrecht=verkehrsrecht)

if __name__ == "__main__":
    out = sys.argv[1] if len(sys.argv) > 1 else "."
    scenes = {name: fn() for name, fn in SCENES.items()}
    # Gemeinsamer Bildausschnitt: Sockel sitzt in allen Kacheln gleich groß an derselben Stelle.
    boxes = [sc.bbox() for sc in scenes.values()]
    union = (min(b[0] for b in boxes), min(b[1] for b in boxes), max(b[2] for b in boxes), max(b[3] for b in boxes))
    for name, sc in scenes.items():
        with open(f"{out}/{name}.svg", "w", encoding="utf-8") as fh:
            fh.write(sc.svg(union, style=SIG_CSS))
        print(name)
