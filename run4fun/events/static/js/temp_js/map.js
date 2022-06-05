var map = am4core.create("chartdiv", am4maps.MapChart);
map.geodata = am4geodata_worldLow;
map.projection = new am4maps.projections.Orthographic();
// High detail map
var chart2 = am4core.create("chartdiv", am4maps.MapChart);
chart2.geodata = am4geodata_worldHigh;
chart2.projection = new am4maps.projections.Orthographic();
var polygonSeries = chart2.series.push(new am4maps.MapPolygonSeries());
polygonSeries.useGeodata = true;
polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
    chart2.zoomToMapObject(ev.target);
});
var label2 = chart2.chartContainer.createChild(am4core.Label);
label2.text = "Orthographic World";

// Polygon area map series
var polygonSeries = new am4maps.MapPolygonSeries();
polygonSeries.useGeodata = true;
chart2.series.push(polygonSeries);
// Configure series
var polygonTemplate = polygonSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("gray");

// Create hover state and set alternative fill color
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("black");

// Excluding and Including countries
polygonSeries.exclude = ["AQ"];
// polygonSeries.include = ["PT", "ES", "FR", "DE", "BE", "NL", "IT", "AT", "GB", "IE", "CH", "LU", "FI"];

// Tooltips
[{
    "id": "ES",
    "name": "Spain",
    "value": 100
}, {
    "id": "FR",
    "name": "France",
    "value": 50
}];

polygonTemplate.tooltipText = "{name}: {value}";

polygonSeries.data = [{
    "id": "ES",
    "name": "Spain",
    "value": 100,
    "fill": am4core.color("gold")
}, {
    "id": "DE",
    "name": "Germany",
    "value": 50,
    "fill": am4core.color("gold")
}];

polygonTemplate.propertyFields.fill = "fill";

// Series example
/* Northern Europe */
var series1 = chart2.series.push(new am4maps.MapPolygonSeries());
series1.name = "Northern Europe";
series1.useGeodata = true;
series1.include = ["FI", "DK", "SE", "NO", "LT", "LV", "EE", "IS"];
series1.mapPolygons.template.tooltipText = "{name}";
series1.mapPolygons.template.fill = am4core.color("#96BDC6");
series1.fill = am4core.color("#96BDC6");

/* Central Europe */
var series2 = chart2.series.push(new am4maps.MapPolygonSeries());
series2.name = "Central Europe";
series2.useGeodata = true;
series2.include = ["AT", "CZ", "DE", "HU", "LI", "PL", "SK", "SI", "CH"];
series2.mapPolygons.template.tooltipText = "{name}";
series2.mapPolygons.template.fill = am4core.color("#81968F");
series2.fill = am4core.color("#81968F");

/* Eastern Europe */
var series3 = chart2.series.push(new am4maps.MapPolygonSeries());
series3.name = "Eastern Europe";
series3.useGeodata = true;
series3.include = ["MD", "BY", "UA"];
series3.mapPolygons.template.tooltipText = "{name}";
series3.mapPolygons.template.fill = am4core.color("#CFB9A5");
series3.fill = am4core.color("#CFB9A5");

/* Southeast Europe */
var series4 = chart2.series.push(new am4maps.MapPolygonSeries());
series4.name = "Southeast Europe";
series4.useGeodata = true;
series4.include = ["AL", "BA", "BG", "HR", "GR", "XK", "MK", "ME", "RO", "RS"];
series4.mapPolygons.template.tooltipText = "{name}";
series4.mapPolygons.template.fill = am4core.color("#E8CCBF");
series4.fill = am4core.color("#E8CCBF");

/* Western Europe */
var series5 = chart2.series.push(new am4maps.MapPolygonSeries());
series5.name = "Western Europe";
series5.useGeodata = true;
series5.include = ["BE", "FR", "IE", "IT", "LU", "MC", "NL", "GB", "ES", "PT", "AD"];
series5.mapPolygons.template.tooltipText = "{name}";
series5.mapPolygons.template.fill = am4core.color("goldenrod");
series5.fill = am4core.color("gold");

