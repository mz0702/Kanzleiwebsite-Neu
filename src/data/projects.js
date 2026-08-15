import { basePath } from "@/lib/basePath";
export const projects = [
  {
    slug: "verdant-hills-community",
    title: "Verdant Hills Community",
    category: "Residential",
    year: "2025",
    location: "Portland, OR",
    capacity: "820 kW",
    summary: "A net-zero residential community with 60 rooftop systems and shared storage.",
    image: `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
    featured: true,
    client: "Verdant Hills HOA",
    challenge:
      "Build a net-zero residential community from day one — without making individual homeowners each navigate solar contracts alone.",
    approach:
      "We co-designed a community-scale solar program: uniform rooftop arrays on every home, a shared 1.2 MWh battery, and a single operating agreement. The HOA owns the infrastructure; residents pay a flat monthly energy fee that beats grid rates.",
    outcome:
      "Every home is powered 100% by onsite solar on an annual basis. Residents pay roughly 40% less for electricity than a comparable home in the region, and the HOA has a long-term predictable energy budget.",
    gallery: [
      `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
      `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
      `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
      `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
      `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
    ],
    metrics: [
      { label: "Annual output", value: "1.08 GWh" },
      { label: "CO₂ offset / yr", value: "510 t" },
      { label: "Payback", value: "7.8 yrs" },
      { label: "Warranty", value: "25 yrs" },
    ],
  },
  {
    slug: "helios-commercial-park",
    title: "Helios Commercial Park",
    category: "Commercial",
    year: "2024",
    location: "Austin, TX",
    capacity: "2.4 MW",
    summary: "Rooftop + carport solar for a 12-building office park, cutting grid reliance by 68%.",
    image: `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
    featured: true,
    client: "Helios Property Group",
    challenge:
      "Deliver measurable ESG progress across a 12-building park with mixed roof materials and a tight board-review timeline.",
    approach:
      "We phased the install building-by-building to avoid operational disruption, added carport arrays for additional capacity, and built a unified dashboard so the ops team could see the entire park from one screen.",
    outcome:
      "Grid reliance dropped 68%, CO₂ emissions cut by 1,840 tons per year, and the client exceeded their published ESG targets two years ahead of schedule.",
    gallery: [
      `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
      `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
      `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
      `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
      `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
    ],
    metrics: [
      { label: "Annual output", value: "3.2 GWh" },
      { label: "Grid reliance cut", value: "68%" },
      { label: "CO₂ offset / yr", value: "1,840 t" },
      { label: "Payback", value: "5.9 yrs" },
    ],
  },
  {
    slug: "northwind-wind-farm",
    title: "Northwind Wind Farm",
    category: "Utility",
    year: "2024",
    location: "Iowa, US",
    capacity: "16 MW",
    summary: "Co-designed a community-owned wind farm delivering power to 6,000 homes.",
    image: `${basePath}/images/photo-1532601224476-15c79f2f7a51.webp`,
    featured: false,
    client: "Northwind Cooperative",
    challenge:
      "Design a utility-scale wind project financed and owned by local farmers, not a distant developer.",
    approach:
      "We structured the project as a cooperative where landowners and local residents hold equity. Our team led siting, turbine selection, interconnection, and the multi-stakeholder coordination that made it possible.",
    outcome:
      "16 MW of capacity now feeding local utilities, powering roughly 6,000 homes. Annual distributions flow back to cooperative members instead of out-of-state shareholders.",
    gallery: [
      `${basePath}/images/photo-1532601224476-15c79f2f7a51.webp`,
      `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
      `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
      `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
      `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
    ],
    metrics: [
      { label: "Annual output", value: "52 GWh" },
      { label: "Homes powered", value: "6,000" },
      { label: "CO₂ offset / yr", value: "22,000 t" },
      { label: "Capacity factor", value: "38%" },
    ],
  },
  {
    slug: "oak-ridge-medical-center",
    title: "Oak Ridge Medical Center",
    category: "Healthcare",
    year: "2023",
    location: "Denver, CO",
    capacity: "1.1 MW",
    summary: "Solar + battery microgrid ensuring 72hr backup for a 200-bed hospital.",
    image: `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
    featured: false,
    client: "Oak Ridge Health System",
    challenge:
      "Ensure 72 hours of continuous critical-care power during grid outages, while also reducing annual energy costs.",
    approach:
      "We deployed a hybrid microgrid — rooftop solar, 2.4 MWh of batteries, and intelligent islanding controls — capable of isolating the hospital from the grid and self-sustaining critical loads for three days.",
    outcome:
      "The hospital has already weathered two multi-day outages without affecting patient care. Day-to-day, the system reduces energy costs by 31% and qualifies the facility for state resilience grants.",
    gallery: [
      `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
      `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
      `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
      `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
      `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
    ],
    metrics: [
      { label: "Annual output", value: "1.5 GWh" },
      { label: "Backup duration", value: "72 hrs" },
      { label: "Cost reduction", value: "31%" },
      { label: "Uptime", value: "99.98%" },
    ],
  },
  {
    slug: "bayshore-tech-campus",
    title: "Bayshore Tech Campus",
    category: "Commercial",
    year: "2023",
    location: "San Diego, CA",
    capacity: "3.8 MW",
    summary: "Flagship tech campus with integrated solar facade and EV fleet charging.",
    image: `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
    featured: true,
    client: "Bayshore Industries",
    challenge:
      "Deliver LEED Platinum certification and full fleet electrification for a flagship California tech campus — without compromising architectural vision.",
    approach:
      "We collaborated with the campus architects to integrate thin-film solar into the building facade, installed rooftop arrays on the three main towers, and built a 40-stall EV charging hub powered primarily by the onsite generation.",
    outcome:
      "LEED Platinum certified, fleet fully electrified, and 3.8 MW of onsite capacity covering 82% of campus load. The facade became a recognized architectural feature rather than a compromise.",
    gallery: [
      `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
      `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
      `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
      `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
      `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
    ],
    metrics: [
      { label: "Annual output", value: "5.9 GWh" },
      { label: "Load coverage", value: "82%" },
      { label: "EV stalls", value: "40" },
      { label: "LEED", value: "Platinum" },
    ],
  },
  {
    slug: "riverbend-school-district",
    title: "Riverbend School District",
    category: "Education",
    year: "2022",
    location: "Seattle, WA",
    capacity: "940 kW",
    summary: "Eight schools, one unified solar program. Savings reinvested into STEM programs.",
    image: `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
    featured: false,
    client: "Riverbend School District",
    challenge:
      "Deploy solar across eight school sites with different roofs, different ages, and a district-wide tight budget — while turning it into a teaching tool for students.",
    approach:
      "We designed eight site-specific systems under one district-wide procurement, staggered installation during summer breaks, and built real-time dashboards integrated into the science curriculum.",
    outcome:
      "940 kW of installed capacity across the district. Energy savings of $280K per year are reinvested directly into STEM programs. Students now use their own school's data in science classes.",
    gallery: [
      `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
      `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
      `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
      `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
      `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
    ],
    metrics: [
      { label: "Annual output", value: "1.24 GWh" },
      { label: "Sites", value: "8 schools" },
      { label: "Savings / yr", value: "$280K" },
      { label: "CO₂ offset / yr", value: "570 t" },
    ],
  },
];
