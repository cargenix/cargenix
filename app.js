/* =========================================================
   CARGENIX V2
   Cars • Bikes • Specifications • Compare
   ========================================================= */

const vehicles = [

  /* ===================== CARS ===================== */

  {
    id: "creta",
    name: "Hyundai Creta",
    brand: "Hyundai",
    kind: "car",
    type: "SUV",
    price: "₹11.11 Lakh*",
    engine: "1.5L Petrol / Diesel",
    power: "115 PS",
    torque: "144 Nm",
    transmission: "6MT / IVT / 7DCT",
    mileage: "Up to 21.8 km/l",
    seats: "5",
    tag: "Popular",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta.jpg"
  },

  {
    id: "thar",
    name: "Mahindra Thar",
    brand: "Mahindra",
    kind: "car",
    type: "SUV",
    price: "₹11.50 Lakh*",
    engine: "2.0L Turbo Petrol / 2.2L Diesel",
    power: "152 PS",
    torque: "320 Nm",
    transmission: "6MT / 6AT",
    mileage: "Up to 15.2 km/l",
    seats: "4",
    tag: "Adventure",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar.jpg"
  },

  {
    id: "seltos",
    name: "Kia Seltos",
    brand: "Kia",
    kind: "car",
    type: "SUV",
    price: "₹11.13 Lakh*",
    engine: "1.5L Petrol / Diesel",
    power: "160 PS",
    torque: "253 Nm",
    transmission: "6MT / IVT / 7DCT",
    mileage: "Up to 20.8 km/l",
    seats: "5",
    tag: "Featured",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Seltos.jpg"
  },

  {
    id: "city",
    name: "Honda City",
    brand: "Honda",
    kind: "car",
    type: "Sedan",
    price: "₹11.95 Lakh*",
    engine: "1.5L Petrol",
    power: "121 PS",
    torque: "145 Nm",
    transmission: "6MT / CVT",
    mileage: "Up to 18.4 km/l",
    seats: "5",
    tag: "Sedan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20City.jpg"
  },

  {
    id: "nexon",
    name: "Tata Nexon",
    brand: "Tata",
    kind: "car",
    type: "SUV",
    price: "₹8.00 Lakh*",
    engine: "1.2L Turbo Petrol",
    power: "120 PS",
    torque: "170 Nm",
    transmission: "5MT / 6MT / AMT / DCT",
    mileage: "Up to 24.08 km/l",
    seats: "5",
    tag: "Value",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Nexon.jpg"
  },

  {
    id: "xuv3xo",
    name: "Mahindra XUV 3XO",
    brand: "Mahindra",
    kind: "car",
    type: "SUV",
    price: "₹7.99 Lakh*",
    engine: "1.2L Turbo Petrol / 1.5L Diesel",
    power: "130 PS",
    torque: "250 Nm",
    transmission: "6MT / 6AT",
    mileage: "Up to 20.1 km/l",
    seats: "5",
    tag: "Popular",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20XUV%203XO.jpg"
  },

  {
    id: "fortuner",
    name: "Toyota Fortuner",
    brand: "Toyota",
    kind: "car",
    type: "SUV",
    price: "₹34.16 Lakh*",
    engine: "2.7L Petrol / 2.8L Diesel",
    power: "204 PS",
    torque: "500 Nm",
    transmission: "6MT / 6AT",
    mileage: "Up to 14.6 km/l",
    seats: "7",
    tag: "Premium",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Fortuner.jpg"
  },

  {
    id: "innova",
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    kind: "car",
    type: "SUV",
    price: "₹19.99 Lakh*",
    engine: "2.4L Diesel",
    power: "150 PS",
    torque: "343 Nm",
    transmission: "5MT / 6AT",
    mileage: "15.6 km/l",
    seats: "7/8",
    tag: "Family",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova.jpg"
  },

  {
    id: "slavia",
    name: "Skoda Slavia",
    brand: "Skoda",
    kind: "car",
    type: "Sedan",
    price: "₹10.49 Lakh*",
    engine: "1.0L / 1.5L TSI",
    power: "150 PS",
    torque: "250 Nm",
    transmission: "6MT / 6AT / 7DSG",
    mileage: "Up to 20.32 km/l",
    seats: "5",
    tag: "Premium Sedan",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Slavia.jpg"
  },

  {
    id: "verna",
    name: "Hyundai Verna",
    brand: "Hyundai",
    kind: "car",
    type: "Sedan",
    price: "₹11.07 Lakh*",
    engine: "1.5L Petrol / Turbo Petrol",
    power: "160 PS",
    torque: "253 Nm",
    transmission: "6MT / IVT / 7DCT",
    mileage: "Up to 20.6 km/l",
    seats: "5",
    tag: "Performance",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Verna.jpg"
  },

  {
    id: "octavia",
    name: "Skoda Octavia RS",
    brand: "Skoda",
    kind: "car",
    type: "Sports",
    price: "₹56.69 Lakh*",
    engine: "2.0L TSI Turbo",
    power: "265 PS",
    torque: "370 Nm",
    transmission: "7-Speed DSG",
    mileage: "Performance focused",
    seats: "5",
    tag: "Performance",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Octavia%20RS.jpg"
  },

  {
    id: "m340i",
    name: "BMW M340i",
    brand: "BMW",
    kind: "car",
    type: "Sports",
    price: "₹75.90 Lakh*",
    engine: "3.0L TwinPower Turbo",
    power: "374 PS",
    torque: "500 Nm",
    transmission: "8-Speed Automatic",
    mileage: "13.02 km/l",
    seats: "5",
    tag: "M Performance",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M340i.jpg"
  },


  /* ===================== BIKES ===================== */

  {
    id: "hunter",
    name: "Royal Enfield Hunter 350",
    brand: "Royal Enfield",
    kind: "bike",
    type: "Cruiser",
    price: "₹1.50 Lakh*",
    engine: "349.34 cc",
    power: "20.2 PS",
    torque: "27 Nm",
    transmission: "5-Speed",
    mileage: "36.2 km/l",
    seats: "2",
    tag: "Popular",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Enfield%20Hunter%20350.jpg"
  },

  {
    id: "classic350",
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    kind: "bike",
    type: "Cruiser",
    price: "₹1.93 Lakh*",
    engine: "349.34 cc",
    power: "20.2 PS",
    torque: "27 Nm",
    transmission: "5-Speed",
    mileage: "41.55 km/l",
    seats: "2",
    tag: "Iconic",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Enfield%20Classic%20350.jpg"
  },

  {
    id: "himalayan",
    name: "Royal Enfield Himalayan",
    brand: "Royal Enfield",
    kind: "bike",
    type: "Adventure",
    price: "₹2.93 Lakh*",
    engine: "452 cc",
    power: "40 PS",
    torque: "40 Nm",
    transmission: "6-Speed",
    mileage: "30 km/l",
    seats: "2",
    tag: "Adventure",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Enfield%20Himalayan.jpg"
  },

  {
    id: "r15",
    name: "Yamaha R15 V4",
    brand: "Yamaha",
    kind: "bike",
    type: "Sports",
    price: "₹1.83 Lakh*",
    engine: "155 cc",
    power: "18.4 PS",
    torque: "14.2 Nm",
    transmission: "6-Speed",
    mileage: "47.92 km/l",
    seats: "2",
    tag: "Sports",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Yamaha%20R15.jpg"
  },

  {
    id: "duke390",
    name: "KTM 390 Duke",
    brand: "KTM",
    kind: "bike",
    type: "Sports",
    price: "₹2.95 Lakh*",
    engine: "399 cc",
    power: "46 PS",
    torque: "39 Nm",
    transmission: "6-Speed",
    mileage: "30 km/l",
    seats: "2",
    tag: "Performance",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/KTM%20390%20Duke.jpg"
  },

  {
    id: "activa",
    name: "Honda Activa 6G",
    brand: "Honda",
    kind: "bike",
    type: "Scooter",
    price: "₹80,950*",
    engine: "109.51 cc",
    power: "7.79 PS",
    torque: "8.84 Nm",
    transmission: "Automatic",
    mileage: "50 km/l",
    seats: "2",
    tag: "Scooter",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Activa.jpg"
  },

  {
    id: "apache",
    name: "TVS Apache RTR 200 4V",
    brand: "TVS",
    kind: "bike",
    type: "Sports",
    price: "₹1.54 Lakh*",
    engine: "197.75 cc",
    power: "20.8 PS",
    torque: "17.25 Nm",
    transmission: "5-Speed",
    mileage: "37 km/l",
    seats: "2",
    tag: "Sports",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/TVS%20Apache.jpg"
  },

  {
    id: "classic650",
    name: "Royal Enfield Classic 650",
    brand: "Royal Enfield",
    kind: "bike",
    type: "Cruiser",
    price: "₹3.37 Lakh*",
    engine: "648 cc",
    power: "47 PS",
    torque: "52 Nm",
    transmission: "6-Speed",
    mileage: "22 km/l",
    seats: "2",
    tag: "Premium",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Royal%20Enfield%20Classic%20650.jpg"
  }

];


