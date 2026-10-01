// ============================================================
// CARGENIX VEHICLE DATABASE
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
    price: "₹6.20 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "Up to 83 PS",
    torque: "Up to 114 Nm",
    tag: "Compact SUV"
  },
  
  {
    name: "Hyundai Venue",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol",
    generation: "2nd Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹7.89 Lakh*",
    engine: "1.0L Turbo / 1.2L Petrol",
    power: "Up to 120 PS",
    torque: "Up to 172 Nm",
    tag: "Compact SUV"
  },

  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2024–Present",
    price: "₹11.10 Lakh*",
    engine: "1.5L Petrol / Diesel",
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
    price: "₹16.93 Lakh*",
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
    price: "₹17.99 Lakh*",
    engine: "42 kWh / 51.4 kWh",
    power: "Up to 171 PS",
    torque: "Up to 255 Nm",
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
    price: "₹14.99 Lakh*",
    engine: "1.5L Turbo Petrol / 1.5L Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "7-Seater SUV"
  },

  {
    name: "Hyundai Verna",
    brand: "Hyundai",
    type: "Sedan",
    fuel: "Petrol",
    generation: "6th Generation",
    version: "Current",
    year: "2023–Present",
    price: "₹11.07 Lakh*",
    engine: "1.5L Petrol / 1.5L Turbo",
    power: "Up to 160 PS",
    torque: "253 Nm",
    tag: "Sedan"
  },

  {
    name: "Hyundai i20",
    brand: "Hyundai",
    type: "Hatchback",
    fuel: "Petrol",
    generation: "3rd Generation",
    version: "Facelift",
    year: "2023–Present",
    price: "₹7.50 Lakh*",
    engine: "1.2L Petrol",
    power: "83 PS",
    torque: "114 Nm",
    tag: "Hatchback"
  },

  {
    name: "Hyundai i20 N Line",
    brand: "Hyundai",
    type: "Hatchback",
    fuel: "Petrol",
    generation: "3rd Generation",
    version: "N Line",
    year: "2023–Present",
    price: "₹9.99 Lakh*",
    engine: "1.0L Turbo Petrol",
    power: "120 PS",
    torque: "172 Nm",
    tag: "Performance Hatchback"
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
    price: "₹7.43 Lakh*",
    engine: "1.2L Petrol / 1.0L Turbo",
    power: "Up to 100 PS",
    torque: "Up to 147 Nm",
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
    price: "₹9.79 Lakh*",
    engine: "1.5L Petrol / CNG",
    power: "103 PS",
    torque: "137 Nm",
    tag: "MPV"
  },

  {
    name: "Toyota Urban Cruiser Hyryder",
    brand: "Toyota",
    type: "SUV",
    fuel: "Petrol / Hybrid / CNG",
    generation: "1st Generation",
    version: "Current",
    year: "2022–Present",
    price: "₹12.82 Lakh*",
    engine: "1.5L Petrol / Strong Hybrid",
    power: "Up to 116 PS",
    torque: "141 Nm",
    tag: "Hybrid SUV"
  },

  {
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    type: "MPV",
    fuel: "Diesel",
    generation: "2nd Generation",
    version: "Facelift",
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
    power: "Up to 186 PS",
    torque: "206 Nm",
    tag: "Hybrid MPV"
  },

  {
    name: "Toyota Hilux",
    brand: "Toyota",
    type: "Pickup",
    fuel: "Diesel",
    generation: "8th Generation",
    version: "Facelift",
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
    power: "Up to 204 PS",
    torque: "Up to 500 Nm",
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
    price: "₹48.69 Lakh*",
    engine: "2.5L Strong Hybrid",
    power: "Up to 230 PS",
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
    power: "Up to 193 PS",
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
    price: "₹2.18 Crore*",
    engine: "3.3L Diesel / 3.5L Petrol",
    power: "Up to 415 PS",
    torque: "700 Nm",
    tag: "Luxury SUV"
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
    engine: "1.0L Turbo / 1.2L Petrol / 1.5L Diesel",
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
    version: "2026 Update",
    year: "2025–Present",
    price: "₹9 Lakh*",
    engine: "Petrol / Diesel",
    power: "Up to 120 PS",
    torque: "Up to 250 Nm",
    tag: "New SUV"
  },

  {
    name: "Kia Seltos",
    brand: "Kia",
    type: "SUV",
    fuel: "Petrol / Diesel",
    generation: "3rd Generation",
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
    type: "SUV / MPV",
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
    power: "Up to 325 PS",
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
    power: "Up to 384 PS",
    torque: "700 Nm",
    tag: "Luxury EV"
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
    name: "Mahindra BE 6",
    brand: "Mahindra",
    type: "Electric SUV",
    fuel: "Electric",
    generation: "1st Generation",
    version: "Current",
    year: "2025–Present",
    price: "₹18.90 Lakh*",
    engine: "59 / 79 kWh Battery",
    power: "Up to 286 PS",
    torque: "380 Nm",
    tag: "Electric SUV"
  },

  // =========================
  // TATA
  // =========================

  {
    name: "Tata Punch",
    brand: "Tata",
    type: "SUV",
    fuel: "Petrol / CNG / Electric",
    generation: "1st Generation",
    version: "Facelift",
    year: "2024–Present",
    price: "₹6 Lakh*",
    engine: "1.2L Petrol / CNG",
    power: "Up to 88 PS",
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
    power: "Up to 120 PS",
    torque: "Up to 260 Nm",
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
    power: "Up to 125 PS",
    torque: "Up to 260 Nm",
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
    version: "Facelift",
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
    power: "Up to 100 PS",
    torque: "Up to 147 Nm",
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
    power: "Up to 116 PS",
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
  }
];


