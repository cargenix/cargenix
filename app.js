const vehicles=[
{name:"Hyundai Creta",brand:"Hyundai",type:"car",category:"SUV",price:"₹11 lakh*",engine:"1.5L",power:"116–160 PS",fuel:"Petrol / Diesel",tag:"SUV"},
{name:"Tata Nexon",brand:"Tata",type:"car",category:"SUV",price:"₹8 lakh*",engine:"1.2L / 1.5L",power:"100–120 PS",fuel:"Petrol / Diesel / EV",tag:"SUV"},
{name:"Kia Seltos",brand:"Kia",type:"car",category:"SUV",price:"₹11 lakh*",engine:"1.5L",power:"116–160 PS",fuel:"Petrol / Diesel",tag:"SUV"},
{name:"Toyota Fortuner",brand:"Toyota",type:"car",category:"SUV",price:"₹34 lakh*",engine:"2.7L / 2.8L",power:"164–204 PS",fuel:"Petrol / Diesel",tag:"SUV"},
{name:"Honda City",brand:"Honda",type:"car",category:"Sedan",price:"₹12 lakh*",engine:"1.5L",power:"121 PS",fuel:"Petrol",tag:"Sedan"},
{name:"Mahindra Thar",brand:"Mahindra",type:"car",category:"SUV",price:"₹12 lakh*",engine:"1.5L / 2.0L",power:"118–177 PS",fuel:"Petrol / Diesel",tag:"SUV"},
{name:"Mahindra Scorpio-N",brand:"Mahindra",type:"car",category:"SUV",price:"₹13 lakh*",engine:"2.0L / 2.2L",power:"132–203 PS",fuel:"Petrol / Diesel",tag:"SUV"},
{name:"Tata Tiago EV",brand:"Tata",type:"car",category:"Hatchback",price:"₹8 lakh*",engine:"EV",power:"61–75 PS",fuel:"Electric",tag:"EV"},
{name:"Maruti Suzuki Swift",brand:"Maruti Suzuki",type:"car",category:"Hatchback",price:"₹6 lakh*",engine:"1.2L",power:"82 PS",fuel:"Petrol",tag:"Hatchback"},
{name:"BMW M340i",brand:"BMW",type:"car",category:"Sports Sedan",price:"₹75 lakh*",engine:"3.0L Turbo",power:"374 PS",fuel:"Petrol",tag:"Sports"},
{name:"Tata Harrier",brand:"Tata",type:"car",category:"SUV",price:"₹15 lakh*",engine:"2.0L",power:"170 PS",fuel:"Diesel",tag:"SUV"},
{name:"Kia Carens",brand:"Kia",type:"car",category:"MPV",price:"₹11 lakh*",engine:"1.5L",power:"115–160 PS",fuel:"Petrol / Diesel",tag:"MPV"},
{name:"Royal Enfield Classic 350",brand:"Royal Enfield",type:"bike",category:"Retro",price:"₹2 lakh*",engine:"349cc",power:"20.2 PS",fuel:"Petrol",tag:"Retro"},
{name:"Royal Enfield Hunter 350",brand:"Royal Enfield",type:"bike",category:"Roadster",price:"₹1.5 lakh*",engine:"349cc",power:"20.2 PS",fuel:"Petrol",tag:"Roadster"},
{name:"Yamaha R15",brand:"Yamaha",type:"bike",category:"Sports",price:"₹1.7 lakh*",engine:"155cc",power:"18.4 PS",fuel:"Petrol",tag:"Sports"},
{name:"Yamaha MT-15",brand:"Yamaha",type:"bike",category:"Street",price:"₹1.7 lakh*",engine:"155cc",power:"18.4 PS",fuel:"Petrol",tag:"Street"},
{name:"TVS Apache RTR 160",brand:"TVS",type:"bike",category:"Street",price:"₹1.2 lakh*",engine:"159.7cc",power:"16.1 PS",fuel:"Petrol",tag:"Street"},
{name:"Bajaj Pulsar NS200",brand:"Bajaj",type:"bike",category:"Street",price:"₹1.6 lakh*",engine:"199.5cc",power:"24.5 PS",fuel:"Petrol",tag:"Street"},
{name:"KTM 390 Duke",brand:"KTM",type:"bike",category:"Street",price:"₹3.0 lakh*",engine:"399cc",power:"46 PS",fuel:"Petrol",tag:"Street"},
{name:"Hero Splendor Plus",brand:"Hero",type:"bike",category:"Commuter",price:"₹0.8 lakh*",engine:"97.2cc",power:"8.0 PS",fuel:"Petrol",tag:"Commuter"},
{name:"Honda Activa 6G",brand:"Honda",type:"bike",category:"Scooter",price:"₹0.8 lakh*",engine:"109.5cc",power:"7.8 PS",fuel:"Petrol",tag:"Scooter"},
{name:"BMW G 310 R",brand:"BMW Motorrad",type:"bike",category:"Street",price:"₹3.0 lakh*",engine:"313cc",power:"34 PS",fuel:"Petrol",tag:"Street"}
];

