
var al_carbon_m = L.marker([38.086820, -78.469880]).addTo(map);
var alley_light_m = L.marker([38.030520, -78.482330]);
var beer_run_m = L.marker([38.024630, -78.468520]);
var belle_m = L.marker([38.0248971, -78.475415]);
var birdhouse_m = L.marker([38.0381604, -78.4845472]).addTo(map);
var bizou_m = L.marker([38.0310719, -78.4820607]);
var bodos_m = L.marker([38.0561607, -78.4965435]);
var broadcloth_m = L.marker([38.0214936, -78.4607717]); //
var cno_m = L.marker([38.0252185, -78.4696998]);
var cafe_frank_m = L.marker([38.03062709012528, -78.47951430704089]);
var conmole_m = L.marker([38.024763487802616, -78.47578686175572]);
var crushpad_m = L.marker([38.03096363152615, -78.482064459906]);
var luce_m = L.marker([38.03151803082232, -78.48198057524853]);
var fleurie_m = L.marker([38.03074006288903, -78.47972247602803]).addTo(map);
var ivy_inn_m = L.marker([38.046030361539245, -78.51623666175475]);
var lampo_m = L.marker([38.02756505114911, -78.47688086175562]);
var mas_m = L.marker([38.024439307801075, -78.47412497339937]);
var milan_indian_m = L.marker([38.060764768124734, -78.49330967524709]);
var oakhart_social_m = L.marker([38.0314250375689, -78.48807223291978]);
var pad_thai_m = L.marker([38.02481230366002, -78.46848020408447]);
var peter_chang_m = L.marker([38.05543382524484, -78.50056586175427]);
var petit_pois_m = L.marker([38.030969240340134, -78.48033249059105]);
var public_fish_m = L.marker([38.03145079000524, -78.48822351942677]);
var revolutionary_soup_m = L.marker([38.03082383888679, -78.48233750408416]);
var south_central_m = L.marker([38.03841532210556, -78.49152958874129]);
var sultan_kebab_m = L.marker([38.0287164503935, -78.48135731942685]);
var tavola_m = L.marker([38.024710303895304, -78.47534271757756]);
var ten_m = L.marker([38.03064239205715, -78.48101040408419]);
var zocalo_m = L.marker([38.03100304379837, -78.48036467709792]);
//
var union_station_m = L.marker([38.03149962596708, -78.49182173291983]);
//restaurants
const al_carbon = ["Al Carbon Chicken", "Tacos, tamales and sandwiches with rotisserie chicken", "1871 Seminole Trail", "964-1052", "$"]
const alley_light = ["The Alley Light", "Intimate small-plate spot above Revolutionary Soup", "108 Second St. SW", "296-5003", "$$"]
const beer_run = ["Beer Run", "Rotating beers on tap, six-packs and wine to take away and three meals daily", "156 Carlton Rd., Suite 203", "984-2337", "$$"]
const belle = ["Belle", "A caf??, sandwich shop and bakery, the Shanesy brothersâ?? homage to their love of food", "407 Monticello Rd, Charlottesville, VA 22902", "328-8755", "$$"]
const birdhouse = ["Birdhouse", "Farm-to-table food, simply prepared, in the coziest room in town", "711 Henry Ave, Charlottesville, VA 22903", "443-0696", "$$"]
const bizou = ["Bizou", "Upscale down-home cookinâ?? with fresh fish, pork and beef dishes", "119 W. Main St., Downtown Mall", "977-1818", "$$"]
const bodos = ["Bodo's Bagels", "Still the king of bagels in our town. ", "1418 N. Emmet St.", "977-9598", "$"]
const broadcloth = ["Broadcloth", "Modern cuisine in an elegant room in a historic textile mill", "1837 Broadway St.", "270-0555", "$$$"]
const cno = ["C&O", "Sophisticated French at a 30-plus-year-old establishment. Excellent cheese plate, extensive wine list, popular bar.", "515 E. Water St.", "971-7044", "$$$"]
const cafe_frank = ["Cafe Frank", "Upscale-casual Franco-Italian restaurant and cocktail bar on Downtown Mall", "317 E Main St.", "825-9496", "$$$"]
const conmole = ["Conmole", "With traditional family recipes, an escape to Oaxaca in Belmont", "816 Hinton Ave.", "328-2519", "$$"]
const crushpad = ["Crushpad", "Charlottesvilleâ??s wine Mecca", "118 West Main St. Suite B.", "284-7119", "$$"]
const luce = ["Luce", "Authentic Italian pizza with great crust and homemade pasta.", "110 2nd St. NW.", "No number!", "$$"]
const fleurie = ["Fleurie", "Upscale modern French restaurant gets rave reviews. Extensive wine list.", "108 Third St. NE.", "971-7800", "$$$"]
const ivy_inn = ["Ivy Inn", "Daily menu of modern American cuisine in an 18th century tollhouse.", "2244 Old Ivy Rd", "977-1222", "$$$"]
const lampo = ["Lampo", "Authentic Neapolitan pizzeria in Belmont.", "205 Monticello Rd.", "282-0607", "$."]
const mas = ["Mas", "Authentic Spanish tapas and wines in a funky, dimly lit atmosphere in the heart of Belmont", "904 Monticello Rd", "979-0990", "$$"]
const milan_indian = ["Milan Indian Cuisine", "Authentic Indian cuisine with all the standards; daily lunch buffet.", "1817 Emmet St.", "984-2828", "$$"]
const oakhart_social = ["Oakhart Social", "Seasonal Atlantic Coast food for sharing.", "511 W. Main St.", "995-5449.", "$$"]
const pad_thai = ["Pad Thai", "Homestyle Thai cooking from an experienced chef.", "156 Carlton Rd.", "293-4032", "$$"]
const peter_chang = ["Peter Chang China Grill", "Authentic Sichuan cuisine from a renowned chef.", "2162 Barracks Rd.", "244-9818.", "$$"]
const petit_pois = ["Petit Pois", "French-American bistro from the owners of Fleurie. All the chic, lower check.", "201 E. Main St.", "979-7647", "$$"]
const public_fish = ["Public Fish & Oyster", "Simply prepared, responsibly sourced seafood. Shucked oysters, raw bar and a full bar.", "513 W. Main St.", "995-5542", "$/$$"]
const revolutionary_soup = ["Revolutionary Soup", "Choose from a slew of enticing soups made daily.", "108 Second St. SW.", "296-7687", "$"]
const south_central = ["South and Central", "The Dairy Marketâ??s airy Latin American steakhouse", "946 Grady Ave.", "202-1945", "$$$"]
const sultan_kebab = ["Sultan Kebab", "Authentic Turkish food, all kind of kebabs, vegetarian dishes, salads, homemade Turkish baklava, Turkish tea and coffee.", "333 Second St. SE. ", "981-0090", "$"]
const tavola = ["Tavola", "Open kitchen serves up lovely food (pancetta-wrapped shrimp, handmade pappardelle) and an artisanal wine list. ", "826 Hinton Ave", "972-9463", "$$"]
const ten = ["Ten", "Super swanky second-floor spot serving modern Japanese", "120B E. Main St., Downtown Mall", "295-6691", "$$$"]
const zocalo = ["Zocalo", "Flavorful high-end, Latin-inspired cuisine with a full bar.", "201 E. Main St., Downtown Mall", "977-4944", "$$"]
//metro
const union_station = ["Charlottesville Union Station (CVS)", "Amtrak, Crescent, and Northeast Regional serviced train station. Opened 1885.", "810 W Main St", "872-7245", "N/A"]
//mountain ranges/nature

//uva hotspots

//trails

//historical sites
