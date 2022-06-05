/* DATALIST element content constructor functionality for FORMS */

/**
 * Reads data asynchronously from the text file which contains all the countries
 * and sets options for datalist element using separate function.
 * Presupposes delimiter ";" between countries.
 */

var root_path = '/static/';

(async() => {
    var txt = await fetch(root_path + "js/data/countrylist.txt")
        .then(response => response.text());

    const country_list = txt.split(';');
    //console.log(country_list);
    setCountryOptions("countries", country_list);
})();

/**
 * Construct datalist options for the element ID given as parameter.
 * 
 * @param {*} id Element ID on the page
 * @param {*} countries List of string elements (country names in this specific project case, but could be whatever)
 */
function setCountryOptions(id, countries) {
    var datalist = document.getElementById(id);

    for (i = 0; i < countries.length; i++) {
        var option = document.createElement('option');
        option.value = countries[i];
        datalist.append(option);
    }
}

/*
    Copyright 2021 Google LLC

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        https://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/
/**
 * Google function for map functionality related to place autocomplete property in "Notification" page.
 */
function initMap() {
    const componentForm = [
        'location',
        'locality',
        'administrative_area_level_1',
        'country',
        'postal_code',
    ];
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: { lat: 50, lng: 10 },
        mapTypeControl: false,
        fullscreenControl: true,
        zoomControl: true,
        streetViewControl: false
    });
    const marker = new google.maps.Marker({ map: map, draggable: false });
    const autocompleteInput = document.getElementById('location');
    const autocomplete = new google.maps.places.Autocomplete(autocompleteInput, {
        fields: ["address_components", "geometry", "name"],
        types: ["address"],
    });
    autocomplete.addListener('place_changed', function() {
        marker.setVisible(false);
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert('No details available for input: \'' + place.name + '\'');
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        renderAddress(place);
        fillInAddress(place);
    });

    function fillInAddress(place) { // optional parameter
        const addressNameFormat = {
            'street_number': 'short_name',
            'route': 'long_name',
            'locality': 'long_name',
            'administrative_area_level_1': 'short_name',
            'country': 'long_name',
            'postal_code': 'short_name',
        };
        const getAddressComp = function(type) {
            for (const component of place.address_components) {
                if (component.types[0] === type) {
                    return component[addressNameFormat[type]];
                }
            }
            return '';
        };
        document.getElementById('location').value = getAddressComp('street_number') + ' ' +
            getAddressComp('route');
        for (const component of componentForm) {
            // Location field is handled separately above as it has different logic.
            if (component !== 'location') {
                document.getElementById(component).value = getAddressComp(component);
            }
        }
    }

    function renderAddress(place) {
        map.setCenter(place.geometry.location);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    }
}