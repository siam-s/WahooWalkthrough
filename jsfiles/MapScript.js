var redIcon= new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
}); //used for food
var orangeIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
}); //used for uva
  //history uses regular blue
var greenIcon = new L.Icon({
	iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
}); //used for transportation


//create restaurant icons with labels and popups
var al_carbon_m = L.marker([38.086820, -78.469880], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Al Carbon Chicken </b><br>Tacos, tamales and sandwiches with rotisserie chicken<br>1871 Seminole Trail<br>964-1052<br>$").openPopup().bindTooltip("Al Carbon", {permanent: false, className: "my-label", offset: [5, -27] }),
alley_light_m = L.marker([38.030520, -78.482330], {icon: redIcon, riseOnHover: true}).bindPopup("<b>The Alley Light </b><br>Intimate small-plate spot above Revolutionary Soup<br>108 Second St. SW<br>296-5003<br>$$").openPopup().bindTooltip("The Alley", {permanent: false, className: "my-label", offset: [5, -27] }),
beer_run_m = L.marker([38.024630, -78.468520], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Beer Run</b><br>Rotating beers on tap, six-packs and wine to take away and three meals daily<br>156 Carlton Rd., Suite 203<br> 984-2337<br>$$").openPopup().bindTooltip("Beer Run", {permanent: false, className: "my-label", offset: [5, -27] }),
belle_m = L.marker([38.0248971, -78.475415], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Belle</b><br>A café, sandwich shop and bakery, the Shanesy brothers’ homage to their love of food<br>407 Monticello Rd<br>328-8755<br>$$").openPopup().bindTooltip("Belle", {permanent: false, className: "my-label", offset: [5, -27] }),
birdhouse_m = L.marker([38.0381604, -78.4845472], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Birdhouse</b><br>Farm-to-table food, simply prepared, in the coziest room in town<br>711 Henry Ave<br>443-0696<br>$$").openPopup().bindTooltip("Birdhouse", {permanent: false, className: "my-label", offset: [5, -27] }),
bizou_m = L.marker([38.0310719, -78.4820607], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Bizou</b><br>Upscale down-home cookin’ with fresh fish, pork and beef dishes<br>119 W. Main St., Downtown Mall<br>977-1818<br>$$").openPopup().bindTooltip("Bizou", {permanent: false, className: "my-label", offset: [5, -27] }),
bodos_m = L.marker([38.0561607, -78.4965435], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Bodo's Bagels</b><br>Still the king of bagels in our town. <br>1418 N. Emmet St<br>977-9598<br>$").openPopup().bindTooltip("Bodo's Bagels", {permanent: false, className: "my-label", offset: [5, -27] }),
broadcloth_m = L.marker([38.0214936, -78.4607717], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Broadcloth</b><br>Modern cuisine in an elegant room in a historic textile mill<br>1837 Broadway St.<br>270-0555<br>$$$").openPopup().bindTooltip("Broadcloth", {permanent: false, className: "my-label", offset: [5, -27] }), //
cno_m = L.marker([38.0252185, -78.4696998], {icon: redIcon, riseOnHover: true}).bindPopup("<b>C&O</b><br>Sophisticated French at a 30-plus-year-old establishment. Excellent cheese plate, extensive wine list, popular bar<br>515 E. Water St.<br>971-7044<br>$$$").openPopup().bindTooltip("C&O", {permanent: false, className: "my-label", offset: [5, -27] }),
cafe_frank_m = L.marker([38.03062709012528, -78.47951430704089], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Cafe Frank</b><br>Upscale-casual Franco-Italian restaurant and cocktail bar on Downtown Mall<br>317 E. Emmet St.<br>825-9496<br>$$$").openPopup().bindTooltip("Cafe Frank", {permanent: false, className: "my-label", offset: [5, -27] }),
conmole_m = L.marker([38.024763487802616, -78.47578686175572], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Conmole</b><br>With traditional family recipes, an escape to Oaxaca in Belmont<br>816 Hinton Ave.<br>328-2519<br>$$").openPopup().bindTooltip("Conmole", {permanent: false, className: "my-label", offset: [5, -27] }),
crushpad_m = L.marker([38.03096363152615, -78.482064459906], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Crushpad</b><br>Charlottesville’s wine Mecca.<br>118 West Main St. Suite B.<br>284-7119<br>$$").openPopup().bindTooltip("Crushpad", {permanent: false, className: "my-label", offset: [5, -27] }),
luce_m = L.marker([38.03151803082232, -78.48198057524853], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Luce</b><br>Authentic Italian pizza with great crust and homemade pasta<br>110 2nd St. NW<br>No number!<br>$$").openPopup().bindTooltip("Luce", {permanent: false, className: "my-label", offset: [5, -27] }),
fleurie_m = L.marker([38.03074006288903, -78.47972247602803], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Fleurie</b><br>Upscale modern French restaurant gets rave reviews. Extensive wine list<br>108 Third St. NE<br>971-7800<br>$$$").openPopup().bindTooltip("Fleurie", {permanent: false, className: "my-label", offset: [5, -27] }),
ivy_inn_m = L.marker([38.046030361539245, -78.51623666175475], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Ivy Inn</b><br>Daily menu of modern American cuisine in an 18th century tollhouse<br>2244 Old Ivy Rd<br>977-1222<br>$$$").openPopup().bindTooltip("Ivy Inn", {permanent: false, className: "my-label", offset: [5, -27] }),
lampo_m = L.marker([38.02756505114911, -78.47688086175562], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Lampo</b><br>Authentic Neapolitan pizzeria in Belmont<br>205 Monticello Rd<br>282-0607<br>$$").openPopup().bindTooltip("Lampo", {permanent: false, className: "my-label", offset: [5, -27] }),
mas_m = L.marker([38.024439307801075, -78.47412497339937], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Mas</b><br>Authentic Spanish tapas and wines in a funky, dimly lit atmosphere in the heart of Belmont<br>904 Monticello Rd<br>979-0990<br>$$").openPopup().bindTooltip("Mas", {permanent: false, className: "my-label", offset: [5, -27] }),
milan_indian_m = L.marker([38.060764768124734, -78.49330967524709], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Milan Indian Cuisine</b><br>Authentic Indian cuisine with all the standards; daily lunch buffet<br>1817 Emmet St<br>984-2828<br>$$").openPopup().bindTooltip("Milan Indian Cuisine", {permanent: false, className: "my-label", offset: [5, -27] }),
oakhart_social_m = L.marker([38.0314250375689, -78.48807223291978], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Oakhart Social</b><br>Seasonal Atlantic Coast food for sharing<br>511 W. Main St<br>995-5449<br>$$").openPopup().bindTooltip("Oakhart Social", {permanent: false, className: "my-label", offset: [5, -27] }),
pad_thai_m = L.marker([38.02481230366002, -78.46848020408447], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Pad Thai</b><br>Homestyle Thai cooking from an experienced chef<br>156 Carlton Rd<br>293-4032<br>$$").openPopup().bindTooltip("Pad Thai", {permanent: false, className: "my-label", offset: [5, -27] }),
peter_chang_m = L.marker([38.05543382524484, -78.50056586175427], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Peter Chang China Grill</b><brAuthentic Sichuan cuisine from a renowned chef><br>2162 Barracks Rd<br>244-9818<br>$$").openPopup().bindTooltip("Peter Chang China Grill", {permanent: false, className: "my-label", offset: [5, -27] }),
petit_pois_m = L.marker([38.030969240340134, -78.48033249059105], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Petit Pois</b><br>French-American bistro from the owners of Fleurie. All the chic, lower check<br>201 E. Main St<br>979-7647<br>$$").openPopup().bindTooltip("Petit Pois", {permanent: false, className: "my-label", offset: [5, -27] }),
public_fish_m = L.marker([38.03145079000524, -78.48822351942677], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Public Fish & Oyster</b><br>Simply prepared, responsibly sourced seafood. Shucked oysters, raw bar and a full bar<br>513 W. Main St<br>995-5542<br>$$").openPopup().bindTooltip("Public Fi", {permanent: false, className: "my-label", offset: [5, -27] }),
revolutionary_soup_m = L.marker([38.03082383888679, -78.48233750408416], {icon: redIcon, riseOnHover: true}).bindPopup("<b></b>Revolutionary Soup<br>Choose from a slew of enticing soups made daily<br>108 Second St. SW<br>296-7687<br>$").openPopup().bindTooltip("Revolutionary Soup", {permanent: false, className: "my-label", offset: [5, -27] }),
south_central_m = L.marker([38.03841532210556, -78.49152958874129], {icon: redIcon, riseOnHover: true}).bindPopup("<b>South and Central</b><br>The Dairy Market’s airy Latin American steakhouse<br>946 Grady Ave.<br>202-1945<br>$").openPopup().bindTooltip("South and Central", {permanent: false, className: "my-label", offset: [5, -27] }),
sultan_kebab_m = L.marker([38.0287164503935, -78.48135731942685], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Sultan Kebab</b><br>Authentic Turkish food, all kind of kebabs, vegetarian dishes, salads, homemade Turkish baklava, Turkish tea and coffee<br>333 Second St. SE<br>981-0090<br>$").openPopup().bindTooltip("Sultan Kebab", {permanent: false, className: "my-label", offset: [5, -27] }),
tavola_m = L.marker([38.024710303895304, -78.47534271757756], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Tavola</b><br>Open kitchen serves up lovely food (pancetta-wrapped shrimp, handmade pappardelle) and an artisanal wine list<br>826 Hinton Ave<br>972-9463<br>$$").openPopup().bindTooltip("Tavola", {permanent: false, className: "my-label", offset: [5, -27] }),
ten_m = L.marker([38.03064239205715, -78.48101040408419], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Ten</b><br>Super swanky second-floor spot serving modern Japanese<br>120B E. Main St<br>295-6691<br>$$$").openPopup().bindTooltip("Ten", {permanent: false, className: "my-label", offset: [5, -27] }),
zocalo_m = L.marker([38.03100304379837, -78.48036467709792], {icon: redIcon, riseOnHover: true}).bindPopup("<b>Zocalo</b><br>Flavorful high-end, Latin-inspired cuisine with a full bar<br>201 E. Main St, Downtown Mall<br>977-4944<br>$$").openPopup().bindTooltip("Zocalo", {permanent: false, className: "my-label", offset: [5, -27] });
//create restaurant layer group
var restaurants = L.layerGroup([al_carbon_m, alley_light_m, beer_run_m, 
	belle_m, birdhouse_m, bizou_m, 
	bodos_m, broadcloth_m, cno_m, cafe_frank_m, 
	conmole_m, crushpad_m, luce_m,
	fleurie_m, ivy_inn_m, lampo_m,
	mas_m, milan_indian_m, oakhart_social_m,
	pad_thai_m, peter_chang_m, petit_pois_m,
	public_fish_m, revolutionary_soup_m,
	south_central_m, sultan_kebab_m,
	tavola_m, ten_m, zocalo_m]);

//create transportation markers with labels and popups
var union_station_m = L.marker([38.03149962596708, -78.49182173291983], {icon: greenIcon, riseOnHover: true}).bindPopup("<b>Charlottesville Union Station (CVS)</b><br>Train station that is served by Amtrak, Crescent, and Northeast Regional. Opened in 1885<br>810 W Main St<br>872-7245").openPopup().bindTooltip("Charlottesville Union Station", {permanent: false, className: "my-label", offset: [5, -27] });
var charlottesville_airport_m = L.marker([38.13902362323027, -78.45177139999998], {icon: greenIcon, riseOnHover: true}).bindPopup("<b>Charlottesville–Albemarle Airport (CHO)</b><br>A regional airport eight miles north of Charlottesville, served by Delta, United, and American Airlines. Opened in 1955<br>100 Bowen Loop #200<br>973-8342<br>").openPopup().bindTooltip("Charlottesville Regional Airport", {permanent: false, className: "my-label", offset: [5, -27] });
//create transportation layer group
var transportation = L.layerGroup([union_station_m, charlottesville_airport_m]);

//create historical markers with labels and popups
var monticello_m = L.marker([38.0085937195138, -78.453211560453], {riseOnHover: true}).bindPopup("<b>Monticello!</b><br>President Jefferson's stately 1769 mansion & slave plantation, with tours, a museum, a cafe & more<br>1050 Monticello Loop<br>984-9800").openPopup().bindTooltip("Monticello", {permanent: false, className: "my-label", offset: [0, 0]}),
albemarle_county_circuit_court_m = L.marker([38.031647883820426, -78.47745113745796], {riseOnHover: true}).bindPopup("<b>Albemarle County Circuit Court</b><br>Originally built in 1762 by William Cabell and then rebuilt in 1803<br>501 E Jefferson St<br>972-4083").openPopup().bindTooltip("Albemarle County Circuit Court", {permanent: false, className: "my-label", offset: [0, 0] }),
belmont_m = L.marker([38.024444, -78.4775], {riseOnHover: true}).bindPopup("<b>Belmont</b><br>Also known as the Ficklin Mansion<br>756 Belmont Ave<br>No Number!").openPopup().bindTooltip("Belmont", {permanent: false, className: "my-label", offset: [0, 0] }),
albemarle_historical_society_m = L.marker([38.031795495390426, -78.4799721], {riseOnHover: true}).bindPopup("<b>Albemarle Historical Society</b><br>Founded in 1940 and is the leading steward of the history of Albemarle County, Virginia and Charlottesville, Virginia<br>200 2nd St NE<br>296-1492").openPopup().bindTooltip("Albemarle Historical Society", {permanent: false, className: "my-label", offset: [0, 0] });
//create historical layer group
var historical = L.layerGroup([monticello_m, albemarle_county_circuit_court_m, belmont_m, albemarle_historical_society_m]);

//create uva markers with labels and popups
var rotunda_m = L.marker([38.03549644470933, -78.50340454561969], {icon: orangeIcon, riseOnHover: true}).bindPopup("<b>Rotunda</b><br>designed by Thomas Jefferson to represent the \"authority of nature and power of reason\" and modeled it after the Pantheon in Rome.<br>1826 University Ave<br>924-7969").openPopup().bindTooltip("The Rotunda", {permanent: false, className: "my-label", offset: [5, -27] }),
lawn_m = L.marker([38.035220394620865, -78.50360557249279], {icon: orangeIcon, riseOnHover: true}).bindPopup("<b>The Lawn</b><br>Originally intended to be the center of the university, this terraced \"lawn\" is surrounded by housing for students and faculty and has the Rotunda sitting at the north end.<br>400 Emmet St S<br>924-0311").openPopup().bindTooltip("The Lawn", {permanent: false, className: "my-label", offset: [5, -27] }),
mad_bowl_m = L.marker([38.037680972111744, -78.50237443212666], {icon: orangeIcon, riseOnHover: true}).bindPopup("<b>Madison Bowl</b><br>A sporting grounds surrounded by Greek houses, known for being unkempt and really representing college culture.<br>160 Rugby Road<br>N/A").openPopup().bindTooltip("Madison Bowl", {permanent: false, className: "my-label", offset: [5, -27] }),
beta_bridge = L.marker([38.03953847217134, -78.50179147445529], {icon: orangeIcon, riseOnHover: true}).bindPopup("<b>Beta Bridge</b><br>Named after the fraternity it sits closest to, Beta Theta Pi, painting this bridge has become tradition since the 1970s.<br>180 Rugby Rd<br>N/A").openPopup().bindTooltip("Beta Bridge", {permanent: false, className: "my-label", offset: [5, -27] }),
memorial_to_enslaved_laborers_m = L.marker([38.035269671187386, -78.50148517445538], {icon: orangeIcon, riseOnHover: true}).bindPopup("<b>Memorial to Enslaved Laborers</b><br>A memorial in honor of those enslaved African Americans who built and worked at the University of Virginia<br>University of Virginia<br>N/A").openPopup().bindTooltip("Memorial to Enslaved Laborers", {permanent: false, className: "my-label", offset: [5, -27] }),
scott_stadium_m = L.marker([38.03110317192711, -78.51368790329134], {icon: orangeIcon, riseOnHover: true}).bindPopup("<b>Scott Stadium</b><br>Home to the Virginia Cavaliers football team, Scott Stadium is the oldest active FBS football stadium in Virginia.<br>1815 Stadium rd<br>924-8821").openPopup().bindTooltip("Scott Stadium", {permanent: false, className: "my-label", offset: [5, -27] });
//create uva layer group
var uva = L.layerGroup([rotunda_m, lawn_m, mad_bowl_m, beta_bridge, memorial_to_enslaved_laborers_m, scott_stadium_m]);

//create map tileLayer
var osmfr = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

//create actual map entity centered on Charlottesville
var map = L.map('map', {
    center: [38.081426013200484, -78.45364145268219],
    zoom: 12,
	layers: [osmfr, restaurants, historical, transportation, uva]
	
});
//creates base map on the filter-er
var baseMaps = {
	"openstreetmapfrance":  osmfr

};
//creates filter-able overlay maps on the filter-er
var overlayMaps = {
	"Restaurants": restaurants,
	"Historical Sites": historical,
	"Transportation": transportation,
	"UVA": uva

}
//add layers and layer control to the map
 var layerControl = L.control.layers(baseMaps, overlayMaps, {position:'topleft'}).addTo(map);

