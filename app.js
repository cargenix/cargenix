const fallbackCar="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85";

const img = {
  xuv:"https://media.zigcdn.com/media/model/2026/Jan/mahindra_xuv_7xo.jpg",
  xuvBlack:"https://media.zigcdn.com/media/model/2026/Jan/model-extimg-1113103544_600x400.jpg",
  seltos:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2026_Kia_Seltos.jpg",
  creta:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Hyundai_Creta_1.5_Plus_2024.jpg",
  syros:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2025_Kia_Syros_1.5_HTX%2B_%28O%29_%28India%29_front_view_01.jpg",
  hyryder:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Toyota_Urban_Cruiser_Hyryder.jpg",
  verna:"https://commons.wikimedia.org/wiki/Special:Redirect/file/0_Hyundai_Verna_%28MC%29_1.jpg",
  xuv700:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2023_Mahindra_XUV700_AX7L_front.jpg",
  syrosInterior:"https://commons.wikimedia.org/wiki/Special:Redirect/file/2025_Kia_Syros_1.5_HTX%2B_%28O%29_%28India%29_interior.png",
  cretaInterior:"https://cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/VGVSDSS5YVGXVMG7ZXVNY42UCE.JPG",
  xuvInterior:"https://www.autocarindia.com/auto-images/mahindra-xuv-7xo-interior-gallery-439964",
  tharOg:"https://www.autocarindia.com/cars/mahindra/thar-og/images/front-left-three-quarter",
  tharOgInterior:"https://www.autox.com/news/car-news/2026-mahindra-thar-facelift-launched-in-india-at-rs-1032-lakh-124632/",
  nexon:"https://i.cdn.newsbytesapp.com/images/l144_8811775567095.jpg",
  classic350:"https://imgcdn.oto.com/large/gallery/exterior/100/1536/royal-enfield-classic-350-left-side-view-full-image-749296.jpg",
  duke390:"https://asset.autocarindia.com/static/models/colors/20260421_113328_27323983.webp?w=1200",
  r15:"https://auto.hindustantimes.com/_next/image?q=75&url=https%3A%2F%2Fhtcms-prod-images.s3.ap-south-1.amazonaws.com%2Fhtmobile1%2Fyamaha_r15v4%2Fimages%2Fcolours_yamaha-r15v4_white-metallic_930x620.jpg&w=1200"
};

