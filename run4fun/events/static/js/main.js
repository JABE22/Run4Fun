/* JAVASCRIPT FOR UPCOMING AND PAST EVENT COMPONENTS 
 * - For index.html, past.html, search.html
 * - Constructing html content using HTML DOM API for JavaScript
 */

var root_path = "/static/";
let date_format = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};


function constructDjangoEvents(id, events) {
    /* First of all, we need to sort events by date, the most recent first.
     * Also, we do not want to show upcoming events already passed.
     */
    events.sort((a, b) => (a.fields.date > b.fields.date) ? 1 : -1);

    var eventcontainer = document.getElementById(id);
    console.log(events);
    // For each event in the list do
    for (let i = 0; i < events.length; i++) {
        efields = events[i].fields
        console.log(efields['ename']);
        // Create elements
        var href = document.createElement("a");
        var eventbox = document.createElement("div");
        eventbox.className = "eventbox zoom_big sp";
        eventbox.style.backgroundImage = "url('" + root_path + "img/Nationals/flag_" + efields['ccode'].toUpperCase() + ".jpg')";
        // Creating and setting up eventbox components
        var opacity_filter = document.createElement("div");
        var event_name = document.createElement("h2");
        var event_description = document.createElement("p");
        opacity_filter.className = "upcom_eventbox_infobackg";
        event_name.innerText = efields['ename'];
        event_name.id = "event_name";
        // Datetime setup
        const edate = new Date(efields['date']);
        const styledate = edate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        setPastStyle(edate, eventbox);
        // Setting text content for event description
        event_description.innerText = efields['country'] + ", " + efields['city'] +
            "\n" + styledate; //+ "\n" + styledist(events[i]['dist']);
        event_description.className = "event_text";
        // Placing elements
        opacity_filter.append(event_name, event_description);
        eventbox.append(opacity_filter);
        href.appendChild(eventbox);
        href.href = efields['url'];
        href.style.textDecoration = "none";
        eventcontainer.append(href);
    }
}

/**
 * Constructs detailed "upcoming event" boxes.
 * 
 * @param {*} id Container ID where event boxes will be placed on page
 * @param {*} events Event data from database in json format ([{object1},{object2},...])
 */
function constructUpcomingEvents(id, events) {
    /* First of all, we need to sort events by date, the most recent first.
     * Also, we do not want to show upcoming events already passed.
     */
    events.sort((a, b) => (a.date > b.date) ? 1 : -1);
    // TODO: add filter to remove past events

    var eventbox_number = events.length // Math.min(events.length, 9); // Shows 9 events as maximum
    var eventcontainer = document.getElementById(id);
    // Creating and setting up eventbox
    for (let i = 0; i < eventbox_number; i++) {
        var href = document.createElement("a");
        var eventbox = document.createElement("div");
        //href.onclick = "https://www.biathlonworld.com/calendar";
        eventbox.className = "eventbox zoom_big sp";
        eventbox.style.backgroundImage = "url('" + root_path + "img/Nationals/flag_" + events[i]['ccode'] + ".jpg')";
        // Creating and setting up eventbox components
        var opacity_filter = document.createElement("div");
        var event_name = document.createElement("h2");
        var event_description = document.createElement("p");
        opacity_filter.className = "upcom_eventbox_infobackg";
        event_name.innerText = events[i]['ename'];
        event_name.id = "event_name";
        // Datetime setup
        const edate = new Date(events[i]['date']);
        const styledate = edate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        setPastStyle(edate, eventbox);
        // Setting text content for event description
        event_description.innerText = events[i]['country'] + ", " + events[i]['city'] + "\n" +
            styledate + "\n" + styledist(events[i]['dist']);
        event_description.className = "event_text";
        // Placing elements
        opacity_filter.append(event_name, event_description);
        eventbox.append(opacity_filter);
        href.appendChild(eventbox);
        eventcontainer.append(href);
    }
}

/**
 * Sets styles to eventbox according to its date (to be organized)
 * 
 * @param {*} edate The date of the event
 * @param {*} eventbox Event container element with components (eventbox)
 */
function setPastStyle(edate, eventbox) {
    // Date elements to compare with event date
    var today = new Date();
    var nextMonth = new Date();
    nextMonth.setMonth(today.getMonth() + 1);
    // Setting eventbox styles 
    if (edate < today) {
        // If event is recently passed, opacity is decreased and orange border inserted
        eventbox.style.boxShadow = "0px 0px 5px 5px orange";
        eventbox.style.opacity = "0.5";
    }
    if (edate > today && edate < nextMonth) {
        // If event is coming very soon (one month) it is box shadowed skyblue
        //eventbox.style.boxShadow = "0px 0px 5px 5px skyblue"; // Near future event styles disabled
    }
}

/**
 * Function for event trip (distances) styling.
 * Used in "upcoming event" boxes.
 * In database, marathon distance is presented in number format but this function
 * will format it as string (42 => "Marathon (42 km)" or 21 => "Half Marathon (21 km)")
 * 
 * @param {*} numlist List of event trips (e.g., [42, 21, 10] for marathon, half marathon, 10km runs)
 * @returns Trips formatted as string (Multiple lines)
 */
