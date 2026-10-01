/* =========================================================
   CARGENIX - AUTOMOTIVE DATABASE
   Latest-model structure
   ========================================================= */

const vehicles = [

  /* =========================
     HYUNDAI
     ========================= */

  {
    id: "hyundai-creta",
    name: "Hyundai Creta",
    brand: "Hyundai",
    type: "SUV",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2026",
    price: "₹11.11 Lakh*",

    fuel: ["Petrol", "Diesel"],
    transmission: ["Manual", "Automatic"],
    seating: "5 Seater",

    engine: [
      "1.5L Petrol",
      "1.5L Turbo Petrol",
      "1.5L Diesel"
    ],

    power: "Up to 160 PS",
    torque: "Up to 253 Nm",

    colours: [
      "Atlas White",
      "Titan Grey",
      "Abyss Black",
      "Fiery Red",
      "Robust Emerald Pearl"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Ventilated Seats",
      "Digital Instrument Cluster",
      "Large Infotainment Display"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESC",
      "ADAS",
      "Hill Assist",
      "360° Camera"
    ],

    tag: "Popular SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "hyundai-creta-n-line",
    name: "Hyundai Creta N Line",
    brand: "Hyundai",
    type: "SUV",
    generation: "2nd Generation",
    version: "N Line",
    year: "2026",
    price: "₹16.93 Lakh*",

    fuel: ["Petrol"],
    transmission: ["Manual", "Automatic"],
    seating: "5 Seater",

    engine: [
      "1.5L Turbo Petrol"
    ],

    power: "160 PS",
    torque: "253 Nm",

    colours: [
      "Thunder Blue",
      "Shadow Grey",
      "Atlas White",
      "Titan Grey"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Sporty Interior",
      "N Line Styling"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESC",
      "ADAS",
      "Hill Assist"
    ],

    tag: "Performance SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  /* =========================
     MAHINDRA
     ========================= */

  {
    id: "mahindra-xuv-7xo",
    name: "Mahindra XUV 7XO",
    brand: "Mahindra",
    type: "SUV",
    generation: "Latest Generation",
    version: "Current",
    year: "2026",
    price: "₹13.66 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "6 / 7 Seater",

    engine: [
      "2.0L Turbo Petrol",
      "2.2L Diesel"
    ],

    power: "Up to 230 PS",
    torque: "Up to 450 Nm",

    colours: [
      "Everest White",
      "Nebula Blue",
      "Dazzling Silver",
      "Deep Forest",
      "Ruby Red",
      "Stealth Black"
    ],

    variants: [
      "AX3",
      "AX5",
      "AX7",
      "AX7T",
      "AX7L"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Digital Instrument Cluster",
      "Large Touchscreen",
      "Ventilated Seats",
      "Connected Car Technology"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESC",
      "ADAS",
      "360° Camera",
      "Hill Hold",
      "Electronic Parking Brake"
    ],

    tag: "Latest SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "mahindra-thar",
    name: "Mahindra Thar",
    brand: "Mahindra",
    type: "SUV",
    generation: "2nd Generation",
    version: "Current",
    year: "2026",
    price: "₹11.50 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "4 Seater",

    engine: [
      "2.0L Turbo Petrol",
      "2.2L Diesel"
    ],

    power: "Up to 177 PS",
    torque: "Up to 400 Nm",

    colours: [
      "Everest White",
      "Red Rage",
      "Stealth Black",
      "Desert Fury",
      "Rocky Beige"
    ],

    features: [
      "4x4",
      "Touchscreen Infotainment",
      "Cruise Control",
      "Roof Options",
      "Off-road Modes"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESC",
      "Hill Hold",
      "Hill Descent"
    ],

    tag: "Adventure",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "mahindra-thar-roxx",
    name: "Mahindra Thar Roxx",
    brand: "Mahindra",
    type: "SUV",
    generation: "1st Generation",
    version: "Current",
    year: "2026",
    price: "₹12.99 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    engine: [
      "2.0L Turbo Petrol",
      "2.2L Diesel"
    ],

    power: "Up to 177 PS",
    torque: "Up to 400 Nm",

    colours: [
      "Stealth Black",
      "Everest White",
      "Tango Red",
      "Battleship Grey"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Large Touchscreen",
      "Premium Interior"
    ],

    safety: [
      "6 Airbags",
      "ADAS",
      "360° Camera",
      "ESC",
      "Hill Hold"
    ],

    tag: "5-Door SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  /* =========================
     KIA
     ========================= */

  {
    id: "kia-seltos",
    name: "Kia Seltos",
    brand: "Kia",
    type: "SUV",
    generation: "2nd Generation",
    version: "Facelift",
    year: "2026",
    price: "₹11.19 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    engine: [
      "1.5L Petrol",
      "1.5L Turbo Petrol",
      "1.5L Diesel"
    ],

    power: "Up to 160 PS",
    torque: "Up to 253 Nm",

    colours: [
      "Glacier White Pearl",
      "Aurora Black Pearl",
      "Intense Red",
      "Imperial Blue",
      "Gravity Grey"
    ],

    features: [
      "Panoramic Sunroof",
      "ADAS",
      "360° Camera",
      "Ventilated Seats",
      "Digital Display"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESC",
      "ADAS",
      "360° Camera"
    ],

    tag: "Premium SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "kia-sonet",
    name: "Kia Sonet",
    brand: "Kia",
    type: "Compact SUV",
    generation: "1st Generation",
    version: "Facelift",
    year: "2026",
    price: "₹7.40 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    engine: [
      "1.0L Turbo Petrol",
      "1.2L Petrol",
      "1.5L Diesel"
    ],

    power: "Up to 120 PS",
    torque: "Up to 250 Nm",

    colours: [
      "Intense Red",
      "Glacier White",
      "Aurora Black",
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
      "ABS",
      "ESC",
      "Hill Assist"
    ],

    tag: "Compact SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  /* =========================
     TOYOTA
     ========================= */

  {
    id: "toyota-glanza",
    name: "Toyota Glanza",
    brand: "Toyota",
    type: "Hatchback",
    generation: "1st Generation",
    version: "Current",
    year: "2026",
    price: "₹6.90 Lakh*",

    fuel: ["Petrol", "CNG"],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    engine: [
      "1.2L Petrol",
      "1.2L CNG"
    ],

    power: "90 PS",
    torque: "113 Nm",

    colours: [
      "Sportin Red",
      "Cafe White",
      "Gaming Grey",
      "Insta Blue",
      "Enticing Silver"
    ],

    features: [
      "Infotainment System",
      "Connected Technology",
      "Rear Camera",
      "Automatic Climate Control"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESP",
      "Hill Hold"
    ],

    tag: "Hatchback",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "toyota-urban-cruiser-hyryder",
    name: "Toyota Urban Cruiser Hyryder",
    brand: "Toyota",
    type: "SUV",
    generation: "1st Generation",
    version: "Current",
    year: "2026",
    price: "₹11.34 Lakh*",

    fuel: [
      "Petrol",
      "Hybrid",
      "CNG"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "5 Seater",

    engine: [
      "1.5L Petrol",
      "1.5L Strong Hybrid",
      "1.5L CNG"
    ],

    power: "Up to 116 PS",
    torque: "Up to 141 Nm",

    colours: [
      "Cafe White",
      "Gaming Grey",
      "Sportin Red",
      "Enticing Silver",
      "Midnight Black"
    ],

    features: [
      "Panoramic Sunroof",
      "360° Camera",
      "Hybrid Technology",
      "Connected Car",
      "All Wheel Drive"
    ],

    safety: [
      "6 Airbags",
      "ABS",
      "ESP",
      "Hill Hold",
      "360° Camera"
    ],

    tag: "Hybrid SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "toyota-innova-hycross",
    name: "Toyota Innova HyCross",
    brand: "Toyota",
    type: "MPV",
    generation: "3rd Generation",
    version: "Current",
    year: "2026",
    price: "₹19.22 Lakh*",

    fuel: [
      "Petrol",
      "Hybrid"
    ],

    transmission: [
      "Automatic"
    ],

    seating: "7 / 8 Seater",

    engine: [
      "2.0L Petrol",
      "2.0L Strong Hybrid"
    ],

    power: "Up to 186 PS",
    torque: "Up to 206 Nm",

    colours: [
      "Platinum White Pearl",
      "Super White",
      "Silver Metallic",
      "Attitude Mica Black"
    ],

    features: [
      "Panoramic Sunroof",
      "Powered Seats",
      "ADAS",
      "360° Camera",
      "Premium Captain Seats"
    ],

    safety: [
      "6 Airbags",
      "ADAS",
      "ABS",
      "ESC",
      "360° Camera"
    ],

    tag: "Premium MPV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  {
    id: "toyota-fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    generation: "2nd Generation",
    version: "Current",
    year: "2026",
    price: "₹33.65 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Manual",
      "Automatic"
    ],

    seating: "7 Seater",

    engine: [
      "2.7L Petrol",
      "2.8L Diesel"
    ],

    power: "Up to 204 PS",
    torque: "Up to 500 Nm",

    colours: [
      "White Pearl Crystal Shine",
      "Silver Metallic",
      "Attitude Black",
      "Emotional Red"
    ],

    features: [
      "4x4",
      "Ventilated Seats",
      "Connected Technology",
      "Cruise Control",
      "Large Infotainment Display"
    ],

    safety: [
      "7 Airbags",
      "ABS",
      "ESC",
      "Hill Assist",
      "Traction Control"
    ],

    tag: "Premium SUV",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  },


  /* =========================
     BMW
     ========================= */

  {
    id: "bmw-3-series",
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Sedan",
    generation: "7th Generation",
    version: "Current",
    year: "2026",
    price: "₹60 Lakh*",

    fuel: [
      "Petrol",
      "Diesel"
    ],

    transmission: [
      "Automatic"
    ],

    seating: "5 Seater",

    engine: [
      "2.0L Turbo Petrol",
      "2.0L Diesel"
    ],

    power: "Up to 258 PS",
    torque: "400 Nm",

    colours: [
      "Alpine White",
      "Black Sapphire",
      "Skyscraper Grey",
      "Portimao Blue"
    ],

    features: [
      "Digital Cockpit",
      "Connected Technology",
      "Premium Audio",
      "Adaptive Cruise Control",
      "Wireless Charging"
    ],

    safety: [
      "Multiple Airbags",
      "ABS",
      "ESC",
      "Parking Assistant",
      "Driving Assistance"
    ],

    tag: "Luxury Sedan",

    images: {
      exterior: [],
      interior: [],
      colour: [],
      gallery: [],
      view360: ""
    }
  }

];