// ============================================================
// IMAGE SYSTEM
// ============================================================

// Until we add verified model-specific photos,
// NEVER show a random car photo for a different model.

function vehicleImage(vehicle) {
  const text = encodeURIComponent(
    `${vehicle.brand} ${vehicle.name}`
  );

  return `https://placehold.co/1000x650/png?text=${text}`;
}


// ============================================================
// VEHICLE CARD
// ============================================================

function vehicleCard(vehicle) {

  return `
    <article class="vehicle-card">

      <div class="vehicle-image">
        <img
          src="${vehicleImage(vehicle)}"
          alt="${vehicle.name}"
          loading="lazy"
        >
      </div>

      <div class="vehicle-info">

        <span class="vehicle-tag">
          ${vehicle.tag}
        </span>

        <h3>${vehicle.name}</h3>

        <p><strong>Brand:</strong> ${vehicle.brand}</p>

        <p><strong>Generation:</strong>
          ${vehicle.generation}
        </p>

        <p><strong>Version:</strong>
          ${vehicle.version}
        </p>

        <p><strong>Year:</strong>
          ${vehicle.year}
        </p>

        <p><strong>Fuel:</strong>
          ${vehicle.fuel}
        </p>

        <p><strong>Engine:</strong>
          ${vehicle.engine}
        </p>

        <p><strong>Power:</strong>
          ${vehicle.power}
        </p>

        <p><strong>Torque:</strong>
          ${vehicle.torque}
        </p>

        <p><strong>Price:</strong>
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
// DISPLAY CARS
// ============================================================

function displayVehicles(list = vehicles) {

  const grid = document.getElementById("vehicleGrid");

  const cars = list.filter(vehicle =>
    vehicle.type !== "Bike"
  );

  if (cars.length === 0) {

    grid.innerHTML = `
      <p class="no-results">
        No cars found.
      </p>
    `;

    return;
  }

  grid.innerHTML =
    cars.map(vehicleCard).join("");
}


// ============================================================
// DISPLAY BIKES
// ============================================================

function displayBikes(list = vehicles) {

  const grid = document.getElementById("bikeGrid");

  const bikeList = list.filter(vehicle =>
    vehicle.type === "Bike"
  );

  if (bikeList.length === 0) {

    grid.innerHTML = `
      <p class="no-results">
        No bikes found.
      </p>
    `;

    return;
  }

  grid.innerHTML =
    bikeList.map(vehicleCard).join("");
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

  const results = vehicles.filter(vehicle => {

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

  const results = vehicles.filter(vehicle =>
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
// DETAILS
// ============================================================

function showDetails(vehicle) {

  const box =
    document.getElementById("compareBox");

  box.innerHTML = `

    <div class="details-panel">

      <img
        src="${vehicleImage(vehicle)}"
        alt="${vehicle.name}"
      >

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
}


// ============================================================
// BRAND BUTTONS
// ============================================================

function setupBrandButtons() {

  const buttons =
    document.querySelectorAll(
      ".brand-grid button"
    );

  buttons.forEach(button => {

    button.onclick = () => {

      filterByBrand(
        button.textContent.trim()
      );

    };

  });
}


// ============================================================
// ENTER KEY SEARCH
// ============================================================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    displayVehicles();
    displayBikes();

    setupBrandButtons();

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
