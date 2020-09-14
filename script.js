const scrollLink = document.querySelector('#scroll a');
scrollLink.addEventListener('click', scroll);
function scroll () {
    scrollLink.parentElement.scrollIntoView(
        {behavior: 'smooth', block: 'start', inline: 'nearest'});
}

window.addEventListener('resize', main);
function main() {
    const home = document.querySelector('#home');
    home.style.height = window.innerHeight + "px";

    const navbar = document.querySelector('#navbar');
    const content = document.querySelectorAll('.content');
    [...content].forEach((curr, i) => {
        const height = window.innerHeight - navbar.getBoundingClientRect().height;
        if (window.innerWidth > 767) {
            curr.style.height = height + "px";
            curr.querySelector('.image').style.float = i % 2 === 0 ? "left" : "right";
            curr.querySelector('.text').style.float = i % 2 === 1 ? "left" : "right";
        } else {
            curr.style.height = 2 * height + "px";
            curr.querySelector('.image').style.float = "";
            curr.querySelector('.text').style.float = "";
        }
    });
}
main();

const links = document.querySelectorAll('#navbar a');
[...links].forEach((curr, i) => {
    curr.addEventListener('click', function clickHandler (event) {
        event.preventDefault();
        const contentId = curr.href.split('#')[1];
        const content = document.querySelector('#' + contentId);
        if (contentId === 'home') {
            document.querySelector('#home').scrollIntoView(
                {behavior: 'smooth', block: 'start', inline: 'nearest'});
        } else {
            content.querySelector('.hidden-scroll').scrollIntoView(
                {behavior: 'smooth', block: 'start', inline: 'nearest'});
        }
    });
});

setInterval(function () {
    document.querySelector('#title-box').classList.toggle('big');
}, 450);



setTimeout(auto, 4000);
let i = 0;

function  auto(){
if(i === 0){
    document.querySelector("#home").style.backgroundImage = "url(http://r.ddmcdn.com/w_830/s_f/o_1/cx_98/cy_0/cw_640/ch_360/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg)" ;
} 
else if(i === 1){
    document.querySelector("#home").style.backgroundImage = "url(http://www.goodwp.com/images/201309/goodwp.com_29902.jpg)" ;

}
else if (i === 2){
document.querySelector("#home").style.backgroundImage = "url(https://www.collegeatlas.org/wp-content/uploads/2014/06/Top-Party-Schools-main-image.jpg)" ;
}
i++;
if (i === 3){
    i = 0;
}
setTimeout(auto, 3000);
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


