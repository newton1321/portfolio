const home = document.getElementById("home");
const about_me = document.getElementById("about_me");
const experience = document.getElementById("experience");
const portfolio = document.getElementById("portfolio");

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll < 700){
        home.style.borderStyle = "solid";
        remove_border(1);
    }
    else if (scroll > 700){
        about_me.style.borderStyle = "solid";
        remove_border(2);
    }
});

home.style.borderStyle = "solid";

function remove_border(x){
    if (x == 1){
        about_me.style.borderStyle = "hidden";
        experience.style.borderStyle = "hidden";
        portfolio.style.borderStyle = "hidden";
    }
    if (x == 2){
        home.style.borderStyle = "hidden";
        experience.style.borderStyle = "hidden";
        portfolio.style.borderStyle = "hidden"; 
    }    
    if (x == 3){
        home.style.borderStyle = "hidden";
        about_me.style.borderStyle = "hidden";
        portfolio.style.borderStyle = "hidden"; 
    }  
    if (x == 4){
        home.style.borderStyle = "hidden";
        about_me.style.borderStyle = "hidden";
        experience.style.borderStyle = "hidden"; 
    }  
}