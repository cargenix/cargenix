const vehicles = [
  {
    name: "Hyundai Creta",
    brand: "Hyundai",
    type: "SUV",
    price: "₹11.11 Lakh*",
    engine: "1.5L Petrol / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "Popular SUV",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "Mahindra Thar",
    brand: "Mahindra",
    type: "SUV",
    price: "₹11.50 Lakh*",
    engine: "Turbo Petrol / Diesel",
    power: "Up to 177 PS",
    torque: "Up to 400 Nm",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "Kia Seltos",
    brand: "Kia",
    type: "SUV",
    price: "₹11.19 Lakh*",
    engine: "1.5L Petrol / Diesel",
    power: "Up to 160 PS",
    torque: "Up to 253 Nm",
    tag: "Premium SUV",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "Toyota Fortuner",
    brand: "Toyota",
    type: "SUV",
    price: "₹33.65 Lakh*",
    engine: "2.7L Petrol / 2.8L Diesel",
    power: "Up to 204 PS",
    torque: "Up to 500 Nm",
    tag: "Premium SUV",
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "BMW 3 Series",
    brand: "BMW",
    type: "Sedan",
    price: "₹60 Lakh*",
    engine: "2.0L Turbo Petrol",
    power: "Up to 258 PS",
    torque: "400 Nm",
    tag: "Luxury",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "Tata Harrier",
    brand: "Tata",
    type: "SUV",
    price: "₹14 Lakh*",
    engine: "2.0L Diesel",
    power: "170 PS",
    torque: "350 Nm",
    tag: "Indian SUV",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=85"
  }
];

const bikes = [
  {
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    type: "Bike",
    price: "₹1.93 Lakh*",
    engine: "349cc",
    power: "20.2 PS",
    torque: "27 Nm",
    tag: "Popular Bike",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "KTM Duke 390",
    brand: "KTM",
    type: "Bike",
    price: "₹3.00 Lakh*",
    engine: "399cc",
    power: "46 PS",
    torque: "39 Nm",
    tag: "Performance",
    image: "https://images.unsplash.com/photo-1558980394-0c7c4e4b8e0b?auto=format&fit=crop&w=1000&q=85"
  },

  {
    name: "Yamaha R15",
    brand: "Yamaha",
    type: "Bike",
    price: "₹1.83 Lakh*",
    engine: "155cc",
    power: "18.4 PS",
    torque: "14.2 Nm",
    tag: "Sports Bike",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=85"
  }
];

function vehicleCard(vehicle) {
  return `
    <article class="vehicle-card">

      <div class="vehicle-image">
        <img
          src="${vehicle.image}"
          alt="${vehicle.name}"
          loading="lazy"
        >
      </div>

      <div class="vehicle-info">
        <h3>${vehicle.name}</h3>

        <p><strong>Brand:</strong> ${vehicle.brand}</p>
        <p><strong>Engine:</strong> ${vehicle.engine}</p>
        <p><strong>Power:</strong> ${vehicle.power}</p>
        <p><strong>Torque:</strong> ${vehicle.torque}</p>
        <p><strong>Price:</strong> ${vehicle.price}</p>

        <span class="vehicle-tag">${vehicle.tag}</span>

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

function displayVehicles(list = vehicles) {
  const grid = document.getElementById("vehicleGrid");

  if (list.length === 0) {
    grid.innerHTML = "<p>No vehicles found.</p>";
    return;
  }

  grid.innerHTML = list.map(vehicleCard).join("");
}

function displayBikes() {
  document.getElementById("bikeGrid").innerHTML =
    bikes.map(vehicleCard).join("");
}

function searchVehicles() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();

  if (!input) {
    displayVehicles();
    return;
  }

  const results = [...vehicles, ...bikes].filter(vehicle =>
    vehicle.name.toLowerCase().includes(input) ||
    vehicle.brand.toLowerCase().includes(input) ||
    vehicle.type.toLowerCase().includes(input)
  );

  document.getElementById("cars").scrollIntoView({
    behavior: "smooth"
  });

  displayVehicles(results.filter(v => vehicles.includes(v)));

  const bikeResults = results.filter(v => bikes.includes(v));

  document.getElementById("bikeGrid").innerHTML =
    bikeResults.length
      ? bikeResults.map(vehicleCard).join("")
      : "<p>No matching bikes.</p>";
}

function quickSearch(text) {
  document.getElementById("searchInput").value = text;
  searchVehicles();
}

function showDetails(vehicle) {
  const box = document.getElementById("compareBox");

  box.innerHTML = `
    <h3>${vehicle.name}</h3>
    <p><strong>Brand:</strong> ${vehicle.brand}</p>
    <p><strong>Type:</strong> ${vehicle.type}</p>
    <p><strong>Engine:</strong> ${vehicle.engine}</p>
    <p><strong>Power:</strong> ${vehicle.power}</p>
    <p><strong>Torque:</strong> ${vehicle.torque}</p>
    <p><strong>Price:</strong> ${vehicle.price}</p>
  `;

  document.getElementById("compare").scrollIntoView({
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayVehicles();
  displayBikes();

  document
    .getElementById("searchInput")
    .addEventListener("keydown", event => {
      if (event.key === "Enter") {
        searchVehicles();
      }
    });
});
