// ============================================================
// CARGENIX — VEHICLE DATABASE V2
// ============================================================

const vehicles = [

  // =========================
  // HYUNDAI
  // =========================

  {
    name: "Hyundai Exter",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹5.80 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "83 PS",
    torque: "114 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Hyundai Venue",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "2nd Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹7.99 Lakh*",
    engine: "1.2L / 1.0L Turbo / 1.5L Diesel",
    power: "Up to 120 PS",
    torque: "Up to 172 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Hyundai Venue N Line",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "N Line",
    year: "2025–Present",
    price: "₹10.66 Lakh*",
    engine: "1.0L Turbo Petrol",
    power: "120 PS",
    torque: "172 Nm",
    tag: "Performance SUV"
  },

  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2024–Present",
    price: "₹10.90 Lakh*",
    engine: "1.5L Petrol / Turbo / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "Popular SUV"
  },

  {
    name: "Hyundai Creta N Line",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "N Line",
    year: "2024–Present",
    price: "₹19.03 Lakh*",
    engine: "1.5L Turbo Petrol",
    power: "160 PS",
    torque: "253 Nm",
    tag: "Performance SUV"
  },

  {
    name: "Hyundai Creta Electric",
    brand: "Hyundai",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹18.02 Lakh*",
    engine: "42 / 51.4 kWh Battery",
    power: "Up to 171 PS",
    torque: "255 Nm",
    tag: "Electric SUV"
  },

  {
    name: "Hyundai Alcazar",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Facelift",
    year: "2024–Present",
    price: "₹14.50 Lakh*",
    engine: "1.5L Turbo Petrol / Diesel",
    power: "Up to 160 PS",
    torque: "253 Nm",
    tag: "6/7-Seater SUV"
  },

  {
    name: "Hyundai Verna",
    brand: "Hyundai",
    type: "Sedan",
    fuel: "Petrol",
    generation: "6th Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹10.99 Lakh*",
    engine: "1.5L Petrol / Turbo",
    power: "160 PS",
    torque: "253 Nm",
    tag: "Sedan"
  },

  {
    name: "Hyundai Aura",
    brand: "Hyundai",
    type: "Sedan",
    fuel: "Petrol / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹5.99 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "83 PS",
    torque: "114 Nm",
    tag: "Compact Sedan"
  },

  {
    name: "Hyundai Grand i10 Nios",
    brand: "Hyundai",
    type: "Hatchback",
    fuel: "Petrol / CNG",
    generation: "3rd Generation",
    version: "Facelift",
    year: "2023–Present",
    price: "₹5.59 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "83 PS",
    torque: "114 Nm",
    tag: "Hatchback"
  },

  {
    name: "Hyundai i20",
    brand: "Hyundai",
    type: "Hatchback",
    fuel: "Petrol",
    generation: "3rd Generation",
    version: "Facelift",
    year: "2023–Present",
    price: "₹5.99 Lakh*",
    engine: "1.2L Petrol",
    power: "83 PS",
    torque: "114 Nm",
    tag: "Premium Hatchback"
  },

  {
    name: "Hyundai i20 N Line",
    brand: "Hyundai",
    type: "Hatchback",
    fuel: "Petrol",
    generation: "3rd Generation",
    version: "N Line",
    year: "2023–Present",
    price: "₹9.32 Lakh*",
    engine: "1.0L Turbo Petrol",
    power: "120 PS",
    torque: "172 Nm",
    tag: "Performance Hatchback"
  },

  {
    name: "Hyundai IONIQ 5",
    brand: "Hyundai",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Updated",
    year: "2026–Present",
    price: "₹55.70 Lakh*",
    engine: "84 kWh Battery",
    power: "229 PS",
    torque: "350 Nm",
    tag: "Premium EV"
  },

  // =========================
  // KIA
  // =========================

  {
    name: "Kia Sonet",
    brand: "Kia",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Facelift",
    year: "2024–Present",
    price: "₹7.99 Lakh*",
    engine: "1.2L / 1.0L Turbo / 1.5L Diesel",
    power: "Up to 120 PS",
    torque: "Up to 250 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Kia Syros",
    brand: "Kia",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹9 Lakh*",
    engine: "1.0L Turbo / 1.5L Diesel",
    power: "Up to 120 PS",
    torque: "Up to 250 Nm",
    tag: "New SUV"
  },

  {
    name: "Kia Seltos",
    brand: "Kia",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "Current Generation",
    version: "All-New",
    year: "2026–Present",
    price: "₹10.99 Lakh*",
    engine: "Petrol / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "Premium SUV"
  },

  {
    name: "Kia Carens",
    brand: "Kia",
    type: "MPV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹10.60 Lakh*",
    engine: "1.5L Petrol / Turbo / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "Family MPV"
  },

  {
    name: "Kia Carens Clavis",
    brand: "Kia",
    type: "MPV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹11.50 Lakh*",
    engine: "Petrol / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "New Family Car"
  },

  {
    name: "Kia Carens Clavis EV",
    brand: "Kia",
    type: "Electric MPV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹17 Lakh*",
    engine: "Electric",
    power: "Up to 204 PS",
    torque: "Up to 283 Nm",
    tag: "Electric MPV"
  },

  {
    name: "Kia EV6",
    brand: "Kia",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Facelift",
    year: "2025–Present",
    price: "₹60 Lakh*",
    engine: "84 kWh Battery",
    power: "325 PS",
    torque: "605 Nm",
    tag: "Performance EV"
  },

  {
    name: "Kia EV9",
    brand: "Kia",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹1.30 Crore*",
    engine: "99.8 kWh Battery",
    power: "384 PS",
    torque: "700 Nm",
    tag: "Luxury EV"
  },

  {
    name: "Kia Carnival",
    brand: "Kia",
    type: "MPV",
    fuel: "Diesel",
    generation: "4th Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹63.90 Lakh*",
    engine: "2.2L Diesel",
    power: "200 PS",
    torque: "440 Nm",
    tag: "Luxury MPV"
  },

  // =========================
  // MAHINDRA
  // =========================

  {
    name: "Mahindra XUV 3XO",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Facelift",
    year: "2024–Present",
    price: "₹7.49 Lakh*",
    engine: "1.2L Turbo / 1.5L Diesel",
    power: "Up to 131 PS",
    torque: "Up to 300 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Mahindra Thar",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "2nd Generation",
    version: "Current",
    year: "2020–Present",
    price: "₹11.50 Lakh*",
    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "Up to 177 PS",
    torque: "Up to 400 Nm",
    tag: "Adventure"
  },

  {
    name: "Mahindra Thar Roxx",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹12.99 Lakh*",
    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "Up to 177 PS",
    torque: "Up to 400 Nm",
    tag: "5-Door SUV"
  },

  {
    name: "Mahindra Scorpio N",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹13.99 Lakh*",
    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "Up to 203 PS",
    torque: "Up to 400 Nm",
    tag: "Adventure SUV"
  },

  {
    name: "Mahindra XUV700",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2021–Present",
    price: "₹14.49 Lakh*",
    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "Up to 200 PS",
    torque: "Up to 450 Nm",
    tag: "Premium SUV"
  },

  {
    name: "Mahindra Bolero",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Diesel",
    generation: "1st Generation",
    version: "Updated",
    year: "2025–Present",
    price: "₹9.80 Lakh*",
    engine: "1.5L Diesel",
    power: "76 PS",
    torque: "210 Nm",
    tag: "Utility SUV"
  },

  {
    name: "Mahindra Bolero Neo",
    brand: "Mahindra",
    type: "SUV",
    fuel: "Diesel",
    generation: "1st Generation",
    version: "Current",
    year: "2021–Present",
    price: "₹9.95 Lakh*",
    engine: "1.5L Diesel",
    power: "100 PS",
    torque: "260 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Mahindra BE 6",
    brand: "Mahindra",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹18.90 Lakh*",
    engine: "59 / 79 kWh Battery",
    power: "286 PS",
    torque: "380 Nm",
    tag: "Electric SUV"
  },

  {
    name: "Mahindra XEV 9e",
    brand: "Mahindra",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹21.90 Lakh*",
    engine: "59 / 79 kWh Battery",
    power: "286 PS",
    torque: "380 Nm",
    tag: "Electric SUV Coupe"
  },

  // =========================
  // TOYOTA
  // =========================

  {
    name: "Toyota Glanza",
    brand: "Toyota",
    type: "Hatchback",
    fuel: "Petrol / CNG",
    generation: "2nd Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹6.73 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "90 PS",
    torque: "113 Nm",
    tag: "Hatchback"
  },

  {
    name: "Toyota Urban Cruiser Taisor",
    brand: "Toyota",
    type: "SUV",
    fuel: "Petrol",
    generation: "1st Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹7.49 Lakh*",
    engine: "1.2L Petrol / 1.0L Turbo",
    power: "100 PS",
    torque: "147 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Toyota Rumion",
    brand: "Toyota",
    type: "MPV",
    fuel: "Petrol / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹10.44 Lakh*",
    engine: "1.5L Petrol / CNG",
    power: "103 PS",
    torque: "137 Nm",
    tag: "Family MPV"
  },

  {
    name: "Toyota Urban Cruiser Hyryder",
    brand: "Toyota",
    type: "SUV",
    fuel: "Petrol / Hybrid / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹12.56 Lakh*",
    engine: "1.5L Petrol / Strong Hybrid",
    power: "116 PS",
    torque: "141 Nm",
    tag: "Hybrid SUV"
  },

  {
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    type: "MPV",
    fuel: "Diesel",
    generation: "2nd Generation",
    version: "Current",
    year: "2020–Present",
    price: "₹19 Lakh*",
    engine: "2.4L Diesel",
    power: "150 PS",
    torque: "343 Nm",
    tag: "Premium MPV"
  },

  {
    name: "Toyota Innova Hycross",
    brand: "Toyota",
    type: "MPV",
    fuel: "Petrol / Hybrid",
    generation: "3rd Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹18.70 Lakh*",
    engine: "2.0L Petrol / Hybrid",
    power: "186 PS",
    torque: "206 Nm",
    tag: "Hybrid MPV"
  },

  {
    name: "Toyota Hilux",
    brand: "Toyota",
    type: "Pickup",
    fuel: "Diesel",
    generation: "8th Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹31.99 Lakh*",
    engine: "2.8L Diesel",
    power: "204 PS",
    torque: "500 Nm",
    tag: "Pickup"
  },

  {
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2021–Present",
    price: "₹34.76 Lakh*",
    engine: "2.7L Petrol / 2.8L Diesel",
    power: "204 PS",
    torque: "500 Nm",
    tag: "Premium SUV"
  },

  {
    name: "Toyota Fortuner Legender",
    brand: "Toyota",
    type: "SUV",
    fuel: "Diesel",
    generation: "2nd Generation",
    version: "Legender",
    year: "2021–Present",
    price: "₹42.92 Lakh*",
    engine: "2.8L Diesel",
    power: "204 PS",
    torque: "500 Nm",
    tag: "Luxury SUV"
  },

  {
    name: "Toyota Camry",
    brand: "Toyota",
    type: "Sedan",
    fuel: "Hybrid",
    generation: "9th Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹48.00 Lakh*",
    engine: "2.5L Strong Hybrid",
    power: "230 PS",
    torque: "221 Nm",
    tag: "Premium Sedan"
  },

  {
    name: "Toyota Vellfire",
    brand: "Toyota",
    type: "MPV",
    fuel: "Petrol / Hybrid",
    generation: "4th Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹1.20 Crore*",
    engine: "2.5L Hybrid",
    power: "193 PS",
    torque: "240 Nm",
    tag: "Luxury MPV"
  },

  {
    name: "Toyota Land Cruiser 300",
    brand: "Toyota",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "300 Series",
    version: "Current",
    year: "2022–Present",
    price: "₹2.10 Crore*",
    engine: "3.3L Diesel / 3.5L Petrol",
    power: "Up to 415 PS",
    torque: "700 Nm",
    tag: "Luxury SUV"
  },

  // =========================
  // TATA
  // =========================

  {
    name: "Tata Tiago",
    brand: "Tata",
    type: "Hatchback",
    fuel: "Petrol / CNG",
    generation: "1st Generation",
    version: "Facelift",
    year: "2020–Present",
    price: "₹5 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "86 PS",
    torque: "113 Nm",
    tag: "Hatchback"
  },

  {
    name: "Tata Punch",
    brand: "Tata",
    type: "SUV",
    fuel: "Petrol / CNG / Electric",
    generation: "1st Generation",
    version: "Updated",
    year: "2021–Present",
    price: "₹6 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "88 PS",
    torque: "115 Nm",
    tag: "Popular SUV"
  },

  {
    name: "Tata Nexon",
    brand: "Tata",
    type: "SUV",
    fuel: "Petrol / Diesel / CNG",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2023–Present",
    price: "₹8 Lakh*",
    engine: "1.2L Turbo / 1.5L Diesel",
    power: "120 PS",
    torque: "260 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Tata Curvv",
    brand: "Tata",
    type: "SUV Coupe",
    fuel: "Petrol / Diesel / Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹10 Lakh*",
    engine: "1.2L Turbo / 1.5L Diesel",
    power: "125 PS",
    torque: "260 Nm",
    tag: "SUV Coupe"
  },

  {
    name: "Tata Harrier",
    brand: "Tata",
    type: "SUV",
    fuel: "Diesel",
    generation: "1st Generation",
    version: "Facelift",
    year: "2023–Present",
    price: "₹14 Lakh*",
    engine: "2.0L Diesel",
    power: "170 PS",
    torque: "350 Nm",
    tag: "Premium SUV"
  },

  {
    name: "Tata Safari",
    brand: "Tata",
    type: "SUV",
    fuel: "Diesel",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2023–Present",
    price: "₹15.50 Lakh*",
    engine: "2.0L Diesel",
    power: "170 PS",
    torque: "350 Nm",
    tag: "7-Seater SUV"
  },

  // =========================
  // MARUTI SUZUKI
  // =========================

  {
    name: "Maruti Swift",
    brand: "Maruti Suzuki",
    type: "Hatchback",
    fuel: "Petrol / CNG",
    generation: "4th Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹6 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "82 PS",
    torque: "112 Nm",
    tag: "Hatchback"
  },

  {
    name: "Maruti Baleno",
    brand: "Maruti Suzuki",
    type: "Hatchback",
    fuel: "Petrol / CNG",
    generation: "2nd Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹6.60 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "90 PS",
    torque: "113 Nm",
    tag: "Premium Hatchback"
  },

  {
    name: "Maruti Fronx",
    brand: "Maruti Suzuki",
    type: "SUV",
    fuel: "Petrol / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹7.50 Lakh*",
    engine: "1.2L Petrol / 1.0L Turbo",
    power: "100 PS",
    torque: "147 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Maruti Brezza",
    brand: "Maruti Suzuki",
    type: "SUV",
    fuel: "Petrol / CNG",
    generation: "2nd Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹8.80 Lakh*",
    engine: "1.5L Petrol / CNG",
    power: "103 PS",
    torque: "137 Nm",
    tag: "SUV"
  },

  {
    name: "Maruti Grand Vitara",
    brand: "Maruti Suzuki",
    type: "SUV",
    fuel: "Petrol / Hybrid / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹11 Lakh*",
    engine: "1.5L Petrol / Strong Hybrid",
    power: "116 PS",
    torque: "141 Nm",
    tag: "Hybrid SUV"
  },

  {
    name: "Maruti Jimny",
    brand: "Maruti Suzuki",
    type: "SUV",
    fuel: "Petrol",
    generation: "4th Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹12.30 Lakh*",
    engine: "1.5L Petrol",
    power: "105 PS",
    torque: "134 Nm",
    tag: "Off-Road SUV"
  },

  // =========================
  // BMW
  // =========================

  {
    name: "BMW 2 Series Gran Coupe",
    brand: "BMW",
    type: "Sedan",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹46 Lakh*",
    engine: "2.0L Turbo Petrol",
    power: "204 PS",
    torque: "300 Nm",
    tag: "Luxury Sedan"
  },

  {
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Sedan",
    fuel: "Petrol",
    generation: "7th Generation",
    version: "Updated",
    year: "2025–Present",
    price: "₹60 Lakh*",
    engine: "2.0L Turbo Petrol",
    power: "258 PS",
    torque: "400 Nm",
    tag: "Luxury Sedan"
  },

  {
    name: "BMW 5 Series",
    brand: "BMW",
    type: "Sedan",
    fuel: "Petrol",
    generation: "8th Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹72 Lakh*",
    engine: "2.0L Turbo Petrol",
    power: "190 PS",
    torque: "310 Nm",
    tag: "Executive Sedan"
  },

  {
    name: "BMW X1",
    brand: "BMW",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "3rd Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹50 Lakh*",
    engine: "1.5L Turbo / 2.0L Diesel",
    power: "Up to 204 PS",
    torque: "Up to 400 Nm",
    tag: "Luxury SUV"
  },

  {
    name: "BMW X3",
    brand: "BMW",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "4th Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹75 Lakh*",
    engine: "2.0L Turbo",
    power: "190 PS",
    torque: "400 Nm",
    tag: "Luxury SUV"
  },

  // =========================
  // BIKES
  // =========================

  {
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    type: "Bike",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "Updated",
    year: "2024–Present",
    price: "₹1.93 Lakh*",
    engine: "349cc",
    power: "20.2 PS",
    torque: "27 Nm",
    tag: "Popular Bike"
  },

  {
    name: "Royal Enfield Hunter 350",
    brand: "Royal Enfield",
    type: "Bike",
    fuel: "Petrol",
    generation: "1st Generation",
    version: "Updated",
    year: "2025–Present",
    price: "₹1.50 Lakh*",
    engine: "349cc",
    power: "20.2 PS",
    torque: "27 Nm",
    tag: "Roadster"
  },

  {
    name: "Royal Enfield Himalayan 450",
    brand: "Royal Enfield",
    type: "Bike",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹2.85 Lakh*",
    engine: "452cc",
    power: "40 PS",
    torque: "40 Nm",
    tag: "Adventure Bike"
  },

  {
    name: "KTM Duke 390",
    brand: "KTM",
    type: "Bike",
    fuel: "Petrol",
    generation: "3rd Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹3 Lakh*",
    engine: "399cc",
    power: "46 PS",
    torque: "39 Nm",
    tag: "Performance"
  },

  {
    name: "Yamaha R15 V4",
    brand: "Yamaha",
    type: "Bike",
    fuel: "Petrol",
    generation: "4th Generation",
    version: "Current",
    year: "2021–Present",
    price: "₹1.83 Lakh*",
    engine: "155cc",
    power: "18.4 PS",
    torque: "14.2 Nm",
    tag: "Sports Bike"
  },

  {
    name: "Yamaha MT-15 V2",
    brand: "Yamaha",
    type: "Bike",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "Updated",
    year: "2025–Present",
    price: "₹1.70 Lakh*",
    engine: "155cc",
    power: "18.4 PS",
    torque: "14.1 Nm",
    tag: "Street Bike"
  },

  {
    name: "TVS Apache RTR 310",
    brand: "TVS",
    type: "Bike",
    fuel: "Petrol",
    generation: "1st Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹2.50 Lakh*",
    engine: "312cc",
    power: "35.6 PS",
    torque: "28.7 Nm",
    tag: "Performance"
  },

  {
    name: "Bajaj Pulsar NS200",
    brand: "Bajaj",
    type: "Bike",
    fuel: "Petrol",
    generation: "1st Generation",
    version: "Updated",
    year: "2024–Present",
    price: "₹1.60 Lakh*",
    engine: "199cc",
    power: "24.5 PS",
    torque: "18.74 Nm",
    tag: "Street Bike"
  },

  {
    name: "Honda CB350",
    brand: "Honda",
    type: "Bike",
    fuel: "Petrol",
    generation: "1st Generation",
    version: "Updated",
    year: "2024–Present",
    price: "₹2.00 Lakh*",
    engine: "348cc",
    power: "21 PS",
    torque: "30 Nm",
    tag: "Roadster"
  },

  {
    name: "Hero Xtreme 125R",
    brand: "Hero",
    type: "Bike",
    fuel: "Petrol",
    generation: "1st Generation",
    version: "Current",
    year: "2024–Present",
    price: "₹1 Lakh*",
    engine: "125cc",
    power: "11.5 PS",
    torque: "10.5 Nm",
    tag: "Street Bike"
  }
];


