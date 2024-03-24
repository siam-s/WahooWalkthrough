
function Restaurant(rName, rDescription, rAddress, rPhone, price) {
    this.rName = rName;
    this.rDescription = rDescription;
    this.rAddress = rAddress;
    this.rPhone = rPhone;
    this.price = price;
}

var nal_carbon = new Restaurant("Al Carbon Chicken", "Tacos, tamales and sandwiches with rotisserie chicken", "1871 Seminole Trail", "964-1052",  "$"),
alley_light = new Restaurant("The Alley Light", "Intimate small-plate spot above Revolutionary Soup", "108 Second St. SW", "296-5003", "$$"),
beer_run = new Restaurant("Beer Run", "Rotating beers on tap, six-packs and wine to take away and three meals daily", "156 Carlton Rd., Suite 203", "984-2337", "$$"),
belle = new Restaurant("Belle", "A café, sandwich shop and bakery, the Shanesy brothers’ homage to their love of food", "407 Monticello Rd", "328-8755", "$$"),
birdhouse = new Restaurant("Birdhouse", "Farm-to-table food, simply prepared, in the coziest room in town", "711 Henry Ave", "443-0696", "$$"),
bizou = new Restaurant("Bizou", "Upscale down-home cookin’ with fresh fish, pork and beef dishes", "119 W. Main St., Downtown Mall", "977-1818", "$$"),
bodos = new Restaurant("Bodo's Bagels", "Still the king of bagels in our town. ", "1418 N. Emmet St.", "977-9598", "$"),
broadcloth = new Restaurant("Broadcloth", "Modern cuisine in an elegant room in a historic textile mill", "1837 Broadway St.", "270-0555", "$$$"),
cno = new Restaurant("C&O", "Sophisticated French at a 30-plus-year-old establishment. Excellent cheese plate, extensive wine list, popular bar.", "515 E. Water St.", "971-7044", "$$$"),
cafe_frank = new Restaurant("Cafe Frank", "Upscale-casual Franco-Italian restaurant and cocktail bar on Downtown Mall", "317 E Main St.", "825-9496", "$$$"),
conmole = new Restaurant("Conmole", "With traditional family recipes, an escape to Oaxaca in Belmont", "816 Hinton Ave.", "328-2519", "$$"),
crushpad = new Restaurant("Crushpad", "Charlottesville’s wine Mecca.", "118 West Main St. Suite B.", "284-7119", "$$"),
luce = new Restaurant("Luce", "Authentic Italian pizza with great crust and homemade pasta.", "110 2nd St. NW.", "No number!", "$$"),
fleurie = new Restaurant("Fleurie", "Upscale modern French restaurant gets rave reviews. Extensive wine list.", "108 Third St. NE.", "971-7800", "$$$"),
ivy_inn = new Restaurant("Ivy Inn", "Daily menu of modern American cuisine in an 18th century tollhouse.", "2244 Old Ivy Rd", "977-1222", "$$$"),
lampo = new Restaurant("Lampo", "Authentic Neapolitan pizzeria in Belmont.", "205 Monticello Rd.", "282-0607", "$$"),
mas = new Restaurant("Mas", "Authentic Spanish tapas and wines in a funky, dimly lit atmosphere in the heart of Belmont", "904 Monticello Rd", "979-0990", "$$"),
milan_indian = new Restaurant("Milan Indian Cuisine", "Authentic Indian cuisine with all the standards; daily lunch buffet.", "1817 Emmet St.", "984-2828", "$$"),
oakhart_social = new Restaurant("Oakhart Social", "Seasonal Atlantic Coast food for sharing.", "511 W. Main St.", "995-5449", "$$"),
pad_thai = new Restaurant("Pad Thai", "Homestyle Thai cooking from an experienced chef.", "156 Carlton Rd.", "293-4032", "$$"),
peter_chang = new Restaurant("Peter Chang China Grill", "Authentic Sichuan cuisine from a renowned chef.", "2162 Barracks Rd.", "244-9818", "$$"),
petit_pois = new Restaurant("Petit Pois", "French-American bistro from the owners of Fleurie. All the chic, lower check.", "201 E. Main St.", "979-7647", "$$"),
public_fish = new Restaurant("Public Fish & Oyster", "Simply prepared, responsibly sourced seafood. Shucked oysters, raw bar and a full bar.", "513 W. Main St.", "995-5542", "$$"),
revolutionary_soup = new Restaurant("Revolutionary Soup", "Choose from a slew of enticing soups made daily.", "108 Second St. SW.", "296-7687", "$"),
south_central = new Restaurant("South and Central", "The Dairy Market’s airy Latin American steakhouse", "946 Grady Ave.", "202-1945", "$$$"),
sultan_kebab = new Restaurant("Sultan Kebab", "Authentic Turkish food, all kind of kebabs, vegetarian dishes, salads, homemade Turkish baklava, Turkish tea and coffee.", "333 Second St. SE.", "981-0090", "$"),
ten = new Restaurant("Ten", "Super swanky second-floor spot serving modern Japanese", "120B E. Main St., Downtown Mall", "295-6691", "$$"),
zocalo = new Restaurant("Zocalo", "Flavorful high-end, Latin-inspired cuisine with a full bar.", "201 E. Main St., Downtown Mall", "977-4944", "$$");

function Transportation(tName, tDescription, tAddress, tPhone) {
    this.tName = tName;
    this.tDescription = tDescription;
    this.tAddress = tAddress;
    this.tPhone = tPhone;
}

union_station = new Transportation("Charlottesville Union Station (CVS)", "Train station that is served by Amtrak, Crescent, and Northeast Regional. Opened in 1885.", "810 W Main St", "872-7245");


function Historical(hName, hDescription, hAddress, hPhone) {
    this.hName = hName;
    this.hDescription = hDescription;
    this.hAddress = hAddress;
    this.hPhone = hPhone;
}

var monticello = new Historical("Monticello", "President Jefferson's stately 1769 mansion & slave plantation, with tours, a museum, a cafe & more.", "1050 Monticello Loop", "984-9800"),
albemarle_county_circuit_court = new Historical("Albemarle County Circuit Court", "Originally built in 1762 by William Cabell and then rebuilt in 1803.", "501 E Jefferson St.", "972-4083"),
belmont = new Historical("Belmont", "Also known as the Ficklin Mansion.", "501 E Jefferson St.", "972-4083");