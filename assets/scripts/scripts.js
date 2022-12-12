
toggleGlass();
window.onscroll = function () { toggleGlass() };
window.onresize = function () { toggleGlass() };

function toggleGlass() {
    if ((window.innerWidth <= 575)) {
        document.getElementById('NAV').classList.add('glass');
    } else if (window.innerWidth > 575) {
        document.getElementById('NAV').classList.remove('glass');
    };
}