// ============================================================
// IMAGE SYSTEM
// Uses Wikimedia Commons search so we don't hard-code
// random images from unrelated vehicles.
// ============================================================

const imageCache = {};

async function getVehicleImage(vehicle) {

  const cacheKey = vehicle.name;

  if (imageCache[cacheKey]) {
    return imageCache[cacheKey];
  }

  const query =
    `${vehicle.brand} ${vehicle.name} car motorcycle`;

  const api =
    `https://commons.wikimedia.org/w/api.php` +
    `?action=query` +
    `&generator=search` +
    `&gsrsearch=${encodeURIComponent(query)}` +
    `&gsrnamespace=6` +
    `&gsrlimit=10` +
    `&prop=imageinfo` +
    `&iiprop=url` +
    `&iiurlwidth=1000` +
    `&format=json` +
    `&origin=*`;

  try {

    const response = await fetch(api);

    const data = await response.json();

    if (data.query && data.query.pages) {

      const pages =
        Object.values(data.query.pages);

      // Prefer files whose title contains the vehicle name.
      const vehicleWords =
        vehicle.name
          .toLowerCase()
          .replace(/[^a-z0-9 ]/g, "")
          .split(" ")
          .filter(word => word.length > 2);

      let best =
        pages.find(page => {

          const title =
            page.title.toLowerCase();

          return vehicleWords.some(word =>
            title.includes(word)
          );

        });

      if (!best) {
        best = pages[0];
      }

      if (
        best &&
        best.imageinfo &&
        best.imageinfo[0]
      ) {

        const image =
          best.imageinfo[0].thumburl ||
          best.imageinfo[0].url;

        imageCache[cacheKey] = image;

        return image;
      }
    }

  } catch (error) {

    console.log(
      "Image search failed:",
      vehicle.name
    );

  }

  // Safe fallback — never shows a random different car.
  return createPlaceholder(vehicle);
}


