import { lawyers } from "@/data/lawyers";

// Landingpages je Rechtsgebiet (/rechtsgebiete/[slug]).
//
// `image` steht hier bewusst OHNE basePath — die Zuordnung Titel -> Datei ist
// dieselbe wie bisher in PracticeAreasSection. Für <img> wird `${basePath}${image}`
// gesetzt, für OG-Tags `absoluteUrl(image)`.
//
// `intro`, `anliegen` und `faqs` sind allgemeine, rein informative Erläuterungen
// zur Rechtslage — keine Rechtsberatung im Einzelfall.
const areas = [
  {
    slug: "erbrecht",
    title: "Erbrecht",
    lawyerSlug: "beate-wegner",
    image: "/images/Erbrecht.png",
    metaDescription:
      "Anwältin für Erbrecht in Ochsenfurt: Testament, gesetzliche Erbfolge, Erbschein, Pflichtteil und Erbengemeinschaft. Beate Wegner berät Erblasser und Erben.",
    intro:
      "Ein Anwalt für Erbrecht befasst sich mit allen rechtlichen Fragen, die vor und nach einem Todesfall entstehen: mit der Gestaltung von Testamenten und Erbverträgen, mit der Feststellung, wer gesetzlicher Erbe ist, mit der Beantragung eines Erbscheins, mit der Berechnung und Durchsetzung von Pflichtteilsansprüchen sowie mit der Auseinandersetzung von Erbengemeinschaften. Rechtliche Grundlage ist das fünfte Buch des Bürgerlichen Gesetzbuchs (§§ 1922 ff. BGB). Liegt keine letztwillige Verfügung vor, greift die gesetzliche Erbfolge, die Verwandte in Ordnungen einteilt und den Ehegatten je nach Güterstand beteiligt. Streit entsteht in der Praxis vor allem dort, wo mehrere Erben gemeinsam über einen Nachlass verfügen müssen, wo Immobilien oder Betriebe aufzuteilen sind oder wo übergangene Angehörige ihren Pflichtteil verlangen. Auch Fristen spielen eine große Rolle, etwa die sechswöchige Frist für die Ausschlagung einer Erbschaft. In Ochsenfurt und im Landkreis Würzburg begleitet Rechtsanwältin Beate Wegner sowohl Erblasser bei der Nachlassplanung als auch Erben bei der Abwicklung eines Nachlasses.",
    anliegen: [
      "Ein Testament soll errichtet, geändert oder auf seine Wirksamkeit geprüft werden.",
      "Nach einem Todesfall ist unklar, wer nach der gesetzlichen Erbfolge erbt und ob ein Erbschein benötigt wird.",
      "Eine Erbengemeinschaft findet keine Einigung über die Aufteilung des Nachlasses, häufig über eine Immobilie.",
      "Übergangene Angehörige möchten ihren Pflichtteil beziffern und geltend machen.",
      "Ein Nachlass ist möglicherweise überschuldet und die Ausschlagung der Erbschaft steht im Raum.",
    ],
    faqs: [
      {
        question: "Was passiert, wenn kein Testament vorhanden ist?",
        answer:
          "Dann gilt die gesetzliche Erbfolge. Sie teilt die Verwandten in Ordnungen ein: Kinder und Enkel erben vor den Eltern und Geschwistern des Verstorbenen. Der überlebende Ehegatte erbt daneben eine Quote, deren Höhe vom Güterstand und davon abhängt, welche Verwandten noch leben. Eine nichteheliche Lebensgefährtin oder ein Lebensgefährte erbt nach dem Gesetz nicht.",
      },
      {
        question: "Wer hat Anspruch auf einen Pflichtteil?",
        answer:
          "Pflichtteilsberechtigt sind grundsätzlich die Abkömmlinge, der Ehegatte und, wenn keine Kinder vorhanden sind, die Eltern des Verstorbenen. Der Pflichtteil beträgt die Hälfte des gesetzlichen Erbteils und ist ein Anspruch auf Geld gegen die Erben, kein Anteil an einzelnen Gegenständen des Nachlasses.",
      },
      {
        question: "Wie lange kann eine Erbschaft ausgeschlagen werden?",
        answer:
          "Die Frist beträgt regelmäßig sechs Wochen ab dem Zeitpunkt, zu dem der Erbe vom Erbfall und dem Grund seiner Berufung erfährt. Sie verlängert sich auf sechs Monate, wenn der Erblasser seinen letzten Wohnsitz im Ausland hatte oder der Erbe sich bei Fristbeginn im Ausland aufhält. Die Ausschlagung wird gegenüber dem Nachlassgericht erklärt.",
      },
      {
        question: "Wann wird ein Erbschein benötigt?",
        answer:
          "Ein Erbschein weist gegenüber Banken, Versicherungen oder dem Grundbuchamt nach, wer Erbe geworden ist. Er ist nicht in jedem Fall erforderlich: Liegt ein notarielles Testament oder ein Erbvertrag mit dem Eröffnungsprotokoll des Nachlassgerichts vor, genügt dieser Nachweis in vielen Fällen.",
      },
    ],
  },
  {
    slug: "betreuungsrecht",
    title: "Betreuungsrecht",
    lawyerSlug: "beate-wegner",
    image: "/images/Betreuungsrecht.jpg",
    metaDescription:
      "Anwältin für Betreuungsrecht in Ochsenfurt: Vorsorgevollmacht, Patientenverfügung und Betreuungsverfahren. Beate Wegner berät Betroffene und Angehörige.",
    intro:
      "Ein Anwalt für Betreuungsrecht begleitet Menschen, die ihre Angelegenheiten krankheits- oder altersbedingt nicht mehr selbst regeln können, sowie deren Angehörige. Das Betreuungsrecht ist in den §§ 1814 ff. BGB geregelt und wurde zum 1. Januar 2023 grundlegend reformiert. Es geht dabei um die Bestellung eines rechtlichen Betreuers durch das Betreuungsgericht, um den Zuschnitt der Aufgabenbereiche wie Gesundheitssorge, Vermögenssorge oder Behördenangelegenheiten und um die Frage, ob eine Betreuung überhaupt erforderlich ist. Vorrang hat immer die eigene Vorsorge: Wer eine Vorsorgevollmacht, eine Betreuungsverfügung oder eine Patientenverfügung errichtet hat, kann eine gerichtlich angeordnete Betreuung in vielen Fällen vermeiden. Anwaltliche Unterstützung wird typischerweise bei der Gestaltung solcher Vollmachten benötigt, im gerichtlichen Betreuungsverfahren, bei der Kontrolle oder dem Wechsel eines Betreuers sowie bei Maßnahmen, die einer gerichtlichen Genehmigung bedürfen. Rechtsanwältin Beate Wegner ist in Ochsenfurt auch als gerichtlich bestellte Betreuerin tätig und kennt das Verfahren daher aus beiden Perspektiven.",
    anliegen: [
      "Eine Vorsorgevollmacht, Betreuungsverfügung oder Patientenverfügung soll errichtet werden, solange dies noch selbst möglich ist.",
      "Ein Angehöriger kann seine Angelegenheiten nicht mehr regeln und es stellt sich die Frage, ob eine Betreuung nötig ist.",
      "Das Betreuungsgericht hat ein Verfahren eingeleitet und die Betroffenen möchten ihre Rechte im Verfahren kennen.",
      "Die Führung einer bestehenden Betreuung wird beanstandet oder ein Betreuerwechsel wird angestrebt.",
      "Eine genehmigungspflichtige Maßnahme steht an, etwa die Auflösung einer Wohnung oder der Verkauf einer Immobilie.",
    ],
    faqs: [
      {
        question: "Wann ordnet das Gericht eine rechtliche Betreuung an?",
        answer:
          "Nur dann, wenn ein Volljähriger seine Angelegenheiten aufgrund einer Krankheit oder Behinderung ganz oder teilweise nicht mehr besorgen kann und keine vorrangige Hilfe zur Verfügung steht. Besteht eine wirksame Vorsorgevollmacht, ist eine Betreuung in der Regel nicht erforderlich. Angeordnet wird sie außerdem nur für die Aufgabenbereiche, in denen tatsächlich Unterstützungsbedarf besteht.",
      },
      {
        question: "Worin unterscheiden sich Vorsorgevollmacht und Betreuungsverfügung?",
        answer:
          "Mit einer Vorsorgevollmacht bevollmächtigt man eine Vertrauensperson unmittelbar, ohne dass ein Gericht eingeschaltet werden muss. Eine Betreuungsverfügung wirkt dagegen erst im Betreuungsverfahren: In ihr wird festgelegt, wer im Fall der Fälle zum Betreuer bestellt werden soll und wie die Betreuung geführt werden soll.",
      },
      {
        question: "Verliert man durch eine Betreuung die Geschäftsfähigkeit?",
        answer:
          "Nein. Die Bestellung eines Betreuers ändert an der Geschäftsfähigkeit nichts. Nur wenn das Gericht zusätzlich einen Einwilligungsvorbehalt anordnet, weil sonst eine erhebliche Gefahr für Person oder Vermögen droht, sind Willenserklärungen im betroffenen Aufgabenbereich von der Zustimmung des Betreuers abhängig.",
      },
      {
        question: "Wer wird zum Betreuer bestellt?",
        answer:
          "Vorrang hat der Wunsch der betroffenen Person. Wird niemand vorgeschlagen, berücksichtigt das Gericht persönliche Bindungen, insbesondere zu Angehörigen. Steht keine geeignete ehrenamtliche Person zur Verfügung, wird ein Berufsbetreuer bestellt.",
      },
    ],
  },
  {
    slug: "familienrecht",
    title: "Familienrecht",
    lawyerSlug: "susanne-schoebener",
    image: "/images/Familienrecht.jpg",
    metaDescription:
      "Anwältin für Familienrecht in Ochsenfurt: Scheidung, Trennungsjahr, Unterhalt, Sorge- und Umgangsrecht sowie Zugewinnausgleich. Susanne Schöbener vertritt Sie.",
    intro:
      "Ein Anwalt für Familienrecht regelt die rechtlichen Folgen von Trennung, Scheidung und Elternschaft. Dazu gehören das Scheidungsverfahren selbst, der Versorgungsausgleich, Ehegatten- und Kindesunterhalt, das Sorge- und Umgangsrecht, die Aufteilung des gemeinsamen Vermögens im Zugewinnausgleich sowie Ehe- und Scheidungsfolgenvereinbarungen. In Deutschland gilt das Zerrüttungsprinzip: Eine Ehe wird geschieden, wenn sie gescheitert ist, wofür in aller Regel das Trennungsjahr vorausgesetzt wird. Zuständig ist ausschließlich das Familiengericht, und mindestens ein Ehegatte muss anwaltlich vertreten sein. Der Unterhalt wird nach gesetzlichen Vorgaben und den in der Praxis gebräuchlichen Leitlinien berechnet, beim Kindesunterhalt insbesondere nach der Düsseldorfer Tabelle. Beim gesetzlichen Güterstand der Zugewinngemeinschaft wird nicht das gesamte Vermögen geteilt, sondern nur der Zuwachs ausgeglichen, den die Eheleute während der Ehe erzielt haben. Im Sorge- und Umgangsrecht steht das Kindeswohl im Mittelpunkt; die gemeinsame elterliche Sorge besteht nach einer Trennung grundsätzlich fort. Rechtsanwältin Susanne Schöbener vertritt Mandantinnen und Mandanten aus Ochsenfurt und dem Landkreis Würzburg in Trennungs- und Scheidungsverfahren.",
    anliegen: [
      "Nach einer Trennung ist offen, wie das Trennungsjahr läuft und wann der Scheidungsantrag gestellt werden kann.",
      "Kindes- oder Ehegattenunterhalt soll berechnet, angepasst oder durchgesetzt werden.",
      "Eltern streiten über das Sorgerecht, den Lebensmittelpunkt des Kindes oder den Umgang.",
      "Gemeinsames Vermögen, eine Immobilie oder der Hausrat müssen auseinandergesetzt werden.",
      "Ein Ehevertrag oder eine Scheidungsfolgenvereinbarung soll aufgesetzt oder geprüft werden.",
    ],
    faqs: [
      {
        question: "Muss vor einer Scheidung ein Trennungsjahr eingehalten werden?",
        answer:
          "In aller Regel ja. Leben die Eheleute seit einem Jahr getrennt und beantragen beide die Scheidung oder stimmt der andere zu, wird das Scheitern der Ehe vermutet. Bei einseitigem Antrag ohne Zustimmung sind es drei Jahre. Nur in eng begrenzten Härtefällen kann früher geschieden werden.",
      },
      {
        question: "Brauchen beide Ehegatten einen eigenen Anwalt?",
        answer:
          "Vor dem Familiengericht besteht Anwaltszwang für denjenigen, der den Scheidungsantrag stellt. Der andere Ehegatte kann der Scheidung ohne eigenen Anwalt zustimmen, dann aber keine eigenen Anträge stellen. Einen gemeinsamen Anwalt für beide Seiten gibt es aus berufsrechtlichen Gründen nicht.",
      },
      {
        question: "Wie wird Kindesunterhalt berechnet?",
        answer:
          "Maßgeblich sind das bereinigte Nettoeinkommen des unterhaltspflichtigen Elternteils und das Alter des Kindes. Beide Werte ergeben nach der Düsseldorfer Tabelle den Zahlbetrag, auf den das Kindergeld anteilig angerechnet wird. Der Elternteil, bei dem das Kind lebt, erfüllt seinen Beitrag grundsätzlich durch Betreuung.",
      },
      {
        question: "Was ist der Versorgungsausgleich?",
        answer:
          "Beim Versorgungsausgleich werden die während der Ehe erworbenen Rentenanwartschaften zwischen den Ehegatten geteilt. Das Gericht führt ihn bei einer Scheidung grundsätzlich von Amts wegen durch; bei kurzer Ehedauer von bis zu drei Jahren nur auf Antrag.",
      },
    ],
  },
  {
    slug: "insolvenzrecht",
    title: "Insolvenzrecht",
    lawyerSlug: "susanne-schoebener",
    image: "/images/insolvenzrecht.jpg",
    metaDescription:
      "Anwältin für Insolvenzrecht in Ochsenfurt: Verbraucherinsolvenz, Restschuldbefreiung, Regelinsolvenz und Gläubigervertretung. Susanne Schöbener berät Sie.",
    intro:
      "Ein Anwalt für Insolvenzrecht begleitet überschuldete Privatpersonen, Selbstständige und Unternehmen durch das Insolvenzverfahren. Für Verbraucher führt der Weg über die Verbraucherinsolvenz: Zunächst ist ein außergerichtlicher Einigungsversuch mit den Gläubigern erforderlich, dessen Scheitern bescheinigt werden muss; erst danach können beim Insolvenzgericht die Eröffnung des Verfahrens und die Restschuldbefreiung beantragt werden. Seit der Reform von 2020 dauert es in der Regel drei Jahre bis zur Restschuldbefreiung. In dieser Zeit wird der pfändbare Teil des Einkommens abgeführt, während die Pfändungsfreigrenzen das Existenzminimum schützen. Mit der Eröffnung des Verfahrens sind Zwangsvollstreckungen einzelner Gläubiger in das Vermögen des Schuldners nicht mehr zulässig. Nicht alle Forderungen entfallen am Ende: Verbindlichkeiten aus vorsätzlich begangener unerlaubter Handlung, bestimmte Geldstrafen und Bußgelder sowie rückständiger Unterhalt können bestehen bleiben. Unternehmen und Selbstständige durchlaufen das Regelinsolvenzverfahren, bei dem zusätzlich die Insolvenzantragspflicht und die Haftung der Geschäftsführung eine Rolle spielen. Rechtsanwältin Susanne Schöbener berät in Ochsenfurt Schuldner ebenso wie Gläubiger.",
    anliegen: [
      "Die Schulden sind nicht mehr zu bedienen und der Weg in die Verbraucherinsolvenz soll geprüft werden.",
      "Der außergerichtliche Einigungsversuch mit den Gläubigern und der spätere Insolvenzantrag müssen vorbereitet werden.",
      "Selbstständige oder Unternehmen stehen vor einer Regelinsolvenz und der Frage der Antragspflicht.",
      "Das Konto ist gepfändet und es geht um Pfändungsfreigrenzen und das Pfändungsschutzkonto.",
      "Gläubiger möchten Forderungen zur Insolvenztabelle anmelden und ihre Rechte im Verfahren wahren.",
    ],
    faqs: [
      {
        question: "Wie lange dauert eine Privatinsolvenz?",
        answer:
          "Für Verfahren, die seit der Reform von 2020 beantragt werden, dauert es ab der Eröffnung in der Regel drei Jahre bis zur Restschuldbefreiung. Voraussetzung ist, dass der Schuldner seine Obliegenheiten während dieser Zeit erfüllt, insbesondere Auskunftspflichten einhält und einer angemessenen Erwerbstätigkeit nachgeht.",
      },
      {
        question: "Welche Schulden bleiben trotz Restschuldbefreiung bestehen?",
        answer:
          "Ausgenommen sind unter anderem Verbindlichkeiten aus vorsätzlich begangener unerlaubter Handlung, Geldstrafen und vergleichbare Sanktionen sowie rückständiger Unterhalt, der vorsätzlich pflichtwidrig nicht gezahlt wurde. Damit solche Forderungen ausgenommen bleiben, müssen Gläubiger sie im Verfahren allerdings entsprechend anmelden.",
      },
      {
        question: "Was passiert während des Verfahrens mit dem Einkommen?",
        answer:
          "Nur der pfändbare Teil des Einkommens wird an den Treuhänder abgeführt. Wie hoch dieser ist, richtet sich nach der Pfändungstabelle und nach der Zahl der Unterhaltsberechtigten. Ein Pfändungsschutzkonto stellt sicher, dass der geschützte Betrag auf dem Konto verfügbar bleibt.",
      },
      {
        question: "Muss vor dem Insolvenzantrag mit den Gläubigern verhandelt werden?",
        answer:
          "Bei der Verbraucherinsolvenz ja. Der Antrag ist nur zulässig, wenn zuvor ein außergerichtlicher Einigungsversuch auf Grundlage eines Schuldenbereinigungsplans unternommen wurde und eine geeignete Stelle oder Person bescheinigt, dass er gescheitert ist.",
      },
    ],
  },
  {
    slug: "arbeitsrecht",
    title: "Arbeitsrecht",
    lawyerSlug: "stephan-wegner",
    image: "/images/Arbeitsrecht.jpg",
    metaDescription:
      "Anwalt für Arbeitsrecht in Ochsenfurt: Kündigungsschutzklage, Abfindung, Aufhebungsvertrag, Abmahnung und Arbeitszeugnis. Stephan Wegner vertritt Sie.",
    intro:
      "Ein Anwalt für Arbeitsrecht vertritt Arbeitnehmer und Arbeitgeber in allen Fragen des Arbeitsverhältnisses: von der Gestaltung und Prüfung des Arbeitsvertrags über Abmahnungen, Versetzungen und Zeugnisse bis zur Kündigung und zum Verfahren vor dem Arbeitsgericht. Zentral ist der Kündigungsschutz. Wer sich gegen eine Kündigung wehren will, muss innerhalb von drei Wochen nach deren Zugang Kündigungsschutzklage erheben; danach gilt die Kündigung grundsätzlich als von Anfang an wirksam. Das Kündigungsschutzgesetz greift in Betrieben mit mehr als zehn Beschäftigten und nach mehr als sechs Monaten Betriebszugehörigkeit. Häufige Themen sind daneben Abfindungen, auf die entgegen einer verbreiteten Annahme kein automatischer Anspruch besteht, die aber oft im gerichtlichen Vergleich ausgehandelt werden, sowie Aufhebungsverträge, Überstunden, Urlaubsansprüche und Arbeitszeugnisse. Vor dem Arbeitsgericht trägt in der ersten Instanz jede Partei ihre eigenen Anwaltskosten. Rechtsanwalt Stephan Wegner betreut arbeitsrechtliche Mandate in Ochsenfurt und Umgebung.",
    anliegen: [
      "Eine Kündigung ist zugegangen und die dreiwöchige Klagefrist läuft bereits.",
      "Der Arbeitgeber bietet einen Aufhebungsvertrag oder eine Abfindung an, die geprüft werden soll.",
      "Eine Abmahnung soll aus der Personalakte entfernt oder inhaltlich angegriffen werden.",
      "Ein Arbeitszeugnis enthält verdeckte Bewertungen oder eine unzutreffende Leistungsbeurteilung.",
      "Arbeitgeber möchten Arbeitsverträge, Abmahnungen oder eine Kündigung rechtssicher vorbereiten.",
    ],
    faqs: [
      {
        question: "Wie lange kann gegen eine Kündigung vorgegangen werden?",
        answer:
          "Die Kündigungsschutzklage muss innerhalb von drei Wochen nach Zugang der schriftlichen Kündigung beim Arbeitsgericht eingehen. Wird die Frist versäumt, gilt die Kündigung grundsätzlich als wirksam, auch wenn sie inhaltlich angreifbar gewesen wäre. Die Frist gilt unabhängig davon, ob eine ordentliche oder eine fristlose Kündigung ausgesprochen wurde.",
      },
      {
        question: "Besteht bei einer Kündigung Anspruch auf eine Abfindung?",
        answer:
          "Einen allgemeinen gesetzlichen Anspruch gibt es nicht. Abfindungen können sich aus einem Sozialplan, einem Tarifvertrag, dem Arbeitsvertrag oder einem Angebot des Arbeitgebers bei betriebsbedingter Kündigung ergeben. In der Praxis werden sie meist im Rahmen eines Vergleichs vor dem Arbeitsgericht vereinbart.",
      },
      {
        question: "Wann gilt das Kündigungsschutzgesetz?",
        answer:
          "Es gilt für Betriebe mit in der Regel mehr als zehn Arbeitnehmern, wobei Teilzeitkräfte anteilig zählen, und setzt voraus, dass das Arbeitsverhältnis länger als sechs Monate bestanden hat. Außerhalb seines Anwendungsbereichs bleiben allgemeine Grenzen bestehen, etwa das Maßregelungsverbot und der besondere Schutz bestimmter Personengruppen.",
      },
      {
        question: "Sollte ein Aufhebungsvertrag unterschrieben werden?",
        answer:
          "Niemand ist verpflichtet, einen Aufhebungsvertrag zu unterschreiben. Da die Beendigung dabei einvernehmlich erfolgt, kann die Agentur für Arbeit eine Sperrzeit beim Arbeitslosengeld verhängen. Deshalb sollten Inhalt und Folgen vor der Unterschrift geprüft werden.",
      },
    ],
  },
  {
    slug: "verkehrsrecht",
    title: "Verkehrsrecht",
    lawyerSlug: "stephan-wegner",
    image: "/images/Verkehrsrecht.png",
    metaDescription:
      "Anwalt für Verkehrsrecht in Ochsenfurt: Unfallregulierung, Bußgeldbescheid, Fahrverbot und Verkehrsstrafrecht. Stephan Wegner vertritt Sie als Verkehrsanwalt.",
    intro:
      "Ein Anwalt für Verkehrsrecht befasst sich mit den rechtlichen Folgen von Verkehrsunfällen, Bußgeldverfahren und Verkehrsstraftaten. Nach einem Unfall geht es vor allem um die Regulierung des Schadens gegenüber der gegnerischen Haftpflichtversicherung: Reparaturkosten oder Wiederbeschaffungswert, merkantile Wertminderung, Nutzungsausfall oder Mietwagen, Sachverständigen- und Abschleppkosten sowie Schmerzensgeld bei Verletzungen. Steht die Haftung des Unfallgegners fest, gehören auch die Anwaltskosten des Geschädigten in der Regel zum ersatzfähigen Schaden. Der Geschädigte entscheidet dabei grundsätzlich selbst, ob er reparieren lässt oder auf Gutachtenbasis abrechnet, und er wählt Werkstatt und Sachverständigen selbst aus. Im Bußgeldverfahren, etwa bei Geschwindigkeits-, Abstands-, Rotlicht- oder Handyverstößen, läuft ab Zustellung des Bescheids eine zweiwöchige Einspruchsfrist; geprüft werden dann häufig die Messung selbst, die Fahrereigenschaft und die Verhältnismäßigkeit eines Fahrverbots. Das Verkehrsstrafrecht betrifft unter anderem Trunkenheits- und Drogenfahrten, das unerlaubte Entfernen vom Unfallort und die Entziehung der Fahrerlaubnis. Rechtsanwalt Stephan Wegner ist als Verkehrsanwalt in Ochsenfurt und im Landkreis Würzburg tätig.",
    anliegen: [
      "Nach einem unverschuldeten Unfall kürzt oder verzögert die gegnerische Versicherung die Regulierung.",
      "Ein Bußgeldbescheid droht mit Punkten, einem hohen Bußgeld oder einem Fahrverbot.",
      "Die Fahrerlaubnis wurde entzogen oder die Fahrerlaubnisbehörde fordert ein Gutachten an.",
      "Es steht der Vorwurf einer Unfallflucht oder einer Trunkenheitsfahrt im Raum.",
      "Über Schadenshöhe, Restwert, Wertminderung oder Nutzungsausfall besteht Streit mit der Versicherung.",
    ],
    faqs: [
      {
        question: "Wer zahlt den Anwalt nach einem unverschuldeten Verkehrsunfall?",
        answer:
          "Steht die Haftung des Unfallgegners fest, gehören die erforderlichen Anwaltskosten zum ersatzfähigen Schaden und werden von dessen Haftpflichtversicherung getragen. Bei einer Mithaftung wird nur der entsprechende Anteil übernommen; den Rest deckt gegebenenfalls eine bestehende Rechtsschutzversicherung.",
      },
      {
        question: "Wie lange kann gegen einen Bußgeldbescheid Einspruch eingelegt werden?",
        answer:
          "Der Einspruch muss innerhalb von zwei Wochen nach Zustellung des Bescheids bei der Bußgeldbehörde eingehen. Nach Ablauf der Frist wird der Bescheid rechtskräftig. Vor dem Einspruch ist regelmäßig die Einsicht in die Ermittlungsakte sinnvoll, um Messung und Vorwurf überhaupt prüfen zu können.",
      },
      {
        question: "Lässt sich ein Fahrverbot noch abwenden?",
        answer:
          "Das kommt auf den Einzelfall an. In Betracht kommen etwa Einwände gegen die Messung, gegen die Fahreridentifizierung oder ein Absehen vom Fahrverbot gegen Erhöhung der Geldbuße, wenn das Verbot eine besondere Härte bedeuten würde. Einen Automatismus gibt es dabei nicht.",
      },
      {
        question: "Was unterscheidet Fahrverbot und Entziehung der Fahrerlaubnis?",
        answer:
          "Ein Fahrverbot gilt befristet, in der Regel ein bis drei Monate; danach wird der Führerschein zurückgegeben. Bei der Entziehung der Fahrerlaubnis erlischt die Fahrerlaubnis dagegen ganz. Sie muss nach Ablauf einer Sperrfrist neu beantragt werden, oft verbunden mit weiteren Anforderungen der Behörde.",
      },
    ],
  },
];

// Die Kurzbeschreibung der Kacheln bleibt in lawyers.js (specialties) — hier nur
// nachgeschlagen, damit derselbe Text nicht an zwei Stellen gepflegt werden muss.
export const practiceAreas = areas.map((area) => {
  const lawyer = lawyers.find((l) => l.slug === area.lawyerSlug);
  return {
    ...area,
    description: lawyer.specialties.find((s) => s.title === area.title).description,
  };
});
