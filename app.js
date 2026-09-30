const vehicles = [
  {id:"creta",type:"car",brand:"Hyundai",name:"Creta",category:"SUV",price:11,displayPrice:"₹11 lakh*",fuel:"Petrol / Diesel",transmission:"Manual / Auto",engine:"1.5L",power:"160 PS",torque:"253 Nm",mileage:"Up to 21.8 km/l",dna:{performance:86,comfort:91,safety:90,technology:92,family:94}},
  {id:"nexon",type:"car",brand:"Tata",name:"Nexon",category:"SUV",price:8,displayPrice:"₹8 lakh*",fuel:"Petrol / Diesel / EV",transmission:"Manual / AMT / DCT",engine:"1.2L / 1.5L",power:"120 PS",torque:"170 Nm",mileage:"Up to 24 km/l",dna:{performance:80,comfort:84,safety:94,technology:88,family:92}},
  {id:"seltos",type:"car",brand:"Kia",name:"Seltos",category:"SUV",price:11,displayPrice:"₹11 lakh*",fuel:"Petrol / Diesel",transmission:"Manual / Auto",engine:"1.5L",power:"160 PS",torque:"253 Nm",mileage:"Up to 20.7 km/l",dna:{performance:88,comfort:90,safety:91,technology:93,family:90}},
  {id:"city",type:"car",brand:"Honda",name:"City",category:"Sedan",price:12,displayPrice:"₹12 lakh*",fuel:"Petrol",transmission:"Manual / CVT",engine:"1.5L",power:"121 PS",torque:"145 Nm",mileage:"Up to 18.4 km/l",dna:{performance:76,comfort:92,safety:90,technology:84,family:91}},
  {id:"tiago-ev",type:"car",brand:"Tata",name:"Tiago EV",category:"Electric",price:8,displayPrice:"₹8 lakh*",fuel:"Electric",transmission:"Automatic",engine:"EV",power:"61 PS",torque:"110 Nm",mileage:"Up to 315 km range",dna:{performance:70,comfort:82,safety:84,technology:90,family:85}},
  {id:"m340i",type:"car",brand:"BMW",name:"M340i",category:"Sports",price:75,displayPrice:"₹75 lakh*",fuel:"Petrol",transmission:"Automatic",engine:"3.0L Turbo",power:"374 PS",torque:"500 Nm",mileage:"Performance focused",dna:{performance:99,comfort:88,safety:93,technology:97,family:72}},
  {id:"classic350",type:"bike",brand:"Royal Enfield",name:"Classic 350",category:"Cruiser",price:2,displayPrice:"₹2 lakh*",fuel:"Petrol",transmission:"5-speed",engine:"349cc",power:"20.2 PS",torque:"27 Nm",mileage:"Around 40 km/l",dna:{performance:70,comfort:91,safety:78,technology:68,family:76}},
  {id:"r15",type:"bike",brand:"Yamaha",name:"R15",category:"Sports",price:2,displayPrice:"₹2 lakh*",fuel:"Petrol",transmission:"6-speed",engine:"155cc",power:"18.4 PS",torque:"14.2 Nm",mileage:"Around 45 km/l",dna:{performance:88,comfort:65,safety:82,technology:85,family:55}},
  {id:"duke390",type:"bike",brand:"KTM",name:"390 Duke",category:"Sports",price:3,displayPrice:"₹3 lakh*",fuel:"Petrol",transmission:"6-speed",engine:"399cc",power:"46 PS",torque:"39 Nm",mileage:"Performance focused",dna:{performance:97,comfort:68,safety:86,technology:94,family:56}},
  {id:"450x",type:"bike",brand:"Ather",name:"450X",category:"Electric",price:1.5,displayPrice:"₹1.5 lakh*",fuel:"Electric",transmission:"Automatic",engine:"EV",power:"7.3 kW",torque:"26 Nm",mileage:"Range varies",dna:{performance:82,comfort:80,safety:84,technology:96,family:73}}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function vehicleCard(v){
  return `<article class="vehicle-card">
    <div class="vehicle-image">REAL VEHICLE MEDIA<br><small>Upload licensed photo</small></div>
    <div class="vehicle-body">
      <div class="vehicle-top"><div class="vehicle-name">${v.brand} ${v.name}</div><span class="tag">${v.category}</span></div>
      <div class="vehicle-price">${v.displayPrice}</div>
      <div class="spec-line"><span>${v.engine}</span><span>${v.power}</span><span>${v.fuel}</span></div>
      <div class="card-actions"><button onclick="showDNA('${v.id}')">Vehicle DNA</button><button onclick="addCompare('${v.id}')">Compare</button></div>
    </div>
  </article>`;
}

function render(type="car", value="all"){
  const list = vehicles.filter(v=>v.type===type && (value==="all" || v.category===value));
  const grid = type==="car" ? $("#carGrid") : $("#bikeGrid");
  grid.innerHTML = list.map(vehicleCard).join("") || `<p class="muted">No vehicles in this filter yet.</p>`;
}
render("car"); render("bike");

$$(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const type=btn.dataset.type,value=btn.dataset.value;
    $$(`.filter[data-type="${type}"]`).forEach(x=>x.classList.remove("active"));
    btn.classList.add("active"); render(type,value);
  });
});