// ============================================================
// PLACEHOLDER
// ============================================================

function createPlaceholder(vehicle) {

  const text =
    encodeURIComponent(
      `${vehicle.brand} ${vehicle.name}`
    );

  return (
    `https://placehold.co/1000x650/111111/ffffff` +
    `?text=${text}`
  );
}


// ============================================================
// VEHICLE CARD
// ============================================================

function vehicleCard(vehicle) {

  return `
    <article class="vehicle-card">

      <div class="vehicle-image">

        <img
          class="vehicle-photo"
          data-vehicle="${vehicle.name}"
          src="${createPlaceholder(vehicle)}"
          alt="${vehicle.name}"
          loading="lazy"
        >

      </div>

      <div class="vehicle-info">

        <span class="vehicle-tag">
          ${vehicle.tag}
        </span>

        <h3>${vehicle.name}</h3>

        <p>
          <strong>Brand:</strong>
          ${vehicle.brand}
        </p>

        <p>
          <strong>Generation:</strong>
          ${vehicle.generation}
        </p>

        <p>
          <strong>Version:</strong>
          ${vehicle.version}
        </p>

        <p>
          <strong>Year:</strong>
          ${vehicle.year}
        </p>

        <p>
          <strong>Fuel:</strong>
          ${vehicle.fuel}
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
          onclick='showDetails(${JSON.stringify(vehicle)})'
        >
          View Details
        </button>

      </div>

    </article>
  `;
}


