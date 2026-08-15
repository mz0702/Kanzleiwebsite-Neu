import { basePath } from "@/lib/basePath";
export const blogs = [
  {
    slug: "green-tech-revolution",
    title: "Green Tech Revolution: How Digital Innovation is Driving Global Sustainability",
    date: "February 7, 2026",
    readTime: "8 min read",
    category: "Innovation",
    author: "Lena Hartwell",
    authorRole: "Co-Founder & CEO",
    excerpt: "Digital tools are reshaping how we build, monitor, and optimize clean-energy infrastructure.",
    image: `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
    featured: true,
    tags: ["Technology", "Digital", "Future"],
    body: [
      {
        type: "paragraph",
        content:
          "Clean energy sits at a strange crossroads. On one side, the technology has matured — panels are cheaper, batteries are safer, and monitoring software has made systems transparent in ways unthinkable a decade ago. On the other side, adoption is uneven, and the biggest barriers are no longer technical but cultural and digital.",
      },
      {
        type: "paragraph",
        content:
          "This is where digital innovation matters most. Not as a marketing flourish, but as the connective tissue that makes clean energy understandable, buyable, and manageable for everyone — from the first-time homeowner to the largest industrial operator.",
      },
      {
        type: "heading",
        content: "Three shifts worth watching",
      },
      {
        type: "paragraph",
        content:
          "Over the last year, three shifts have reshaped how we think about deploying clean-energy systems. They're worth paying attention to whether you're planning a first install or managing a growing portfolio.",
      },
      {
        type: "list",
        items: [
          "Real-time transparency. Every watt, counted and visible.",
          "Flexible financing. Pay-as-you-save models unlock harder markets.",
          "Community-scale projects. Shared systems, shared savings.",
        ],
      },
      {
        type: "quote",
        content:
          "The future of clean energy isn't about better panels. It's about better software wrapped around those panels.",
      },
      {
        type: "paragraph",
        content:
          "For teams considering a transition, the playbook is straightforward: start with a solid site assessment, prioritize components with long warranties, and invest in monitoring from day one. The rest follows.",
      },
    ],
  },
  {
    slug: "protect-our-oceans",
    title: "Protect our oceans through small steps, big positive impact daily",
    date: "March 19, 2026",
    readTime: "5 min read",
    category: "Community",
    author: "Ayesha Khan",
    authorRole: "Sustainability Lead",
    excerpt: "Small daily changes in energy habits ripple out to healthier oceans and coastlines.",
    image: `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
    featured: false,
    tags: ["Community", "Oceans", "Sustainability"],
    body: [
      {
        type: "paragraph",
        content:
          "Oceans absorb roughly 25% of all CO₂ we release. That's a generous buffer, but it's not free — warmer seas, acidified water, and struggling reefs are the slow interest we pay. The good news: small, repeatable choices at home add up faster than most people think.",
      },
      {
        type: "heading",
        content: "Start where your watts come from",
      },
      {
        type: "paragraph",
        content:
          "The single biggest household lever is electricity source. A roof-sized solar system in a typical coastal U.S. home offsets more CO₂ per year than 200 no-plastic-bag trips to the market. Both matter — but only one moves the needle measurably.",
      },
      {
        type: "list",
        items: [
          "Switch appliances to eco-mode defaults.",
          "Schedule heavy loads (dishwasher, EV charging) to overlap with solar production.",
          "Audit phantom loads — standby power is often 5-10% of total consumption.",
        ],
      },
      {
        type: "quote",
        content:
          "You don't need to change everything overnight. Start with one habit, measure the impact, then build from there.",
      },
    ],
  },
  {
    slug: "energy-sustainability-myths",
    title: "Breaking down the widespread myths about energy & sustainability",
    date: "February 12, 2026",
    readTime: "10 min read",
    category: "Research",
    author: "Daniel Oyelaran",
    authorRole: "Head of Engineering",
    excerpt: "The five biggest misconceptions about solar and storage, and the reality behind them.",
    image: `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
    featured: false,
    tags: ["Research", "Education", "Solar"],
    body: [
      {
        type: "paragraph",
        content:
          "Every week, a version of the same five questions lands in our inbox. They're not bad questions — they're just answers to myths that haven't caught up to how the technology has matured. Let's work through them.",
      },
      {
        type: "heading",
        content: "Myth 1: Solar doesn't work in cloudy climates",
      },
      {
        type: "paragraph",
        content:
          "Germany — famously grey — installs more solar per capita than almost any country. Modern panels generate meaningful power even in diffuse light. Output drops, yes, but annual yield is still strong enough to make solar a strong economic choice in most of the northern U.S. and Europe.",
      },
      {
        type: "heading",
        content: "Myth 2: Batteries are dangerous",
      },
      {
        type: "paragraph",
        content:
          "Modern lithium iron phosphate (LFP) chemistry is fundamentally different from the lithium-ion batteries in laptops. LFP cells are thermally stable to well above typical indoor temperatures and carry UL 9540 certifications for residential use.",
      },
      {
        type: "quote",
        content:
          "The biggest risk in clean energy isn't technology failure — it's outdated information shaping good decisions.",
      },
    ],
  },
  {
    slug: "home-battery-guide",
    title: "A buyer's guide to home batteries in 2026",
    date: "April 3, 2026",
    readTime: "12 min read",
    category: "Guides",
    author: "Marco Tan",
    authorRole: "Design Director",
    excerpt: "Sizing, chemistry, and the questions you should ask before adding storage.",
    image: `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
    featured: false,
    tags: ["Guides", "Battery", "Home"],
    body: [
      {
        type: "paragraph",
        content:
          "Home batteries have quietly become the most important upgrade a solar homeowner can make. They unlock real energy independence, protect against grid outages, and — in many regions — pay for themselves through rate arbitrage within 6-8 years.",
      },
      {
        type: "heading",
        content: "Start with the question, not the kWh",
      },
      {
        type: "paragraph",
        content:
          "The first question isn't 'how big?' but 'why?'. Backup for the fridge and a few lights during outages needs a different battery than seasonal load-shifting or full-home off-grid ambitions. Each use case has a different sweet spot.",
      },
      {
        type: "list",
        items: [
          "Backup only: 10-15 kWh usable, partial home.",
          "Daily cycling + backup: 20-30 kWh usable, whole home.",
          "Off-grid capable: 40+ kWh, with generator backup advisable.",
        ],
      },
      {
        type: "quote",
        content:
          "Sizing a battery is about matching chemistry, power, and capacity to how your household actually uses energy — not to a round number on a spec sheet.",
      },
    ],
  },
  {
    slug: "commercial-solar-roi",
    title: "The new math of commercial solar ROI",
    date: "April 18, 2026",
    readTime: "9 min read",
    category: "Business",
    author: "Lena Hartwell",
    authorRole: "Co-Founder & CEO",
    excerpt: "How incentives, rising utility rates, and financing changed the commercial solar case.",
    image: `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
    featured: false,
    tags: ["Business", "Finance", "Commercial"],
    body: [
      {
        type: "paragraph",
        content:
          "If your last commercial solar analysis was more than two years old, it's worth redoing the math. Three factors have shifted the economics meaningfully: utility rates, tax credits, and financing flexibility.",
      },
      {
        type: "heading",
        content: "Utility rates: the silent accelerator",
      },
      {
        type: "paragraph",
        content:
          "Commercial electricity rates rose on average 6.2% in 2024 alone — roughly triple the long-term average. Every year those rates climb, the relative savings from onsite solar compound.",
      },
      {
        type: "quote",
        content:
          "A solar system paid off in 6 years under 2022 assumptions pays off in under 5 today — without any technology change.",
      },
    ],
  },
  {
    slug: "off-grid-resilience",
    title: "Designing for resilience: lessons from off-grid projects",
    date: "March 2, 2026",
    readTime: "11 min read",
    category: "Engineering",
    author: "Daniel Oyelaran",
    authorRole: "Head of Engineering",
    excerpt: "What our remote-site projects taught us about building truly reliable systems.",
    image: `${basePath}/images/photo-1532601224476-15c79f2f7a51.webp`,
    featured: false,
    tags: ["Engineering", "Resilience", "Off-grid"],
    body: [
      {
        type: "paragraph",
        content:
          "When there's no grid to lean on, every engineering choice gets exposed. We've spent six years building solar-plus-storage systems in places where an outage can last for days, and it's taught us principles that now shape every project we deliver — urban or remote.",
      },
      {
        type: "heading",
        content: "Redundancy is cheap; downtime is expensive",
      },
      {
        type: "paragraph",
        content:
          "The off-grid playbook forces you to value uptime more than hardware savings. A second charge controller, a third string, a generator for worst-case weeks — these aren't overkill, they're insurance against real operational costs.",
      },
      {
        type: "list",
        items: [
          "Duplicate critical electronics (inverters, controllers).",
          "Oversize generation by 20% versus sunny-day assumptions.",
          "Always include a backup dispatch plan — even if it's a small generator.",
        ],
      },
      {
        type: "quote",
        content:
          "Reliability is designed, not bought. Every good system has a story of hard-earned redundancy behind it.",
      },
    ],
  },
];