function styledist(numlist) {
    var str = "______________\n";
    for (var i = 0; i < numlist.length; i++) {
        dist = numlist[i];
        if (dist > 30) {
            str += "Marathon (" + dist + " km)\n";
        } else if (dist <= 30 && dist > 19) {
            str += "Half Marathon (" + dist + " km)\n";
        } else {
            str += dist + " km";
            // After last line we do not want comma
            if (i < numlist.length - 1) {
                str += ", "
            }
        }
    }
    return str;
}

/**
 * Constructs HTML table element with content (label components etc.).
 * Sets needed properties (classnames, images etc.) for css styles
 * 
 * @param {*} id Table ID to for new table to be creatded
 * @param {*} results Data content of the table as json
 * @returns Table element with components inside container (div)
 */
function createResultTable(id, results, race_id) {
    console.log("Setting results");
    // Create main components
    const table_container = document.createElement('div');
    table_container.className = "table_container hide";
    table_container.id = id;
    var table = document.createElement('table');
    table.className = "competitors";
    var row_number = 12;
    // Table header row
    table_hr = document.createElement('tr');
    table_hr.className = "table_header";
    // Content columns
    th_place = document.createElement('th');
    th_name = document.createElement('th');
    th_country = document.createElement('th');
    th_time = document.createElement('th');
    // Setting labels
    label_1 = document.createElement('label');
    label_2 = document.createElement('label');
    label_3 = document.createElement('label');
    label_4 = document.createElement('label');
    label_1.className = "place";
    label_2.className = "athlete_name";
    label_3.className = "nationality";
    label_4.className = "result_time";
    label_1.innerText = "Place";
    label_2.innerText = "Name";
    label_3.innerText = "Country";
    label_4.innerText = "Time";
    // Placing labels
    th_place.appendChild(label_1);
    th_name.appendChild(label_2);
    th_country.appendChild(label_3);
    th_time.appendChild(label_4);
    table_hr.append(th_place, th_country, th_name, th_time);
    // Setting header row to the table
    table.appendChild(table_hr);
    // Table content row
    for (let i = 0; i < results.length; i++) {
        rfields = results[i].fields
            //console.log("Index set: " + index);
        table_tr = document.createElement('tr');
        table_tr.className = "sp";
        // Content columns
        td_place = document.createElement('td');
        td_name = document.createElement('td');
        td_country = document.createElement('td');
        td_time = document.createElement('td');
        // Setting labels
        label_1 = document.createElement('label');
        label_2 = document.createElement('label');
        img_3 = document.createElement('img');
        label_4 = document.createElement('label');
        // Setting class names
        label_1.className = "place";
        label_2.className = "athlete_name";
        img_3.className = "country_competitor zoom_ultra";
        label_4.className = "result_time";
        // Setting content of labels 
        // NOTICE: FOR NOW, SOMETHING WEIRD IS HAPPENING TO GENERATE FUN DATA COMPINATION
        label_1.innerText = rfields['place'];
        label_2.innerText = rfields['competitor'];
        img_3.src = root_path + "img/Nationals/flag_" + rfields['ccode'] + ".jpg";
        img_3.alt = rfields['ccode'];
        label_4.innerText = rfields['finish_time'];
        // Appending components
        td_place.appendChild(label_1);
        td_name.appendChild(label_2);
        td_country.appendChild(img_3);
        td_time.appendChild(label_4);
        table_tr.append(td_place, td_country, td_name, td_time);
        table.appendChild(table_tr);
    }
    // Inserting result table to table container
    table_container.appendChild(table);
    return table_container;
}

// THIS IS THE APPROXIMATE STRUCTURE OF THE PAST EVENT TABLE
/** 
 <tr>
    <th><label class="place">Place</label></th>
    <th><label class="athlete_name">Name</label></th>
    <th><label class="country">Country</label></th>
    <th><label class="result_time">Time</label></th>
</tr>
<tr class="sp">
    <td><label class='place'>1</label></td>
    <td><label class="athlete_name">Maria Anders</label></td>
    <td><img class="country" src="img/flag_fin.jpg" alt="FIN"></td>
    <td><label class='result_time'>01.10,34</label></td>
</tr>
 */

/**
 * Creates past event accordion items (HTML elements).
 * 
 * @param {*} eventId Identifier for single event item
 * @param {*} tableId Identifier for result table (Only for eventlistener setting)
 * @param {*} event Event data as json
 * @returns Event row element (accordion item with event details)
 */
