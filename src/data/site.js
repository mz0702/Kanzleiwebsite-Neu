// Kanzlei-Stammdaten — einzige Quelle für Telefon, Adressen und E-Mail, damit
// Header, Footer, Kontaktseite und JSON-LD nie auseinanderlaufen.
const email = "kanzlei@wegner-schoebener.de";

export const site = {
  name: "Wegner & Schöbener Rechtsanwälte",
  email,
  locations: [
    {
      city: "Ochsenfurt",
      street: "Marktbreiter Str. 1",
      zip: "97199",
      phone: "09331 981 99-0",
      phoneHref: "tel:+499331981990",
      phoneIntl: "+49 9331 981990",
      fax: "09331 981 99-28",
      faxIntl: "+49 9331 9819928",
    },
    {
      city: "Würzburg",
      street: "Marktgasse 9",
      note: "an der Marienkapelle",
      zip: "97070",
      phone: "0931 166 33",
      phoneHref: "tel:+4993116633",
      phoneIntl: "+49 931 16633",
      fax: "0931 571 456",
      faxIntl: "+49 931 571456",
    },
  ],
};

export const mainPhone = site.locations[0];

// Vorausgefüllte Terminanfrage: Wer keine Formulierung suchen muss, schreibt eher.
// ponytail: mailto statt Kontaktformular — statisches Hosting, und vertrauliche
// Mandantenangaben sollen nicht über einen Formular-Drittanbieter laufen.
export const mailtoTermin =
  `mailto:${email}?subject=${encodeURIComponent("Terminanfrage")}&body=` +
  encodeURIComponent(
    "Guten Tag,\n\nich bitte um einen Termin.\n\nRechtsgebiet:\nKurz zum Anliegen:\nLäuft bereits eine Frist (z. B. Kündigung, Bußgeldbescheid)?\nTelefon für Rückruf:\nBevorzugter Standort (Ochsenfurt / Würzburg):\n\nVielen Dank"
  );

export const routeUrl = (loc) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name}, ${loc.street}, ${loc.zip} ${loc.city}`
  )}`;
