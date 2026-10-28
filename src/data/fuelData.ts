import { FleetItem, Testimonial } from '../types/fuel';

// AI Generated hero and concept assets
export const HERO_IMAGE = '/src/assets/images/hero_fuel_tanker_1793179036020.jpg';
export const DEPOT_IMAGE = '/src/assets/images/depot_fuel_tanks_1793179036659.jpg';
export const BOWSER_IMAGE = '/src/assets/images/mobile_bowser_refueling_1793179038104.jpg';
export const METERING_IMAGE = '/src/assets/images/fuel_flow_metering_1793179037537.jpg';

// Authentic Maxx Petroleum operational photos provided by user
export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: 'fleet' | 'depot' | 'bowsers' | 'quality';
  description: string;
  badge: string;
}

export const REAL_PHOTOS: GalleryPhoto[] = [
  {
    id: 'team-leadership',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58__3__ceeb5b8f.jpeg',
    title: 'The Team Behind Maxx Petroleum',
    subtitle: 'People you can trust, directly in the yard',
    category: 'fleet',
    description: 'Maxx Petroleum leadership and logistics team on site in Meyerton in front of our branded Scania and Mercedes-Benz heavy fuel tankers.',
    badge: 'Owner Operated',
  },
  {
    id: 'bell-b40d-refuel',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_13.08.10_9b813414.jpeg',
    title: 'Heavy Hauler Refuelling — Bell B40D',
    subtitle: 'Direct tanker-to-plant transfer on site',
    category: 'fleet',
    description: 'Maxx Petroleum bulk tanker discharging directly into a heavy-duty Bell B40D articulated dump truck on an active industrial quarry site.',
    badge: '45,000L Fleet Drop',
  },
  {
    id: 'man-convoy',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58_e15bd5ce.jpeg',
    title: 'Rigged for the Road',
    subtitle: 'Own trucks, own trailers — no third-party delays',
    category: 'fleet',
    description: 'Maxx Petroleum branded MAN truck tractor and tandem bulk fuel tankers in transit on the Gauteng logistics corridor.',
    badge: '45,000L Road Tanker',
  },
  {
    id: 'man-branded-tractor',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.39_05981b01.jpeg',
    title: 'Our Own MAN Rig, on the Road Daily',
    subtitle: 'Dedicated bulk delivery power',
    category: 'fleet',
    description: 'High-capacity MAN prime mover with double tanker barrels, fully compliant with SABS Hazchem standards.',
    badge: '45,000L Fleet',
  },
  {
    id: 'meyerton-yard-staging',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58__2__9c020cf9.jpeg',
    title: 'The Yard in Meyerton',
    subtitle: 'Tankers staged and ready to dispatch',
    category: 'fleet',
    description: 'Multi-axle tankers lined up under the canopy at the Maxx Petroleum yard, ready for 04:00 AM fleet drops.',
    badge: 'Depot Yard',
  },
  {
    id: 'volvo-heavy-tanker',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58__1__430b668f.jpeg',
    title: 'Volvo FH Prime Mover & Tanker',
    subtitle: 'Heavy haulage with precision delivery',
    category: 'fleet',
    description: 'High-payload Volvo truck tractor linked with dedicated insulated bulk diesel tanker at the dispatch station.',
    badge: 'Volvo Prime Mover',
  },
  {
    id: 'volvo-tractor-cab',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.57_ef65f930.jpeg',
    title: 'Branded Fleet Identity',
    subtitle: 'Quality Guaranteed | On Time | Local',
    category: 'fleet',
    description: 'Maxx Petroleum branded Volvo FH commercial rig stationed at the Meyerton facility, serving Gauteng and beyond.',
    badge: 'Dedicated Fleet',
  },
  {
    id: 'yellow-metered-bowser',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_12.24.00__1__4e0ff07b.jpeg',
    title: 'ProLifestyle Metered Diesel Bowser',
    subtitle: 'Calibrated 4-digit flow meter on trailer',
    category: 'bowsers',
    description: 'Trailer-mounted heavy-duty diesel bowser with digital volumetric meter, inline fuel filter canister, and high-pressure electric transfer pump.',
    badge: 'Digital Flow Bowser',
  },
  {
    id: 'onsite-plant-refuel',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.59_4da1b0dd.jpeg',
    title: 'Fuelled on Site — Heavy Machinery',
    subtitle: 'We pump straight into your machine',
    category: 'bowsers',
    description: 'Direct site refuelling of CAT 340D earthmoving excavator with mobile bowser and lighting tower in off-road industrial terrain.',
    badge: 'On-Site Refuelling',
  },
  {
    id: 'bakkie-bowser-service',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.40_e4a49b36.jpeg',
    title: 'Maxx Petroleum Service Pickup & Bowser',
    subtitle: 'Trailer bowsers for small drops & remote sites',
    category: 'bowsers',
    description: 'Branded 4x4 pickup utility with trailer-mounted high-pressure diesel bowser for generator, agricultural, and plant refuelling.',
    badge: 'Mobile Bowser',
  },
  {
    id: 'mining-site-overview',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_12.24.00_2a54a2ed.jpeg',
    title: 'Mining & Heavy Quarry Sites',
    subtitle: 'Supplying high-demand off-road operations',
    category: 'bowsers',
    description: 'Open-cast mining and aggregate quarry operations powered continuously with bulk diesel delivered directly to active machinery.',
    badge: 'Mining Supply',
  },
  {
    id: 'hydrometer-density-test',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.56_ff436572.jpeg',
    title: 'Quality Guaranteed & Density Testing',
    subtitle: 'Every batch verified with precision hydrometer',
    category: 'quality',
    description: 'Physical density and contamination testing of diesel in a graduated cylinder before tanker dispatch to ensure 100% SANS 342 compliance.',
    badge: 'Lab Density Testing',
  },
  {
    id: 'site-supervisor-haulers',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_12.24.01_69132849.jpeg',
    title: 'On-Site Fuel Dispatch Coordination',
    subtitle: 'Hands-on management for heavy fleets',
    category: 'quality',
    description: 'Logistics manager coordinating delivery schedules and volume reconciliation between massive mining haulers on site.',
    badge: 'Site Coordination',
  },
  {
    id: 'warehouse-bulk-array',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.35_3b62b9b1.jpeg',
    title: 'Row of Bulk Fuel Storage Tanks',
    subtitle: 'Stocked on site so your order never waits',
    category: 'depot',
    description: 'Massive internal warehouse storage terminal housing multi-thousand-litre storage vessels for Diesel 50ppm and 500ppm.',
    badge: 'Depot Bulk Storage',
  },
  {
    id: 'metered-pumping-g1g2',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.38__1__53d4e3c4.jpeg',
    title: 'G1 & G2 Bulk Fuel Storage Tanks',
    subtitle: 'Metered fuel pump and pipework',
    category: 'depot',
    description: 'Direct high-flow metered pumping system with digital flow counter mounted directly between bulk tanks G1 and G2.',
    badge: 'Metered Pumping',
  },
  {
    id: 'loading-bay-g3',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.38__2__8dafed8f.jpeg',
    title: 'Loading Bays & Filtration Station',
    subtitle: 'Quick turnarounds at the Meyerton depot',
    category: 'depot',
    description: 'Specialized red filtration pump station, flow lines, and elevated maintenance access alongside Tank G3.',
    badge: 'Loading Bay & Filter',
  },
  {
    id: 'numbered-tank-3',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.38_088b2262.jpeg',
    title: 'Numbered Tank 3 & Access Gantry',
    subtitle: 'Tracked and reconciled daily',
    category: 'depot',
    description: 'Bulk storage vessel Number 3 equipped with safety stairs and gantry walkway for precise dip readings and reconciliation.',
    badge: 'Daily Reconciled',
  },
  {
    id: 'gantry-g3-g4',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.36__1__d27ac071.jpeg',
    title: 'G3 & G4 Overhead Gantry Walkway',
    subtitle: 'Each product grade in its own tank',
    category: 'depot',
    description: 'High-clearance yellow safety walkways bridging over tanks G3 and G4 for regular inspection and quality sampling.',
    badge: 'Grade Segregation',
  },
  {
    id: 'b1-b2-tanks',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.36_410e6b55.jpeg',
    title: 'B1 & B2 Dedicated Fuel Tanks',
    subtitle: 'Safe access with gantry walkways',
    category: 'depot',
    description: 'Tanks B1 and B2 featuring overhead walkways, calibrated safety valves, and high-volume suction lines.',
    badge: 'Safe Access',
  },
  {
    id: 'meter-control-station',
    src: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.35__1__fff0960c.jpeg',
    title: 'Depot Control Office & Calibrated Pumps',
    subtitle: 'Every litre measured and documented',
    category: 'quality',
    description: 'Central pumping control station with calibrated digital volumetric counter and secure dispatch office inside the depot.',
    badge: 'Calibrated Pumping',
  },
];

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
    specs: ['SANS 342 Certified', 'Water & Sediment Tested', 'From 1,000L to 45,000L drops'],
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
    specs: ['Own MAN, Scania & Volvo Fleet', 'Calibrated Flow Meters', '4x4 Off-Road Bakkie Bowsers'],
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
    description: 'Our fleet of MAN, Scania, and Volvo truck tractors and multi-compartment fuel tankers operate daily across Gauteng, the Vaal Triangle, and neighboring provinces.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58_e15bd5ce.jpeg',
    specs: ['45,000L Max Payload', 'Compartmentalized Drops', 'Live GPS Telemetry', 'Dangerous Goods Certified'],
  },
  {
    id: 'meyerton-depot',
    title: 'The Yard & Bulk Tanks in Meyerton',
    category: 'depot',
    subtitle: 'Stocked on site so your order never waits',
    description: 'Massive on-site bulk storage with dedicated tanks for 50ppm and 500ppm diesel, guaranteeing immediate loading and no refinery queue dependencies.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.35_3b62b9b1.jpeg',
    specs: ['G1, G2, G3, G4 & B1, B2 Tanks', 'Gantry Walkway Access', 'Daily Density Reconciled', 'Direct Loading Gantry'],
  },
  {
    id: 'mobile-bowsers',
    title: 'Fuelled on Site with Mobile Bowsers',
    category: 'bowsers',
    subtitle: 'We pump straight into your machine',
    description: 'Heavy-duty 4x4 pickup trucks and trailer-mounted diesel bowsers bring fuel straight into combines, tractors, excavators, and remote construction plants.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_13.08.10_9b813414.jpeg',
    specs: ['Direct Bell B40D Refuelling', 'Digital Volumetric Meter', 'Off-Road Capability', 'Small Drops & Standby Plant'],
  },
  {
    id: 'metered-pumping',
    title: 'Calibrated Metered Pumping',
    category: 'metering',
    subtitle: 'Every single litre measured and documented',
    description: 'Certified digital flow meters with printed audit tickets on every drop ensure 100% transparency, zero loss, and absolute billing accuracy.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_12.24.00__1__4e0ff07b.jpeg',
    specs: ['Weights & Measures Verified', 'Digital Flow Readout', 'Real-time Flow Velocity', 'Hydrometer Density Tested'],
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
    description: 'We test every single batch for density, viscosity, and moisture using calibrated hydrometers before it leaves our Meyerton depot. No contaminated fuel, no engine damage.',
    metric: '99.98%',
    metricLabel: 'Purity compliance',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.56_ff436572.jpeg',
  },
  {
    title: 'On Time, Every Time',
    subtitle: 'Deliveries you can plan around',
    description: 'We dispatch from our own dedicated depot using our own drivers and trucks. Your operations never wait for third-party logistics or refinery jams.',
    metric: '< 3 hrs',
    metricLabel: 'Urgent drop response',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58__2__9c020cf9.jpeg',
  },
  {
    title: 'Local & Direct',
    subtitle: 'Based in Meyerton, Gauteng',
    description: 'Direct relationship with the owners. No middle brokers, no call centres. When you phone, you talk straight to the people loading the truck.',
    metric: '100%',
    metricLabel: 'Privately owned fleet & depot',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_11.30.58__3__ceeb5b8f.jpeg',
  },
];