const $=s=>document.querySelector(s);
const gridCard=v=>`<article class="vehicle-card"><div class="vehicle-photo">REAL VEHICLE PHOTO<br><small>Upload a licensed photo</small></div><div class="vehicle-info"><div class="muted">${v.brand} · ${v.category}</div><h3>${v.name}</h3><div class="price">${v.price}</div><div class="tags"><span class="tag">${v.engine}</span><span class="tag">${v.power}</span><span class="tag">${v.fuel}</span></div><div class="card-actions"><button onclick="showSpecs('${v.name}')">View specs</button><button onclick="addCompare('${v.name}')">Compare</button></div></div></article>`;

function render(){
  $("#vehicleCount").textContent=vehicles.length;
  $("#brandCount").textContent=new Set(vehicles.map(v=>v.brand)).size;
  $("#carsGrid").innerHTML=vehicles.filter(v=>v.type==="car").slice(0,8).map(gridCard).join("");
  $("#bikesGrid").innerHTML=vehicles.filter(v=>v.type==="bike").slice(0,8).map(gridCard).join("");
  const brands=[...new Set(vehicles.map(v=>v.brand))].sort();
  $("#brandsGrid").innerHTML=brands.map(b=>`<div class="brand" onclick="searchBrand('${b}')">${b}</div>`).join("");
  ["compareA","compareB"].forEach(id=>{
    $( "#"+id ).innerHTML='<option value="">Select vehicle</option>'+vehicles.map(v=>`<option>${v.name}</option>`).join("");
  });
}
function search(q){
  const term=q.trim().toLowerCase();
  if(!term){$("#results").classList.add("hidden");return}
  const found=vehicles.filter(v=>Object.values(v).some(x=>String(x).toLowerCase().includes(term)));
  $("#results").classList.remove("hidden");
  $("#resultsGrid").innerHTML=found.length?found.map(gridCard).join(""):`<p>No vehicle found. Add this model to data.js/app.js later.</p>`;
  $("#results").scrollIntoView({behavior:"smooth",block:"start"});
}
function searchBrand(b){$("#searchInput").value=b;search(b)}
function showSpecs(name){const v=vehicles.find(x=>x.name===name);alert(`${v.name}\n\nBrand: ${v.brand}\nType: ${v.type}\nCategory: ${v.category}\nPrice: ${v.price}\nEngine: ${v.engine}\nPower: ${v.power}\nFuel: ${v.fuel}\n\n*Prices/specifications are sample database entries and should be verified before publication.`)}
function addCompare(name){const a=$("#compareA");const b=$("#compareB");if(!a.value)a.value=name;else if(!b.value)b.value=name;else a.value=name;document.querySelector("#compare").scrollIntoView({behavior:"smooth"})}
function compare(){const a=vehicles.find(v=>v.name===$("#compareA").value),b=vehicles.find(v=>v.name===$("#compareB").value);if(!a||!b){$("#compareResult").innerHTML="<p>Select two vehicles first.</p>";return}const rows=["brand","type","category","price","engine","power","fuel"];$("#compareResult").innerHTML=`<table class="compare-table"><tr><th>Specification</th><th>${a.name}</th><th>${b.name}</th></tr>${rows.map(k=>`<tr><td>${k.toUpperCase()}</td><td>${a[k]}</td><td>${b[k]}</td></tr>`).join("")}</table>`}
$("#searchBtn").onclick=()=>search($("#searchInput").value);
$("#searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")search(e.target.value)});
$("#compareBtn").onclick=compare;
document.querySelectorAll("[data-filter]").forEach(btn=>btn.onclick=()=>{const type=btn.dataset.filter;const data=vehicles.filter(v=>v.type===type);$("#results").classList.remove("hidden");$("#resultsGrid").innerHTML=data.map(gridCard).join("");$("#results").scrollIntoView({behavior:"smooth"})});
render();
