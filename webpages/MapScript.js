var al_carbon_m = L.marker([38.086820, -78.469880]),
alley_light_m = L.marker([38.030520, -78.482330]),
beer_run_m = L.marker([38.024630, -78.468520]),
belle_m = L.marker([38.0248971, -78.475415]),
birdhouse_m = L.marker([38.0381604, -78.4845472]),
bizou_m = L.marker([38.0310719, -78.4820607]),
bodos_m = L.marker([38.0561607, -78.4965435]),
broadcloth_m = L.marker([38.0214936, -78.4607717]), //
cno_m = L.marker([38.0252185, -78.4696998]),
cafe_frank_m = L.marker([38.03062709012528, -78.47951430704089]),
conmole_m = L.marker([38.024763487802616, -78.47578686175572]),
crushpad_m = L.marker([38.03096363152615, -78.482064459906]),
luce_m = L.marker([38.03151803082232, -78.48198057524853]),
fleurie_m = L.marker([38.03074006288903, -78.47972247602803]),
ivy_inn_m = L.marker([38.046030361539245, -78.51623666175475]),
lampo_m = L.marker([38.02756505114911, -78.47688086175562]),
mas_m = L.marker([38.024439307801075, -78.47412497339937]),
milan_indian_m = L.marker([38.060764768124734, -78.49330967524709]),
oakhart_social_m = L.marker([38.0314250375689, -78.48807223291978]),
pad_thai_m = L.marker([38.02481230366002, -78.46848020408447]),
peter_chang_m = L.marker([38.05543382524484, -78.50056586175427]),
petit_pois_m = L.marker([38.030969240340134, -78.48033249059105]),
public_fish_m = L.marker([38.03145079000524, -78.48822351942677]),
revolutionary_soup_m = L.marker([38.03082383888679, -78.48233750408416]),
south_central_m = L.marker([38.03841532210556, -78.49152958874129]),
sultan_kebab_m = L.marker([38.0287164503935, -78.48135731942685]),
tavola_m = L.marker([38.024710303895304, -78.47534271757756]),
ten_m = L.marker([38.03064239205715, -78.48101040408419]),
zocalo_m = L.marker([38.03100304379837, -78.48036467709792]);

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

var union_station_m = L.marker([38.03149962596708, -78.49182173291983]);

var transportation = L.layerGroup([union_station_m]);

var monticello_m = L.marker([38.0085937195138, -78.453211560453]),
albemarle_county_circuit_court_m = L.marker([38.031647883820426, -78.47745113745796]),
belmont_m = L.marker([38.024444, -78.4775]),
albemarle_historical_society_m = L.marker([38.031795495390426, -78.4799721]);

var historical = L.layerGroup([monticello_m, albemarle_county_circuit_court_m, belmont_m, albemarle_historical_society_m]);

var rotunda_m = L.marker([]),
lawn_m = L.marker([]),
mad_bowl_m = L.marker([]),
beta_bridge = L.marker([]),
memorial_to_enslaved_laborers_m = L.marker([]),
scott_stadium_m = L.marker([]);

var osmfr = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; OpenStreetMap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


var map = L.map('map', {
    center: [38.051426013200484, -78.48364145268219],
    zoom: 11,
	layers: [osmfr, restaurants,historical, transportation]
	
});

var baseMaps = {
	"openstreetmapfrance":  osmfr

};

var overlayMaps = {
	"Restaurants": restaurants,
	"Historical Sites": historical,
	"Transportation": transportation

}

 var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

