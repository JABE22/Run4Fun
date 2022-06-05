/* RESPONSIVE NAVBAR SETUP */

/**
 * Changes navbar to responsive.
 * Used when "hamburger" icon clicked to open menu in smaller screens.
 */
function setresponsive() {
    var x = document.getElementById("respnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}