// ============================================================
// LOAD REAL IMAGES
// ============================================================

async function loadImages() {

  const images =
    document.querySelectorAll(
      ".vehicle-photo"
    );

  for (const img of images) {

    const vehicleName =
      img.dataset.vehicle;

    const vehicle =
      vehicles.find(
        item => item.name === vehicleName
      );

    if (!vehicle) continue;

    const image =
      await getVehicleImage(vehicle);

    img.src = image;
  }
}


// ============================================================
// DISPLAY CARS
// ============================================================

function displayVehicles(list = vehicles) {

  const grid =
    document.getElementById(
      "vehicleGrid"
    );

  const cars =
    list.filter(vehicle =>
      vehicle.type !== "Bike"
    );

  if (!cars.length) {

    grid.innerHTML =
      "<p>No cars found.</p>";

    return;
  }

  grid.innerHTML =
    cars.map(vehicleCard).join("");

  loadImages();
}


// ============================================================
// DISPLAY BIKES
// ============================================================

function displayBikes(list = vehicles) {

  const grid =
    document.getElementById(
      "bikeGrid"
    );

  const bikes =
    list.filter(vehicle =>
      vehicle.type === "Bike"
    );

  if (!bikes.length) {

    grid.innerHTML =
      "<p>No bikes found.</p>";

    return;
  }

  grid.innerHTML =
    bikes.map(vehicleCard).join("");

  loadImages();
}


