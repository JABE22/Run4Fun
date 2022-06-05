/**
 * This for image slide show in the home page
 */

function showSlides(slide, index, timeout) {
    let i;
    let slides = document.getElementsByClassName(slide);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none ";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block ";
    setTimeout(function() {
        showSlides(slide, index, timeout);
    }, timeout); // Change image every 8 seconds
}