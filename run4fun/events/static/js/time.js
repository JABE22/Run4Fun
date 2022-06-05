/* SITE DATETIME SETTINGS */

// request a weekday along with a long date
let options1 = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
    timeZoneName: 'short'
};

let options2 = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'EET',
    timeZoneName: 'short'
};

setInterval(function() {
    var date = new Date();
    // Format → "Monday, January 3, 2022, 6:32:50 PM GMT+2" (with options2)
    document.getElementById("date").innerHTML = date.toLocaleString('en-US', options2);
}, 1000);