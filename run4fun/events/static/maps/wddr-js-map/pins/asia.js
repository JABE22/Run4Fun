var aspins_config = {
    "pins": [{
            "shape": "circle", //either "circle" or "square"
            "hover": "<b><u>DELHI</u></b><br>Write any text and load images<br><img src='example.png'>", //info of the popup
            "pos_X": 437, //check the X, Y coordinates guide in the documentation
            "pos_Y": 339,
            "size": 0, //size of the pin
            "outline": "#000080", //outline color of the pin
            "upColor": "cornsilk", //color of the pin when map load
            "overColor": "gold", //color of the pin when mouse hover
            "url": "", //link to any webpage
            "target": "new_window", // use "new_window", "same_window", "modal", or "none"
            "active": true //true/false to activate/deactivate this pin
        },
        {
            "shape": "circle",
            "hover": "<b><u>KHANGSAR, Nepal</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_NPL.jpg'><br><b>Yeti Marathon Nepal-<br>Run in the Himalayas</b><br><hr>10. October 2022<br><b><hr></b>-Marathon<br>-Half Marathon (21 km)<br>-10 km, 1 km", //info of the popup
            "pos_X": 480,
            "pos_Y": 350,
            "size": 14,
            "outline": "#000080",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/yeti-marathon-nepal",
            "target": "new_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>TAIPEI, Taiwan</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_TWN.jpg'><br><b>Taipei International Marathon</b><hr>19. December 2021<br><b></b><hr>-Marathon (42 km)<br>-Half Marathon (21 km)", //info of the popup
            "pos_X": 712,
            "pos_Y": 375,
            "size": 14,
            "outline": "#000080",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/taipei-marathon",
            "target": "new_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>SHANGHAI</u></b><br><span style='color: #bcbcbc;'>Street Address:</span><br>&nbsp;321 Example, Address 54321<br><span style='color: #bcbcbc;'>Telephone:</span><br>&nbsp;(256) 555-4321 / (256) 555-1234",
            "pos_X": 701,
            "pos_Y": 330,
            "size": 0,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>ISTANBUL</u></b><br><span style='color: #999;'>Click to open a modal window!</span><br><span style='color: #ff6666;'><b>Modal Window Option is Compatible<br> with Bootstrap Only.</b></span>",
            "pos_X": 145,
            "pos_Y": 260,
            "size": 0,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "#mymodal",
            "target": "modal",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>KARACHI</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
            "pos_X": 383,
            "pos_Y": 372,
            "size": 0,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "JAKARTA",
            "pos_X": 645,
            "pos_Y": 596,
            "size": 0,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "TOKYO",
            "pos_X": 793,
            "pos_Y": 302,
            "size": 0,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>EIN BOKEK, Israel</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_ISR.jpg'><br><b>Dead Sea Marathon Israel</b><br><hr>4. February 2022<br><b></b><hr>-Half Marathon (21 km)<br>-50 km, 10 km, 5 km", //info of the popup
            "pos_X": 185,
            "pos_Y": 330,
            "size": 14,
            "outline": "#000080",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/dead-sea-marathon-israel",
            "target": "new_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>ADDU CITY, Maldives</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_MLD.jpg'><br><b>Addu Marathon</b><hr>6. Novenmber 2022<br><b></b><hr>-Marathon (42 km)<br>-Half Marathon (21 km)<br>-10 km, 5 km", //info of the popup
            "pos_X": 432,
            "pos_Y": 541,
            "size": 14,
            "outline": "#000080",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/addu-marathon",
            "target": "new_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>MOSCOW, Russia</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_RUS.jpg'><br><b>Moscow Marathon</b><hr>1. September 2022<br><b></b><hr>-Marathon (42.20 km)<br>-10 km",
            "pos_X": 200,
            "pos_Y": 150,
            "size": 14, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/moscow-marathon",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
            "upColor": "cornsilk",
            "overColor": "gold",
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
    var pins_len = aspins_config.pins.length;
    if (pins_len > 0) {
        var xmlns = "http://www.w3.org/2000/svg";
        var tsvg_obj = document.getElementById("wdasjspins");
        var svg_circle, svg_rect;
        for (var i = 0; i < pins_len; i++) {
            if (aspins_config.pins[i].shape === "circle") {
                svg_circle = document.createElementNS(xmlns, "circle");
                svg_circle.setAttributeNS(null, "cx", aspins_config.pins[i].pos_X + 1);
                svg_circle.setAttributeNS(null, "cy", aspins_config.pins[i].pos_Y + 1);
                svg_circle.setAttributeNS(null, "r", aspins_config.pins[i].size / 2);
                svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                tsvg_obj.appendChild(svg_circle);
                svg_circle = document.createElementNS(xmlns, "circle");
                svg_circle.setAttributeNS(null, "cx", aspins_config.pins[i].pos_X);
                svg_circle.setAttributeNS(null, "cy", aspins_config.pins[i].pos_Y);
                svg_circle.setAttributeNS(null, "r", aspins_config.pins[i].size / 2);
                svg_circle.setAttributeNS(null, "fill", aspins_config.pins[i].upColor);
                svg_circle.setAttributeNS(null, "stroke", aspins_config.pins[i].outline);
                svg_circle.setAttributeNS(null, "stroke-width", 1);
                svg_circle.setAttributeNS(null, "id", "wdasjspins_" + i);
                tsvg_obj.appendChild(svg_circle);
                wdasjsAddEvent(i);
            } else if (aspins_config.pins[i].shape === "square") {
                svg_rect = document.createElementNS(xmlns, "rect");
                svg_rect.setAttributeNS(null, "x", aspins_config.pins[i].pos_X - aspins_config.pins[i].size / 2 + 1);
                svg_rect.setAttributeNS(null, "y", aspins_config.pins[i].pos_Y - aspins_config.pins[i].size / 2 + 1);
                svg_rect.setAttributeNS(null, "width", aspins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "height", aspins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                tsvg_obj.appendChild(svg_rect);
                svg_rect = document.createElementNS(xmlns, "rect");
                svg_rect.setAttributeNS(null, "x", aspins_config.pins[i].pos_X - aspins_config.pins[i].size / 2);
                svg_rect.setAttributeNS(null, "y", aspins_config.pins[i].pos_Y - aspins_config.pins[i].size / 2);
                svg_rect.setAttributeNS(null, "width", aspins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "height", aspins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "fill", aspins_config.pins[i].upColor);
                svg_rect.setAttributeNS(null, "stroke", aspins_config.pins[i].outline);
                svg_rect.setAttributeNS(null, "stroke-width", 1);
                svg_rect.setAttributeNS(null, "id", "wdasjspins_" + i);
                tsvg_obj.appendChild(svg_rect);
                wdasjsAddEvent(i);
            }
        }
    }
});

function wdasjsAddEvent(id) {
    var obj = jQuery("#wdasjspins_" + id);
    if (aspins_config.pins[id].active === true) {
        obj.attr({ "cursor": "pointer" });
        obj.hover(function() {
            jQuery("#wddrjstip").show().html(aspins_config.pins[id].hover);
            obj.css({ "fill": aspins_config.pins[id].overColor });
        }, function() {
            jQuery("#wddrjstip").hide();
            obj.css({ "fill": aspins_config.pins[id].upColor });
        });
        obj.mouseup(function() {
            obj.css({ "fill": aspins_config.pins[id].overColor });
            if (aspins_config.pins[id].target === "new_window") {
                window.open(aspins_config.pins[id].url);
            } else if (aspins_config.pins[id].target === "same_window") {
                window.parent.location.href = aspins_config.pins[id].url;
            } else if (aspins_config.pins[id].target === "modal") {
                jQuery(aspins_config.pins[id].url).modal("show");
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
                jQuery("#wddrjstip").show().html(aspins_config.pins[id].hover);
                jQuery("#wddrjstip").css({ left: x, top: y });
            });
            obj.on("touchend", function() {
                jQuery("#" + id).css({ "fill": aspins_config.pins[id].upColor });
                if (aspins_config.pins[id].target === "new_window") {
                    window.open(aspins_config.pins[id].url);
                } else if (aspins_config.pins[id].target === "same_window") {
                    window.parent.location.href = aspins_config.pins[id].url;
                } else if (aspins_config.pins[id].target === "modal") {
                    jQuery(aspins_config.pins[id].url).modal("show");
                }
            });
        }
    }
}