/* =========================================================
   BIKES
   ========================================================= */

const bikes = [

  {
    id: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    type: "Bike",
    year: "2026",
    price: "₹1.93 Lakh*",
    engine: "349cc",
    power: "20.2 PS",
    torque: "27 Nm",
    fuel: "Petrol",
    transmission: "5-Speed",
    tag: "Popular Bike",

    colours: [
      "Black",
      "Red",
      "Green",
      "Blue",
      "Chrome"
    ],

    images: {
      exterior: [],
      gallery: [],
      view360: ""
    }
  },

  {
    id: "ktm-duke-390",
    name: "KTM Duke 390",
    brand: "KTM",
    type: "Bike",
    year: "2026",
    price: "₹3.00 Lakh*",
    engine: "399cc",
    power: "46 PS",
    torque: "39 Nm",
    fuel: "Petrol",
    transmission: "6-Speed",
    tag: "Performance",

    colours: [
      "Orange",
      "Black",
      "White"
    ],

    images: {
      exterior: [],
      gallery: [],
      view360: ""
    }
  },

  {
    id: "yamaha-r15",
    name: "Yamaha R15",
    brand: "Yamaha",
    type: "Bike",
    year: "2026",
    price: "₹1.83 Lakh*",
    engine: "155cc",
    power: "18.4 PS",
    torque: "14.2 Nm",
    fuel: "Petrol",
    transmission: "6-Speed",
    tag: "Sports Bike",

    colours: [
      "Racing Blue",
      "Black",
      "Red"
    ],

    images: {
      exterior: [],
      gallery: [],
      view360: ""
    }
  }

];


