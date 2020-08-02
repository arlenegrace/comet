/* ALL JAVASCRIPT USED ACROSS MULTIPLE SITES TO BE PLACED HERE */

/* MOBILE HAMBURGER BUTTON */
function open_nav() {
    const sidenav = document.getElementById('sidenav');
    const dropdown = document.getElementById('sidenav_container_id');
    const body = document.getElementsByTagName('body')[0];

    /* MANUALLY CALCULATE DROPDOWN WIDTH, AUTO DOESN'T PLAY CLOSING TRANSITION */
    const opened = dropdown.style.width == '100vw';

    document.getElementById('hamburger').classList.toggle("change");

    if (opened) {
        dropdown.style.width = '0vw';
        sidenav.style.width = '0vw';
        body.style.overflow = 'visible';
    } else {
        dropdown.style.width = '100vw';
        sidenav.style.width = '100vw';
        body.style.overflow = 'hidden';
    }
}