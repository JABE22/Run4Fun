var pins_config = {
    "pins": [{
            "shape": "circle", //either "circle" or "square"
            "hover": "<b><u>Kingwood, Texas</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_USA.jpg'><br><b>Texas Marathon</b><br>1. January 2022<br><b>Trips:</b><br>-Marathon<br>-Half Marathon", //info of the popup
            "pos_X": 215, //check the X, Y coordinates guide in the documentation
            "pos_Y": 365,
            "size": 0, //size of the pin
            "outline": "#000080", //outline color of the pin
            "upColor": "#1a1aff", //color of the pin when map load
            "overColor": "#66d9ff", //color of the pin when mouse hover
            "url": "https://letsportpeople.com/en/kingwood-texas-marathon_en/", //link to any webpage
            "target": "new_window", // use "new_window", "same_window", "modal", or "none"
            "active": true //true/false to activate/deactivate this pin
        },
        {
            "shape": "circle",
            "hover": "<b><u>Helsinki, Finland</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_FIN.jpg'><br><b>Helsinki Half Marathon</b><br>11. June 2022<br><b>Trips:</b><br>-Half Marathon (21 km)",
            "pos_X": 520,
            "pos_Y": 225,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK3",
            "pos_X": 20,
            "pos_Y": 100,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK4",
            "pos_X": 20,
            "pos_Y": 150,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK5",
            "pos_X": 20,
            "pos_Y": 200,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK6",
            "pos_X": 20,
            "pos_Y": 250,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK7",
            "pos_X": 20,
            "pos_Y": 300,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK8",
            "pos_X": 20,
            "pos_Y": 350,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK9",
            "pos_X": 20,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK10",
            "pos_X": 50,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK11",
            "pos_X": 100,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK12",
            "pos_X": 150,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK13",
            "pos_X": 200,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK14",
            "pos_X": 250,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BLANK15",
            "pos_X": 300,
            "pos_Y": 400,
            "size": 0, //change the size to display this pin
            "outline": "#660000",
            "upColor": "#e60000",
            "overColor": "#ffd480",
            "url": "",
            "target": "same_window",
            "active": true
        } // If you want to add more pin, you need to add comma ',' here
    ]
};

// The following is the script for pins interaction DON'T EDIT !!!
function isTouchEnabled() {
    return (("ontouchstart" in window) ||
        (navigator.MaxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}
jQuery(function() {
    var pins_len = pins_config.pins.length;
    if (pins_len > 0) {
        var xmlns = "http://www.w3.org/2000/svg";
        var tsvg_obj = document.getElementById("wddrjspins");
        var svg_circle, svg_rect;
        for (var i = 0; i < pins_len; i++) {
            if (pins_config.pins[i].shape === "circle") {
                svg_circle = document.createElementNS(xmlns, "circle");
                svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X + 1);
                svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y + 1);
                svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
                svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                tsvg_obj.appendChild(svg_circle);
                svg_circle = document.createElementNS(xmlns, "circle");
                svg_circle.setAttributeNS(null, "cx", pins_config.pins[i].pos_X);
                svg_circle.setAttributeNS(null, "cy", pins_config.pins[i].pos_Y);
                svg_circle.setAttributeNS(null, "r", pins_config.pins[i].size / 2);
                svg_circle.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
                svg_circle.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
                svg_circle.setAttributeNS(null, "stroke-width", 1);
                svg_circle.setAttributeNS(null, "id", "wddrjspins_" + i);
                tsvg_obj.appendChild(svg_circle);
                wddrjsAddEvent(i);
            } else if (pins_config.pins[i].shape === "square") {
                svg_rect = document.createElementNS(xmlns, "rect");
                svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2 + 1);
                svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2 + 1);
                svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                tsvg_obj.appendChild(svg_rect);
                svg_rect = document.createElementNS(xmlns, "rect");
                svg_rect.setAttributeNS(null, "x", pins_config.pins[i].pos_X - pins_config.pins[i].size / 2);
                svg_rect.setAttributeNS(null, "y", pins_config.pins[i].pos_Y - pins_config.pins[i].size / 2);
                svg_rect.setAttributeNS(null, "width", pins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "height", pins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "fill", pins_config.pins[i].upColor);
                svg_rect.setAttributeNS(null, "stroke", pins_config.pins[i].outline);
                svg_rect.setAttributeNS(null, "stroke-width", 1);
                svg_rect.setAttributeNS(null, "id", "wddrjspins_" + i);
                tsvg_obj.appendChild(svg_rect);
                wddrjsAddEvent(i);
            }
        }
    }
});

function wddrjsAddEvent(id) {
    var obj = jQuery("#wddrjspins_" + id);
    if (pins_config.pins[id].active === true) {
        obj.attr({ "cursor": "pointer" });
        obj.hover(function() {
            jQuery("#wddrjstip").show().html(pins_config.pins[id].hover);
            obj.css({ "fill": pins_config.pins[id].overColor });
        }, function() {
            jQuery("#wddrjstip").hide();
            obj.css({ "fill": pins_config.pins[id].upColor });
        });
        obj.mouseup(function() {
            obj.css({ "fill": pins_config.pins[id].overColor });
            if (pins_config.pins[id].target === "new_window") {
                window.open(pins_config.pins[id].url);
            } else if (pins_config.pins[id].target === "same_window") {
                window.parent.location.href = pins_config.pins[id].url;
            } else if (pins_config.pins[id].target === "modal") {
                jQuery(pins_config.pins[id].url).modal("show");
            }
        });
        obj.mousemove(function(e) {
            var x = e.pageX + 10,
                y = e.pageY + 15;
            var tipw = jQuery("#wddrjstip").outerWidth(),
                tiph = jQuery("#wddrjstip").outerHeight(),
                x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x;
            y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
            jQuery("#wddrjstip").css({ left: x, top: y });
        });
        if (isTouchEnabled()) {
            obj.on("touchstart", function(e) {
                var touch = e.originalEvent.touches[0];
                var x = touch.pageX + 10,
                    y = touch.pageY + 15;
                var tipw = jQuery("#wddrjstip").outerWidth(),
                    tiph = jQuery("#wddrjstip").outerHeight(),
                    x = (x + tipw > jQuery(document).scrollLeft() + jQuery(window).width()) ? x - tipw - (20 * 2) : x;
                y = (y + tiph > jQuery(document).scrollTop() + jQuery(window).height()) ? jQuery(document).scrollTop() + jQuery(window).height() - tiph - 10 : y;
                jQuery("#wddrjstip").show().html(pins_config.pins[id].hover);
                jQuery("#wddrjstip").css({ left: x, top: y });
            });
            obj.on("touchend", function() {
                jQuery("#" + id).css({ "fill": pins_config.pins[id].upColor });
                if (pins_config.pins[id].target === "new_window") {
                    window.open(pins_config.pins[id].url);
                } else if (pins_config.pins[id].target === "same_window") {
                    window.parent.location.href = pins_config.pins[id].url;
                } else if (pins_config.pins[id].target === "modal") {
                    jQuery(pins_config.pins[id].url).modal("show");
                }
            });
        }
    }
}