const vehicles=[
{id:"xuv7xo",type:"car",brand:"Mahindra",name:"XUV 7XO",category:"SUV",year:2026,badge:"LATEST 2026",price:"₹13.66 Lakh*",image:img.xuv,gallery:[img.xuv,img.xuvBlack],colors:[["Everest White","#f4f4ef"],["Midnight Black","#15171a"],["Stealth Black","#292b2f"],["Galaxy Grey","#71757a"],["Nebula Blue","#254d78"],["Ruby Velvet","#6d2730"]],engines:["2.0L Turbo Petrol • 200 PS • 380 Nm","2.2L Turbo Diesel • 185 PS • 420–450 Nm"],fuel:"Petrol / Diesel",transmission:"6-speed MT / 6-speed AT",drive:"FWD / AWD (diesel)",seats:"6 / 7",mileage:"Up to 15.5 km/l (claimed)",length:"4695 mm",wheelbase:"2750 mm",features:["Coast-to-coast triple HD screens","540° surround-view camera","ADAS Level 2","16-speaker Harman Kardon + Dolby Atmos","DAVINCI suspension","Panoramic Skyroof"],official360:"https://auto.mahindra.com/360-view?cid=XUV7XO",source:"Mahindra's 2026 launch information and official 360 configurator."},
{id:"seltos",type:"car",brand:"Kia",name:"Seltos",category:"SUV",year:2026,badge:"NEW GENERATION",price:"₹15.29 Lakh*",image:img.seltos,gallery:[img.seltos],colors:[["Glacier White","#e9edf0"],["Gravity Grey","#73777c"],["Imperial Blue","#173f68"],["Magma Red","#9c2b29"],["Aurora Black","#111316"],["Pewter Olive","#777a61"],["Frost Blue","#b8d0db"]],engines:["1.5L Petrol • 115 PS","1.5L Turbo Petrol • 160 PS","1.5L Diesel • 116 PS"],fuel:"Petrol / Diesel",transmission:"6MT / 6AT / 7DCT / IVT",drive:"FWD",seats:"5",mileage:"Variant dependent",length:"4460 mm",wheelbase:"2690 mm",features:["ADAS Level 2 with 21 functions","360° camera","Dual-pane panoramic sunroof","12.3-inch HD display","Ventilated front seats","Digital key"],official360:"https://www.kia.com/in/our-vehicles/seltos/showroom.html",source:"Kia India's current Seltos showroom/specification pages."},
{id:"creta",type:"car",brand:"Hyundai",name:"Creta",category:"SUV",year:2026,badge:"POPULAR SUV",price:"₹11.11 Lakh*",image:img.creta,gallery:[img.creta,img.cretaInterior],colors:[["Atlas White","#f3f3f1"],["Fiery Red","#9d2729"],["Abyss Black","#101215"],["Titan Grey","#6f7378"],["Ranger Khaki","#6e715f"],["Robust Emerald","#17664f"]],engines:["1.5L MPI Petrol • 116 PS","1.5L Turbo GDi Petrol • 160 PS","1.5L U2 CRDi Diesel • 116 PS"],fuel:"Petrol / Diesel",transmission:"6MT / IVT / 7DCT / 6AT",drive:"FWD",seats:"5",mileage:"Up to 21.8 km/l* (variant dependent)",length:"4330 mm",wheelbase:"2610 mm",features:["10.25-inch infotainment + digital cluster","ADAS on higher trims","Panoramic sunroof","Bose premium audio","Ventilated seats","Bluelink connected car"],official360:"https://www.hyundai.com/in/en/find-a-car/creta/exterior",interiorUrl:"https://www.hyundai.com/in/en/find-a-car/creta/interior",source:"Hyundai India's 2026 Creta pages."},
{id:"syros",type:"car",brand:"Kia",name:"Syros",category:"SUV",year:2026,badge:"POPULAR",price:"₹9.00 Lakh*",image:img.syros,gallery:[img.syros,img.syrosInterior],colors:[["Aurora Black","#101216"],["Glacier White","#edf0f0"],["Magma Red","#982b2c"],["Frost Blue","#a8c8d5"],["Pewter Olive","#777a63"]],engines:["1.0L Turbo Petrol • 120 PS","1.5L Turbo Diesel • 116 PS"],fuel:"Petrol / Diesel",transmission:"6MT / 7DCT / 6AT",drive:"FWD",seats:"5",mileage:"Variant dependent",length:"3995 mm",wheelbase:"2550 mm",features:["Panoramic sunroof","Ventilated seats","360° camera on select trims","ADAS on select trims","Dual-screen cockpit","Level 2 ADAS available"],source:"Kia Syros model data; verify final variant equipment before publishing."},
{id:"hyryder",type:"car",brand:"Toyota",name:"Urban Cruiser Hyryder",category:"SUV",year:2026,badge:"HYBRID",price:"₹10.94 Lakh*",image:img.hyryder,gallery:[img.hyryder],colors:[["White","#e8e8e5"],["Silver","#a8abb0"],["Black","#111"],["Red","#a52627"]],engines:["1.5L Strong Hybrid • 116 PS system","1.5L K-Series Neo Drive • 103 PS"],fuel:"Petrol / Strong Hybrid / CNG",transmission:"5MT / 6AT / e-Drive",drive:"2WD / AWD (select)",seats:"5",mileage:"Up to 27.97 km/l* hybrid",length:"4365 mm",wheelbase:"2600 mm",features:["Strong self-charging hybrid","360° camera","Panoramic sunroof","Ventilated seats","6 airbags","Connected infotainment"],source:"Toyota Bharat 2026 information."},
{id:"verna",type:"car",brand:"Hyundai",name:"Verna",category:"Sedan",year:2026,badge:"SEDAN",price:"₹10.99 Lakh*",image:img.verna,gallery:[img.verna],colors:[["Atlas White","#eee"],["Fiery Red","#8f2729"],["Abyss Black","#111"],["Titan Grey","#72767a"]],engines:["1.5L MPI Petrol • 115 PS","1.5L Turbo Petrol • 160 PS"],fuel:"Petrol",transmission:"6MT / IVT / 7DCT",drive:"FWD",seats:"5",mileage:"Up to 20.6 km/l*",length:"4535 mm",wheelbase:"2670 mm",features:["ADAS Level 2","Ventilated seats","Electric sunroof","10.25-inch screens","Bose audio","Front parking sensors"],source:"Hyundai India current Verna range."},
{id:"xuv700",type:"car",brand:"Mahindra",name:"XUV700",category:"SUV",year:2026,badge:"FAMILY SUV",price:"₹14.49 Lakh*",image:img.xuv700,gallery:[img.xuv700],colors:[["White","#eee"],["Black","#111"],["Red","#70282d"],["Silver","#a6a9ad"]],engines:["2.0L Turbo Petrol • 200 PS","2.2L Turbo Diesel • up to 185 PS"],fuel:"Petrol / Diesel",transmission:"6MT / 6AT",drive:"FWD / AWD (select diesel)",seats:"5 / 7",mileage:"Variant dependent",length:"4695 mm",wheelbase:"2750 mm",features:["ADAS","Panoramic skyroof","7 airbags","Connected car tech","360° camera on select trims","Dual-screen cockpit"],source:"Mahindra model information; pricing varies by variant."},
{id:"cretaev",type:"car",brand:"Hyundai",name:"Creta Electric",category:"EV",year:2026,badge:"ELECTRIC",price:"₹17.99 Lakh*",image:img.creta,gallery:[img.creta,img.cretaInterior],colors:[["White","#eee"],["Blue","#477da2"],["Black","#111"],["Silver","#9ca2a7"]],engines:["42 kWh battery • up to 138 PS","51.4 kWh battery • up to 171 PS"],fuel:"Electric",transmission:"Single-speed",drive:"FWD",seats:"5",mileage:"Up to 473 km claimed range*",length:"4340 mm",wheelbase:"2610 mm",features:["Vehicle-to-load","ADAS","360° camera","Dual 10.25-inch displays","Fast charging","EV-specific cabin"],official360:"https://www.hyundai.com/in/en/find-a-car/creta-electric/exterior",interiorUrl:"https://www.hyundai.com/in/en/find-a-car/creta-electric/interior",source:"Hyundai India Creta Electric pages."},
{id:"thar",type:"car",brand:"Mahindra",name:"Thar OG",category:"SUV",year:2026,badge:"JUST LAUNCHED",price:"₹10.32 Lakh*",image:img.tharOg,gallery:[img.tharOg],colors:[["Tango Red","#9a2c2d"],["Jeans Blue","#31597d"],["Stealth Black","#111"],["Galaxy Grey","#777"],["Everest White","#eee"],["Deep Forest","#405844"],["Battleship Grey","#555"],["Artemis Silver","#aeb2b5"]],engines:["1.5L Diesel • 119 PS • RWD","2.0L Turbo Petrol • 152 PS • RWD / 4WD","2.2L Turbo Diesel • 132 PS • RWD / 4WD"],fuel:"Petrol / Diesel",transmission:"6MT / 6AT",drive:"RWD / 4WD",seats:"4",mileage:"Variant dependent",length:"3995 mm",wheelbase:"2450 mm",features:["M_Glyde 4G platform","PENTALINK suspension","DAVINCI damping","Electronic locking differential","Terrain modes","6 airbags + all-disc brakes","R19 alloys on ZXT"],official360:"https://auto.mahindra.com/own-online/variant-selection?pid=X7XOM095618025502",source:"Mahindra launched the Thar OG on 22 September 2026 at ₹10.32 lakh ex-showroom; deliveries begin 11 October 2026."},
{id:"nexon",type:"car",brand:"Tata",name:"Nexon",category:"SUV",year:2026,badge:"BESTSELLER",price:"₹8.00 Lakh*",image:img.nexon,gallery:[img.nexon],colors:[["White","#eee"],["Grey","#777"],["Blue","#315d9b"],["Red","#a32b2b"]],engines:["1.2L Turbo Petrol","1.5L Turbo Diesel","Electric variants available"],fuel:"Petrol / Diesel / EV",transmission:"MT / AMT / DCT / EV",drive:"FWD",seats:"5",mileage:"Variant dependent",length:"3995 mm",wheelbase:"2498 mm",features:["10.25-inch infotainment","360° camera on select trims","Sunroof","ADAS on select trims","Connected tech","Multiple powertrains"],source:"Indicative current-range data."}
];