/* =========================================================
   BASIC HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

let currentPage = "home";
let previousPage = "home";
let currentKind = "all";

let favorites = JSON.parse(
  localStorage.getItem("cargenixFavorites") || "[]"
);


/* =========================================================
   IMAGE SYSTEM
   ========================================================= */

function mediaBlock(v, large = false) {

  const fallback = `
    <div class="vehicle-img ${large ? "large-media" : ""}">
      <strong>${v.name}</strong>
      <small>${v.brand} • ${v.type}</small>
      <em>Vehicle media unavailable</em>
    </div>
  `;

  if (!v.image) return fallback;

  return `
    <div class="vehicle-img ${large ? "large-media" : ""}">
      <img
        src="${v.image}"
        alt="${v.name}"
        loading="lazy"
        style="width:100%;height:100%;object-fit:cover;display:block;"
        onerror="this.parentElement.innerHTML='<strong>${v.name}</strong><small>${v.brand} • ${v.type}</small><em>Vehicle media unavailable</em>'"
      >
    </div>
  `;
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function hideAllPages() {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });
}

function showPage(id) {
  hideAllPages();

  const page = $(id);

  if (page) {
    page.classList.remove("hidden");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function showHome() {
  previousPage = currentPage;
  currentPage = "home";
  showPage("home");
  renderFeatured();
  updateCounts();
}

function showListing(filter = "all") {

  previousPage = currentPage;
  currentPage = "listing";

  currentKind = filter;

  showPage("listing");

  const title = $("listingTitle");

  if (title) {

    if (filter === "car") {
      title.textContent = "Cars";
    }

    else if (filter === "bike") {
      title.textContent = "Bikes";
    }

    else if (
      ["SUV", "Sedan", "Hatchback", "Sports", "Cruiser", "Adventure", "Scooter"]
        .includes(filter)
    ) {
      title.textContent = filter;
    }

    else {
      title.textContent = "All Vehicles";
    }
  }

  if ($("listingSearch")) {
    $("listingSearch").value = "";
  }

  renderListing();
}

function showBrands() {

  previousPage = currentPage;
  currentPage = "brands";

  showPage("brands");

  renderBrands();
}

function showCompare() {

  previousPage = currentPage;
  currentPage = "compare";

  showPage("compare");

  populateCompare();

  renderCompare();
}

function showNews() {

  previousPage = currentPage;
  currentPage = "news";

  showPage("news");
}

function goBack() {

  if (previousPage === "detail") {
    showHome();
  }

  else if (previousPage === "listing") {
    showListing(currentKind);
  }

  else {
    showHome();
  }
}


/* =========================================================
   HOME
   ========================================================= */

function renderFeatured() {

  const grid = $("featuredGrid");

  if (!grid) return;

  const featured = vehicles.slice(0, 8);

  grid.innerHTML = featured
    .map(vehicleCard)
    .join("");
}


/* =========================================================
   VEHICLE CARD
   ========================================================= */

function vehicleCard(v) {

  const isFav = favorites.includes(v.id);

  return `
    <article class="vehicle-card">

      ${mediaBlock(v)}

      <div class="body">

        <div class="card-top">

          <span class="tag">
            ${v.tag}
          </span>

          <button
            class="heart"
            onclick="toggleFavorite('${v.id}')"
            title="Favorite"
          >
            ${isFav ? "♥" : "♡"}
          </button>

        </div>

        <h3>${v.name}</h3>

        <div class="meta">
          ${v.brand} • ${v.engine}
        </div>

        <div class="price">
          ${v.price}
        </div>

        <div class="card-actions">

          <button onclick="showDetail('${v.id}')">
            View details
          </button>

          <button onclick="addToCompare('${v.id}')">
            Compare
          </button>

        </div>

      </div>

    </article>
  `;
}


/* =========================================================
   LISTING
   ========================================================= */

function renderListing() {

  const grid = $("listingGrid");

  if (!grid) return;

  let data = [...vehicles];

  const search =
    ($("listingSearch")?.value || "")
      .trim()
      .toLowerCase();

  const type =
    $("typeFilter")?.value || "all";

  const sort =
    $("sortFilter")?.value || "featured";


  /* Filter by cars / bikes */

  if (currentKind === "car") {
    data = data.filter(v => v.kind === "car");
  }

  else if (currentKind === "bike") {
    data = data.filter(v => v.kind === "bike");
  }

  /* Filter by body type */

  else if (
    ["SUV", "Sedan", "Hatchback", "Sports", "Cruiser", "Adventure", "Scooter"]
      .includes(currentKind)
  ) {
    data = data.filter(v => v.type === currentKind);
  }


  /* Search */

  if (search) {

    data = data.filter(v => {

      const text = `
        ${v.name}
        ${v.brand}
        ${v.engine}
        ${v.type}
      `.toLowerCase();

      return text.includes(search);

    });

  }


  /* Type dropdown */

  if (type !== "all") {
    data = data.filter(v => v.type === type);
  }


  /* Sort */

  if (sort === "name") {

    data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

  }

  else if (sort === "brand") {

    data.sort((a, b) =>
      a.brand.localeCompare(b.brand)
    );

  }


  if (!data.length) {

    grid.innerHTML = `
      <div class="empty">
        <b>No vehicles found</b>
        <span>Try another search or filter.</span>
      </div>
    `;

    return;
  }


  grid.innerHTML =
    data.map(vehicleCard).join("");
}


/* =========================================================
   SEARCH
   ========================================================= */

function doSearch() {

  const query =
    ($("homeSearch")?.value || "").trim();

  if (!query) {
    showListing("all");
    return;
  }

  showListing("all");

  if ($("listingSearch")) {
    $("listingSearch").value = query;
  }

  renderListing();
}

function quickSearch(query) {

  if ($("homeSearch")) {
    $("homeSearch").value = query;
  }

  doSearch();
}


/* =========================================================
   DETAIL PAGE
   ========================================================= */

function showDetail(id) {

  const v =
    vehicles.find(vehicle => vehicle.id === id);

  if (!v) return;

  previousPage = currentPage;
  currentPage = "detail";

  showPage("detail");

  const content = $("detailContent");

  if (!content) return;

  content.innerHTML = `

    <div class="detail">

      <div class="detail-hero">

        <div>
          ${mediaBlock(v, true)}
        </div>

        <div>

          <span class="eyebrow">
            ${v.brand.toUpperCase()}
          </span>

          <h1>${v.name}</h1>

          <p class="detail-sub">
            ${v.type} • ${v.kind === "car" ? "Car" : "Bike"}
          </p>

          <div class="detail-price">
            ${v.price}
          </div>

          <div class="notice">
            Specifications shown on Cargenix should be verified
            against the manufacturer's latest official information
            before purchase.
          </div>

          <br>

          <div class="detail-actions">

            <button onclick="addToCompare('${v.id}')">
              Add to compare
            </button>

            <button onclick="toggleFavorite('${v.id}')">
              ${favorites.includes(v.id)
                ? "♥ Favorited"
                : "♡ Favorite"}
            </button>

          </div>

        </div>

      </div>


      <section class="section">

        <div class="section-head">

          <div>
            <span class="eyebrow">
              SPECIFICATIONS
            </span>

            <h2>
              ${v.name} specs
            </h2>
          </div>

        </div>


        <div class="spec-grid">

          <div class="spec">
            <small>Engine</small>
            <b>${v.engine}</b>
          </div>

          <div class="spec">
            <small>Power</small>
            <b>${v.power}</b>
          </div>

          <div class="spec">
            <small>Torque</small>
            <b>${v.torque}</b>
          </div>

          <div class="spec">
            <small>Transmission</small>
            <b>${v.transmission}</b>
          </div>

          <div class="spec">
            <small>Mileage</small>
            <b>${v.mileage}</b>
          </div>

          <div class="spec">
            <small>Seats</small>
            <b>${v.seats}</b>
          </div>

          <div class="spec">
            <small>Body type</small>
            <b>${v.type}</b>
          </div>

          <div class="spec">
            <small>Brand</small>
            <b>${v.brand}</b>
          </div>

          <div class="spec">
            <small>Category</small>
            <b>${v.kind === "car" ? "Car" : "Bike"}</b>
          </div>

        </div>


        <div class="content-note">

          <h3>About ${v.name}</h3>

          <p>
            Explore the key specifications, vehicle category,
            performance information and comparison options for
            the ${v.name}.
          </p>

        </div>

      </section>

    </div>
  `;
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

  if (favorites.includes(id)) {

    favorites =
      favorites.filter(x => x !== id);

  }

  else {

    favorites.push(id);

  }

  localStorage.setItem(
    "cargenixFavorites",
    JSON.stringify(favorites)
  );

  renderFeatured();

  if (currentPage === "listing") {
    renderListing();
  }

  if (currentPage === "detail") {
    showDetail(id);
  }
}


/* =========================================================
   COMPARE
   ========================================================= */

function populateCompare() {

  const a = $("compareA");
  const b = $("compareB");

  if (!a || !b) return;

  const options = vehicles
    .map(v =>
      `<option value="${v.id}">${v.name}</option>`
    )
    .join("");

  a.innerHTML = options;
  b.innerHTML = options;

  if (vehicles.length > 1) {
    b.value = vehicles[1].id;
  }
}


function addToCompare(id) {

  showCompare();

  const a = $("compareA");

  if (a) {
    a.value = id;
  }

  renderCompare();
}


function renderCompare() {

  const table = $("compareTable");

  if (!table) return;

  const a =
    vehicles.find(v =>
      v.id === $("compareA")?.value
    );

  const b =
    vehicles.find(v =>
      v.id === $("compareB")?.value
    );

  if (!a || !b) return;

  const rows = [

    ["Price", a.price, b.price],

    ["Engine", a.engine, b.engine],

    ["Power", a.power, b.power],

    ["Torque", a.torque, b.torque],

    ["Transmission", a.transmission, b.transmission],

    ["Mileage", a.mileage, b.mileage],

    ["Seats", a.seats, b.seats],

    ["Body Type", a.type, b.type],

    ["Brand", a.brand, b.brand]

  ];


  table.innerHTML = `

    <div class="compare-table">

      <div class="compare-head">

        <b>Specification</b>

        <b>${a.name}</b>

        <b>${b.name}</b>

      </div>

      ${rows.map(row => `

        <div>

          <span>${row[0]}</span>

          <span>${row[1]}</span>

          <span>${row[2]}</span>

        </div>

      `).join("")}

    </div>

  `;
}


/* =========================================================
   BRANDS
   ========================================================= */

function renderBrands() {

  const grid = $("brandGrid");

  if (!grid) return;

  const search =
    ($("brandSearch")?.value || "")
      .toLowerCase()
      .trim();

  const brands =
    [...new Set(vehicles.map(v => v.brand))]
      .sort()
      .filter(brand =>
        brand.toLowerCase().includes(search)
      );


  grid.innerHTML =
    brands.map(brand => {

      const count =
        vehicles.filter(v => v.brand === brand).length;

      const letter =
        brand.charAt(0).toUpperCase();

      return `

        <button
          onclick="showBrandVehicles('${brand.replace(/'/g, "\\'")}')"
        >

          <span class="brand-logo">
            ${letter}
          </span>

          <span>
            ${brand}
          </span>

          <small>
            ${count} vehicle${count > 1 ? "s" : ""}
          </small>

        </button>

      `;

    }).join("");
}


function showBrandVehicles(brand) {

  currentKind = "all";

  showListing("all");

  if ($("listingSearch")) {
    $("listingSearch").value = brand;
  }

  renderListing();
}


/* =========================================================
   THEME
   ========================================================= */

function toggleTheme() {

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "cargenixDark",
    document.body.classList.contains("dark")
      ? "1"
      : "0"
  );
}


function loadTheme() {

  if (
    localStorage.getItem("cargenixDark") === "1"
  ) {
    document.body.classList.add("dark");
  }
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function toggleMenu() {

  const nav = $("mainNav");

  if (nav) {
    nav.classList.toggle("open");
  }
}


/* =========================================================
   COUNTERS
   ========================================================= */

function updateCounts() {

  const vehicleCount =
    $("vehicleCount");

  const brandCount =
    $("brandCount");

  const brands =
    new Set(vehicles.map(v => v.brand));

  if (vehicleCount) {
    vehicleCount.textContent =
      vehicles.length;
  }

  if (brandCount) {
    brandCount.textContent =
      brands.size;
  }
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadTheme();

    updateCounts();

    renderFeatured();

  }
);
