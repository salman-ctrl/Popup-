let popup =document.getElementById('popup');
let popups = document.getElementById('popups');
function openPopup(){
    popup.classList.add("open-popup");
    
}

function closePopup(){
    popup.classList.remove("open-popup");

}

function showSecondpopup(){
    closePopup();
    popups.classList.add("open-popups")
}