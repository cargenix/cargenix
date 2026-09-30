const vehicles=[
{id:"creta",name:"Hyundai Creta",brand:"Hyundai",kind:"car",type:"SUV",price:"₹11.00 lakh*",engine:"1.5L Petrol / Diesel",power:"160 PS*",torque:"253 Nm*",fuel:"Petrol / Diesel",gearbox:"MT / AT / DCT",drive:"FWD"},
{id:"thar",name:"Mahindra Thar",brand:"Mahindra",kind:"car",type:"SUV",price:"₹11.50 lakh*",engine:"2.0L Turbo Petrol / 2.2L Diesel",power:"150 PS*",torque:"320 Nm*",fuel:"Petrol / Diesel",gearbox:"MT / AT",drive:"4WD / RWD"},
{id:"seltos",name:"Kia Seltos",brand:"Kia",kind:"car",type:"SUV",price:"₹11.00 lakh*",engine:"1.5L Petrol / Diesel",power:"160 PS*",torque:"253 Nm*",fuel:"Petrol / Diesel",gearbox:"MT / AT / DCT",drive:"FWD"},
{id:"city",name:"Honda City",brand:"Honda",kind:"car",type:"Sedan",price:"₹12.00 lakh*",engine:"1.5L Petrol",power:"121 PS",torque:"145 Nm",fuel:"Petrol",gearbox:"MT / CVT",drive:"FWD"},
{id:"nexon",name:"Tata Nexon",brand:"Tata",kind:"car",type:"SUV",price:"₹8.00 lakh*",engine:"1.2L Turbo Petrol / Diesel",power:"120 PS*",torque:"170 Nm*",fuel:"Petrol / Diesel / EV",gearbox:"MT / AMT / DCT",drive:"FWD"},
{id:"m340i",name:"BMW M340i",brand:"BMW",kind:"car",type:"Sports",price:"₹75.00 lakh*",engine:"3.0L Turbo Petrol",power:"374 PS",torque:"500 Nm",fuel:"Petrol",gearbox:"8-speed AT",drive:"AWD"},
{id:"hunter",name:"Royal Enfield Hunter 350",brand:"Royal Enfield",kind:"bike",type:"Cruiser",price:"₹1.50 lakh*",engine:"349cc",power:"20.2 PS",torque:"27 Nm",fuel:"Petrol",gearbox:"5-speed",drive:"Chain drive"},
{id:"classic",name:"Royal Enfield Classic 350",brand:"Royal Enfield",kind:"bike",type:"Cruiser",price:"₹1.93 lakh*",engine:"349cc",power:"20.2 PS",torque:"27 Nm",fuel:"Petrol",gearbox:"5-speed",drive:"Chain drive"},
{id:"r15",name:"Yamaha R15",brand:"Yamaha",kind:"bike",type:"Sports",price:"₹1.85 lakh*",engine:"155cc",power:"18.4 PS",torque:"14.2 Nm",fuel:"Petrol",gearbox:"6-speed",drive:"Chain drive"},
{id:"duke",name:"KTM 390 Duke",brand:"KTM",kind:"bike",type:"Sports",price:"₹2.95 lakh*",engine:"399cc",power:"46 PS",torque:"39 Nm",fuel:"Petrol",gearbox:"6-speed",drive:"Chain drive"},
{id:"activa",name:"Honda Activa 6G",brand:"Honda",kind:"bike",type:"Scooter",price:"₹0.80 lakh*",engine:"109.5cc",power:"7.7 PS",torque:"8.9 Nm",fuel:"Petrol",gearbox:"CVT",drive:"Belt drive"},
{id:"adv",name:"Royal Enfield Himalayan",brand:"Royal Enfield",kind:"bike",type:"Adventure",price:"₹3.05 lakh*",engine:"452cc",power:"40 PS",torque:"40 Nm",fuel:"Petrol",gearbox:"6-speed",drive:"Chain drive"}
];

const brands=[...new Set(vehicles.map(v=>v.brand))].sort();
let currentFilter="all";

