const Subcategories = {
    Brandy: ["", "apple", "cognac", "pear", "pisco"],
    Gin: ["", "london dry", "old tom", "plymouth", "genever", "sloe", "flavored"],
    Rum: ["", "dark", "white", "gold", "jamaican", "caribbean", "cachaca", "navy strength", "rhum agricole"],
    Tequila: ["", "blanco", "reposado", "mezcal"],
    Vodka: ["", "corn", "wheat", "potato", "flavored"],
    Whiskey: ["blended scotch", "bourbon", "cask-strength bourbon", "irish", "cask-strength scotch", "rye", "single malt scotch", "flavored"],
    Amaro: ["brown", "orange", "white"],
    Liqueur: ["floral", "fruit", "herb", "nut"],
    Vermouth: ["dry", "sweet"],
    Wine: ["aromatized", "fortified", "sparkling", "red", "white"],
    Beer: ["mexican lager", "irish stout"],
    Soda: ["cola", "grapefruit soda", "ginger ale", "ginger beer", "club soda", "tonic water"],
    Juice: ["cranberry", "green apple", "pineapple", "tomato", "unfiltered apple", "grapefruit", "lemon", "lime", "orange"],
    Sweetener: ["agave syrup", "brown sugar", "demerara sugar", "demerara syrup", "ginger syrup", "grenadine", "gum syrup", "honey", "honey syrup", "maple syrup", "orgeat syrup", "raspberry syrup", "rich simple syrup", "simple syrup", "white sugar", "vanilla syrup"],
    Bitters: ["angostura", "chocolate", "grapefruit", "orange", "peach", "peychauds", "pimento"],
    Produce: ["Apple", "Banana", "Green Grape", "Passionfruit", "pineapple", "red grape", "blackberry", "blueberry", "raspberry", "strawberry", "grapefruit", "lemon", "lime", "orange", "apricot", "cherry", "peach", "celery", "cucumber", "basil", "mint"],
    Condiment: ["horseradish", "orange marmalade", "raspberry jam", "hot sauce", "worcestershire sauce", "cocktail onion", "green olive", "olive brine"],
    Spices: ["allspice", "black pepper", "cayenne pepper", "celery salt", "cinnamon", "clove", "ginger", "nutmeg", "saline solution", "salt", "smoked paprika", "tajin"],
    Misc: ["water", "milk", "heavy cream", "whipped cream", "coconut milk", "coconut cream", "whole egg", "egg white", "espresso", "hot coffee", "cold brew coffee", "coffee bean", "beef bouillon", "chocolate", "orange blossom water", "vanilla extract", "boiling water", "cold water"]
}

enum BuildIn {
    "glass",
    "mixing glass",
    "shaker",
    "blender"
}

enum Category {
    "brandy",
    "gin",
    "rum",
    "tequila",
    "vodka",
    "whiskey",
    "amaro",
    "liqueur",
    "vermouth",
    "wine",
    "beer",
    "soda",
    "juice",
    "sweetener",
    "bitters",
    "produce",
    "condiment",
    "spices",
    "misc"
}

enum Glassware {
    "shot",
    "rocks",
    "coupe",
    "highball",
    "pint",
    "hurricane",
    "flute",
    "wine glass",
    "toddy"
}

enum Ice {
    "none",
    "blended",
    "crushed",
    "small cube",
    "large rock"
}

enum PrepStep {
    "Rim",
    "Rinse",
    "Muddle",
    "Combine",
    "Top",
    "Garnish",
    "Snit"
}

enum Unit {
    "barspoon",
    "tsp",
    "dash",
    "dollop",
    "drop",
    "each",
    "grating",
    "leaf",
    "oz",
    "pinch",
    "rim",
    "slice",
    "splash",
    "sprig",
    "twist",
    "swath",
    "coin",
    "zesting",
    "wheel",
    "wedge"
}

interface Ingredient {
    brand?: string;
    variety?: string;
    category: Category;
    subcategory?: string; //Subcategories[Category]
    abv?: number;
    gravity?: number;
    cost_per_ml?: number;
    tasting_notes?: string;
    history?: string;
}

interface History {
    date?: string;
    date_is_approximate?: boolean;
    author?: string;
    source?: string;
    location?: Location;
    disputed?: boolean;
    notes?: string;
}

interface ListItem {
    image: string;
    name: string;
    ingredients: string[];
    meta: ListItemMeta;
}

interface ListItemMeta {
    earliest_record?: string;
    tags?: string[];
    abv?: number;
    alcohol_servings?: number;
    gravity?: number;
    liquor_count?: number;
    pour_count?: number;
    ingredient_count?: number;
}

const List: ListItem[] = []

interface Location {
    city?: string;
    state?: string;
    country?: string;
}

interface Recipe {
    name: string;
    glassware: Glassware;
    ice: Ice;
    buildIn: BuildIn;
    ingredients: RecipeItem[];
    imageURL?: string;
    history?: History[];
    resources?: Resource[];
    tags?: string[];
    meta?: RecipeMeta;
}

interface RecipeItem {
    quantity: number;
    unit: Unit;
    ingredient: Ingredient;
    prep_step: PrepStep;
}

interface RecipeMeta {
    abv?: number;
    alcohol_servings?: number;
    gravity?: number;
    liquor_count?: number;
    pour_count?: number;
    ingredient_count?: number;
    total_cost?: number;
}

interface Resource {
    source: string;
    url: string;
}