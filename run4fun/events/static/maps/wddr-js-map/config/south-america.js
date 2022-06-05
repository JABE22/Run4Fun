var wdsajsconfig = {
    "wdsajs1": {
        "hover": "ARGENTINA", //info of the popup
        "url": "", //link to any webpage
        "target": "same_window", // use "new_window", "same_window", "modal", or "none"
        "upColor": "#FFFFF3", //default color
        "overColor": "#ECFFB3", //highlight color
        "downColor": "#cae9af", //clicking color
        "active": true //true/false to activate/deactivate
    },
    "wdsajs2": {
        "hover": "<b><u>BOLIVIA</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs3": {
        "hover": "<b><u>BRAZIL</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#d7f57a",
        "overColor": "#beef2a",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs4": {
        "hover": "<b><u>CHILE</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs5": {
        "hover": "<b><u>COLOMBIA</u></b>",
        "url": "#mymodal",
        "target": "modal",
        "upColor": "#edff66",
        "overColor": "#cbe600",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs6": {
        "hover": "ECUADOR",
        "url": "",
        "target": "same_window",
        "upColor": "#E0E2E2",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": false
    },
    "wdsajs7": {
        "hover": "FALKLAND ISLANDS",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs8": {
        "hover": "FRENCH GUIANA",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs9": {
        "hover": "GUYANA",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs10": {
        "hover": "PARAGUAY",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs11": {
        "hover": "PERU",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs12": {
        "hover": "SURINAME",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs13": {
        "hover": "<b><u>URUGUAY</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdsajs14": {
        "hover": "VENEZUELA",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "general": {
        "borderColor": "var(--map-border-color)",
        "visibleNames": "#adadad"
    }
};

// This for loop will change key values in the object above. 
for (const [country, props] of Object.entries(wdsajsconfig)) {
    if (country != "general") {
        props["upColor"] = "var(--main-site-color)";
        props["overColor"] = "var(--site-subcolor-third)";
        console.log("Colors in South America submap changed to var(--main-site-color)");

    } else {
        console.log("Key '" + country + "' not an item of list!");
    }
}