function $(id){return document.getElementById(id)}
function hidePages(){document.querySelectorAll(".page").forEach(x=>x.classList.add("hidden"))}
function showHome(){hidePages();$("home").classList.remove("hidden");window.scrollTo(0,0);renderFeatured()}
function showListing(filter="all"){hidePages();$("listing").classList.remove("hidden");currentFilter=filter; $("listingTitle").textContent=filter==="car"?"Cars":filter==="bike"?"Bikes":filter==="all"?"All vehicles":filter; $("listingSearch").value=""; $("typeFilter").value=["SUV","Sedan","Hatchback","Sports","Cruiser","Adventure","Scooter"].includes(filter)?filter:"all";renderListing();window.scrollTo(0,0)}
function showBrands(){hidePages();$("brands").classList.remove("hidden");renderBrands();window.scrollTo(0,0)}
function showCompare(){hidePages();$("compare").classList.remove("hidden");fillCompare();renderCompare();window.scrollTo(0,0)}
function showNews(){hidePages();$("news").classList.remove("hidden");window.scrollTo(0,0)}
function doSearch(){const q=$("homeSearch").value.trim().toLowerCase();if(!q)return showListing("all");hidePages();$("listing").classList.remove("hidden");$("listingTitle").textContent="Search results";$("listingSearch").value=q;$("typeFilter").value="all";currentFilter="all";renderListing()}
function card(v){return `<article class="vehicle-card"><div class="vehicle-img">REAL VEHICLE MEDIA<br><small>${v.name}</small></div><div class="body"><span class="tag">${v.type}</span><h3>${v.name}</h3><div class="meta">${v.brand} • ${v.engine}</div><div class="price">${v.price}</div><div class="card-actions"><button onclick="openVehicle('${v.id}')">View details</button><button onclick="addCompare('${v.id}')">Compare</button></div></div></article>`}
function renderFeatured(){$("featuredGrid").innerHTML=vehicles.slice(0,8).map(card).join("")}
function renderListing(){let q=$("listingSearch").value.toLowerCase(),type=$("typeFilter").value;let list=vehicles.filter(v=>(currentFilter==="all"||currentFilter==="car"&&v.kind==="car"||currentFilter==="bike"&&v.kind==="bike"||v.type===currentFilter)&&(type==="all"||v.type===type)&&(!q||`${v.name} ${v.brand} ${v.type}`.toLowerCase().includes(q)));$("listingGrid").innerHTML=list.length?list.map(card).join(""):"<p>No vehicles found. Try another search.</p>"}
function renderBrands(){$("brandGrid").innerHTML=brands.map(b=>`<button onclick="brandVehicles('${b.replace(/'/g,"\\'")}')">${b}</button>`).join("")}
function brandVehicles(b){showListing("all");$("listingTitle").textContent=b;$("listingSearch").value=b;renderListing()}
function openVehicle(id){let v=vehicles.find(x=>x.id===id);if(!v)return;hidePages();$("detail").classList.remove("hidden");$("detailContent").innerHTML=`<div class="detail"><div class="detail-hero"><div class="detail-media">REAL VEHICLE MEDIA<br><small>${v.name}</small></div><div><span class="eyebrow">${v.brand.toUpperCase()} • ${v.type.toUpperCase()}</span><h1>${v.name}</h1><p class="detail-sub">Starting price: <b>${v.price}</b></p><p>Detailed specifications, features and media will appear here. Replace the media placeholder only with photos/videos you are licensed or authorized to publish.</p><button class="quick-links button" onclick="addCompare('${v.id}')">Add to compare</button></div></div><div class="spec-grid">${[['Engine',v.engine],['Power',v.power],['Torque',v.torque],['Fuel',v.fuel],['Transmission',v.gearbox],['Drive',v.drive]].map(s=>`<div class="spec"><small>${s[0]}</small><b>${s[1]}</b></div>`).join("")}</div></div>`;window.scrollTo(0,0)}
function fillCompare(){let opts=vehicles.map(v=>`<option value="${v.id}">${v.name}</option>`).join("");$("compareA").innerHTML=opts;$("compareB").innerHTML=opts;if(vehicles[1])$("compareB").value=vehicles[1].id}
function addCompare(id){showCompare();$("compareA").value=id;renderCompare()}
function renderCompare(){let a=vehicles.find(v=>v.id===$("compareA").value),b=vehicles.find(v=>v.id===$("compareB").value);if(!a||!b)return;let rows=[["Type",a.type,b.type],["Starting price",a.price,b.price],["Engine",a.engine,b.engine],["Power",a.power,b.power],["Torque",a.torque,b.torque],["Fuel",a.fuel,b.fuel],["Transmission",a.gearbox,b.gearbox],["Drive",a.drive,b.drive]];$("compareTable").innerHTML=`<div class="compare-table">${rows.map(r=>`<div><span><b>${r[0]}</b></span><span>${r[1]}</span><span>${r[2]}</span></div>`).join("")}</div>`}
showHome();