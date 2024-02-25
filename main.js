var settingsmenu = document.querySelector(".settings-menu");
var darckmode = document.querySelector("#dark-btn");

function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
}
darckmode.onclick= () =>{
    darckmode.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
    localStorage.setItem("theme", "dark")
}else{
    localStorage.setItem("theme", "light")
    }

}

if(localStorage.getItem("theme") == "light"){
    darckmode.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}else if(localStorage.getItem("theme") == "dark"){
    darckmode.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
}else{
    localStorage.setItem("theme", "light")
}
