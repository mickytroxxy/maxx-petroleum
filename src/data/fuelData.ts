import { FleetItem, Testimonial } from '../types/fuel';

export const HERO_IMAGE = '/src/assets/images/hero_fuel_tanker_1793179036020.jpg';
export const DEPOT_IMAGE = '/src/assets/images/depot_fuel_tanks_1793179036659.jpg';
export const BOWSER_IMAGE = '/src/assets/images/mobile_bowser_refueling_1793179038104.jpg';
export const METERING_IMAGE = '/src/assets/images/fuel_flow_metering_1793179037537.jpg';

export const COMPANY_DETAILS = {
  name: 'Maxx Petroleum',
  tagline: 'Energy Beyond Limits',
  address: 'No. 150 Springbok Street, Meyerton, Gauteng',
  phones: [
    { label: 'Dispatch Line 1', number: '+27 64 361 3945', tel: '+27643613945' },
    { label: 'Dispatch Line 2', number: '+27 64 550 6602', tel: '+27645506602' },
  ],
  whatsapp: '27643613945',
  hours: '24/7 Operations & Emergency Bulk Dispatch',
  depotCoordinates: '26.5861° S, 28.0139° E',
};

export const SERVICES = [
  {
    id: 'diesel',
    title: 'Bulk Diesel 50ppm & 500ppm',
    description: 'Clean, compliant low-sulphur diesel delivered directly in bulk to transport yards, farms, plant machinery, and generators.',
    specs: ['SANS 342 Certified', 'Water & Sediment Tested', 'From 1,000L to 38,000L drops'],
    badgeText: '50ppm & 500ppm',
  },
  {
    id: 'lubricants',
    title: 'Industrial & Engine Lubricants',
    description: 'High-performance engine oils (15W-40), hydraulic oils (ISO 46 & 68), gear lubricants, and industrial greases for extreme conditions.',
    specs: ['API & OEM Approved', 'Drums (210L) & 1,000L IBCs', 'Heavy Earthmoving & Fleet'],
    badgeText: 'Heavy Duty Oils',
  },
  {
    id: 'on-site',
    title: 'On-Site Tanker & Bowser Delivery',
    description: 'Our dedicated tanker fleet brings fuel straight to your stationary tanks, generators, or directly into heavy equipment on schedule.',
    specs: ['Own MAN Rig Fleet', 'Calibrated Flow Meters', '4x4 Off-Road Bakkie Bowsers'],
    badgeText: 'Direct to Tank',
  },
  {
    id: 'generators',
    title: 'Emergency Generator Refuelling',
    description: 'Priority standby refuelling for industrial complexes, cold storage, hospitals, and datacentres to ensure uninterrupted continuous power.',
    specs: ['24/7 Emergency Response', 'Auto-Scheduled Drops', 'Clean Metered Transfer'],
    badgeText: 'Standby Power',
  },
];

export const FLEET_ITEMS: FleetItem[] = [
  {
    id: 'road-tankers',
    title: 'Rigged for the Road',
    category: 'fleet',
    subtitle: 'Own trucks, own trailers — no third-party delays',
    description: 'Our fleet of MAN truck tractors and multi-compartment fuel tankers operate daily across Gauteng, the Vaal Triangle, and neighboring provinces.',
    image: HERO_IMAGE,
    specs: ['38,000L Max Payload', 'Compartmentalized Drops', 'Live GPS Telemetry', 'Dangerous Goods Certified'],
  },
  {
    id: 'meyerton-depot',
    title: 'The Yard & Bulk Tanks in Meyerton',
    category: 'depot',
    subtitle: 'Stocked on site so your order never waits',
    description: 'Massive on-site bulk storage with dedicated tanks for 50ppm and 500ppm diesel, guaranteeing immediate loading and no refinery queue dependencies.',
    image: DEPOT_IMAGE,
    specs: ['Multi-Million Litre Capacity', 'Gantry Walkway Access', 'Daily Density Reconciled', 'Direct Loading Gantry'],
  },
  {
    id: 'mobile-bowsers',
    title: 'Fuelled on Site with Mobile Bowsers',
    category: 'bowsers',
    subtitle: 'We pump straight into your machine',
    description: 'Heavy-duty 4x4 pickup trucks and trailer-mounted diesel bowsers bring fuel straight into combines, tractors, excavators, and remote construction plants.',
    image: BOWSER_IMAGE,
    specs: ['1,000L – 2,500L Capacity', '12V / 24V Fast Pumps', 'Off-Road Capability', 'Small Drops & Standby Plant'],
  },
  {
    id: 'metered-pumping',
    title: 'Calibrated Metered Pumping',
    category: 'metering',
    subtitle: 'Every single litre measured and documented',
    description: 'Certified digital flow meters with printed audit tickets on every drop ensure 100% transparency, zero loss, and absolute billing accuracy.',
    image: METERING_IMAGE,
    specs: ['Weights & Measures Verified', 'Digital Flow Readout', 'Real-time Flow Velocity', 'Printable Meter Slips'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dp-transport',
    quote: 'They pull into our yard at 4am so our trucks roll at 5am with full tanks. Haven’t missed a single morning in over two years. Cleanest diesel in Gauteng.',
    author: 'Riaan du Plessis',
    role: 'Owner',
    company: 'DP Transport',
    rating: 5,
  },
  {
    id: 'electrical-contractors',
    quote: 'They told us honestly what our generators would burn before we committed, then billed exactly that. Rare transparency and punctuality in the fuel industry.',
    author: 'Lerato Khumalo',
    role: 'Site Operations Manager',
    company: 'Apex Electrical Contractors',
    rating: 5,
  },
  {
    id: 'farm-operations',
    quote: 'During maize harvest we burn 25,000 litres a week on the farm. Maxx delivers directly into our bowsers without fail. Keeps our combines moving.',
    author: 'Johan van der Merwe',
    role: 'Managing Director',
    company: 'Highveld Agro Operations',
    rating: 5,
  },
  {
    id: 'mining-plant',
    quote: 'Our earthmoving excavators and drill rigs are in rugged quarry terrain. The 4x4 mobile bowsers pump directly into the machines without any downtime.',
    author: 'Deon Botha',
    role: 'Quarry Plant Supervisor',
    company: 'Vaal Aggregates & Mining',
    rating: 5,
  },
];

export const WHY_US_PILLARS = [
  {
    title: 'Quality Guaranteed',
    subtitle: 'SANS 342 Clean Product',
    description: 'We test every single batch for density, viscosity, and moisture before it leaves our Meyerton depot. No contaminated fuel, no engine damage.',
    metric: '99.98%',
    metricLabel: 'Purity compliance',
  },
  {
    title: 'On Time, Every Time',
    subtitle: 'Deliveries you can plan around',
    description: 'We dispatch from our own dedicated depot using our own drivers and trucks. Your operations never wait for third-party logistics or refinery jams.',
    metric: '< 3 hrs',
    metricLabel: 'Urgent drop response',
  },
  {
    title: 'Local & Direct',
    subtitle: 'Based in Meyerton, Gauteng',
    description: 'Direct relationship with the owners. No middle brokers, no call centres. When you phone, you talk straight to the people loading the truck.',
    metric: '100%',
    metricLabel: 'Privately owned fleet & depot',
  },
];
