/* JAVASCRIPT FOR EVENT SEARCH 
 * - search.html
 * - Data import
 * - Eventlisteners for elements
 * - Search organizing
 * - REQUIRES FUNCTIONS FROM data.js (getUpEvents, getPastEvents)
 */

var root_path = "/static/";

// Setting eventlisteners for these elements
var button = document.getElementById("filtermenu_button");
var search_input = document.getElementById("search_input");
// Place for filter options
var filters_container = document.getElementById("search_filters");

// Event listener settings for filter menu button (event=CLICK)
button.addEventListener("click", function(event) {
    event.preventDefault();
    // Hide or Show the filter menu using class property
    if (filters_container.className === 'hide') {
        filters_container.className = 'show_flex';
    } else {
        filters_container.className = 'hide';
    }
    // Print class info of menu container to console 
    console.log("Filters class = " + filters_container.className);
});

// Execute a function when the user press a key on the keyboard
search_input.addEventListener("keypress", function(e) {
    // Number 13 is the "Enter" key on the keyboard
    if (e.key === 'Enter') {
        // Cancel the default action
        e.preventDefault();
        // Find results
        findResults();
    }
});

// Imports database files for searching 
let upevents, pevents, results;
(async() => { // Data must be read asynchronously
    // Downloading data from the database
    upevents = await getJSON("http://127.0.0.1:8000/events");
    pevents = await getJSON("http://127.0.0.1:8000/races");
    results = await getJSON("http://127.0.0.1:8000/results");
})();

/**
 * Search results which corresponds to search criterias.
 * Reads inputs from the page (search word and filter options) and
 * finds results from the database.
 * This method is used to organize search. It uses separate functions 
 * to find actual results.
 */
function findResults() {
    // Every search will clear all the content from the page
    // So, before adding new content, we need to remove old content
    var econt = document.getElementById("eventcontainer");
    var pcont = document.getElementById("past_eventcontainer");
    var acont = document.getElementById("athletecontainer");
    econt.innerHTML = "";
    pcont.innerHTML = "";
    acont.innerHTML = "";
    // Getting filter options set by user
    const filter_inputs = document.getElementsByTagName('input');
    const filters = {
        text: filter_inputs[0].value, // Value is as typed in the text input,
        upevents: filter_inputs[1].checked, // If not checked value is false,
        pevents: filter_inputs[2].checked, // If not checked value is false,
        results: filter_inputs[3].checked, // If not checked value is false,
        fdate: filter_inputs[4].value, // If not set, value is empty string "", otherwise in format '2021-12-08'
        tdate: filter_inputs[5].value // If not set, value is empty string "", otherwise in format '2021-12-08'
    }
    console.log(filters);

    // Let's filter the data
    var filtered_upevents, filtered_pevents, filtered_athletes;

    if (!(filters.pevents || filters.upevents || filters.results)) {
        // If no filters set, searching for everything
        filters.upevents = true;
        filters.pevents = true;
        filters.results = true;
    }

    if (filters.upevents) {
        // Filtering upcoming events
        filtered_upevents = getUpEvents(upevents, filters);
        console.log(filtered_upevents);
        (filtered_upevents.length === 0) ? econt.style.display = "none": econt.style.display = "";
        // Inserting new content
        constructDjangoEvents("eventcontainer", filtered_upevents);
    } else {
        econt.style.display = "none";
    }

    if (filters.pevents) {
        // Filtering past events
        filtered_pevents = getEventResults(pevents, filters);
        console.log(filtered_pevents);
        (filtered_pevents.length === 0) ? pcont.style.display = "none": pcont.style.display = "";
        // Inserting new content
        createRaceResultCombos("past_eventcontainer", filtered_pevents, results);
    } else {
        pcont.style.display = "none";
    }
    /* Athlete functionlaity not available at the moment
    if (filters.results) {
        // Filtering athletes
        filtered_athletes = getAthletes(results, filters);
        console.log(filtered_athletes);
        (filtered_athletes.length === 0) ? acont.style.display = "none": acont.style.display = "";
        // Inserting new content
        //createAthleteCards("athletecontainer", results, results);
    } else {
        acont.style.display = "none";
    }
    */
}

/* CONTAINERS FOR SEARCH RESULT TYPES
<div id="area_upevents"></div>
<div id="area_pevents"></div>
<div id="area_athletes"></div>
*/