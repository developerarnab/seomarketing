
// ----------counter no

$(document).ready(function () {

    $(".counter1").counterUp({

        delay: 10,
        time: 1800,

    });

    $(".counter2").counterUp({

        delay: 10,
        time: 1800,

    });

    $(".counter3").counterUp({

        delay: 10,
        time: 1800,

    });

    $(".counter4").counterUp({

        delay: 10,
        time: 1800,

    });

});

// ---------- swiper 

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2800,
        disableOnInteraction: false,
    },
});

// --------------navbar

const menutoggle = document.querySelector(".menutoggle");

const navbar = document.querySelector(".navbar");

menutoggle.addEventListener("click", () => {

    menutoggle.classList.toggle("active");

    navbar.classList.toggle("active");

})

// --------------loader

setTimeout(function () {

    $('.loader').fadeToggle();

}, 7200);

// ----------to top buttton

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {

        toTop.classList.add("active");

    } else {

        toTop.classList.remove("active");
    }

})