$$(".category").forEach(btn=>btn.addEventListener("click",()=>{
  const value=btn.dataset.filter;
  document.querySelector("#cars").scrollIntoView({behavior:"smooth"});
  const type = ["Cruiser","Adventure"].includes(value) ? "bike" : "car";
  const target=$(`.filter[data-type="${type}"][data-value="${value}"]`);
  if(target){target.click()} else render(type,value);
}));

function fillCompare(){
  const options=vehicles.map(v=>`<option value="${v.id}">${v.brand} ${v.name}</option>`).join("");
  $("#compareA").innerHTML=options; $("#compareB").innerHTML=options;
  $("#compareB").selectedIndex=Math.min(1,vehicles.length-1);
}
fillCompare();

function compare(){
  const a=vehicles.find(v=>v.id===$("#compareA").value), b=vehicles.find(v=>v.id===$("#compareB").value);
  if(!a||!b)return;
  const rows=[["Price",a.displayPrice,b.displayPrice],["Engine",a.engine,b.engine],["Power",a.power,b.power],["Torque",a.torque,b.torque],["Mileage / Range",a.mileage,b.mileage],["Fuel",a.fuel,b.fuel],["Transmission",a.transmission,b.transmission]];
  $("#compareOutput").innerHTML=`<div class="comparison"><h3>${a.brand} ${a.name} <span style="color:var(--accent)">vs</span> ${b.brand} ${b.name}</h3>${rows.map(r=>`<div class="comparison-row"><div>${r[0]}</div><div>${r[1]}</div><div>${r[2]}</div></div>`).join("")}</div>`;
}
$("#compareBtn").addEventListener("click",compare);

function addCompare(id){
  $("#compareA").value=id; document.querySelector("#compare").scrollIntoView({behavior:"smooth"});
}
window.addCompare=addCompare;

function showDNA(id){
  const v=vehicles.find(x=>x.id===id); if(!v)return;
  alert(`${v.brand} ${v.name} — Vehicle DNA\nPerformance ${v.dna.performance}/100\nComfort ${v.dna.comfort}/100\nSafety ${v.dna.safety}/100\nTechnology ${v.dna.technology}/100\nFamily ${v.dna.family}/100`);
}
window.showDNA=showDNA;

$("#recommendBtn").addEventListener("click",()=>{
  const budget=Number($("#budget").value),priority=$("#priority").value;
  let matches=vehicles.filter(v=>v.price<=budget);
  if(priority==="electric") matches=matches.filter(v=>v.fuel==="Electric");
  if(priority==="performance") matches.sort((a,b)=>b.dna.performance-a.dna.performance);
  if(priority==="family") matches.sort((a,b)=>b.dna.family-a.dna.family);
  if(priority==="mileage") matches.sort((a,b)=>b.dna.comfort-a.dna.comfort);
  const v=matches[0];
  $("#recommendation").innerHTML=v?`<strong>${v.brand} ${v.name}</strong><br><span class="muted">A good starting match for your ${priority} priority and budget.</span>`:`<span class="muted">No demo vehicle matches yet. Add more vehicles through your future admin panel.</span>`;
});

const searchInput=$("#searchInput"),results=$("#searchResults");
function search(){
  const q=searchInput.value.trim().toLowerCase();
  if(!q){results.classList.remove("show");return}
  const found=vehicles.filter(v=>`${v.brand} ${v.name} ${v.category} ${v.engine} ${v.fuel} ${v.power}`.toLowerCase().includes(q)).slice(0,7);
  results.innerHTML=found.length?found.map(v=>`<div class="search-item" onclick="pickSearch('${v.id}')"><span><b>${v.brand} ${v.name}</b><br><small>${v.category} · ${v.engine}</small></span><span>${v.displayPrice}</span></div>`).join(""):`<div class="search-item">No demo match. Try another search.</div>`;
  results.classList.add("show");
}
searchInput.addEventListener("input",search); $("#searchBtn").addEventListener("click",search);
window.pickSearch=(id)=>{results.classList.remove("show");searchInput.value="";showDNA(id)};
document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))results.classList.remove("show")});

$("#menuBtn").addEventListener("click",()=>$("#mobileNav").classList.toggle("show"));
$$(".mobile-nav a").forEach(a=>a.addEventListener("click",()=>$("#mobileNav").classList.remove("show")));

$("#themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("dark");
  $("#themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾";
});
