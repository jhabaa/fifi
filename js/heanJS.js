
function getDate(a){
    
}

function showMenu(){
    var menu = document.getElementById("menu-burger");
    var buttonBurger = document.getElementById("button-burger");
    var textBtn = document.getElementById("textBtn");
    menu.classList.toggle("burger-nav");
    menu.animate(
        {transform:'rotate(180deg)'},500
    )
    buttonBurger.animate(
        {transform:'rotate(180deg)'},500
    )
    textBtn.animate(
        {transform:'rotate(180deg)'},500
    )
    

}