/* =========================================================
   ALL VEHICLES
   ========================================================= */

const allVehicles = [...vehicles, ...bikes];


/* =========================================================
   VEHICLE CARD
   ========================================================= */

function vehicleCard(vehicle) {

  const image =
    vehicle.images?.exterior?.[0] ||
    vehicle.images?.gallery?.[0] ||
    "";

  return `
    <article class="vehicle-card">

      <div class="vehicle-image">

        ${
          image
            ? `<img src="${image}" alt="${vehicle.name}" loading="lazy">`
            : `
              <div class="image-placeholder">
                <span>${vehicle.brand}</span>
                <strong>${vehicle.name}</strong>
                <small>Vehicle image</small>
              </div>
            `
        }

      </div>

      <div class="vehicle-info">

        <span class="vehicle-tag">
          ${vehicle.tag || vehicle.type}
        </span>

        <h3>${vehicle.name}</h3>

        <p><strong>Brand:</strong> ${vehicle.brand}</p>

        ${
          vehicle.generation
            ? `<p><strong>Generation:</strong> ${vehicle.generation}</p>`
            : ""
        }

        ${
          vehicle.version
            ? `<p><strong>Version:</strong> ${vehicle.version}</p>`
            : ""
        }

        <p><strong>Engine:</strong>
          ${
            Array.isArray(vehicle.engine)
              ? vehicle.engine.join(" / ")
              : vehicle.engine
          }
        </p>

        <p><strong>Power:</strong> ${vehicle.power}</p>

        <p><strong>Torque:</strong> ${vehicle.torque}</p>

        <p><strong>Price:</strong> ${vehicle.price}</p>

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
        <h3>No cars found</h3>
        <p>Try another brand, model or vehicle type.</p>
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

  const input =
    document
      .getElementById("searchInput")
      ?.value
      .toLowerCase()
      .trim();

  if (!input) {

    displayVehicles();
    displayBikes();

    return;
  }

  const results = allVehicles.filter(vehicle => {

    const searchableText = [

      vehicle.name,
      vehicle.brand,
      vehicle.type,
      vehicle.generation,
      vehicle.version,
      vehicle.year,

      ...(Array.isArray(vehicle.fuel)
        ? vehicle.fuel
        : [vehicle.fuel || ""]),

      ...(Array.isArray(vehicle.engine)
        ? vehicle.engine
        : [vehicle.engine || ""])

    ]
      .join(" ")
      .toLowerCase();

    return searchableText.includes(input);
  });


  const carResults =
    results.filter(vehicle =>
      vehicles.includes(vehicle)
    );

  const bikeResults =
    results.filter(vehicle =>
      bikes.includes(vehicle)
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

function filterBrand(brand) {

  const selected =
    brand.toLowerCase();

  const carResults =
    vehicles.filter(vehicle =>
      vehicle.brand.toLowerCase() === selected
    );

  const bikeResults =
    bikes.filter(vehicle =>
      vehicle.brand.toLowerCase() === selected
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
   VEHICLE DETAILS
   ========================================================= */

function showDetails(vehicleId) {

  const vehicle =
    allVehicles.find(
      item => item.id === vehicleId
    );

  if (!vehicle) return;


  const box =
    document.getElementById("compareBox");

  if (!box) return;


  const engine =
    Array.isArray(vehicle.engine)
      ? vehicle.engine.join(" / ")
      : vehicle.engine;


  const fuel =
    Array.isArray(vehicle.fuel)
      ? vehicle.fuel.join(" / ")
      : vehicle.fuel;


  const transmission =
    Array.isArray(vehicle.transmission)
      ? vehicle.transmission.join(" / ")
      : vehicle.transmission;


  const colours =
    vehicle.colours?.length
      ? vehicle.colours
          .map(
            colour =>
              `<span class="colour-option">${colour}</span>`
          )
          .join("")
      : "Not available";


  const features =
    vehicle.features?.length
      ? vehicle.features
          .map(
            feature => `<li>${feature}</li>`
          )
          .join("")
      : "<li>Information coming soon</li>";


  const safety =
    vehicle.safety?.length
      ? vehicle.safety
          .map(
            item => `<li>${item}</li>`
          )
          .join("")
      : "<li>Information coming soon</li>";


  const variants =
    vehicle.variants?.length
      ? `
        <div class="detail-section">
          <h4>Variants</h4>
          <div class="variant-list">
            ${vehicle.variants
              .map(
                variant =>
                  `<span>${variant}</span>`
              )
              .join("")}
          </div>
        </div>
      `
      : "";


  box.innerHTML = `

    <div class="vehicle-detail">

      <span class="vehicle-tag">
        ${vehicle.tag || vehicle.type}
      </span>

      <h2>${vehicle.name}</h2>

      <p class="detail-subtitle">
        ${vehicle.brand} • ${vehicle.type}
      </p>

      <div class="detail-grid">

        <div>
          <strong>Generation</strong>
          <span>${vehicle.generation || "Current"}</span>
        </div>

        <div>
          <strong>Version</strong>
          <span>${vehicle.version || "Current"}</span>
        </div>

        <div>
          <strong>Year</strong>
          <span>${vehicle.year || "2026"}</span>
        </div>

        <div>
          <strong>Price</strong>
          <span>${vehicle.price}</span>
        </div>

        <div>
          <strong>Fuel</strong>
          <span>${fuel}</span>
        </div>

        <div>
          <strong>Transmission</strong>
          <span>${transmission}</span>
        </div>

        <div>
          <strong>Engine</strong>
          <span>${engine}</span>
        </div>

        <div>
          <strong>Power</strong>
          <span>${vehicle.power}</span>
        </div>

        <div>
          <strong>Torque</strong>
          <span>${vehicle.torque}</span>
        </div>

        <div>
          <strong>Seating</strong>
          <span>${vehicle.seating || "—"}</span>
        </div>

      </div>


      ${variants}


      <div class="detail-section">

        <h4>Available Colours</h4>

        <div class="colour-list">
          ${colours}
        </div>

      </div>


      <div class="detail-section">

        <h4>Key Features</h4>

        <ul>
          ${features}
        </ul>

      </div>


      <div class="detail-section">

        <h4>Safety</h4>

        <ul>
          ${safety}
        </ul>

      </div>


      <div class="detail-section media-section">

        <button onclick="showGallery('${vehicle.id}', 'exterior')">
          Exterior
        </button>

        <button onclick="showGallery('${vehicle.id}', 'interior')">
          Interior
        </button>

        <button onclick="showGallery('${vehicle.id}', 'colour')">
          Colours
        </button>

        <button onclick="show360('${vehicle.id}')">
          360° View
        </button>

      </div>

    </div>

  `;


  document
    .getElementById("compare")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}


/* =========================================================
   GALLERY
   ========================================================= */

function showGallery(vehicleId, category) {

  const vehicle =
    allVehicles.find(
      item => item.id === vehicleId
    );

  if (!vehicle) return;

  const images =
    vehicle.images?.[category] || [];


  if (!images.length) {

    alert(
      `${category.toUpperCase()} images for ${vehicle.name} will be added here.`
    );

    return;
  }


  const box =
    document.getElementById("compareBox");

  box.innerHTML = `

    <div class="gallery-view">

      <h2>${vehicle.name}</h2>

      <h3>${category.toUpperCase()}</h3>

      <div class="gallery-grid">

        ${images
          .map(
            image => `
              <img
                src="${image}"
                alt="${vehicle.name}"
                loading="lazy"
              >
            `
          )
          .join("")}

      </div>

    </div>

  `;

}


/* =========================================================
   360 VIEW
   ========================================================= */

function show360(vehicleId) {

  const vehicle =
    allVehicles.find(
      item => item.id === vehicleId
    );

  if (!vehicle) return;


  const view =
    vehicle.images?.view360;


  const box =
    document.getElementById("compareBox");


  if (!view) {

    box.innerHTML = `

      <div class="360-placeholder">

        <h2>${vehicle.name}</h2>

        <h3>360° View</h3>

        <p>
          The interactive 360° viewer will appear here
          when the model's 360° image sequence is added.
        </p>

      </div>

    `;

    return;
  }


  box.innerHTML = `

    <div class="viewer-360">

      <h2>${vehicle.name}</h2>

      <img
        src="${view}"
        alt="${vehicle.name} 360 degree view"
      >

      <p>
        Drag or swipe to explore the vehicle.
      </p>

    </div>

  `;
}


/* =========================================================
   BRAND LIST
   ========================================================= */

function getBrands() {

  return [
    ...new Set(
      allVehicles.map(
        vehicle => vehicle.brand
      )
    )
  ].sort();

}


/* =========================================================
   INITIALIZE
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

  }
);
