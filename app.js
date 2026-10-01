/* =========================================================
   CarGenix - Automotive Database & Website Logic
   Version 2
   ========================================================= */


/* =========================================================
   VEHICLE DATABASE
   ========================================================= */

const vehicles = [

  /* ================= HYUNDAI ================= */

  {
    id: "hyundai-creta",
    name: "Hyundai Creta",
    brand: "Hyundai",
    category: "SUV",
    status: "Current",
    generation: "2nd Generation",
    version: "Current Facelift",
    year: "2026",

    price: "₹10.90 Lakh*",
    priceRange: "₹10.90–20.11 Lakh*",

    fuel: ["Petrol", "Diesel"],
    engine: "1.5L Petrol / 1.5L Turbo Petrol / 1.5L Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",

    transmission: [
      "6-Speed Manual",
      "IVT",
      "6-Speed Automatic",
      "7-Speed DCT"
    ],

    seating: "5 Seater",
    bodyType: "SUV",

    colours: [
      "Atlas White",
      "Titan Grey",
      "Abyss Black",
      "Fiery Red",
      "Ranger Khaki",
      "Robust Emerald Pearl",
      "Atlas White with Black Roof"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS Level 2",
      "360° Camera",
      "Ventilated Seats",
      "Connected Car Technology",
      "Digital Instrument Cluster",
      "Drive Modes"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "Hill Start Assist",
      "TPMS",
      "ADAS",
      "Parking Sensors"
    ],

    dimensions: {
      length: "4,330 mm",
      width: "1,790 mm",
      height: "1,635 mm",
      wheelbase: "2,610 mm"
    },

    image:
      "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fstatic.carandbike.com%2Fcarandbike%2Fuploads%2Fcars%2Fhyundai%2Fcreta%2F2024%2Ffront%2Fhyundai-creta-front.jpg&w=1200&q=75",

    gallery: [],

    tag: "Popular SUV"
  },


  {
    id: "hyundai-creta-n-line",
    name: "Hyundai Creta N Line",
    brand: "Hyundai",
    category: "SUV",
    status: "Current",
    generation: "2nd Generation",
    version: "N Line",
    year: "2026",

    price: "₹19.03 Lakh*",
    priceRange: "₹19.03–20.09 Lakh*",

    fuel: ["Petrol"],

    engine: "1.5L Turbo Petrol",
    power: "160 PS",
    torque: "253 Nm",

    transmission: [
      "6-Speed Manual",
      "7-Speed DCT"
    ],

    seating: "5 Seater",
    bodyType: "Performance SUV",

    colours: [
      "Atlas White",
      "Shadow Grey",
      "Thunder Blue",
      "Titan Grey"
    ],

    features: [
      "N Line Styling",
      "Sporty Interior",
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Connected Car Technology"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "TPMS",
      "ADAS"
    ],

    dimensions: {
      length: "4,330 mm",
      width: "1,790 mm",
      height: "1,635 mm"
    },

    image: "",
    gallery: [],

    tag: "Performance SUV"
  },


  {
    id: "hyundai-creta-electric",
    name: "Hyundai Creta Electric",
    brand: "Hyundai",
    category: "Electric SUV",
    status: "Current",
    generation: "1st Generation",
    version: "Current",
    year: "2026",

    price: "₹18.02 Lakh*",
    priceRange: "₹18.02–24.70 Lakh*",

    fuel: ["Electric"],

    engine: "42 kWh / 51.4 kWh Battery",
    power: "Up to 171 PS",
    torque: "Up to 255 Nm",

    transmission: [
      "Single Speed Automatic"
    ],

    seating: "5 Seater",
    bodyType: "Electric SUV",

    colours: [
      "Atlas White",
      "Abyss Black",
      "Fiery Red",
      "Titan Grey"
    ],

    features: [
      "Fast Charging",
      "ADAS",
      "360° Camera",
      "Panoramic Sunroof",
      "Connected Car Technology"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS",
      "TPMS"
    ],

    dimensions: {
      length: "4,340 mm",
      width: "1,790 mm"
    },

    image: "",
    gallery: [],

    tag: "Electric SUV"
  },


  {
    id: "hyundai-venue",
    name: "Hyundai Venue",
    brand: "Hyundai",
    category: "SUV",
    status: "Current",
    generation: "Current Generation",
    version: "Current",
    year: "2026",

    price: "₹7.99 Lakh*",
    priceRange: "₹7.99–15.82 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "1.2L Petrol / 1.0L Turbo Petrol / 1.5L Diesel",
    power: "Up to 120 PS",
    torque: "Up to 172 Nm",

    transmission: [
      "Manual",
      "AMT",
      "DCT"
    ],

    seating: "5 Seater",
    bodyType: "Compact SUV",

    colours: [
      "Atlas White",
      "Titan Grey",
      "Abyss Black",
      "Fiery Red",
      "Denim Blue"
    ],

    features: [
      "Sunroof",
      "Connected Car",
      "Digital Cluster",
      "Wireless Charger",
      "Rear Camera"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "TPMS",
      "Hill Assist"
    ],

    dimensions: {
      length: "3,995 mm",
      width: "1,770 mm",
      height: "1,617 mm"
    },

    image: "",
    gallery: [],

    tag: "Compact SUV"
  },


  {
    id: "hyundai-venue-n-line",
    name: "Hyundai Venue N Line",
    brand: "Hyundai",
    category: "Performance SUV",
    status: "Current",
    generation: "Current Generation",
    version: "N Line",
    year: "2026",

    price: "₹10.66 Lakh*",
    priceRange: "₹10.66–15.66 Lakh*",

    fuel: ["Petrol"],

    engine: "1.0L Turbo GDi Petrol",
    power: "120 PS",
    torque: "172 Nm",

    transmission: [
      "6-Speed Manual",
      "7-Speed DCT"
    ],

    seating: "5 Seater",

    colours: [
      "Thunder Blue",
      "Shadow Grey",
      "Atlas White",
      "Fiery Red"
    ],

    features: [
      "N Line Design",
      "Sporty Interior",
      "Connected Technology",
      "Sunroof"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "TPMS"
    ],

    image: "",
    gallery: [],

    tag: "Performance"
  },


  {
    id: "hyundai-alcazar",
    name: "Hyundai Alcazar",
    brand: "Hyundai",
    category: "SUV",
    status: "Current",
    generation: "Current Generation",
    version: "Facelift",
    year: "2026",

    price: "₹14.50 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "1.5L Turbo Petrol / 1.5L Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",

    transmission: [
      "6-Speed Manual",
      "6-Speed Automatic",
      "7-Speed DCT"
    ],

    seating: "6 / 7 Seater",

    colours: [
      "Atlas White",
      "Abyss Black",
      "Titan Grey",
      "Fiery Red"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Ventilated Seats",
      "Connected Technology"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS",
      "TPMS"
    ],

    image: "",
    gallery: [],

    tag: "7-Seater SUV"
  },


  {
    id: "hyundai-verna",
    name: "Hyundai Verna",
    brand: "Hyundai",
    category: "Sedan",
    status: "Current",
    generation: "6th Generation",
    version: "Current",
    year: "2026",

    price: "₹10.99 Lakh*",

    fuel: ["Petrol"],

    engine: "1.5L Petrol / 1.5L Turbo Petrol",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",

    transmission: [
      "6-Speed Manual",
      "IVT",
      "7-Speed DCT"
    ],

    seating: "5 Seater",

    colours: [
      "Abyss Black",
      "Titan Grey",
      "Atlas White",
      "Fiery Red"
    ],

    features: [
      "ADAS",
      "Ventilated Seats",
      "Electric Sunroof",
      "Connected Car Technology",
      "Digital Cockpit"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS",
      "TPMS"
    ],

    image: "",
    gallery: [],

    tag: "Premium Sedan"
  },


  /* ================= MAHINDRA ================= */

  {
    id: "mahindra-xuv-7xo",
    name: "Mahindra XUV 7XO",
    brand: "Mahindra",
    category: "SUV",
    status: "Latest",
    generation: "New Generation",
    version: "Current",
    year: "2026",

    price: "₹13.66 Lakh*",
    priceRange: "₹13.66–24.92 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "2.0L Turbo Petrol / 2.2L Turbo Diesel",
    power: "Up to 230 PS",
    torque: "Up to 450 Nm",

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "6 / 7 Seater",

    colours: [
      "Everest White",
      "Nebula Blue",
      "Midnight Black",
      "Desert Myst",
      "Galaxy Grey",
      "Ruby Velvet",
      "Stealth Black"
    ],

    features: [
      "31.24 cm Triple Screens",
      "Dolby Vision",
      "Dolby Atmos",
      "540° Camera",
      "ADAS Level 2",
      "Ventilated Seats",
      "Panoramic Sunroof",
      "AWD"
    ],

    safety: [
      "ADAS Level 2",
      "Multiple Airbags",
      "Electronic Stability Control",
      "360°/540° Camera"
    ],

    dimensions: {
      length: "Approx. 4,695 mm"
    },

    image:
      "https://static-cdn.cars24.com/prod/vehicles/mahindra/xuv-7xo/colour/desert-myst-EtvMMMXc5uqrTvH2.png",

    gallery: [],

    tag: "Latest SUV"
  },


  {
    id: "mahindra-thar",
    name: "Mahindra Thar",
    brand: "Mahindra",
    category: "SUV",
    status: "Current",
    generation: "2nd Generation",
    version: "Current",
    year: "2026",

    price: "₹11.50 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "Up to 177 PS",
    torque: "Up to 400 Nm",

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "4 Seater",

    colours: [
      "Everest White",
      "Stealth Black",
      "Red Rage",
      "Deep Grey"
    ],

    features: [
      "4x4",
      "Terrain Modes",
      "Removable Roof",
      "Touchscreen Infotainment"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "Hill Hold",
      "Hill Descent"
    ],

    image: "",
    gallery: [],

    tag: "Adventure"
  },


  {
    id: "mahindra-thar-roxx",
    name: "Mahindra Thar Roxx",
    brand: "Mahindra",
    category: "SUV",
    status: "Current",
    generation: "1st Generation",
    version: "Current",
    year: "2026",

    price: "₹12.99 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "Up to 177 PS",
    torque: "Up to 400 Nm",

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Everest White",
      "Nebula Blue",
      "Stealth Black",
      "Tango Red"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "4x4",
      "Large Touchscreen"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "5-Door SUV"
  },


  {
    id: "mahindra-xuv-3xo",
    name: "Mahindra XUV 3XO",
    brand: "Mahindra",
    category: "Compact SUV",
    status: "Current",
    generation: "Current",
    version: "Facelift",
    year: "2026",

    price: "₹7.49 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "1.2L Turbo Petrol / 1.5L Diesel",
    power: "Up to 131 PS",
    torque: "Up to 300 Nm",

    transmission: [
      "Manual",
      "AMT",
      "Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Stealth Black",
      "Everest White",
      "Nebula Blue",
      "Red Rage"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Connected Car Technology"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "Compact SUV"
  },


  /* ================= KIA ================= */

  {
    id: "kia-seltos",
    name: "Kia Seltos",
    brand: "Kia",
    category: "SUV",
    status: "Latest",
    generation: "New Generation",
    version: "Current",
    year: "2026",

    price: "Check Latest Price",

    fuel: ["Petrol", "Diesel"],

    engine: "1.5L Petrol / Turbo Petrol / Diesel",
    power: "Model dependent",
    torque: "Model dependent",

    transmission: [
      "Manual",
      "iMT",
      "CVT",
      "Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Morning Haze",
      "Aurora Black Pearl",
      "Glacier White Pearl",
      "Fiery Red"
    ],

    features: [
      "Dual 12.3-inch Displays",
      "ADAS Level 2",
      "Panoramic Sunroof",
      "Ventilated Seats",
      "Connected Technology",
      "360° Camera"
    ],

    safety: [
      "Multiple Airbags",
      "ESC",
      "ADAS Level 2",
      "Parking Sensors"
    ],

    image:
      "https://www.hindustantimes.com/ht-img/img/2025/12/10/550x550/Kia_Seltos_new_1765361170643_1765361182716.jpg",

    gallery: [],

    tag: "Latest SUV"
  },


  {
    id: "kia-syros",
    name: "Kia Syros",
    brand: "Kia",
    category: "SUV",
    status: "Current",
    generation: "1st Generation",
    version: "Current",
    year: "2026",

    price: "₹9.00 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "1.0L Turbo Petrol / 1.5L Diesel",
    power: "Up to 120 PS",
    torque: "Up to 250 Nm",

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Aurora Black Pearl",
      "Glacier White",
      "Olive Green",
      "Imperial Blue"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Ventilated Seats"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "New SUV"
  },


  {
    id: "kia-sonet",
    name: "Kia Sonet",
    brand: "Kia",
    category: "Compact SUV",
    status: "Current",
    generation: "1st Generation",
    version: "Facelift",
    year: "2026",

    price: "₹7.99 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "1.2L Petrol / 1.0L Turbo Petrol / 1.5L Diesel",
    power: "Up to 120 PS",
    torque: "Up to 250 Nm",

    transmission: [
      "Manual",
      "iMT",
      "DCT",
      "Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Intense Red",
      "Glacier White Pearl",
      "Aurora Black Pearl",
      "Imperial Blue"
    ],

    features: [
      "ADAS",
      "Sunroof",
      "360° Camera",
      "Ventilated Seats",
      "Connected Car"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "Popular Compact SUV"
  },


  {
    id: "kia-carens",
    name: "Kia Carens",
    brand: "Kia",
    category: "MPV",
    status: "Current",
    generation: "1st Generation",
    version: "Facelift",
    year: "2026",

    price: "₹10.60 Lakh*",

    fuel: ["Petrol", "Diesel", "CNG"],

    engine: "1.5L Petrol / Turbo Petrol / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",

    transmission: [
      "Manual",
      "iMT",
      "Automatic",
      "DCT"
    ],

    seating: "6 / 7 Seater",

    colours: [
      "Glacier White Pearl",
      "Imperial Blue",
      "Aurora Black Pearl",
      "Intense Red"
    ],

    features: [
      "Panoramic Sunroof",
      "Ventilated Seats",
      "ADAS",
      "360° Camera",
      "Connected Technology"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "Family MPV"
  },


  /* ================= TOYOTA ================= */

  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    category: "SUV",
    status: "Current",
    generation: "2nd Generation",
    version: "Current",
    year: "2026",

    price: "₹33.65 Lakh*",

    fuel: ["Petrol", "Diesel"],

    engine: "2.7L Petrol / 2.8L Diesel",
    power: "Up to 204 PS",
    torque: "Up to 500 Nm",

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "7 Seater",

    colours: [
      "White Pearl Crystal Shine",
      "Attitude Black",
      "Silver Metallic",
      "Sparkling Black"
    ],

    features: [
      "4x4",
      "Connected Technology",
      "Large Touchscreen",
      "Cruise Control"
    ],

    safety: [
      "7 Airbags",
      "ABS",
      "ESC",
      "Hill Assist"
    ],

    image: "",
    gallery: [],

    tag: "Premium SUV"
  },


  {
    id: "toyota-hyryder",
    name: "Toyota Urban Cruiser Hyryder",
    brand: "Toyota",
    category: "SUV",
    status: "Current",
    generation: "1st Generation",
    version: "Current",
    year: "2026",

    price: "₹11.34 Lakh*",

    fuel: ["Petrol", "CNG", "Hybrid"],

    engine: "1.5L Petrol / 1.5L Strong Hybrid",
    power: "Up to 116 PS",
    torque: "141 Nm",

    transmission: [
      "Manual",
      "Automatic",
      "e-CVT"
    ],

    seating: "5 Seater",

    colours: [
      "Café White",
      "Gaming Grey",
      "Sporting Red",
      "Silver"
    ],

    features: [
      "Strong Hybrid",
      "Panoramic Sunroof",
      "AWD",
      "360° Camera"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "Hill Hold"
    ],

    image: "",
    gallery: [],

    tag: "Hybrid SUV"
  },


  /* ================= BMW ================= */

  {
    id: "bmw-3-series",
    name: "BMW 3 Series",
    brand: "BMW",
    category: "Luxury Sedan",
    status: "Current",
    generation: "Current Generation",
    version: "Current",
    year: "2026",

    price: "₹60 Lakh*",

    fuel: ["Petrol"],

    engine: "2.0L Turbo Petrol",
    power: "Up to 258 PS",
    torque: "400 Nm",

    transmission: [
      "8-Speed Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Alpine White",
      "Black Sapphire",
      "Portimao Blue",
      "Skyscraper Grey"
    ],

    features: [
      "BMW Curved Display",
      "ADAS",
      "360° Camera",
      "ConnectedDrive",
      "Premium Audio"
    ],

    safety: [
      "Multiple Airbags",
      "ABS",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "Luxury"
  },


  /* ================= TATA ================= */

  {
    id: "tata-harrier",
    name: "Tata Harrier",
    brand: "Tata",
    category: "SUV",
    status: "Current",
    generation: "1st Generation",
    version: "Facelift",
    year: "2026",

    price: "₹14.00 Lakh*",

    fuel: ["Diesel"],

    engine: "2.0L Diesel",
    power: "170 PS",
    torque: "350 Nm",

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    colours: [
      "Sunlit Yellow",
      "Oberon Black",
      "Ash Grey",
      "Seaweed Green"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Ventilated Seats"
    ],

    safety: [
      "6 Airbags",
      "ESC",
      "ADAS"
    ],

    image: "",
    gallery: [],

    tag: "Indian SUV"
  }

];


/* =========================================================
   BIKES
   ========================================================= */

const bikes = [

  {
    id: "re-classic-350",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    category: "Bike",
    year: "2026",

    price: "₹1.93 Lakh*",
    engine: "349cc",
    power: "20.2 PS",
    torque: "27 Nm",

    transmission: ["5-Speed Manual"],

    fuel: ["Petrol"],
    seating: "2 Seater",

    colours: [
      "Heritage Premium",
      "Emerald",
      "Red",
      "Black"
    ],

    features: [
      "Classic Design",
      "LED Lighting",
      "Dual Channel ABS"
    ],

    image: "",

    tag: "Popular Bike"
  },


  {
    id: "ktm-duke-390",
    name: "KTM Duke 390",
    brand: "KTM",
    category: "Bike",
    year: "2026",

    price: "₹3.00 Lakh*",
    engine: "399cc",
    power: "46 PS",
    torque: "39 Nm",

    transmission: ["6-Speed Manual"],

    fuel: ["Petrol"],
    seating: "2 Seater",

    colours: [
      "Electronic Orange",
      "Black"
    ],

    features: [
      "Ride Modes",
      "Quickshifter",
      "Cornering ABS",
      "TFT Display"
    ],

    image: "",

    tag: "Performance"
  },


  {
    id: "yamaha-r15",
    name: "Yamaha R15",
    brand: "Yamaha",
    category: "Sports Bike",
    year: "2026",

    price: "₹1.83 Lakh*",
    engine: "155cc",
    power: "18.4 PS",
    torque: "14.2 Nm",

    transmission: ["6-Speed Manual"],

    fuel: ["Petrol"],
    seating: "2 Seater",

    colours: [
      "Racing Blue",
      "Intensity White",
      "Vivid Magenta Metallic"
    ],

    features: [
      "VVA Engine",
      "Traction Control",
      "Quickshifter",
      "LED Lighting"
    ],

    image: "",

    tag: "Sports Bike"
  }

];


/* =========================================================
   COMBINE ALL VEHICLES
   ========================================================= */

const allVehicles = [...vehicles, ...bikes];


/* =========================================================
   CARD
   ========================================================= */

function vehicleCard(vehicle) {

  const imageHTML = vehicle.image
    ? `
      <img
        src="${vehicle.image}"
        alt="${vehicle.name}"
        loading="lazy"
        onerror="this.parentElement.innerHTML =
        '<div class=&quot;image-placeholder&quot;>📷<br><span>Gallery image coming soon</span></div>'"
      >
    `
    : `
      <div class="image-placeholder">
        📷
        <span>${vehicle.name}</span>
      </div>
    `;

  return `
    <article class="vehicle-card">

      <div class="vehicle-image">
        ${imageHTML}

        <span class="vehicle-status">
          ${vehicle.status || "Current"}
        </span>
      </div>

      <div class="vehicle-info">

        <span class="vehicle-tag">
          ${vehicle.tag || vehicle.category}
        </span>

        <h3>${vehicle.name}</h3>

        <p>
          <strong>Brand:</strong>
          ${vehicle.brand}
        </p>

        <p>
          <strong>Generation:</strong>
          ${vehicle.generation || "Current"}
        </p>

        <p>
          <strong>Engine:</strong>
          ${vehicle.engine}
        </p>

        <p>
          <strong>Power:</strong>
          ${vehicle.power}
        </p>

        <p>
          <strong>Torque:</strong>
          ${vehicle.torque}
        </p>

        <p>
          <strong>Price:</strong>
          ${vehicle.price}
        </p>

        <button
          class="details-btn"
          onclick="showDetails('${vehicle.id}')"
        >
          View Details
        </button>

      </div>

    </article>
  `;
}


/* =========================================================
   DISPLAY CARS
   ========================================================= */

function displayVehicles(list = vehicles) {

  const grid = document.getElementById("vehicleGrid");

  if (!grid) return;

  if (!list.length) {

    grid.innerHTML = `
      <div class="no-results">
        <h3>No vehicles found</h3>
        <p>Try another model, brand or category.</p>
      </div>
    `;

    return;
  }

  grid.innerHTML = list
    .map(vehicleCard)
    .join("");
}


/* =========================================================
   DISPLAY BIKES
   ========================================================= */

function displayBikes(list = bikes) {

  const grid = document.getElementById("bikeGrid");

  if (!grid) return;

  if (!list.length) {

    grid.innerHTML = `
      <div class="no-results">
        <h3>No bikes found</h3>
      </div>
    `;

    return;
  }

  grid.innerHTML = list
    .map(vehicleCard)
    .join("");
}


/* =========================================================
   SEARCH
   ========================================================= */

function searchVehicles() {

  const inputElement =
    document.getElementById("searchInput");

  if (!inputElement) return;

  const input =
    inputElement.value
      .toLowerCase()
      .trim();

  if (!input) {

    displayVehicles();
    displayBikes();

    return;
  }


  const results =
    allVehicles.filter(vehicle => {

      const searchableText = [

        vehicle.name,
        vehicle.brand,
        vehicle.category,
        vehicle.type,
        vehicle.year,
        vehicle.version,
        vehicle.generation,

        ...(vehicle.fuel || []),
        ...(vehicle.transmission || []),
        ...(vehicle.colours || [])

      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(input);

    });


  const carResults =
    results.filter(vehicle =>
      vehicles.some(car => car.id === vehicle.id)
    );


  const bikeResults =
    results.filter(vehicle =>
      bikes.some(bike => bike.id === vehicle.id)
    );


  displayVehicles(carResults);
  displayBikes(bikeResults);


  const carsSection =
    document.getElementById("cars");

  if (carsSection) {

    carsSection.scrollIntoView({
      behavior: "smooth"
    });

  }
}


/* =========================================================
   QUICK SEARCH
   ========================================================= */

function quickSearch(text) {

  const input =
    document.getElementById("searchInput");

  if (!input) return;

  input.value = text;

  searchVehicles();
}


/* =========================================================
   BRAND FILTER
   ========================================================= */

function filterByBrand(brand) {

  const normalized =
    brand.toLowerCase();

  const carResults =
    vehicles.filter(vehicle =>
      vehicle.brand.toLowerCase() === normalized
    );

  const bikeResults =
    bikes.filter(vehicle =>
      vehicle.brand.toLowerCase() === normalized
    );

  displayVehicles(carResults);
  displayBikes(bikeResults);

  document
    .getElementById("cars")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================================================
   DETAILS MODAL
   ========================================================= */

function showDetails(vehicleId) {

  const vehicle =
    allVehicles.find(
      item => item.id === vehicleId
    );

  if (!vehicle) return;


  let modal =
    document.getElementById("vehicleModal");


  if (!modal) {

    modal =
      document.createElement("div");

    modal.id = "vehicleModal";

    modal.className = "vehicle-modal";

    document.body.appendChild(modal);
  }


  const galleryHTML =
    vehicle.gallery &&
    vehicle.gallery.length

      ? vehicle.gallery
          .map(image => `
            <img
              src="${image}"
              alt="${vehicle.name}"
              loading="lazy"
            >
          `)
          .join("")

      : `
        <div class="gallery-placeholder">
          <span>📷</span>
          <p>Model gallery</p>
          <small>
            Add official exterior/interior images here.
          </small>
        </div>
      `;


  const coloursHTML =
    (vehicle.colours || [])
      .map(colour => `
        <button
          class="colour-option"
          title="${colour}"
        >
          <span></span>
          ${colour}
        </button>
      `)
      .join("");


  const transmissionHTML =
    (vehicle.transmission || [])
      .map(item => `
        <span class="spec-chip">
          ${item}
        </span>
      `)
      .join("");


  const fuelHTML =
    (vehicle.fuel || [])
      .map(item => `
        <span class="spec-chip">
          ${item}
        </span>
      `)
      .join("");


  const featuresHTML =
    (vehicle.features || [])
      .map(item => `
        <li>✓ ${item}</li>
      `)
      .join("");


  const safetyHTML =
    (vehicle.safety || [])
      .map(item => `
        <li>✓ ${item}</li>
      `)
      .join("");


  modal.innerHTML = `

    <div class="modal-overlay"
         onclick="closeVehicleModal()">
    </div>

    <div class="modal-content">

      <button
        class="modal-close"
        onclick="closeVehicleModal()">
        ×
      </button>


      <div class="details-hero">

        <div class="details-image">

          ${
            vehicle.image

              ? `
                <img
                  src="${vehicle.image}"
                  alt="${vehicle.name}"
                >
              `

              : `
                <div class="large-image-placeholder">
                  📷
                  <span>
                    ${vehicle.name}
                  </span>
                </div>
              `
          }

        </div>


        <div class="details-heading">

          <span class="vehicle-tag">
            ${vehicle.tag || vehicle.category}
          </span>

          <h2>
            ${vehicle.name}
          </h2>

          <p class="details-subtitle">
            ${vehicle.year || ""}
            •
            ${vehicle.generation || "Current Generation"}
            •
            ${vehicle.version || "Current"}
          </p>

          <h3>
            ${vehicle.priceRange || vehicle.price}
          </h3>

          <button
            class="primary-action"
            onclick="closeVehicleModal()"
          >
            Compare Vehicle
          </button>

        </div>

      </div>


      <div class="details-navigation">

        <button onclick="scrollDetails('overview')">
          Overview
        </button>

        <button onclick="scrollDetails('gallery')">
          Gallery
        </button>

        <button onclick="scrollDetails('specifications')">
          Specifications
        </button>

        <button onclick="scrollDetails('features')">
          Features
        </button>

        <button onclick="scrollDetails('safety')">
          Safety
        </button>

      </div>


      <section id="overview"
               class="details-section">

        <h3>Vehicle Overview</h3>

        <div class="spec-grid">

          <div>
            <span>Brand</span>
            <strong>${vehicle.brand}</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>${vehicle.category}</strong>
          </div>

          <div>
            <span>Generation</span>
            <strong>
              ${vehicle.generation || "Current"}
            </strong>
          </div>

          <div>
            <span>Year</span>
            <strong>
              ${vehicle.year || "2026"}
            </strong>
          </div>

          <div>
            <span>Fuel</span>
            <strong>
              ${fuelHTML}
            </strong>
          </div>

          <div>
            <span>Seating</span>
            <strong>
              ${vehicle.seating || "—"}
            </strong>
          </div>

        </div>

      </section>


      <section id="gallery"
               class="details-section">

        <h3>Exterior & Interior Gallery</h3>

        <div class="gallery-grid">

          ${galleryHTML}

        </div>

        <div class="gallery-note">

          <strong>360° View</strong>

          <p>
            The 360° viewer will be connected
            to the model-specific gallery when
            the official 360 assets are added.
          </p>

        </div>

      </section>


      <section class="details-section">

        <h3>Choose Colour</h3>

        <div class="colour-grid">

          ${coloursHTML}

        </div>

      </section>


      <section id="specifications"
               class="details-section">

        <h3>Specifications</h3>

        <div class="spec-grid">

          <div>
            <span>Engine / Battery</span>
            <strong>${vehicle.engine}</strong>
          </div>

          <div>
            <span>Power</span>
            <strong>${vehicle.power}</strong>
          </div>

          <div>
            <span>Torque</span>
            <strong>${vehicle.torque}</strong>
          </div>

          <div>
            <span>Transmission</span>
            <strong>
              ${transmissionHTML}
            </strong>
          </div>

          ${
            vehicle.dimensions
              ? `
                <div>
                  <span>Length</span>
                  <strong>
                    ${vehicle.dimensions.length || "—"}
                  </strong>
                </div>

                <div>
                  <span>Width</span>
                  <strong>
                    ${vehicle.dimensions.width || "—"}
                  </strong>
                </div>

                <div>
                  <span>Height</span>
                  <strong>
                    ${vehicle.dimensions.height || "—"}
                  </strong>
                </div>

                <div>
                  <span>Wheelbase</span>
                  <strong>
                    ${vehicle.dimensions.wheelbase || "—"}
                  </strong>
                </div>
              `
              : ""
          }

        </div>

      </section>


      <section id="features"
               class="details-section">

        <h3>Features</h3>

        <ul class="feature-list">

          ${featuresHTML}

        </ul>

      </section>


      <section id="safety"
               class="details-section">

        <h3>Safety</h3>

        <ul class="feature-list">

          ${safetyHTML}

        </ul>

      </section>


      <section class="details-section">

        <h3>Transmission Options</h3>

        <div class="chip-container">

          ${transmissionHTML}

        </div>

      </section>

    </div>
  `;


  document.body.classList.add("modal-open");

  modal.classList.add("active");

}


/* =========================================================
   CLOSE DETAILS
   ========================================================= */

function closeVehicleModal() {

  const modal =
    document.getElementById("vehicleModal");

  if (!modal) return;

  modal.classList.remove("active");

  document.body.classList.remove("modal-open");
}


/* =========================================================
   DETAILS NAVIGATION
   ========================================================= */

function scrollDetails(id) {

  const section =
    document.getElementById(id);

  if (!section) return;

  section.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeVehicleModal();
    }

  }
);


/* =========================================================
   SEARCH ENTER KEY
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    displayVehicles();
    displayBikes();


    const searchInput =
      document.getElementById("searchInput");


    if (searchInput) {

      searchInput.addEventListener(
        "keydown",
        event => {

          if (event.key === "Enter") {
            searchVehicles();
          }

        }
      );

    }


    /* Brand buttons */

    document
      .querySelectorAll(".brand-grid button")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const brand =
              button.textContent.trim();

            filterByBrand(brand);

          }
        );

      });

  }
);


/* =========================================================
   GLOBAL FUNCTIONS
   ========================================================= */

window.searchVehicles = searchVehicles;
window.quickSearch = quickSearch;
window.showDetails = showDetails;
window.closeVehicleModal = closeVehicleModal;
window.filterByBrand = filterByBrand;
window.scrollDetails = scrollDetails;
