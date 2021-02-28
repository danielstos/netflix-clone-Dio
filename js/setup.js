$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})

function toggle(){
    var trailer = document.querySelector(".trailer");
    var video = document.querySelector("video");
    trailer.classList.toggle("active");
    video.pause();
    video.currentTime = 0;
}

