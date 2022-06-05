var wdocjsconfig = {
    "wdocjs1": {
        "hover": "<b><u>AUSTRALIA</u></b>", //info of the popup
        "url": "https://worldsmarathons.com/c/marathon/australia", //link to any webpage
        "target": "same_window", // use "new_window", "same_window", "modal", or "none"
        "upColor": "#FFFFF3", //default color
        "overColor": "#ECFFB3", //highlight color
        "downColor": "#cae9af", //clicking color
        "active": true //true/false to activate/deactivate
    },
    "wdocjs2": {
        "hover": "<b><u>FIJI</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs3": {
        "hover": "<b><u>KIRIBATI</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#d7f57a",
        "overColor": "#beef2a",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs4": {
        "hover": "<b><u>MARSHALL ISLANDS</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs5": {
        "hover": "MICRONESIA",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs6": {
        "hover": "NAURU",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs7": {
        "hover": "NEW ZEALAND",
        "url": "https://worldsmarathons.com/c/marathon/new-zealand",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs8": {
        "hover": "PALAU",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs9": {
        "hover": "<b><u>PAPUA NEW GUINEA</u></b>",
        "url": "#mymodal",
        "target": "modal",
        "upColor": "#edff66",
        "overColor": "#cbe600",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs10": {
        "hover": "SAMOA",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs11": {
        "hover": "SOLOMON ISLANDS",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs12": {
        "hover": "TONGA",
        "url": "",
        "target": "same_window",
        "upColor": "#FFFFF3",
        "overColor": "#ECFFB3",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs13": {
        "hover": "<b><u>TUVALU</u></b>",
        "url": "",
        "target": "same_window",
        "upColor": "#f1ffc8",
        "overColor": "#d9ff66",
        "downColor": "#cae9af",
        "active": true
    },
    "wdocjs14": {
        "hover": "VANUATU",
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
for (const [country, props] of Object.entries(wdocjsconfig)) {
    if (country != "general") {
        props["upColor"] = "var(--main-site-color)";
        props["overColor"] = "var(--site-subcolor-third)";
        console.log("Colors in Oceania submap changed to var(--main-site-color)");

    } else {
        console.log("Key '" + country + "' not an item of list!");
    }
}