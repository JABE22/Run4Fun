/* DATAMAP */
// Excluded from project evaluation, therefore not commented
// This file contains some test maps using DataMap components

// USA map
const map_usa = new Datamap({
    element: document.getElementById('map_usa'),
    scope: 'usa',
    geographyConfig: {
        borderColor: 'rgba(11,11,11,1.0)',
        highlightBorderWidth: '2px',
        highlightFillColor: function(geo) {
            return geo['fillColor'] || 'rgba(30,30,30,0.9)';
        },
        highlightBorderColor: 'rgba(222,222,222,0.9)',
        popupOnHover: true,
        cursor: 'pointer'
    },
    done: function(datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
            console.log(geography.id + " : " + geography.properties.name);
            var data = {};
            data[geography.id] = "gold";
            map_usa.updateChoropleth(data);
            var el = document.querySelector("." + geography.id);
        });
    },
    fills: { defaultFill: 'rgba(150,150,150,0.9)' }
});
map_usa.labels();

// World map
const map_world = new Datamap({
    element: document.getElementById('map_world'),
    scope: 'world',
    geographyConfig: {
        borderColor: 'rgba(11,11,11,1.0)',
        highlightBorderWidth: 1,
        highlightFillColor: function(geo) {
            return geo['fillColor'] || 'rgba(30,30,30,0.9)';
        },
        highlightBorderColor: 'rgba(222,222,222,0.9)',
        popupOnHover: true,
        popupTemplate: function(geo, data) {
            return ['<div class="hoverinfo"><strong>',
                '' + geo.properties.name + '',
                '</strong></div>'
            ].join('');
        }
    },
    fills: {
        'USA': 'gold',
        'RUS': 'gold',
        'PRK': 'gold',
        'PRC': 'gold',
        'IND': 'gold',
        'GBR': 'gold',
        'FRA': 'gold',
        'PAK': 'gold',
        'FIN': 'cornsilk',
        defaultFill: 'gray'
    },
    data: {
        'RUS': { fillKey: 'RUS' },
        'PRK': { fillKey: 'PRK' },
        'PRC': { fillKey: 'PRC' },
        'IND': { fillKey: 'IND' },
        'GBR': { fillKey: 'GBR' },
        'FRA': { fillKey: 'FRA' },
        'PAK': { fillKey: 'PAK' },
        'USA': { fillKey: 'USA' },
        'FIN': { fillKey: 'FIN' }
    }
});
var bombs = [{
    name: 'Joe 4',
    radius: 15,
    yield: 100,
    country: 'USSR',
    fillKey: 'RUS',
    significance: 'First fusion weapon test by the USSR (not "staged")',
    date: '1953-08-12',
    latitude: 10.07,
    longitude: -81.43
}];
map_world.bubbles(bombs, {
    popupTemplate: function(geo, data) {
        return ['<div class="hoverinfo">' + data.name,
            '<br/>Payload: ' + data.yield + ' kilotons',
            '<br/>Country: ' + data.country + '',
            '<br/>Date: ' + data.date + '',
            '</div>'
        ].join('');
    }
});
map_world.geographyConfig = {};