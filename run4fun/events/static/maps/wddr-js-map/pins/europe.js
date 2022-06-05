var eupins_config = {
    "pins": [{
            "shape": "circle", //either "circle" or "square"
            "hover": "<b><u>NOTTINGHAM, Great Britain</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_GBR.jpg'><br><b>Robin Hood Festival of Running</b><hr>25. September 2022<hr>-Half Marathon (21.10 km)<br>-2.41 km", //info of the popup
            "pos_X": 300, //check the X, Y coordinates guide in the documentation
            "pos_Y": 320,
            "size": 12, //size of the pin
            "outline": "#000080", //outline color of the pin
            "upColor": "cornsilk", //color of the pin when map load
            "overColor": "gold", //color of the pin when mouse hover
            "url": "https://worldsmarathons.com/marathon/nottingham-robin-hood-marathon", //link to any webpage
            "target": "same_window", // use "new_window", "same_window", "modal", or "none"
            "active": true //true/false to activate/deactivate this pin
        },
        {
            "shape": "circle",
            "hover": "<b><u>PARIS</u></b>",
            "pos_X": 325,
            "pos_Y": 384,
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
            "hover": "<b><u>BERLIN</u></b>",
            "pos_X": 432,
            "pos_Y": 349,
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
            "hover": "<b><u>BRÄUNLINGEN, Germany</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_GER.jpg'><br><b>Schwarzwald Marathon</b><hr>9. October 2022<br><hr>-Marathon (42.20 km)<br>-Half Marathon (21.10 km)",
            "pos_X": 385,
            "pos_Y": 415,
            "size": 12,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/schwarzwald-marathon",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>FÜSSEN, Germany</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_GER.jpg'><br><b>Königsschlösser Marathon</b><hr>24. July 2022<br><hr>-Marathon (42 km)<br>-Half Marathon (21 km)<br>-10 km",
            "pos_X": 410,
            "pos_Y": 420,
            "size": 12,
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/koenig-ludwig-marathon",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>MADRID</u></b><br><span style='color: #999;'>*Click to open a webpage*</span>",
            "pos_X": 223,
            "pos_Y": 507,
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
            "hover": "<b><u>LISBOA, Portugal</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_PRG.jpg'><br><b>EDP Lisbon Half Marathon</b><hr>20. March 2022<hr>-Half Marathon (21 km)<br>-10 km, 7 km",
            "pos_X": 140,
            "pos_Y": 500,
            "size": 12, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/lisbon-half-marathon",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "BUCHAREST",
            "pos_X": 584,
            "pos_Y": 477,
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
            "hover": "<b><u>GOTHENBURG, Sweden</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_SWE.jpg'><br><b>Skatås ryggar</b><hr>4. June 2022<hr>-Half Marathon (21 km)<br>-14 km, 7km",
            "pos_X": 430,
            "pos_Y": 270,
            "size": 12, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/skat-s-ryggar",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>HELSINKI, Finland</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_FIN.jpg'><br><b>Helsinki Half Marathon</b><hr>11. June 2022<hr>-Half Marathon (21 km)",
            "pos_X": 534,
            "pos_Y": 238,
            "size": 12, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/helsinki-half-marathon",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>ROVANIEMI, Finland</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_FIN.jpg'><br><b>Actic Marathon Finland</b><hr>3. April 2022<hr>-Marathon (42 km)<br>-Half Marathon (21 km)<br>-10 km, 1 km",
            "pos_X": 530,
            "pos_Y": 145,
            "size": 12, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/artic-marathon-finland",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>REYKJAVIK, Iceland</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_ICL.jpg'><br><b>Reykjavik Autumn Marathon</b><hr>22. October 2022<hr>-Marathon (42.20 km)<br>-Half Marathon (21.10 km)",
            "pos_X": 230,
            "pos_Y": 112,
            "size": 12, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/reykjavik-autumn-marathon2",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>VILNIUS, Lithuania</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_LTH.jpg'><br><b>Rimi Vilnius Marathon</b><hr>11. September 2022<hr>-Marathon (42.20 km)<br>-Half Marathon (21.10 km)<br>-10 km, 5 km",
            "pos_X": 545,
            "pos_Y": 325,
            "size": 12, //change the size to display this pin
            "outline": "#660000",
            "upColor": "cornsilk",
            "overColor": "gold",
            "url": "https://worldsmarathons.com/marathon/vilnius-marathon",
            "target": "same_window",
            "active": true
        },
        {
            "shape": "circle",
            "hover": "<b><u>MOSCOW, Russia</u></b><br><img class='mapimg' src='/static/img/Nationals/flag_RUS.jpg'><br><b>Moscow Marathon</b><hr>1. September 2022<hr>-Marathon (42.20 km)<br>-10 km",
            "pos_X": 700,
            "pos_Y": 305,
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
    var pins_len = eupins_config.pins.length;
    if (pins_len > 0) {
        var xmlns = "http://www.w3.org/2000/svg";
        var tsvg_obj = document.getElementById("wdeujspins");
        var svg_circle, svg_rect;
        for (var i = 0; i < pins_len; i++) {
            if (eupins_config.pins[i].shape === "circle") {
                svg_circle = document.createElementNS(xmlns, "circle");
                svg_circle.setAttributeNS(null, "cx", eupins_config.pins[i].pos_X + 1);
                svg_circle.setAttributeNS(null, "cy", eupins_config.pins[i].pos_Y + 1);
                svg_circle.setAttributeNS(null, "r", eupins_config.pins[i].size / 2);
                svg_circle.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                tsvg_obj.appendChild(svg_circle);
                svg_circle = document.createElementNS(xmlns, "circle");
                svg_circle.setAttributeNS(null, "cx", eupins_config.pins[i].pos_X);
                svg_circle.setAttributeNS(null, "cy", eupins_config.pins[i].pos_Y);
                svg_circle.setAttributeNS(null, "r", eupins_config.pins[i].size / 2);
                svg_circle.setAttributeNS(null, "fill", eupins_config.pins[i].upColor);
                svg_circle.setAttributeNS(null, "stroke", eupins_config.pins[i].outline);
                svg_circle.setAttributeNS(null, "stroke-width", 1);
                svg_circle.setAttributeNS(null, "id", "wdeujspins_" + i);
                tsvg_obj.appendChild(svg_circle);
                wdeujsAddEvent(i);
            } else if (eupins_config.pins[i].shape === "square") {
                svg_rect = document.createElementNS(xmlns, "rect");
                svg_rect.setAttributeNS(null, "x", eupins_config.pins[i].pos_X - eupins_config.pins[i].size / 2 + 1);
                svg_rect.setAttributeNS(null, "y", eupins_config.pins[i].pos_Y - eupins_config.pins[i].size / 2 + 1);
                svg_rect.setAttributeNS(null, "width", eupins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "height", eupins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "fill", "rgba(0, 0, 0, 0.5)");
                tsvg_obj.appendChild(svg_rect);
                svg_rect = document.createElementNS(xmlns, "rect");
                svg_rect.setAttributeNS(null, "x", eupins_config.pins[i].pos_X - eupins_config.pins[i].size / 2);
                svg_rect.setAttributeNS(null, "y", eupins_config.pins[i].pos_Y - eupins_config.pins[i].size / 2);
                svg_rect.setAttributeNS(null, "width", eupins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "height", eupins_config.pins[i].size);
                svg_rect.setAttributeNS(null, "fill", eupins_config.pins[i].upColor);
                svg_rect.setAttributeNS(null, "stroke", eupins_config.pins[i].outline);
                svg_rect.setAttributeNS(null, "stroke-width", 1);
                svg_rect.setAttributeNS(null, "id", "wdeujspins_" + i);
                tsvg_obj.appendChild(svg_rect);
                wdeujsAddEvent(i);
            }
        }
    }
});

function wdeujsAddEvent(id) {
    var obj = jQuery("#wdeujspins_" + id);
    if (eupins_config.pins[id].active === true) {
        obj.attr({ "cursor": "pointer" });
        obj.hover(function() {
            jQuery("#wddrjstip").show().html(eupins_config.pins[id].hover);
            obj.css({ "fill": eupins_config.pins[id].overColor });
        }, function() {
            jQuery("#wddrjstip").hide();
            obj.css({ "fill": eupins_config.pins[id].upColor });
        });
        obj.mouseup(function() {
            obj.css({ "fill": eupins_config.pins[id].overColor });
            if (eupins_config.pins[id].target === "new_window") {
                window.open(eupins_config.pins[id].url);
            } else if (eupins_config.pins[id].target === "same_window") {
                window.parent.location.href = eupins_config.pins[id].url;
            } else if (eupins_config.pins[id].target === "modal") {
                jQuery(eupins_config.pins[id].url).modal("show");
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
                jQuery("#wddrjstip").show().html(eupins_config.pins[id].hover);
                jQuery("#wddrjstip").css({ left: x, top: y });
            });
            obj.on("touchend", function() {
                jQuery("#" + id).css({ "fill": eupins_config.pins[id].upColor });
                if (eupins_config.pins[id].target === "new_window") {
                    window.open(eupins_config.pins[id].url);
                } else if (eupins_config.pins[id].target === "same_window") {
                    window.parent.location.href = eupins_config.pins[id].url;
                } else if (eupins_config.pins[id].target === "modal") {
                    jQuery(eupins_config.pins[id].url).modal("show");
                }
            });
        }
    }
}