chart2.legend = new am4maps.Legend();
chart2.legend.position = "left";
chart2.legend.align = "right";

// Series for France map
var frSeries = chart2.series.push(new am4maps.MapPolygonSeries());
frSeries.geodata = am4geodata_franceHigh
var polygonTemplate = frSeries.mapPolygons.template;
polygonTemplate.tooltipText = "{name}";
polygonTemplate.fill = am4core.color("lightblue");
var hs = polygonTemplate.states.create("hover");
hs.properties.fill = am4core.color("white");

// Image series
// Create image series
var imageSeries = chart2.series.push(new am4maps.MapImageSeries());

// Create a circle image in image series template so it gets replicated to all new images
var imageSeriesTemplate = imageSeries.mapImages.template;
var circle = imageSeriesTemplate.createChild(am4core.Circle);
circle.radius = 6;
circle.fill = am4core.color("gold");
circle.stroke = am4core.color("#FFFFFF");
circle.strokeWidth = 2;
circle.nonScaling = true;
circle.tooltipText = "{title}";

// Set property fields
imageSeriesTemplate.propertyFields.latitude = "latitude";
imageSeriesTemplate.propertyFields.longitude = "longitude";

// Add data for the three cities
imageSeries.data = [{
    "latitude": 48.856614,
    "longitude": 2.352222,
    "title": "Paris"
}, {
    "latitude": 40.712775,
    "longitude": -74.005973,
    "title": "New York"
}, {
    "latitude": 49.282729,
    "longitude": -123.120738,
    "title": "Vancouver"
}];

// Add line series
// Add line series
var lineSeries = chart2.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.line.stroke = am4core.color("cornsilk");
lineSeries.mapLines.template.line.strokeOpacity = 0.5;
lineSeries.mapLines.template.line.strokeWidth = 4;
lineSeries.mapLines.template.line.strokeDasharray = "3,3";

lineSeries.data = [{
    "multiGeoLine": [
        [
            { "latitude": 48.856614, "longitude": 2.352222 },
            { "latitude": 40.712775, "longitude": -74.005973 },
            { "latitude": 49.282729, "longitude": -123.120738 }
        ]
    ]
}];

// Add zoom control and slider
//chart2.zoomControl = new am4maps.ZoomControl();
//chart2.zoomControl.slider.height = 100;

// Add and configure small map
//chart2.smallMap = new am4maps.SmallMap();
//chart2.smallMap.series.push(polygonSeries);

// Setting background color
chart2.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color("gray");
chart2.backgroundSeries.mapPolygons.template.polygon.opacity = 0.5;
chart2.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 1;

/*
imageSeries.mapLines.template.nonScaling = true;
lineSeries.mapLines.template.nonScalingStroke = true;
*/

// Enabling grid
var grid = chart2.series.push(new am4maps.GraticuleSeries());
//grid.toBack();
grid.mapLines.template.line.stroke = am4core.color("black");
grid.mapLines.template.line.strokeOpacity = 0.2;
grid.longitudeStep = 20;
grid.latitudeStep = 20;

// Rotation to any direction
//chart2.panBehavior = "rotateLongLat";

/*
var label = chart2.chartAndLegendContainer.createChild(am4core.Label);
label.text = "chart.deltaLongitude = 0";
label.fontSize = 18;
label.align = "center";
label.position = "center";
label.padding(5, 10, 5, 10);
label.background.fillOpacity = 0.05;
label.background.fill = am4core.color("#000");
*/
/*
var slider = chart2.chartAndLegendContainer.createChild(am4core.Slider);
slider.start = 0.5;
slider.margin(20, 0, 20, 0);
slider.valign = "bottom";
slider.position = 'right';
slider.align = "right";
slider.width = 500;
slider.events.on("rangechanged", function(ev) {
    var deltaLongitude = 360 * ev.target.start - 180;
    chart2.deltaLongitude = deltaLongitude;
    label.text = "chart.deltaLongitude = " + chart2.numberFormatter.format(deltaLongitude, "[green]#.|[red]#.|[#555]#");
});
*/