const bikes=[
{id:"classic350",type:"bike",brand:"Royal Enfield",name:"Classic 350",category:"Bike",year:2026,badge:"ICON",price:"₹1.93 Lakh*",image:img.classic350,gallery:[img.classic350],colors:[["Black","#111"],["Green","#405b43"],["Red","#9c282b"],["Chrome","#c3c5c7"]],engines:["349cc single-cylinder • 20.2 PS • 27 Nm"],fuel:"Petrol",transmission:"5-speed",drive:"Chain",seats:"2",mileage:"~41 km/l*",length:"2145 mm",wheelbase:"1390 mm",features:["Dual-channel ABS","Tripper navigation on select trims","LED lighting on select trims","Classic metal design"],source:"Indicative current-range data."},
{id:"hunter350",type:"bike",brand:"Royal Enfield",name:"Hunter 350",category:"Bike",year:2026,badge:"STREET",price:"₹1.50 Lakh*",image:img.classic350,gallery:[img.classic350],colors:[["Black","#111"],["Red","#9a2528"],["Grey","#777"],["Blue","#31567e"]],engines:["349cc single-cylinder • 20.2 PS • 27 Nm"],fuel:"Petrol",transmission:"5-speed",drive:"Chain",seats:"2",mileage:"~36 km/l*",length:"2055 mm",wheelbase:"1370 mm",features:["Lightweight roadster","Dual-channel ABS","LED headlamp on select trims","Ride-by-wire style urban response"],source:"Indicative current-range data."},
{id:"duke390",type:"bike",brand:"KTM",name:"390 Duke",category:"Bike",year:2026,badge:"PERFORMANCE",price:"₹2.95 Lakh*",image:img.duke390,gallery:[img.duke390],colors:[["Orange","#e46d21"],["Black","#111"],["Grey","#777"]],engines:["399cc single-cylinder • 46 PS • 39 Nm"],fuel:"Petrol",transmission:"6-speed",drive:"Chain",seats:"2",mileage:"~30 km/l*",length:"-",wheelbase:"1357 mm",features:["Ride modes","Cornering ABS","Traction control","Quickshifter+","TFT display"],source:"Indicative current-range data."},
{id:"r15",type:"bike",brand:"Yamaha",name:"R15 V4",category:"Bike",year:2026,badge:"SPORT",price:"₹1.84 Lakh*",image:img.r15,gallery:[img.r15],colors:[["Blue","#244f8e"],["Black","#111"],["Red","#9c2727"]],engines:["155cc liquid-cooled • 18.4 PS • 14.2 Nm"],fuel:"Petrol",transmission:"6-speed",drive:"Chain",seats:"2",mileage:"~47 km/l*",length:"1990 mm",wheelbase:"1325 mm",features:["VVA engine","Assist & slipper clutch","Traction control","Dual-channel ABS","Deltabox frame"],source:"Indicative current-range data."}
];

