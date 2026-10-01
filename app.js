const vehicles = [

  {
    id:'creta',
    name:'Hyundai Creta',
    brand:'Hyundai',
    kind:'car',
    type:'SUV',
    price:'Check latest',
    engine:'1.5L petrol / diesel / turbo petrol',
    power:'Up to 160 PS',
    torque:'Up to 253 Nm',
    fuel:'Petrol / Diesel',
    gearbox:'MT / IVT / DCT / AT',
    drive:'FWD',
    seats:'5',
    tag:'Popular SUV',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta%201.5%20Plus%202024.jpg'
  },

  {
    id:'thar',
    name:'Mahindra Thar',
    brand:'Mahindra',
    kind:'car',
    type:'SUV',
    price:'Check latest',
    engine:'Turbo petrol / diesel',
    power:'Up to 177 PS',
    torque:'Up to 400 Nm',
    fuel:'Petrol / Diesel',
    gearbox:'MT / AT',
    drive:'RWD / 4WD',
    seats:'4',
    tag:'Adventure',
    image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg",
  },

  {
    id:'seltos',
    name:'Kia Seltos',
    brand:'Kia',
    kind:'car',
    type:'SUV',
    price:'Check latest',
    engine:'1.5L petrol / turbo petrol / diesel',
    power:'Up to 160 PS',
    torque:'Up to 253 Nm',
    fuel:'Petrol / Diesel',
    gearbox:'MT / iMT / IVT / DCT / AT',
    drive:'FWD',
    seats:'5',
    tag:'Tech SUV',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/2026%20Kia%20Seltos.jpg'
  },

  {
    id:'city',
    name:'Honda City',
    brand:'Honda',
    kind:'car',
    type:'Sedan',
    price:'Check latest',
    engine:'1.5L petrol',
    power:'121 PS',
    torque:'145 Nm',
    fuel:'Petrol',
    gearbox:'MT / CVT',
    drive:'FWD',
    seats:'5',
    tag:'Sedan',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20City%202020.jpg'
  },

  {
    id:'nexon',
    name:'Tata Nexon',
    brand:'Tata',
    kind:'car',
    type:'SUV',
    price:'Check latest',
    engine:'1.2L turbo petrol / diesel / EV',
    power:'Varies by powertrain',
    torque:'Varies by powertrain',
    fuel:'Petrol / Diesel / EV',
    gearbox:'MT / AMT / DCT',
    drive:'FWD',
    seats:'5',
    tag:'5-star safety',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Nexon%20aero%20at%202018%20Delhi%20auto%20expo..jpg'
  },

  {
    id:'xuv3xo',
    name:'Mahindra XUV 3XO',
    brand:'Mahindra',
    kind:'car',
    type:'SUV',
    price:'Check latest',
    engine:'1.2L turbo petrol / 1.5L diesel',
    power:'Up to 131 PS',
    torque:'Up to 230 Nm',
    fuel:'Petrol / Diesel',
    gearbox:'MT / AT',
    drive:'FWD',
    seats:'5',
    tag:'Value SUV',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20XUV%203XO%202025.jpg'
  },

  {
    id:'fortuner',
    name:'Toyota Fortuner',
    brand:'Toyota',
    kind:'car',
    type:'SUV',
    price:'Check latest',
    engine:'2.7L petrol / 2.8L diesel',
    power:'Up to 204 PS',
    torque:'Up to 500 Nm',
    fuel:'Petrol / Diesel',
    gearbox:'MT / AT',
    drive:'RWD / 4WD',
    seats:'7',
    tag:'Full-size SUV',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Fortuner%20car.jpg'
  },

  {
    id:'innova',
    name:'Toyota Innova Crysta',
    brand:'Toyota',
    kind:'car',
    type:'MPV',
    price:'Check latest',
    engine:'2.4L diesel',
    power:'150 PS',
    torque:'343 Nm',
    fuel:'Diesel',
    gearbox:'MT',
    drive:'RWD',
    seats:'7 / 8',
    tag:'MPV',
    image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova%20Crysta.jpg'
  },

  {
    id:'slavia',
    name:'Skoda Slavia',
    brand:'Skoda',
    kind:'car',
    type:'Sedan',
    price:'Check latest',
    engine:'1.0L / 1.5L TSI',
    power:'Up to 150 PS',
    torque:'Up to 250 Nm',
    fuel:'Petrol',
    gearbox:'MT / AT / DSG',
    drive:'FWD',
    seats:'5',
    tag:'Turbo sedan'
  },

  {
    id:'verna',
    name:'Hyundai Verna',
    brand:'Hyundai',
    kind:'car',
    type:'Sedan',
    price:'Check latest',
    engine:'1.5L petrol / turbo petrol',
    power:'Up to 160 PS',
    torque:'Up to 253 Nm',
    fuel:'Petrol',
    gearbox:'MT / IVT / DCT',
    drive:'FWD',
    seats:'5',
    tag:'Performance sedan'
  },

  {
    id:'m340i',
    name:'BMW M340i',
    brand:'BMW',
    kind:'car',
    type:'Sports',
    price:'Check latest',
    engine:'3.0L turbo petrol',
    power:'374 PS',
    torque:'500 Nm',
    fuel:'Petrol',
    gearbox:'8-speed automatic',
    drive:'AWD',
    seats:'5',
    tag:'Performance'
  },

  {
    id:'octavia',
    name:'Škoda Octavia RS',
    brand:'Skoda',
    kind:'car',
    type:'Sports',
    price:'Check latest',
    engine:'2.0L TSI turbo petrol',
    power:'265 PS',
    torque:'370 Nm',
    fuel:'Petrol',
    gearbox:'7-speed DSG',
    drive:'FWD',
    seats:'5',
    tag:'RS'
  },

  {
    id:'hunter',
    name:'Royal Enfield Hunter 350',
    brand:'Royal Enfield',
    kind:'bike',
    type:'Cruiser',
    price:'Check latest',
    engine:'349cc single-cylinder',
    power:'20.2 PS',
    torque:'27 Nm',
    fuel:'Petrol',
    gearbox:'5-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'City bike'
  },

  {
    id:'classic',
    name:'Royal Enfield Classic 350',
    brand:'Royal Enfield',
    kind:'bike',
    type:'Cruiser',
    price:'Check latest',
    engine:'349cc single-cylinder',
    power:'20.2 PS',
    torque:'27 Nm',
    fuel:'Petrol',
    gearbox:'5-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'Iconic'
  },

  {
    id:'himalayan',
    name:'Royal Enfield Himalayan 450',
    brand:'Royal Enfield',
    kind:'bike',
    type:'Adventure',
    price:'Check latest',
    engine:'452cc single-cylinder',
    power:'40 PS',
    torque:'40 Nm',
    fuel:'Petrol',
    gearbox:'6-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'Adventure'
  },

  {
    id:'r15',
    name:'Yamaha R15',
    brand:'Yamaha',
    kind:'bike',
    type:'Sports',
    price:'Check latest',
    engine:'155cc single-cylinder',
    power:'18.4 PS',
    torque:'14.2 Nm',
    fuel:'Petrol',
    gearbox:'6-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'Sportbike'
  },

  {
    id:'duke',
    name:'KTM 390 Duke',
    brand:'KTM',
    kind:'bike',
    type:'Sports',
    price:'Check latest',
    engine:'399cc single-cylinder',
    power:'46 PS',
    torque:'39 Nm',
    fuel:'Petrol',
    gearbox:'6-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'Naked'
  },

  {
    id:'activa',
    name:'Honda Activa',
    brand:'Honda',
    kind:'bike',
    type:'Scooter',
    price:'Check latest',
    engine:'110cc class',
    power:'Varies by generation',
    torque:'Varies by generation',
    fuel:'Petrol',
    gearbox:'CVT',
    drive:'Belt drive',
    seats:'2',
    tag:'Scooter'
  },

  {
    id:'apache',
    name:'TVS Apache RTR 160',
    brand:'TVS',
    kind:'bike',
    type:'Sports',
    price:'Check latest',
    engine:'159.7cc single-cylinder',
    power:'Up to 16.5 PS',
    torque:'14.8 Nm',
    fuel:'Petrol',
    gearbox:'5-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'Street'
  },

  {
    id:'classic650',
    name:'Royal Enfield Classic 650',
    brand:'Royal Enfield',
    kind:'bike',
    type:'Cruiser',
    price:'Check latest',
    engine:'648cc parallel twin',
    power:'47 PS class',
    torque:'52 Nm class',
    fuel:'Petrol',
    gearbox:'6-speed',
    drive:'Chain drive',
    seats:'2',
    tag:'Twin-cylinder'
  }

];

