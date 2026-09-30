const vehicles=[
{name:"Hyundai Creta",type:"car",category:"SUV",brand:"Hyundai",price:"₹11–20.15 Lakh",power:"115–160 PS",fuel:"Petrol / Diesel"},
{name:"Mahindra Thar",type:"car",category:"SUV",brand:"Mahindra",price:"₹11–18 Lakh",power:"119–150 PS",fuel:"Petrol / Diesel"},
{name:"Tata Nexon",type:"car",category:"SUV",brand:"Tata",price:"₹8–15.60 Lakh",power:"100–120 PS",fuel:"Petrol / Diesel / EV"},
{name:"Kia Seltos",type:"car",category:"SUV",brand:"Kia",price:"₹11–20 Lakh",power:"116–160 PS",fuel:"Petrol / Diesel"},
{name:"Honda City",type:"car",category:"Sedan",brand:"Honda",price:"₹11.95–16.55 Lakh",power:"121 PS",fuel:"Petrol"},
{name:"BMW 3 Series",type:"car",category:"Sports",brand:"BMW",price:"₹60 Lakh+",power:"258 PS",fuel:"Petrol"},
{name:"Tata Curvv EV",type:"car",category:"Electric",brand:"Tata",price:"₹17.49 Lakh+",power:"167–167 PS",fuel:"Electric"},
{name:"Toyota Fortuner",type:"car",category:"SUV",brand:"Toyota",price:"₹33 Lakh+",power:"204 PS",fuel:"Diesel / Petrol"},
{name:"Royal Enfield Classic 350",type:"bike",category:"Cruiser",brand:"Royal Enfield",price:"₹1.95 Lakh+",power:"20.2 PS",fuel:"Petrol"},
{name:"Yamaha R15",type:"bike",category:"Sports",brand:"Yamaha",price:"₹1.67 Lakh+",power:"18.4 PS",fuel:"Petrol"},
{name:"KTM 390 Adventure",type:"bike",category:"Adventure",brand:"KTM",price:"₹3.4 Lakh+",power:"46 PS",fuel:"Petrol"},
{name:"BMW G 310 GS",type:"bike",category:"Adventure",brand:"BMW Motorrad",price:"₹3.3 Lakh+",power:"34 PS",fuel:"Petrol"}
];

const brands=["Maruti Suzuki","Hyundai","Tata Motors","Mahindra","Toyota","Kia","Honda","Skoda","Volkswagen","BMW","Mercedes-Benz","Audi","Porsche","Royal Enfield","Hero","Honda 2Wheelers","TVS","Bajaj","Yamaha","KTM","Kawasaki","Ducati","Triumph","BMW Motorrad"];

function card(v){
return `<article class="card"><div class="card-media">REAL ${v.type.toUpperCase()} MEDIA<br><small>Licensed photo to be added</small></div><div class="card-body"><div class="card-top"><h3>${v.name}</h3><span class="tag">${v.category}</span></div><div class="price">${v.price}</div><div class="specs"><span>${v.power}</span><span>${v.fuel}</span><span>${v.brand}</span><span>Detailed specs</span></div><div class="card-actions"><button onclick="alert('Vehicle detail page will be added in the next Cargenix update.')">View details</button><button onclick="addCompare('${v.name}')">Compare</button></div></div></article>`
}
function render(kind="car",filter="all"){
const arr=vehicles.filter(v=>v.type===kind&&(filter==="all"||v.category===filter));
document.getElementById(kind==="car"?"carGrid":"bikeGrid").innerHTML=arr.map(card).join("");
}
render("car");render("bike");

document.querySelectorAll(".tabs button").forEach(b=>b.addEventListener("click",()=>{
const kind=b.dataset.kind;document.querySelectorAll(`.tabs button[data-kind="${kind}"]`).forEach(x=>x.classList.remove("active"));b.classList.add("active");render(kind,b.dataset.filter);
}));

const brandsEl=document.getElementById("brandGrid");brandsEl.innerHTML=brands.map(b=>`<button class="brand" onclick="searchBrand('${b}')">${b}</button>`).join("");

const searchInput=document.getElementById("searchInput"),results=document.getElementById("searchResults");
function doSearch(){
const q=searchInput.value.trim().toLowerCase(); if(!q){results.style.display="none";return}
const found=vehicles.filter(v=>(v.name+" "+v.brand+" "+v.category+" "+v.type).toLowerCase().includes(q)).slice(0,7);
results.innerHTML=found.length?found.map(v=>`<div class="result" onclick="chooseResult('${v.name}')"><b>${v.name}</b><small>${v.brand} • ${v.category} • ${v.price}</small></div>`).join(""):`<div class="result"><b>No vehicle in the demo database yet</b><small>Next step: expand the database.</small></div>`;
results.style.display="block";
}
searchInput.addEventListener("input",doSearch);document.getElementById("searchBtn").addEventListener("click",doSearch);
function chooseResult(name){searchInput.value=name;results.style.display="none";alert(name+" selected. Full vehicle pages are the next database upgrade.");}
function searchBrand(b){searchInput.value=b;document.getElementById("home").scrollIntoView();doSearch()}
document.querySelectorAll(".quick-grid button").forEach(b=>b.addEventListener("click",()=>{searchInput.value=b.dataset.query;document.getElementById("home").scrollIntoView();doSearch()}));

const allNames=vehicles.map(v=>v.name);const a=document.getElementById("compareA"),bb=document.getElementById("compareB");
vehicles.forEach(v=>{a.innerHTML+=`<option>${v.name}</option>`;bb.innerHTML+=`<option>${v.name}</option>`});
function addCompare(name){if(!a.value)a.value=name;else if(!bb.value)bb.value=name;document.getElementById("compare").scrollIntoView()}
document.getElementById("compareBtn").addEventListener("click",()=>{
const x=vehicles.find(v=>v.name===a.value),y=vehicles.find(v=>v.name===bb.value);if(!x||!y){alert("Choose two vehicles first.");return}
const rows=[["Price",x.price,y.price],["Power",x.power,y.power],["Fuel",x.fuel,y.fuel],["Category",x.category,y.category],["Brand",x.brand,y.brand]];
document.getElementById("compareOutput").innerHTML=`<div class="comparison">${rows.map(r=>`<div><b>${r[0]}</b><span>${r[1]}</span><span>${r[2]}</span></div>`).join("")}</div>`;
});
document.getElementById("themeBtn").addEventListener("click",()=>document.body.classList.toggle("dark"));
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("mobileNav").classList.toggle("open"));