let currentFilter="all", compareIds=[];

function safeImage(el){el.onerror=()=>{el.onerror=null;el.src=fallbackCar}}
function money(v){return v||"Price on request"}

function card(v){
 return `<article class="vehicle-card" data-type="${v.category}" data-name="${(v.brand+" "+v.name).toLowerCase()}">
   <div class="vehicle-image"><img src="${v.image}" alt="${v.brand} ${v.name}" onerror="safeImage(this)"><span class="badge">${v.badge}</span><button class="heart" onclick="toggleFavourite('${v.id}',this)">♡</button></div>
   <div class="vehicle-body"><h3>${v.brand} ${v.name}</h3><div class="meta">${v.year} • ${v.category} • ${v.fuel}</div>
   <div class="spec-row"><div class="spec"><b>${v.engines[0].split("•")[0]}</b><span>Engine</span></div><div class="spec"><b>${v.transmission}</b><span>Gearbox</span></div><div class="spec"><b>${v.seats}</b><span>Seats</span></div></div>
   <div class="price">${money(v.price)}</div><div class="actions"><button class="primary" onclick="openVehicle('${v.id}')">View Details</button><button onclick="addCompare('${v.id}')">Compare</button></div></div>
 </article>`
}

function render(){
 const cars=vehicles.filter(v=>currentFilter==="all"||v.category===currentFilter);
 document.getElementById("vehicleGrid").innerHTML=cars.map(card).join("");
 document.getElementById("latestGrid").innerHTML=vehicles.slice(0,5).map(card).join("");
 document.getElementById("bikeGrid").innerHTML=bikes.map(card).join("");
 renderBrands(); renderCompare();
}
function renderBrands(){
 const brands=[...new Set([...vehicles,...bikes].map(v=>v.brand))];
 document.getElementById("brandGrid").innerHTML=brands.map(b=>`<button class="brand-btn" onclick="filterByBrand('${b}')"><span class="brand-mark">${b.split(" ").map(x=>x[0]).join("").slice(0,2)}</span>${b}</button>`).join("");
}
function setFilter(f,btn){currentFilter=f;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");document.getElementById("cars").scrollIntoView({behavior:"smooth"});render()}
function showAll(){currentFilter="all";render()}
function filterByBrand(brand){document.getElementById("searchInput").value=brand;searchVehicles()}
function quickSearch(q){document.getElementById("searchInput").value=q;searchVehicles()}
function focusSearch(){document.getElementById("searchInput").focus();window.scrollTo({top:0,behavior:"smooth"})}
function searchVehicles(){
 const q=document.getElementById("searchInput").value.trim().toLowerCase();
 if(!q){render();
console.log("CarGenix v6 loaded — 2026 model set");return}
 const all=[...vehicles,...bikes].filter(v=>(v.brand+" "+v.name+" "+v.category+" "+v.fuel).toLowerCase().includes(q));
 document.getElementById("vehicleGrid").innerHTML=all.length?all.map(card).join(""):`<div style="grid-column:1/-1;padding:50px;text-align:center;color:#9ca8b7">No vehicle found for “${q}”. Try Creta, XUV 7XO, Seltos, Syros, Thar, BMW or KTM.</div>`;
 document.getElementById("cars").scrollIntoView({behavior:"smooth"});
}
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")searchVehicles()});

function getVehicle(id){return [...vehicles,...bikes].find(v=>v.id===id)}
function openVehicle(id){
 const v=getVehicle(id); if(!v)return;
 const swatches=v.colors.map((c,i)=>`<button title="${c[0]}" class="swatch ${i===0?"active":""}" style="background:${c[1]}" onclick="selectColor(this,'${c[0]}')"></button>`).join("");
 document.getElementById("modalContent").innerHTML=`
 <div class="detail-top">
  <div class="detail-media"><div class="detail-main"><img id="detailMainImage" src="${v.gallery[0]}" alt="${v.brand} ${v.name}" onerror="safeImage(this)"></div><div class="spin-hint">Drag the thumbnails to explore the gallery • manufacturer 360° link below when available</div><div class="thumbs">${v.gallery.map((g,i)=>`<button class="${i===0?"active":""}" onclick="changeDetailImage('${g}',this)"><img src="${g}" onerror="safeImage(this)"></button>`).join("")}</div></div>
  <div class="detail-info"><div class="tag">${v.badge} • ${v.year}</div><h2>${v.brand} ${v.name}</h2><div class="meta">${v.category} • ${v.fuel} • ${v.seats} seats</div><div class="detail-price">${money(v.price)}</div>
   <div class="option-title">COLOUR</div><div class="swatches">${swatches}</div><div id="selectedColor" class="meta" style="margin-top:9px">Selected: ${v.colors[0][0]}</div>
   <div class="option-title">ENGINE / POWERTRAIN</div><select class="select">${v.engines.map(x=>`<option>${x}</option>`).join("")}</select>
   <div class="detail-actions"><button class="primary" onclick="addCompare('${v.id}');closeModal()">＋ Add to Compare</button><button onclick="saveVehicle('${v.id}')">♡ Save</button></div>
   ${v.official360?`<div class="official">🔄 <a href="${v.official360}" target="_blank" rel="noopener">Open official 360° / configurator</a></div>`:""}
   ${v.interiorUrl?`<div class="official">🛋️ <a href="${v.interiorUrl}" target="_blank" rel="noopener">Open official interior & 360° page</a></div>`:""}
   <div class="source-note">${v.source}</div>
  </div>
 </div>
 <div class="detail-sections"><div class="tabs"><button class="tab active" onclick="detailTab('specs',this)">Specifications</button><button class="tab" onclick="detailTab('features',this)">Features</button><button class="tab" onclick="detailTab('gallery',this)">Gallery</button></div>
 <div id="detailPanel" class="tab-panel">${specPanel(v)}</div></div>`;
 document.getElementById("vehicleModal").classList.add("show");document.getElementById("vehicleModal").setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function specPanel(v){return `<div class="spec-table">
 ${[["Engine",v.engines.join(" / ")],["Fuel",v.fuel],["Transmission",v.transmission],["Drivetrain",v.drive],["Seating",v.seats],["Mileage / Range",v.mileage],["Length",v.length],["Wheelbase",v.wheelbase],["Price",v.price]].map(x=>`<div class="spec-cell"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("")}</div>`}
function featurePanel(v){return `<div class="feature-list">${v.features.map(x=>`<div class="feature">✓ ${x}</div>`).join("")}</div>`}
function galleryPanel(v){return `<div class="feature-list">${v.gallery.map((x,i)=>`<div class="feature"><img src="${x}" style="width:100%;height:220px;object-fit:contain;background:#f0f1f2;border-radius:10px" onerror="safeImage(this)"><p style="margin-top:8px">${i?"Gallery view":"Main exterior view"}</p></div>`).join("")}</div>`}
function detailTab(tab,btn){document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));btn.classList.add("active");const v=getVehicle(document.querySelector(".modal-card")?.dataset?.id); /* fallback below */ const title=document.querySelector(".detail-info h2")?.textContent||"";const vv=[...vehicles,...bikes].find(x=>`${x.brand} ${x.name}`===title);document.getElementById("detailPanel").innerHTML=tab==="specs"?specPanel(vv):tab==="features"?featurePanel(vv):galleryPanel(vv)}
function changeDetailImage(src,btn){document.getElementById("detailMainImage").src=src;document.querySelectorAll(".thumbs button").forEach(x=>x.classList.remove("active"));btn.classList.add("active")}
function selectColor(btn,name){document.querySelectorAll(".swatch").forEach(x=>x.classList.remove("active"));btn.classList.add("active");document.getElementById("selectedColor").textContent="Selected: "+name}
function closeModal(){document.getElementById("vehicleModal").classList.remove("show");document.body.style.overflow=""}
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

function addCompare(id){if(compareIds.includes(id))return;if(compareIds.length>=2)compareIds.shift();compareIds.push(id);renderCompare();document.getElementById("compare").scrollIntoView({behavior:"smooth"})}
function removeCompare(id){compareIds=compareIds.filter(x=>x!==id);renderCompare()}
function renderCompare(){
 const slots=document.getElementById("compareSlots"), table=document.getElementById("compareTable"); 
 slots.innerHTML=[0,1].map(i=>{const v=getVehicle(compareIds[i]||"");return `<div class="compare-slot">${v?`<strong>${v.brand} ${v.name}</strong><span>${v.price} • ${v.engines[0]}</span> <button class="ghost" onclick="removeCompare('${v.id}')" style="float:right">Remove</button>`:"<strong>Empty comparison slot</strong><span>Add a vehicle using the Compare button.</span>"}</div>`}).join("");
 if(compareIds.length<2){table.innerHTML="";return}
 const a=getVehicle(compareIds[0]),b=getVehicle(compareIds[1]);
 const rows=[["Brand / Model",`${a.brand} ${a.name}`,`${b.brand} ${b.name}`],["Price",a.price,b.price],["Engine",a.engines.join(" / "),b.engines.join(" / ")],["Fuel",a.fuel,b.fuel],["Transmission",a.transmission,b.transmission],["Drivetrain",a.drive,b.drive],["Seats",a.seats,b.seats],["Mileage / Range",a.mileage,b.mileage],["Length",a.length,b.length],["Wheelbase",a.wheelbase,b.wheelbase]];
 table.innerHTML=`<table class="compare-table"><tr><th>Specification</th><th>${a.name}</th><th>${b.name}</th></tr>${rows.slice(1).map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</table>`;
}
function toggleFavourite(id,btn){btn.textContent=btn.textContent==="♡"?"♥":"♡";localStorage.setItem("fav_"+id,btn.textContent==="♥"?"1":"0")}
function saveVehicle(id){localStorage.setItem("saved_"+id,"1");alert("Saved to this browser.")}
render();
