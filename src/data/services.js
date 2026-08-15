import { basePath } from "@/lib/basePath";
export const services = [
  {
    slug: "residential-solar",
    number: "01",
    title: "Residential Solar",
    summary: "Rooftop solar systems designed for homes. Lower bills, reliable power, sleek aesthetics.",
    description:
      "End-to-end solar solutions for single-family homes and townhouses, from design through to monitoring.",
    image: `${basePath}/images/photo-1508514177221-188b1cf16e9d.webp`,
    features: ["Rooftop panels", "Home battery", "Smart app", "25-year warranty"],
    body: [
      "Every home is different. A south-facing roof in Phoenix calls for a very different design than a shaded colonial in Boston. That's why our residential practice starts with a thorough site visit — solar irradiance mapping, roof condition, electrical panel capacity, and a conversation about how you actually use energy.",
      "From there, we design a system sized to your usage, not just your roof. We use tier-1 panels, hybrid inverters that are battery-ready from day one, and low-profile mounting that respects your home's aesthetics. Installation typically takes 1-3 days, and we handle every permit and utility approval.",
      "Once the system is live, you get a branded monitoring app showing real-time generation, consumption, and savings. We also provide ongoing maintenance and a 25-year workmanship warranty.",
    ],
    metrics: [
      { label: "Typical size", value: "6-12 kW" },
      { label: "Install time", value: "1-3 days" },
      { label: "Payback", value: "6-9 yrs" },
      { label: "Warranty", value: "25 yrs" },
    ],
    process: [
      { title: "Home audit", description: "Free in-home consultation and energy analysis." },
      { title: "Custom design", description: "3D modelling of your roof with shade and output projections." },
      { title: "Installation", description: "Certified installers complete the job in 1-3 days." },
      { title: "Go live", description: "Utility interconnection, monitoring setup, and walkthrough." },
    ],
  },
  {
    slug: "commercial-energy",
    number: "02",
    title: "Commercial Energy",
    summary: "Scalable clean-energy systems for offices, warehouses, and campuses.",
    description:
      "Cut operating costs and meet ESG targets with custom-designed commercial arrays.",
    image: `${basePath}/images/photo-1466611653911-95081537e5b7.webp`,
    features: ["Rooftop & ground mount", "Energy audits", "Financial modelling", "Asset management"],
    body: [
      "Commercial clients come to us with real business constraints: capex budgets, sustainability targets, operational continuity, and stakeholder reporting. Our job is to deliver clean energy that respects all of it.",
      "We start with a full energy audit — not just solar feasibility. We map load profiles, identify demand charge spikes, and model ROI against at least three financing paths (cash, PPA, and tax-equity). The design emerges from that analysis.",
      "Post-installation, our asset management team handles everything — monitoring, reporting for ESG disclosures, preventive maintenance, and performance guarantees. For multi-site clients, we offer unified portfolio dashboards.",
    ],
    metrics: [
      { label: "Typical size", value: "250 kW - 5 MW" },
      { label: "Install time", value: "3-9 months" },
      { label: "Payback", value: "5-7 yrs" },
      { label: "Uptime SLA", value: "99.5%" },
    ],
    process: [
      { title: "Feasibility", description: "Site survey, load analysis, and initial ROI modelling." },
      { title: "Financial modelling", description: "We compare cash, PPA, lease, and tax-equity structures." },
      { title: "Engineering", description: "Stamped drawings, utility coordination, permitting." },
      { title: "Operate", description: "Ongoing monitoring, reporting, and maintenance." },
    ],
  },
  {
    slug: "energy-storage",
    number: "03",
    title: "Energy Storage",
    summary: "Battery systems that keep your power running — day, night, or grid-down.",
    description:
      "Integrate storage with solar or retrofit existing systems for resilience and energy independence.",
    image: `${basePath}/images/photo-1497436072909-60f360e1d4b1.webp`,
    features: ["Home batteries", "Grid backup", "Peak shaving", "UPS integration"],
    body: [
      "Storage is what turns solar from a daytime hobby into a real energy independence tool. Whether you want to back up critical circuits, ride through outages, or shift your usage away from peak utility rates, there's a battery strategy that fits.",
      "We work primarily with lithium iron phosphate (LFP) batteries for their safety, cycle life, and thermal stability. For commercial clients with demand charges, we deploy larger systems that actively shave peaks and can deliver 6-8 year paybacks on their own.",
      "Every battery we install includes monitoring for state-of-charge, cycle count, and thermal health. We proactively alert you before a cell degrades — not after.",
    ],
    metrics: [
      { label: "Home capacity", value: "10-30 kWh" },
      { label: "Commercial", value: "100 kWh+" },
      { label: "Round-trip efficiency", value: "92%" },
      { label: "Warranty", value: "10 yrs" },
    ],
    process: [
      { title: "Load analysis", description: "Which circuits matter most during an outage?" },
      { title: "Sizing", description: "Right-size the battery for backup duration or peak shaving." },
      { title: "Installation", description: "Wall-mount or floor-standing, indoor or outdoor rated." },
      { title: "Commissioning", description: "Test backup scenarios and configure automation." },
    ],
  },
  {
    slug: "ev-charging",
    number: "04",
    title: "EV Charging",
    summary: "Residential and commercial EV charging — installed, networked, managed.",
    description:
      "From a Level 2 charger at home to a fleet station, we handle the full stack.",
    image: `${basePath}/images/photo-1565514158740-064f34bd6cfd.webp`,
    features: ["Level 2 chargers", "Fleet stations", "Load management", "Network billing"],
    body: [
      "EV adoption is outpacing charging infrastructure in most places. We help close that gap — from a single Level 2 port in a garage, to a 40-stall DC fast-charging hub for a municipal fleet.",
      "For homes, we install wall-mounted Level 2 chargers with smart scheduling to charge during off-peak rates. For businesses, we deliver networked stations with authentication, billing, and load-management so you don't need to upgrade your utility service.",
      "If you already have solar or storage, we integrate everything so EV charging prioritizes your own clean power before drawing from the grid.",
    ],
    metrics: [
      { label: "Home speed", value: "30-45 mi/hr" },
      { label: "DC fast", value: "150+ kW" },
      { label: "Networks", value: "OCPP 1.6" },
      { label: "Install time", value: "1-2 days" },
    ],
    process: [
      { title: "Site visit", description: "Panel capacity, conduit routing, and use-case mapping." },
      { title: "Hardware selection", description: "UL-listed chargers matched to your vehicle and use." },
      { title: "Installation", description: "Electrical work, mounting, and network provisioning." },
      { title: "Activation", description: "App pairing, RFID cards, and billing setup." },
    ],
  },
  {
    slug: "smart-monitoring",
    number: "05",
    title: "Smart Monitoring",
    summary: "Real-time visibility into every watt, from your phone or browser.",
    description:
      "Know exactly what your system is doing — and what it's saving — every moment.",
    image: `${basePath}/images/photo-1473341304170-971dccb5ac1e.webp`,
    features: ["Live dashboards", "Anomaly alerts", "Savings reports", "API access"],
    body: [
      "A clean-energy system you can't see is a system you can't trust. Our monitoring stack ships with every install and can also retrofit third-party systems — we just need access to the inverter or storage controller.",
      "Dashboards show generation, consumption, battery state, grid flow, and EV charging all in one view. Alerts trigger when output drops below expected curves, when a string underperforms relative to siblings, or when component temperatures rise outside normal bands.",
      "For commercial clients, we offer API access so your facility team can pipe data into existing BMS or ESG reporting tools.",
    ],
    metrics: [
      { label: "Data resolution", value: "1 min" },
      { label: "Uptime", value: "99.9%" },
      { label: "History", value: "7 years" },
      { label: "API", value: "REST + Webhooks" },
    ],
    process: [
      { title: "Hardware gateway", description: "Small cellular or Wi-Fi gateway on the inverter." },
      { title: "Provisioning", description: "We register devices and configure your account." },
      { title: "Onboarding", description: "30-minute walkthrough of the dashboard and alerts." },
      { title: "Integrations", description: "Optional API connections to your ops tools." },
    ],
  },
  {
    slug: "consulting",
    number: "06",
    title: "Consulting & Audit",
    summary: "Independent energy audits, feasibility studies, and strategy advisory.",
    description:
      "Before the first panel, we make sure the plan is right — technically, financially, and environmentally.",
    image: `${basePath}/images/photo-1497435334941-8c899ee9e8e9.webp`,
    features: ["Site assessments", "Feasibility", "ROI modelling", "Carbon accounting"],
    body: [
      "Sometimes the most valuable thing we do isn't build anything. It's helping a client understand whether a project makes sense at all — and if it does, how to structure it.",
      "Our consulting engagements range from a two-week feasibility study to year-long ESG strategy retainers. Typical deliverables include site assessments, financial models with sensitivity analysis, carbon inventories, and vendor-agnostic recommendations.",
      "We publish all our methodology openly. If our recommendation is 'don't install' or 'wait 18 months', we'll say so — and explain why. The goal is smart capital allocation, not sales.",
    ],
    metrics: [
      { label: "Engagement", value: "2-52 wks" },
      { label: "Deliverables", value: "Report + Model" },
      { label: "Fees", value: "Fixed or T&M" },
      { label: "Independence", value: "Vendor-agnostic" },
    ],
    process: [
      { title: "Scoping", description: "Define the question and the deliverable." },
      { title: "Research", description: "Site data, utility tariffs, incentive landscape." },
      { title: "Analysis", description: "Financial modelling, sensitivity, risk mapping." },
      { title: "Recommendation", description: "Plain-language report with next steps." },
    ],
  },
];
