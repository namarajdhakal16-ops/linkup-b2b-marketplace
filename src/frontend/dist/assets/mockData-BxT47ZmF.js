const mockProducts = [
  {
    id: 1,
    name: "Industrial Hydraulic Press 50T",
    category: "Industrial Equipment",
    price: 285e3,
    stock: 12,
    description: "Heavy-duty 50-ton hydraulic press for metal forming and stamping operations.",
    supplierId: "sup-001",
    imageUrl: "",
    specifications: "Power: 50T, Stroke: 250mm, Motor: 7.5kW",
    certifications: "CE, ISO 9001",
    status: "active",
    createdAt: 17e8
  },
  {
    id: 2,
    name: "Full-Body Safety Harness Class E",
    category: "Safety Gear",
    price: 4200,
    stock: 340,
    description: "OSHA-compliant full-body harness for working at height up to 6m.",
    supplierId: "sup-002",
    imageUrl: "",
    specifications: "Load: 140kg, Strap: 45mm nylon",
    certifications: "IS 3521, EN 361",
    status: "active",
    createdAt: 17001e5
  },
  {
    id: 3,
    name: "High-Grade Steel Coils HR 3mm",
    category: "Raw Materials",
    price: 68500,
    stock: 85,
    description: "Hot-rolled steel coils for structural and fabrication applications.",
    supplierId: "sup-003",
    imageUrl: "",
    specifications: "Grade: IS 2062, Thickness: 3mm, Width: 1250mm",
    certifications: "BIS, ISO 630",
    status: "active",
    createdAt: 17002e5
  },
  {
    id: 4,
    name: "Industrial PLC Controller S7-1200",
    category: "Electronics",
    price: 42e3,
    stock: 28,
    description: "Siemens-compatible PLC for industrial automation and process control.",
    supplierId: "sup-004",
    imageUrl: "",
    specifications: "CPU: 1214C, I/O: 14DI/10DO, Memory: 100KB",
    certifications: "CE, UL, RoHS",
    status: "active",
    createdAt: 17003e5
  },
  {
    id: 5,
    name: "Sulfuric Acid (Industrial Grade) 98%",
    category: "Chemicals",
    price: 3800,
    stock: 500,
    description: "Industrial-grade sulfuric acid for electroplating and chemical processing.",
    supplierId: "sup-005",
    imageUrl: "",
    specifications: "Purity: 98%, Density: 1.84 g/mL, Grade: Industrial",
    certifications: "ISO 9001, REACH",
    status: "active",
    createdAt: 17004e5
  },
  {
    id: 6,
    name: "CNC Milling Machine VMC 850",
    category: "Machinery",
    price: 185e4,
    stock: 4,
    description: "3-axis CNC vertical machining center with auto tool changer.",
    supplierId: "sup-001",
    imageUrl: "",
    specifications: "Table: 850x420mm, Spindle: 8000 RPM, ATC: 16T",
    certifications: "CE, ISO 10791",
    status: "active",
    createdAt: 17005e5
  },
  {
    id: 7,
    name: "PPE Kit — Complete Industrial Set",
    category: "Safety Gear",
    price: 1850,
    stock: 1200,
    description: "Complete PPE kit including gloves, goggles, helmet, and safety shoes.",
    supplierId: "sup-002",
    imageUrl: "",
    specifications: "Helmet: IS 2925, Gloves: Cut Level 3, Shoes: EN ISO 20345",
    certifications: "BIS, OSHA",
    status: "active",
    createdAt: 17006e5
  },
  {
    id: 8,
    name: "Copper Rods 12mm ETP Grade",
    category: "Raw Materials",
    price: 8750,
    stock: 280,
    description: "Electrolytic tough pitch copper rods for electrical applications.",
    supplierId: "sup-003",
    imageUrl: "",
    specifications: "Grade: ETP, Purity: 99.9%, Dia: 12mm",
    certifications: "IS 613, ASTM B187",
    status: "active",
    createdAt: 17007e5
  },
  {
    id: 9,
    name: "Variable Frequency Drive 11kW",
    category: "Electronics",
    price: 28500,
    stock: 45,
    description: "Three-phase VFD for motor speed control in industrial applications.",
    supplierId: "sup-004",
    imageUrl: "",
    specifications: "Power: 11kW, Input: 3P 415V, Output: 0-400Hz",
    certifications: "CE, UL, ATEX",
    status: "active",
    createdAt: 17008e5
  },
  {
    id: 10,
    name: "Caustic Soda Flakes 99%",
    category: "Chemicals",
    price: 2400,
    stock: 800,
    description: "Industrial sodium hydroxide flakes for paper, textile and chemical industries.",
    supplierId: "sup-005",
    imageUrl: "",
    specifications: "Purity: 99%, Form: Flakes, Moisture: <0.5%",
    certifications: "ISO 9001, GHS",
    status: "active",
    createdAt: 17009e5
  },
  {
    id: 11,
    name: "Injection Molding Machine 200T",
    category: "Machinery",
    price: 32e5,
    stock: 2,
    description: "Hydraulic injection molding machine for plastic component manufacturing.",
    supplierId: "sup-006",
    imageUrl: "",
    specifications: "Clamp Force: 200T, Shot Weight: 680g, Platen: 600x600mm",
    certifications: "CE, ISO 15607",
    status: "active",
    createdAt: 1701e6
  },
  {
    id: 12,
    name: "Industrial Air Compressor 10HP",
    category: "Industrial Equipment",
    price: 85e3,
    stock: 18,
    description: "Rotary screw compressor for continuous industrial compressed air supply.",
    supplierId: "sup-006",
    imageUrl: "",
    specifications: "Power: 10HP, FAD: 1.2 m3/min, Pressure: 10 bar",
    certifications: "CE, BIS",
    status: "active",
    createdAt: 17011e5
  }
];
const mockBuyers = [
  {
    id: "buy-001",
    company: "Tata Advanced Materials Ltd",
    contactName: "Rajesh Kumar",
    volume: 485e5,
    tier: "tier4",
    location: "Mumbai, MH",
    verified: true
  },
  {
    id: "buy-002",
    company: "Bharat Heavy Electricals Co.",
    contactName: "Priya Sharma",
    volume: 352e5,
    tier: "tier4",
    location: "New Delhi, DL",
    verified: true
  },
  {
    id: "buy-003",
    company: "Mahindra Logistics Ltd",
    contactName: "Anil Mehta",
    volume: 2275e4,
    tier: "tier3",
    location: "Pune, MH",
    verified: true
  },
  {
    id: "buy-004",
    company: "Larsen & Toubro Components",
    contactName: "Sunita Rao",
    volume: 189e5,
    tier: "tier3",
    location: "Chennai, TN",
    verified: true
  },
  {
    id: "buy-005",
    company: "Gujarat Narmada Valley Chem",
    contactName: "Vikram Patel",
    volume: 124e5,
    tier: "tier3",
    location: "Vadodara, GJ",
    verified: true
  },
  {
    id: "buy-006",
    company: "Ashok Leyland Industries",
    contactName: "Meena Nair",
    volume: 865e4,
    tier: "tier2",
    location: "Hosur, TN",
    verified: true
  },
  {
    id: "buy-007",
    company: "Precision Parts SME Pvt Ltd",
    contactName: "Ravi Singh",
    volume: 28e5,
    tier: "tier2",
    location: "Ludhiana, PB",
    verified: false
  },
  {
    id: "buy-008",
    company: "Coimbatore Forge Tech",
    contactName: "Arjun Nambiar",
    volume: 145e4,
    tier: "tier2",
    location: "Coimbatore, TN",
    verified: true
  }
];
const mockSuppliers = [
  {
    id: "sup-001",
    company: "Ace Industrial Systems",
    contactName: "Harish Gupta",
    rating: 4.8,
    responseTime: "2h",
    verified: true,
    location: "Ahmedabad, GJ",
    products: 24,
    revenue: 625e5
  },
  {
    id: "sup-002",
    company: "SafeGuard PPE Solutions",
    contactName: "Kavita Jain",
    rating: 4.7,
    responseTime: "4h",
    verified: true,
    location: "Kanpur, UP",
    products: 38,
    revenue: 284e5
  },
  {
    id: "sup-003",
    company: "National Steel & Alloys",
    contactName: "Deepak Verma",
    rating: 4.9,
    responseTime: "1h",
    verified: true,
    location: "Jamshedpur, JH",
    products: 15,
    revenue: 145e6
  },
  {
    id: "sup-004",
    company: "Automation India Electronics",
    contactName: "Sanjay Reddy",
    rating: 4.6,
    responseTime: "3h",
    verified: true,
    location: "Hyderabad, TS",
    products: 56,
    revenue: 382e5
  },
  {
    id: "sup-005",
    company: "Chemplast Chemical Works",
    contactName: "Nandini Shah",
    rating: 4.5,
    responseTime: "6h",
    verified: true,
    location: "Surat, GJ",
    products: 22,
    revenue: 198e5
  },
  {
    id: "sup-006",
    company: "HeavyTech Machinery Pvt",
    contactName: "Manish Tiwari",
    rating: 4.7,
    responseTime: "2h",
    verified: true,
    location: "Rajkot, GJ",
    products: 12,
    revenue: 82e6
  },
  {
    id: "sup-007",
    company: "PneuTech Pneumatics Ltd",
    contactName: "Smita Desai",
    rating: 4.4,
    responseTime: "5h",
    verified: false,
    location: "Nashik, MH",
    products: 45,
    revenue: 145e5
  },
  {
    id: "sup-008",
    company: "Precision Fasteners Corp",
    contactName: "Rajiv Saxena",
    rating: 4.3,
    responseTime: "8h",
    verified: true,
    location: "Faridabad, HR",
    products: 89,
    revenue: 92e5
  }
];
const mockRFQs = [
  {
    id: 101,
    buyerId: "buy-001",
    supplierId: "sup-001",
    productId: 6,
    quantity: 3,
    requiredDate: "2026-06-15",
    specialRequirements: "Need installation support and 2-year warranty.",
    status: "quoted",
    quoteAmount: 54e5,
    createdAt: 1712e6
  },
  {
    id: 102,
    buyerId: "buy-002",
    supplierId: "sup-003",
    productId: 3,
    quantity: 50,
    requiredDate: "2026-05-30",
    specialRequirements: "Material test certificates required.",
    status: "accepted",
    quoteAmount: 3425e3,
    createdAt: 17121e5
  },
  {
    id: 103,
    buyerId: "buy-003",
    supplierId: "sup-004",
    productId: 4,
    quantity: 10,
    requiredDate: "2026-06-01",
    specialRequirements: "ATEX certified units only.",
    status: "pending",
    createdAt: 17122e5
  },
  {
    id: 104,
    buyerId: "buy-004",
    supplierId: "sup-002",
    productId: 2,
    quantity: 200,
    requiredDate: "2026-05-20",
    specialRequirements: "Company logo embossing required on helmets.",
    status: "rejected",
    createdAt: 17123e5
  },
  {
    id: 105,
    buyerId: "buy-005",
    supplierId: "sup-005",
    productId: 5,
    quantity: 100,
    requiredDate: "2026-06-10",
    specialRequirements: "HDPE drum packing, DOT certified.",
    status: "quoted",
    quoteAmount: 38e4,
    createdAt: 17124e5
  },
  {
    id: 106,
    buyerId: "buy-006",
    supplierId: "sup-006",
    productId: 12,
    quantity: 2,
    requiredDate: "2026-07-01",
    specialRequirements: "Need 3-year AMC included in quote.",
    status: "pending",
    createdAt: 17125e5
  },
  {
    id: 107,
    buyerId: "buy-007",
    supplierId: "sup-001",
    productId: 1,
    quantity: 1,
    requiredDate: "2026-06-20",
    specialRequirements: "Financing options available?",
    status: "quoted",
    quoteAmount: 285e3,
    createdAt: 17126e5
  },
  {
    id: 108,
    buyerId: "buy-008",
    supplierId: "sup-004",
    productId: 9,
    quantity: 5,
    requiredDate: "2026-05-25",
    specialRequirements: "Programming and commissioning support needed.",
    status: "accepted",
    quoteAmount: 142500,
    createdAt: 17127e5
  }
];
const mockTransactions = [
  {
    id: 201,
    buyerId: "buy-001",
    supplierId: "sup-003",
    productId: 3,
    amount: 3425e3,
    paymentStatus: "completed",
    date: 1711e6
  },
  {
    id: 202,
    buyerId: "buy-002",
    supplierId: "sup-001",
    productId: 6,
    amount: 555e4,
    paymentStatus: "completed",
    date: 17111e5
  },
  {
    id: 203,
    buyerId: "buy-003",
    supplierId: "sup-004",
    productId: 9,
    amount: 142500,
    paymentStatus: "completed",
    date: 17112e5
  },
  {
    id: 204,
    buyerId: "buy-004",
    supplierId: "sup-002",
    productId: 7,
    amount: 185e3,
    paymentStatus: "completed",
    date: 17113e5
  },
  {
    id: 205,
    buyerId: "buy-005",
    supplierId: "sup-005",
    productId: 10,
    amount: 24e4,
    paymentStatus: "pending",
    date: 17114e5
  },
  {
    id: 206,
    buyerId: "buy-006",
    supplierId: "sup-006",
    productId: 12,
    amount: 17e4,
    paymentStatus: "completed",
    date: 17115e5
  },
  {
    id: 207,
    buyerId: "buy-001",
    supplierId: "sup-004",
    productId: 4,
    amount: 42e4,
    paymentStatus: "completed",
    date: 17116e5
  },
  {
    id: 208,
    buyerId: "buy-002",
    supplierId: "sup-003",
    productId: 8,
    amount: 875e3,
    paymentStatus: "completed",
    date: 17117e5
  },
  {
    id: 209,
    buyerId: "buy-007",
    supplierId: "sup-001",
    productId: 1,
    amount: 285e3,
    paymentStatus: "failed",
    date: 17118e5
  },
  {
    id: 210,
    buyerId: "buy-008",
    supplierId: "sup-002",
    productId: 2,
    amount: 84e3,
    paymentStatus: "completed",
    date: 17119e5
  },
  {
    id: 211,
    buyerId: "buy-003",
    supplierId: "sup-005",
    productId: 5,
    amount: 38e4,
    paymentStatus: "completed",
    date: 1712e6
  },
  {
    id: 212,
    buyerId: "buy-004",
    supplierId: "sup-006",
    productId: 11,
    amount: 32e5,
    paymentStatus: "pending",
    date: 17121e5
  },
  {
    id: 213,
    buyerId: "buy-005",
    supplierId: "sup-003",
    productId: 3,
    amount: 685e3,
    paymentStatus: "completed",
    date: 17122e5
  },
  {
    id: 214,
    buyerId: "buy-006",
    supplierId: "sup-004",
    productId: 9,
    amount: 57e3,
    paymentStatus: "completed",
    date: 17123e5
  },
  {
    id: 215,
    buyerId: "buy-001",
    supplierId: "sup-006",
    productId: 12,
    amount: 85e4,
    paymentStatus: "completed",
    date: 17124e5
  }
];
const mockFeedback = [
  {
    id: 301,
    userId: "buy-001",
    userType: "buyer",
    rating: 5,
    message: "Excellent platform! Found high-quality suppliers within days. Very impressed with the verification process.",
    status: "reviewed",
    createdAt: 17115e5
  },
  {
    id: 302,
    userId: "sup-003",
    userType: "supplier",
    rating: 4,
    message: "Good buyer base. Would love better analytics on product views. Overall a great marketplace.",
    status: "reviewed",
    createdAt: 17116e5
  },
  {
    id: 303,
    userId: "buy-003",
    userType: "buyer",
    rating: 5,
    message: "RFQ process is seamless. Supplier response times have been impressive.",
    status: "new",
    createdAt: 17117e5
  },
  {
    id: 304,
    userId: "sup-001",
    userType: "supplier",
    rating: 3,
    message: "Platform is good but commission structure for large orders feels high. Need negotiation options.",
    status: "new",
    createdAt: 17118e5
  },
  {
    id: 305,
    userId: "buy-004",
    userType: "buyer",
    rating: 4,
    message: "Product catalog is comprehensive. Search filters could be more granular for technical specifications.",
    status: "reviewed",
    createdAt: 17119e5
  },
  {
    id: 306,
    userId: "sup-002",
    userType: "supplier",
    rating: 5,
    message: "Fantastic platform for reaching tier 3/4 enterprise buyers. Revenue has doubled since joining.",
    status: "closed",
    createdAt: 1712e6
  },
  {
    id: 307,
    userId: "buy-006",
    userType: "buyer",
    rating: 4,
    message: "Pricing tool is very useful. Would appreciate bulk discount calculator integration.",
    status: "new",
    createdAt: 17121e5
  },
  {
    id: 308,
    userId: "sup-004",
    userType: "supplier",
    rating: 5,
    message: "Quality leads, quick onboarding. Customer support is responsive and professional.",
    status: "reviewed",
    createdAt: 17122e5
  },
  {
    id: 309,
    userId: "buy-002",
    userType: "buyer",
    rating: 3,
    message: "Some supplier profiles lack complete documentation. Verification should be stricter.",
    status: "new",
    createdAt: 17123e5
  },
  {
    id: 310,
    userId: "sup-006",
    userType: "supplier",
    rating: 4,
    message: "Analytics dashboard is useful. Mobile app would be a great addition to the platform.",
    status: "closed",
    createdAt: 17124e5
  }
];
const mockMetrics = {
  totalTransactions: 12847,
  activeBuyers: 342,
  activeSuppliers: 186,
  newListings: 23
};
const monthlyData = [
  {
    month: "Oct",
    transactions: 920,
    revenue: 184e5,
    buyers: 280,
    suppliers: 152
  },
  {
    month: "Nov",
    transactions: 1050,
    revenue: 21e6,
    buyers: 295,
    suppliers: 158
  },
  {
    month: "Dec",
    transactions: 890,
    revenue: 178e5,
    buyers: 305,
    suppliers: 161
  },
  {
    month: "Jan",
    transactions: 1180,
    revenue: 236e5,
    buyers: 312,
    suppliers: 168
  },
  {
    month: "Feb",
    transactions: 1320,
    revenue: 264e5,
    buyers: 325,
    suppliers: 175
  },
  {
    month: "Mar",
    transactions: 1480,
    revenue: 296e5,
    buyers: 335,
    suppliers: 180
  },
  {
    month: "Apr",
    transactions: 1640,
    revenue: 328e5,
    buyers: 342,
    suppliers: 186
  }
];
const categoryData = [
  { name: "Industrial Equipment", value: 32, color: "#1e40af" },
  { name: "Machinery", value: 28, color: "#059669" },
  { name: "Raw Materials", value: 20, color: "#d97706" },
  { name: "Electronics", value: 12, color: "#7c3aed" },
  { name: "Safety Gear", value: 5, color: "#dc2626" },
  { name: "Chemicals", value: 3, color: "#0891b2" }
];
export {
  mockBuyers as a,
  mockSuppliers as b,
  mockProducts as c,
  mockTransactions as d,
  mockRFQs as e,
  monthlyData as f,
  categoryData as g,
  mockFeedback as h,
  mockMetrics as m
};