const brandList = [
  'Audi','BMW','Bajaj','Ducati','Ferrari',
  'Harley-Davidson','Hero','Honda','Hyundai',
  'Kia','KTM','Lamborghini','Mahindra',
  'Maruti Suzuki','Mercedes-Benz','Nissan',
  'Porsche','Royal Enfield','Skoda','Tata',
  'Toyota','TVS','Volkswagen','Yamaha'
];

let currentFilter='all';
let lastPage='home';

const $ = id => document.getElementById(id);

function hidePages(){
  document.querySelectorAll('.page').forEach(x => x.classList.add('hidden'));
}

function setPage(id){
  hidePages();
  if($(id)) $(id).classList.remove('hidden');
  window.scrollTo({top:0,behavior:'smooth'});
}

function showHome(){
  lastPage='home';
  setPage('home');
  renderFeatured();
}

function showListing(filter='all'){
  lastPage='listing';
  currentFilter=filter;

  setPage('listing');

  if($('listingTitle')){
    $('listingTitle').textContent =
      filter==='car' ? 'Cars' :
      filter==='bike' ? 'Bikes' :
      filter==='all' ? 'All vehicles' :
      filter;
  }

  if($('listingSearch')) $('listingSearch').value='';

  if($('typeFilter')){
    $('typeFilter').value =
      ['SUV','Sedan','Hatchback','Sports','Cruiser','Adventure','Scooter'].includes(filter)
      ? filter
      : 'all';
  }

  renderListing();
}

