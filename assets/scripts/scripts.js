
toggleGlass();
window.onscroll = function () { toggleGlass() };
window.onresize = function () { toggleGlass() };

function toggleGlass() {
    if ((document.documentElement.scrollTop > 1) || (window.innerWidth <= 575)) {
        document.getElementById('NAV').classList.add('glass');
    } else if ((document.documentElement.scrollTop <= 1) && (window.innerWidth > 575)) {
        document.getElementById('NAV').classList.remove('glass');
    };
}
