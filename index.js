var burgerIcon = document.getElementById("burger_icon");

var burgerOn = function (burgerMenu) {

    var menuButton = document.getElementById("burger_menu");
    var burgerMenu = document.getElementById("menu_options")

    //mostrar contenedor agregando la clase visible
    if (burgerMenu.className.indexOf("visible") === -1) {
        burgerMenu.className += " visible";
    }
}
burgerIcon.addEventListener("click", burgerOn);


//como le hago pa quitarlo? xd
var burgerOff = function () {

    burgerMenu.className.replace("visible", "");
}
burgerIcon.addEventListener("click", burgerOff);