function showBrands(){
  lastPage='brands';
  setPage('brands');

  if($('brandSearch')) $('brandSearch').value='';

  renderBrands();
}

function showCompare(){
  lastPage='compare';
  setPage('compare');
  fillCompare();
  renderCompare();
}

function showNews(){
  lastPage='news';
  setPage('news');
}

function goBack(){
  showListing(
    currentFilter==='car' || currentFilter==='bike'
    ? currentFilter
    : 'all'
  );
}

function doSearch(){

  const input = $('homeSearch');

  if(!input) return;

  const q=input.value.trim();

  if(!q){
    return showListing('all');
  }

  showListing('all');

  if($('listingTitle')){
    $('listingTitle').textContent='Search results';
  }

  if($('listingSearch')){
    $('listingSearch').value=q;
  }

  renderListing();
}

function quickSearch(q){
  if($('homeSearch')){
    $('homeSearch').value=q;
    doSearch();
  }
}

function toggleMenu(){

  if($('mainNav')){
    $('mainNav').classList.toggle('open');
  }

}

function toggleTheme(){

  document.body.classList.toggle('dark');

  localStorage.setItem(
    'cargenixTheme',
    document.body.classList.contains('dark')
    ? 'dark'
    : 'light'
  );

}

/* VEHICLE IMAGE */