function createEventRow(eventId, tableId, race) {
    console.log("Setting races (for now events)");
    rfields = race.fields;
    // Creating elements to add past event container
    var event_row = document.createElement('div');
    event_row.id = eventId;
    event_row.className = "accordion eventrow zoom sp";
    // Creating event accordion rows
    label_1 = document.createElement('label');
    img_2 = document.createElement('img');
    label_3 = document.createElement('label');
    img_4 = document.createElement('img');
    img_5 = document.createElement('img');
    // Setting class names
    label_1.className = "date";
    img_2.className = "country zoom_ultra";
    label_3.className = "event_name";
    img_4.id = "arrow_down" + eventId.substring(5);
    img_5.id = "arrow_up" + eventId.substring(5);
    img_4.className = "arrow_show";
    img_5.className = "arrow_hide";
    // Setting content of labels and images
    label_1.innerText = new Date(rfields['start']).toLocaleString('en-US', date_format);
    img_2.src = root_path + "img/Nationals/flag_" + rfields['ccode'] + ".jpg";
    img_2.alt = rfields['country'];
    label_3.innerText = rfields['ecode'];
    img_4.src = root_path + "icons/chevron-double-down.svg";
    img_5.src = root_path + "icons/chevron-double-up.svg";
    // Container for accordion arrows
    arrow_container = document.createElement('div');
    arrow_container.className = 'arrow_container';
    arrow_container.append(img_4, img_5);
    // Adding components
    event_row.append(label_1, img_2, label_3, arrow_container);
    event_row.onclick = function(event) {
        event.preventDefault;
        hideTable(tableId);
    }
    return event_row;
}

/**
 * Creates past event row elements. "Comboboxes" consist of event information row (always visible)
 * and result table (hidden by default), These components with contents will be created.
 * 
 * @param {*} parent_element_id Main container where comboboxes will be placed on the page
 * @param {*} races Race data from database in json format
 * @param {*} results Event results from database in json format
 */
function createRaceResultCombos(parent_element_id, races, results) {
    //var event_number = 12; // To limit content to be shown
    // Sorting past events. The most recent first etc.
    races.sort((a, b) => (a.start > b.start) ? -1 : 1);
    console.log(races);
    // This loop will insert comboboxes into parent_element_id
    for (let i = 0; i < races.length; i++) {
        // Filters results for race
        race_results = results.filter(function(row) {
                return row.fields.race_code === races[i].pk
            })
            // Outermost frame div
        var compo = document.createElement('div');
        compo.className = "event_compo";
        // Creating combobox content
        content = createResultTable('table' + i, race_results);
        event_row = createEventRow('event' + i, 'table' + i, races[i]);
        compo.append(event_row, content);
        //console.log(event_row.id);
        document.getElementById(parent_element_id).appendChild(compo);
    }
}

/**
 * Sets visibility status of table given as parameter. If table status is "hidden" 
 * it will be moved to "show" and controversary.
 * Used in past event list.
 * Also, sets accordion item arrow indicator for visibility status (up or down, double arrows)
 * 
 * @param {*} tableId ID for table to be hidden or shown (e.g., "table0" or "table5")
 */
function hideTable(tableId) {
    var tbl = document.getElementById(tableId);
    // Getting corresponding accordion item status arrow indicator for tableid
    var arrowUp = document.getElementById("arrow_up" + tableId.substring(5)); // e.g., "arrow_up0" or "arrow_up5"
    var arrowDown = document.getElementById("arrow_down" + tableId.substring(5)) // e.g., "arrow_down0" or "arrow_down5"
    console.log("Element: " + tbl.id);
    // Checking visibility status of table
    if (tbl.className.indexOf(" hide") === -1) { // If "hide", new status will be "show"
        tbl.className = tbl.className.replace(' show', ' hide');
        // Setting arrow indicator (double arrow in the end of the event row)
        arrowUp.className = arrowUp.className.replace('arrow_show', 'arrow_hide')
        arrowDown.className = arrowDown.className.replace('arrow_hide', 'arrow_show');
    } else { // If "show", new status will be "hide"
        tbl.className = tbl.className.replace(' hide', ' show');
        // Setting arrow indicator (double arrow in the end of the event row)
        arrowUp.className = arrowUp.className.replace('arrow_hide', 'arrow_show')
        arrowDown.className = arrowDown.className.replace('arrow_show', 'arrow_hide');
    }
    // Print info for debug
    console.log("Table container under " + tbl.id + " has now class names: " + tbl.className);
}

/**
 * Selects "count" numbers randomly within given range (from -> to).
 * This function is created to generate different imaginary event results
 * from the same certain dataset
 * (Function will be unnecessary when real data is aqcuired)
 * 
 * @param {*} from Start of range
 * @param {*} to  End of range
 * @param {*} count Number count to be selected
 * @returns List of randomly selected numbers from range in length of "count".
 */
function getRandomSet12(from = 1, to = 20, count = 12) {
    // Between any two numbers
    var numbers = range(from, to);
    var selected = [];
    var max = numbers.length;

    while (selected.length < count) {
        var index = (Math.floor(Math.random() * max));
        var number = numbers.splice(index, 1)[0];
        selected.push(number);
        max = numbers.length;
    }
    return selected;
}

/**
 * Generates number array with consecutive integers from start to end
 * 
 * @param {*} start Start of range
 * @param {*} end End of range
 * @returns List of consecutive numbers
 */
function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}