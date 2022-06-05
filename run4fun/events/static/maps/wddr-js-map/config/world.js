var wddrjsconfig = {
    "wddrjs1": {
        "hover": "<b><u>AFRICA</u></b><br><span style='color: #999;'>Click to drill down</span>", //info of the popup
        "active": true, //true/false to activate/deactivate
        "target": "zoom", // use "zoom", "modal", "new_window", "same_window", or "none"
        "url": "", //link to any webpage
        "upColor": "var(--main-site-color)", //default color
        "overColor": "var(--site-subcolor-third)", //highlight color
        "downColor": "#cae9af", //clicking color
        "zoomto": "afmapbase" //PLEASE DON"T CHANGE THIS
    },
    "wddrjs2": {
        "hover": "<b><u>ASIA</u></b><br><span style='color: #999;'>Click to drill down</span>",
        "active": true,
        "target": "zoom",
        "url": "",
        "upColor": "var(--main-site-color)",
        "overColor": "var(--site-subcolor-third)",
        "downColor": "#cae9af",
        "zoomto": "asmapbase"
    },
    "wddrjs3": {
        "hover": "<b><u>EUROPE</u></b><br><span style='color: #999;'>Click to drill down</span>",
        "active": true,
        "target": "zoom",
        "url": "",
        "upColor": "var(--main-site-color)",
        "overColor": "var(--site-subcolor-third)",
        "downColor": "#cae9af",
        "zoomto": "eumapbase"
    },
    "wddrjs4": {
        "hover": "<b><u>NORTH AMERICA</u></b><br><span style='color: #999;'>Click to drill down</span>",
        "active": true,
        "target": "zoom",
        "url": "https://worldsmarathons.com/c/marathon/united-states",
        "upColor": "var(--main-site-color)",
        "overColor": "var(--site-subcolor-third)",
        "downColor": "#cae9af",
        "zoomto": "namapbase"
    },
    "wddrjs5": {
        "hover": "<b><u>OCEANIA</u></b><br><span style='color: #999;'>Click to drill down</span>",
        "active": true,
        "target": "zoom",
        "url": "",
        "upColor": "var(--main-site-color)",
        "overColor": "var(--site-subcolor-third)",
        "downColor": "#cae9af",
        "zoomto": "ocmapbase"
    },
    "wddrjs6": {
        "hover": "<b><u>SOUTH AMERICA</u></b><br><span style='color: #999;'>Click to drill down</span>",
        "active": true,
        "target": "zoom",
        "url": "",
        "upColor": "var(--main-site-color)",
        "overColor": "var(--site-subcolor-third)",
        "downColor": "#cae9af",
        "zoomto": "samapbase"
    },
    "general": {
        "borderColor": "var(--map-border-color)",
        "visibleNames": "#adadad"
    }
};

// This for loop will change key values in the object above.
/* Not needed for now
for (const [country, props] of Object.entries(wddrjsconfig)) {
    if (country != "general") {
        props["upColor"] = "var(--main-site-color)";
        console.log("Colors in World Map changed to var(--main-site-color)");

    } else {
        console.log("Key '" + country + "' not an item of list!");
    }
}
*/