// ============================================================
// SEARCH
// ============================================================

function searchVehicles() {

  const input =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase()
      .trim();

  if (!input) {

    displayVehicles();
    displayBikes();

    return;
  }

  const results =
    vehicles.filter(vehicle => {

      const searchableText = [

        vehicle.name,
        vehicle.brand,
        vehicle.type,
        vehicle.fuel,
        vehicle.generation,
        vehicle.version,
        vehicle.year,
        vehicle.tag

      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(input);

    });

  displayVehicles(results);
  displayBikes(results);

  document
    .getElementById("cars")
    .scrollIntoView({
      behavior: "smooth"
    });
}


// ============================================================
// QUICK SEARCH
// ============================================================

function quickSearch(text) {

  document
    .getElementById("searchInput")
    .value = text;

  searchVehicles();
}


// ============================================================
// BRAND FILTER
// ============================================================

function filterByBrand(brand) {

  const results =
    vehicles.filter(vehicle =>
      vehicle.brand.toLowerCase() ===
      brand.toLowerCase()
    );

  displayVehicles(results);
  displayBikes(results);

  document
    .getElementById("cars")
    .scrollIntoView({
      behavior: "smooth"
    });
}


// ============================================================
// AUTOMATIC BRAND BUTTONS
// ============================================================

function createBrandButtons() {

  const container =
    document.querySelector(
      ".brand-grid"
    );

  if (!container) return;

  const brands =
    [...new Set(
      vehicles.map(vehicle =>
        vehicle.brand
      )
    )];

  container.innerHTML =
    brands.map(brand => `
      <button
        onclick="filterByBrand('${brand}')"
      >
        ${brand}
      </button>
    `).join("");
}


// ============================================================
// DETAILS
// ============================================================

function showDetails(vehicle) {

  const box =
    document.getElementById(
      "compareBox"
    );

  box.innerHTML = `

    <div class="details-panel">

      <div class="details-image">
        <img
          src="${createPlaceholder(vehicle)}"
          alt="${vehicle.name}"
          id="detailsVehicleImage"
        >
      </div>

      <h3>${vehicle.name}</h3>

      <p>
        <strong>Brand:</strong>
        ${vehicle.brand}
      </p>

      <p>
        <strong>Type:</strong>
        ${vehicle.type}
      </p>

      <p>
        <strong>Generation:</strong>
        ${vehicle.generation}
      </p>

      <p>
        <strong>Version:</strong>
        ${vehicle.version}
      </p>

      <p>
        <strong>Model Year:</strong>
        ${vehicle.year}
      </p>

      <p>
        <strong>Fuel:</strong>
        ${vehicle.fuel}
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

    </div>
  `;

  document
    .getElementById("compare")
    .scrollIntoView({
      behavior: "smooth"
    });

  getVehicleImage(vehicle)
    .then(image => {

      const detailsImage =
        document.getElementById(
          "detailsVehicleImage"
        );

      if (detailsImage) {
        detailsImage.src = image;
      }

    });
}


// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    displayVehicles();
    displayBikes();

    createBrandButtons();

    const searchInput =
      document.getElementById(
        "searchInput"
      );

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

  }
);
