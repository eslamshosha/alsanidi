$(document).ready(function() {

	//slide down menu
	$('.btn-div').click(function () {
        $(".cats-dispaly").slideToggle(400);
        $(".overlay-box").fadeToggle(300);
        if ($(window).width() <= 1199) {
            $(".overlay-box").hide();
            $(this).toggleClass("active")
        }
    });
    $('.overlay-box').click(function () {
        $(".cats-dispaly").slideToggle(400);
    });
	//phone size menu
    if ($(window).width() <= 1199) {
         $('#menu-id-om').click(function (e) {
			e.preventDefault()
            $(".overlay-box").fadeIn(300);
            $("nav").addClass("reset-left");
            $("body").addClass("overflow");
        });
        $(".nav-head .close-btn, .overlay-box").click(function () {
        	$(".overlay-box").fadeToggle(300);
            $("nav").removeClass("reset-left");
            $("body").removeClass("overflow");
        });

        $('.has-level-2>.cat-anchor>i').click(function (e) {
            e.preventDefault()
            var item = $(this).parents(".cat-anchor");
            $(".has-level-2>.cat-anchor").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level-2>.cat-anchor").not(item).siblings().slideUp(500);
        })

        $('.has-level-3>.cat-anchor>i').click(function (e) {
            e.preventDefault()
            var item = $(this).parents(".cat-anchor");
            $(".has-level-3>.cat-anchor").not(item).removeClass("active");
            $(item).toggleClass("active");
            if ($(item).siblings().css('display') == 'none') {
                $(item).siblings().slideDown(500);
            } else {
                $(item).siblings().slideUp(500);
            }
            $(".has-level-3>.cat-anchor").not(item).siblings().slideUp(500);
        })
    }


	//Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });

	//image slider
	$('.image-section .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin: 10,
		rtl: true,
		navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			320: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			520: {
				items: 3,
				nav: false,
				dots: true,
				loop: true
			},
			720: {
				items: 4,
				nav: false,
				dots: true,
				loop: true
			},
			920: {
				items: 5,
				nav: false,
				dots: true,
				loop: true
			},
			1120: {
				items: 6,
				nav: false,
				dots: true,
				loop: true
			},
			1200: {
				items: 6,
				nav: true,
				dots: false,
				loop: true
			}
		}
	});

	//add class active to tabs
	$(document).ready(function() {
		$(".nav-link").click(function () {
			$(".nav-link").removeClass("active");
			$(this).addClass("active");   
		});
		});
	//product slider
	$('.tabs-catgory .owl-carousel').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 4000,
		margin: 10,
		rtl: true,
		navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
				dots: true,
				loop: true
			},
			480: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			720: {
				items: 2,
				nav: false,
				dots: true,
				loop: true
			},
			992: {
				items: 3,
				nav: false,
				dots: true,
				loop: true
			},
			1200: {
				items: 4,
				nav: true,
				dots: true,
				loop: true
			},
			1920: {
				items: 5,
				nav: true,
				dots: true,
				loop: true
			}
		}
	});
	
	var minVal = 1, maxVal = 100; // Set Max and Min values
    // Increase product quantity on cart page
    $(".plus-control").on('click', function () {
        var $parentElm = $(this).parents(".qty-val");
        var value = $parentElm.find(".qty-input").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qty-input").val(value);
    });
    // Decrease product quantity on cart page
    $(".minus-control").on('click', function () {
        var $parentElm = $(this).parents(".qty-val");
        var value = $parentElm.find(".qty-input").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qty-input").val(value);
    });

	/////////**to refresh page for accordin to script again**//////////
	$(function(){
		var width = $(window).width();
		var screen = "";
		if(width < 1024 && width >640){
		 screen = "small";
		} else if(width>1024) { screen = "big"; }
		$(window).resize(function(){
		location.reload();
	   })
	});
	////////////** footer transfer into accordion **//////////

	if ($(window).width() <= 767) {
		$(".nav-foot-header").addClass("footer-accordion");
		$(".nav-foot").addClass("footer-panel");
	}
	$('.footer-accordion').click(function () {
		var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
		$(".footer-accordion").not(this).removeClass("active");
		$(this).toggleClass("active");
		if ($(this).siblings().css('max-height') == '0px') {
			$(this).siblings().css('max-height', x);
			$(this).siblings('.nav-foot').css('padding-top', "15px");
		} else {
			$(this).siblings().css('max-height', '0');
			$(this).siblings('.nav-foot').css('padding-top', "0");
		}

		$(".footer-accordion").not(this).siblings().css('max-height', '0');
		$(".footer-accordion").not(this).siblings('.nav-foot').css('padding-top', "0");
	})
});

//timer setting
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "31 Dec 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);


   //////////** fixed arrow to top**//////////
   $(".arrow-top").click(function () {
	$("html,body").animate({
		scrollTop: 0
	}, 1500);
});
if ($(this).scrollTop() >= 100) {
	$("header").addClass("header-scroll");
	$(".top-bar-cont").hide();
	if ($(window).width() <= 1199) {
		$("header .grid-item").hide()
	}
} else {
	$("header").removeClass("header-scroll");
	$(".top-bar-cont").show();
	if ($(window).width() <= 1199) {
		$("header .grid-item").show()
	}
}
$(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);

$(window).scroll(function () {
	$(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(300) : $(".arrow-top").fadeOut(300);
});



