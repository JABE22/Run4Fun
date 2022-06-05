/* DATA PROCESSING FUNCTIONS 
 * - Functions to read data files (JSON, TXT, CSV)
 * - Functions for data filtering
 */

/**
 * Reads data asynchronously from the given path and returns it as a JSON object.
 * 
 * @param {*} url Path to data file
 * @returns JSON file
 */
const getJSON = async function(url) {
    const response = await fetch(url);
    return await response.json();
};

/**
 * Writes object into JSON file. 
 * Not implemented since project is type of "read only". 
 * 
 * @param {*} event_object event details as an object
 */
const toJSON = function(event_object) {
    console.log("Sending into JSON file...");
};


/**
 * Converts csv text data format into json.
 * 
 * @param {*} csv CSV file with headers
 * @returns Data as stringified JSON
 */
function csvJSON(csv) {
    // Interesting splitting in the end of the each row in the file
    var lines = csv.split("\r\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j];
        }
        result.push(obj);
    }
    return JSON.stringify(result); // Stringified JSON, JavaScript object
}

/**
 * Creates text file from a string format data given as parameter.
 * Not used since project is type of "read only". 
 * 
 * @param {*} text Data to write into txt file
 * @returns URL for created new txt file
 */
const makeTextFile = (text) => {
    var data = new Blob([text], { type: 'text/plain' });
    var textFile = null;
    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
    }
    textFile = window.URL.createObjectURL(data);
    // returns a URL you can use as a href
    return textFile;
};

/**
 * Filtering method for upcoming events. Filters data using filter options given as parameters.
 * 
 * @param {*} json_data Data to filter in json format
 * @param {*} filters Filter options as javascript object
 * @returns Filtered data, matched objects in a list
 */
function getUpEvents(json_data, filters) {
    var matches = [];
    matches = json_data.filter(function(event) {
        efields = event.fields;
        var fmatch = (filters.fdate === "") ? true : (new Date(efields['date']) >= new Date(filters.fdate));
        var tmatch = (filters.tdate === "") ? true : (new Date(efields['date']) <= new Date(filters.tdate));
        var datematch = fmatch && tmatch;
        var txtmatch = efields.ename.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            efields.country.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            efields.ccode.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            efields.city.toUpperCase().indexOf(filters.text.toUpperCase()) > -1;
        //|| efields.distance.map(String).includes(filters.text);

        return datematch && txtmatch;
    });
    return matches;
    /*
      "date": "2022-12-19",
      "ename": "Taipei International Marathon",
      "country": "Taiwan",
      "ccode": "TWN",
      "city": "Taipei",
      "dist": [42, 21]
    */
}

/**
 * Filtering method for past events. Filters data using filter options given as parameters.
 * 
 * @param {*} json_data Data to filter in json format
 * @param {*} filters Filter options as javascript object
 * @returns Filtered data, matched objects in a list
 */
function getEventResults(json_data, filters) {
    var matches = [];
    matches = json_data.filter(function(race) {
        rfields = race.fields;
        var fmatch = (filters.fdate === "") ? true : (new Date(rfields['start']) >= new Date(filters.fdate));
        var tmatch = (filters.tdate === "") ? true : (new Date(rfields['start']) <= new Date(filters.tdate));
        var datematch = fmatch && tmatch;
        var txtmatch = rfields.ecode.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            //rfields.country.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            rfields.event.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 || // This is the only difference compared to upcoming event filtering
            rfields.ccode.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            //rfields.city.toUpperCase().indexOf(filters.text.toUpperCase()) > -1 ||
            //rfields.distance.map(String).includes(filters.text.toUpperCase()) > -1 ||
            rfields.distance.toString().indexOf(filters.text.toUpperCase()) > -1 ||
            race.pk.toUpperCase().indexOf(filters.text.toUpperCase()) > -1;

        return datematch && txtmatch;
    });
    console.log(matches);
    return matches;
}

/**
 * Filtering method for past events. Filters data using filter options given as parameters.
 * Not implemented since athlete property is not used in the project.
 * 
 * @param {*} json_data Data to filter in json format
 * @param {*} filters Filter options as javascript object
 */
function getAthletes(json_data, filters) {}

/**
 * When the user clicks on the button, toggle between hiding and showing the dropdown content.
 * Do not return anything. Changes only the css display property value of past event accordion 
 * items based on text input written in filter text input field on the page "Past events".
 */
function filter() {
    var input, filter, tablerows, eventrow, elabels;
    const compos = document.getElementsByClassName('event_compo');
    const eventrows = document.getElementsByClassName('eventrow');
    const tables = document.getElementsByClassName('competitors');
    input = document.getElementById("filter_input");
    filter = input.value.toUpperCase();
    var event_match;
    var table_match;

    for (var i = 0; i < eventrows.length; i++) {
        event_match = false;
        table_match = false;
        eventrow = eventrows[i];
        elabels = eventrow.getElementsByTagName('label');
        country_flag = eventrow.getElementsByTagName('img')[0];
        //console.log(elabels[0], elabels[1]);
        var edetails = elabels[0].innerText + " " + elabels[1].innerText + " " + country_flag.alt;
        if (edetails.toUpperCase().indexOf(filter) > -1) {
            event_match = true;
        }
        // Filtering event result rows in tables
        tablerows = tables[i].getElementsByTagName("tr");
        for (var j = 1; j < tablerows.length; j++) {
            // Filtering only athlete name
            var name = tablerows[j].getElementsByTagName("td")[2].innerText;
            if (name.toUpperCase().indexOf(filter) > -1) {
                table_match = true;
            }
        }
        //console.log(event_match, table_match);
        if (event_match || table_match) {
            compos[i].style.display = "";
        } else {
            compos[i].style.display = "none";
        }
    }
}