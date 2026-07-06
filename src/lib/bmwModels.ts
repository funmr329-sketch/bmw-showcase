export interface BMWModel {
  id: string;
  name: string;
  model: string;
  tagline: string;
  category: 'Luxury' | 'Sport' | 'Electric' | 'SUV' | 'Convertible';
  power: string;
  acceleration: string;
  topSpeed: string;
  range?: string;
  price: string;
  colors: {
    name: string;
    hex: string;
  }[];
  features: string[];
  description: string;
  image: string;
  video?: string;
}

export const bmwModels: BMWModel[] = [
  {
    id: 'm5-competition',
    name: 'M5 Competition',
    model: 'G90',
    tagline: 'The Ultimate Performance Sedan',
    category: 'Sport',
    power: '627 hp',
    acceleration: '3.1s',
    topSpeed: '190 mph',
    price: '$120,000',
    colors: [
      { name: 'Marina Bay Blue', hex: '#00468B' },
      { name: 'Frozen Bluestone', hex: '#7A8A9A' },
      { name: 'Sao Paulo Yellow', hex: '#F2D300' },
    ],
    features: ['M TwinPower Turbo V8', 'xDrive AWD System', 'M Carbon Bucket Seats', 'M Sound System'],
    description: 'The BMW M5 Competition takes performance sedans to the extreme with a 627-horsepower V8 engine and race-inspired chassis.',
    image: '/images/m5-competition.jpg',
    video: '/videos/m5-competition.mp4',
  },
  {
    id: 'm760i',
    name: 'M760i xDrive',
    model: 'G70',
    tagline: 'The Pinnacle of Luxury Performance',
    category: 'Luxury',
    power: '544 hp',
    acceleration: '3.8s',
    topSpeed: '155 mph',
    price: '$185,000',
    colors: [
      { name: 'Individual Tanzanite Blue', hex: '#1A3A5A' },
      { name: 'Alpine White', hex: '#FFFFFF' },
      { name: 'Black Sapphire', hex: '#1A1A1A' },
    ],
    features: ['V12 Engine', 'Executive Lounge Package', 'Bowers & Wilkins Diamond Sound', 'Panoramic Sky Lounge'],
    description: 'The BMW 7 Series represents the pinnacle of automotive luxury, combining opulent comfort with commanding performance.',
    image: '/images/m760i.jpg',
    video: '/videos/m760i.mp4',
  },
  {
    id: 'i7',
    name: 'i7 xDrive',
    model: 'G70 BEV',
    tagline: 'The Future of Electric Luxury',
    category: 'Electric',
    power: '536 hp',
    acceleration: '4.5s',
    topSpeed: '149 mph',
    range: '330 miles',
    price: '$165,000',
    colors: [
      { name: 'Oxford Green', hex: '#2D4A3A' },
      { name: 'Mineral White', hex: '#F0F0F0' },
      { name: 'Carbon Black', hex: '#0D0D0D' },
    ],
    features: ['Electric All-Wheel Drive', '31-inch Rear Theater Screen', 'Sky Lounge Panoramic Roof', 'BMW IconicSounds Electric'],
    description: 'The BMW i7 redefines electric luxury with a stunning combination of zero-emission performance and flagship-level comfort.',
    image: '/images/i7.jpg',
    video: '/videos/i7.mp4',
  },
  {
    id: 'ix',
    name: 'iX xDrive50',
    model: 'I20',
    tagline: 'The Intelligent Electric SAV',
    category: 'Electric',
    power: '516 hp',
    acceleration: '4.5s',
    topSpeed: '124 mph',
    range: '350 miles',
    price: '$108,000',
    colors: [
      { name: 'Blue Ridge Mountain', hex: '#5A7A9A' },
      { name: 'Oxide Grey', hex: '#8A8A8A' },
      { name: 'Phytonic Blue', hex: '#0066B2' },
    ],
    features: ['Hexagon Mesh Grille', 'Curved Display Interface', 'Bowers & Wilkins Sound', 'Autonomous Driving Pro'],
    description: 'The BMW iX combines visionary design with the latest electric drive technology and a revolutionary interior.',
    image: '/images/ix.jpg',
    video: '/videos/ix.mp4',
  },
  {
    id: 'x7',
    name: 'X7 M60i',
    model: 'G07',
    tagline: 'The Flagship SAV',
    category: 'SUV',
    power: '523 hp',
    acceleration: '4.5s',
    topSpeed: '155 mph',
    price: '$160,000',
    colors: [
      { name: 'Skyscraper Grey', hex: '#B0B0B0' },
      { name: 'Ametrine Metallic', hex: '#6A4A8A' },
      { name: 'Pure Silver', hex: '#C0C0C0' },
    ],
    features: ['Executive Lounge Seating', 'Individual Full Merino Leather', 'Panoramic Sky Lounge', 'Rear Entertainment System'],
    description: 'The BMW X7 stands as the ultimate luxury SAV, offering unparalleled space, premium comfort, and powerful performance.',
    image: '/images/x7.jpg',
    video: '/videos/x7.mp4',
  },
  {
    id: 'x5m',
    name: 'X5 M',
    model: 'F95',
    tagline: 'The High-Performance SAV',
    category: 'SUV',
    power: '600 hp',
    acceleration: '3.8s',
    topSpeed: '174 mph',
    price: '$128,000',
    colors: [
      { name: 'Marina Bay Blue', hex: '#00468B' },
      { name: 'Donington Grey', hex: '#6B7177' },
      { name: 'Toronto Red', hex: '#E31837' },
    ],
    features: ['M TwinPower Turbo V8', 'M xDrive AWD', 'M Compound Brakes', 'M Sport Exhaust'],
    description: 'The BMW X5 M combines SUV versatility with M Division performance for an exhilarating driving experience.',
    image: '/images/x5m.jpg',
    video: '/videos/x5m.mp4',
  },
  {
    id: 'z4',
    name: 'Z4 M40i',
    model: 'G29',
    tagline: 'The Pure Roadster',
    category: 'Convertible',
    power: '382 hp',
    acceleration: '4.4s',
    topSpeed: '155 mph',
    price: '$68,000',
    colors: [
      { name: 'San Francisco Red', hex: '#CC3333' },
      { name: 'Misano Blue', hex: '#0066CC' },
      { name: 'Alpine White', hex: '#FFFFFF' },
    ],
    features: ['Soft Top Roof', 'M Sport Package', 'Harman Kardon Sound', 'Driving Assistant'],
    description: 'The BMW Z4 M40i is a pure two-seat roadster that delivers exhilarating open-air driving pleasure.',
    image: '/images/z4.jpg',
    video: '/videos/z4.mp4',
  },
  {
    id: 'm440i',
    name: 'M440i xDrive',
    model: 'G22',
    tagline: 'The Dynamic Coupe',
    category: 'Sport',
    power: '382 hp',
    acceleration: '4.3s',
    topSpeed: '155 mph',
    price: '$75,000',
    colors: [
      { name: 'Portimao Blue', hex: '#005A8A' },
      { name: 'Brooklyn Grey', hex: '#6B6B6B' },
      { name: 'Sao Paulo Yellow', hex: '#F2D300' },
    ],
    features: ['M TwinPower Turbo 6-Cyl', 'M Sport Differential', 'Adaptive M Suspension', 'Laserlight Headlights'],
    description: 'The BMW 4 Series Coupe combines striking design with dynamic performance and cutting-edge technology.',
    image: '/images/m440i.jpg',
    video: '/videos/m440i.mp4',
  },
];

export const modelCategories = ['All', 'Luxury', 'Sport', 'Electric', 'SUV', 'Convertible'] as const;
export type ModelCategory = typeof modelCategories[number];