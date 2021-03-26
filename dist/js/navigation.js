function setNavHidden(element){
    element.classList.remove("nav");
    element.classList.add("nav--hidden");
}

function setNav(element){
    element.classList.remove("nav--hidden");
    element.classList.add("nav");
}

function toggleNav(){
    const nav = document.getElementById("nav-sidebar");
    
    const classname = nav.className;
    classname === "nav--hidden" ? setNav(nav):setNavHidden(nav);
}

