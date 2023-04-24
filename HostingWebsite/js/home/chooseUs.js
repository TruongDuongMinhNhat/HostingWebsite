var getChooseUs = document.getElementsByClassName("chooseUs")[0];


window.addEventListener("scroll", setClassAnimation);
window.addEventListener("load", setClassAnimation);

function setClassAnimation(){
    if(getChooseUs.getBoundingClientRect().top < window.innerHeight) {
        getChooseUs.classList.add("chooseUs--animation");
        getChooseUs.classList.add("chooseUs--animation");
    }
}