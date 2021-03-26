function setNavHidden(nav, close){
    nav.classList.remove("nav");
    nav.classList.add("nav--hidden");

    close.classList.remove("nav--close-button");
    close.classList.add("nav--hidden");
}

function setNav(nav, close){
    nav.classList.remove("nav--hidden");
    nav.classList.add("nav");

    close.classList.remove("nav--hidden");
    close.classList.add("nav--close-button");
}

function toggleNav(){
    const nav = document.getElementById("nav-sidebar");
    const closeButton = document.getElementById("nav-close");

    const classname = nav.className;
    classname === "nav--hidden" ? setNav(nav,closeButton):setNavHidden(nav,closeButton);
}