function mediaBlock(v,large=false){

  if(v.image){

    return `
      <div class="vehicle-img ${large?'large-media':''}">
        <img
          src="${v.image}"
          alt="${v.name}"
          loading="lazy"
          onerror="this.parentElement.classList.add('image-error');this.style.display='none'"
        >
        <div class="image-fallback">
          <strong>${v.name}</strong>
          <span>Image unavailable</span>
        </div>
      </div>
    `;

  }

  return `
    <div class="vehicle-img ${large?'large-media':''} image-placeholder">
      <div>
        <strong>${v.name}</strong>
        <span>Vehicle image coming soon</span>
      </div>
    </div>
  `;
}


/* VEHICLE CARD */

function card(v){

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
            onclick="toggleFavorite('${v.id}',this)"
            aria-label="Save ${v.name}"
          >
            ♡
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

          <button onclick="openVehicle('${v.id}')">
            View details
          </button>

          <button onclick="addCompare('${v.id}')">
            Compare
          </button>

        </div>

      </div>

    </article>
  `;
}


/* FEATURED VEHICLES */

function renderFeatured(){

  if(!$('featuredGrid')) return;

  $('featuredGrid').innerHTML =
    vehicles
      .slice(0,8)
      .map(card)
      .join('');

  updateStats();
}


/* LISTING */

function renderListing(){

  if(!$('listingGrid')) return;

  const q =
    ($('listingSearch')?.value || '').toLowerCase();

  const type =
    $('typeFilter')?.value || 'all';

  let list = vehicles.filter(v => {

    const filterMatch =
      currentFilter==='all' ||
      (currentFilter==='car' && v.kind==='car') ||
      (currentFilter==='bike' && v.kind==='bike') ||
      v.type===currentFilter;

    const typeMatch =
      type==='all' || v.type===type;

    const searchMatch =
      !q ||
      `${v.name} ${v.brand} ${v.type} ${v.engine}`
        .toLowerCase()
        .includes(q);

    return filterMatch && typeMatch && searchMatch;

  });

  const sort =
    $('sortFilter')?.value || 'default';

  if(sort==='name'){
    list.sort((a,b)=>a.name.localeCompare(b.name));
  }

  if(sort==='brand'){
    list.sort((a,b)=>a.brand.localeCompare(b.brand));
  }

  $('listingGrid').innerHTML =
    list.length
    ? list.map(card).join('')
    : `
      <div class="empty">
        <b>No vehicles found.</b>
        <span>Try another model, brand or body type.</span>
      </div>
    `;

}


/* BRANDS */

function renderBrands(){

  if(!$('brandGrid')) return;

  const q =
    ($('brandSearch')?.value || '').toLowerCase();

  $('brandGrid').innerHTML =
    brandList
      .filter(b=>b.toLowerCase().includes(q))
      .map(b=>`

        <button onclick="brandVehicles('${b.replace(/'/g,"\\'")}')">

          <span class="brand-logo">
            ${b.slice(0,1)}
          </span>

          ${b}

          <small>
            Explore vehicles →
          </small>

        </button>

      `)
      .join('');

}

function brandVehicles(b){

  showListing('all');

  if($('listingTitle')){
    $('listingTitle').textContent=b;
  }

  if($('listingSearch')){
    $('listingSearch').value=b;
  }

  renderListing();

}


/* VEHICLE DETAILS */

function openVehicle(id){

  const v=vehicles.find(x=>x.id===id);

  if(!v) return;

  lastPage='detail';

  setPage('detail');

  if(!$('detailContent')) return;

  $('detailContent').innerHTML=`

    <div class="detail">

      <div class="detail-hero">

        ${mediaBlock(v,true)}

        <div class="detail-copy">

          <span class="eyebrow">
            ${v.brand.toUpperCase()} • ${v.type.toUpperCase()}
          </span>

          <h1>${v.name}</h1>

          <p class="detail-sub">
            ${v.tag} • ${v.seats} seats
          </p>

          <div class="detail-price">
            ${v.price}
          </div>

          <p class="notice">
            Vehicle data is structured for Cargenix.
            Before publishing exact figures or media,
            verify them against an authoritative source
            and use only media you are licensed or
            authorized to publish.
          </p>

          <div class="detail-actions">

            <button onclick="addCompare('${v.id}')">
              Add to compare
            </button>

            <button onclick="toggleFavorite('${v.id}',this)">
              ♡ Save
            </button>

          </div>

        </div>

      </div>


      <div class="spec-grid">

        ${[
          ['Engine',v.engine],
          ['Power',v.power],
          ['Torque',v.torque],
          ['Fuel',v.fuel],
          ['Transmission',v.gearbox],
          ['Drive',v.drive],
          ['Seats',v.seats],
          ['Body type',v.type],
          ['Brand',v.brand]
        ]

        .map(s=>`

          <div class="spec">

            <small>${s[0]}</small>

            <b>${s[1]}</b>

          </div>

        `)
        .join('')}

      </div>


      <div class="content-note">

        <h2>
          Real vehicle media
        </h2>

        <p>
          Cargenix uses properly licensed or
          authorized vehicle media.
          Image source and licensing information
          should be recorded before publication.
        </p>

      </div>

    </div>

  `;

}


/* COMPARE */

function fillCompare(){

  if(!$('compareA') || !$('compareB')) return;

  const opts =
    vehicles
      .map(v=>`
        <option value="${v.id}">
          ${v.name}
        </option>
      `)
      .join('');

  $('compareA').innerHTML=opts;
  $('compareB').innerHTML=opts;

  if(vehicles[1]){
    $('compareB').value=vehicles[1].id;
  }

}

function addCompare(id){

  showCompare();

  if($('compareA')){
    $('compareA').value=id;
  }

  renderCompare();

}

function renderCompare(){

  if(!$('compareTable')) return;

  const a =
    vehicles.find(
      v=>v.id===$('compareA')?.value
    );

  const b =
    vehicles.find(
      v=>v.id===$('compareB')?.value
    );

  if(!a || !b) return;

  const rows=[
    ['Type',a.type,b.type],
    ['Price',a.price,b.price],
    ['Engine',a.engine,b.engine],
    ['Power',a.power,b.power],
    ['Torque',a.torque,b.torque],
    ['Fuel',a.fuel,b.fuel],
    ['Transmission',a.gearbox,b.gearbox],
    ['Drive',a.drive,b.drive],
    ['Seats',a.seats,b.seats]
  ];

  $('compareTable').innerHTML=`

    <div class="compare-table">

      <div class="compare-head">

        <span>Specification</span>

        <b>${a.name}</b>

        <b>${b.name}</b>

      </div>

      ${rows.map(r=>`

        <div>

          <span>
            <b>${r[0]}</b>
          </span>

          <span>${r[1]}</span>

          <span>${r[2]}</span>

        </div>

      `).join('')}

    </div>

  `;

}


/* FAVORITES */

function toggleFavorite(id,btn){

  let fav =
    JSON.parse(
      localStorage.getItem('cargenixFavs') || '[]'
    );

  fav =
    fav.includes(id)
    ? fav.filter(x=>x!==id)
    : [...fav,id];

  localStorage.setItem(
    'cargenixFavs',
    JSON.stringify(fav)
  );

  if(btn){
    btn.textContent =
      fav.includes(id)
      ? '♥'
      : '♡';
  }

}


/* STATS */

function updateStats(){

  if($('vehicleCount')){
    $('vehicleCount').textContent =
      vehicles.length + '+';
  }

  if($('brandCount')){
    $('brandCount').textContent =
      brandList.length + '+';
  }

}


/* THEME */

if(
  localStorage.getItem('cargenixTheme')==='dark'
){
  document.body.classList.add('dark');
}


/* START */

showHome();
