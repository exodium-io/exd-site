//LOADER
jQuery(window).on("load", function() {
    "use strict";
    jQuery(".loader").fadeOut(800);

});


jQuery(function($) {
    "use strict";
    var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $this = $(this);

    /* ----- Back to Top ----- */
    $("body").append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
    var amountScrolled = 700;
    var backBtn = $("a.back-top");
    $window.on("scroll", function() {
        if ($window.scrollTop() > amountScrolled) {
            backBtn.addClass("back-top-visible");
        } else {
            backBtn.removeClass("back-top-visible");
        }
    });
    backBtn.on("click", function() {
        $root.animate({
            scrollTop: 0
        }, 700);
        return false;
    });


    if ($(".just-sidemenu").length) {
        var anchor_point = $(".rotating-words").height();
        var side_toggle = $(".just-sidemenu #sidemenu_toggle");
        side_toggle.addClass("toggle_white");
        $window.on("scroll", function() {
            if ($window.scrollTop() >= anchor_point) {
                side_toggle.removeClass("toggle_white");
            } else {
                side_toggle.addClass("toggle_white");
            }
        });
    }

    /*----- Menu On click -----*/
    if ($("#sidemenu_toggle").length) {
        $("body").addClass("pushwrap");
        $("#sidemenu_toggle").on("click", function() {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function() {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /* ------- Smooth scroll ------- */
    $("a.pagescroll").on("click", function(event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top
        }, 1200);
    });
    /*hide menu on mobile click*/
    $(".navbar-nav>li>a").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    });


    /*------ MENU Fixed ------*/
    if ($("nav.navbar").hasClass("static-nav")) {
        $window.scroll(function() {
            var $scroll = $window.scrollTop();
            var $navbar = $(".static-nav");
            if ($scroll > 200) {
                $navbar.addClass("fixedmenu");
            } else {
                $navbar.removeClass("fixedmenu");
            }
        });
    }

    /*bottom menu fix*/
    if ($("nav.navbar").hasClass("fixed-bottom")) {
        var navHeight = $(".fixed-bottom").offset().top;
        $window.scroll(function() {
            if ($window.scrollTop() > navHeight) {
                $('.fixed-bottom').addClass('fixedmenu');
            } else {
                $('.fixed-bottom').removeClass('fixedmenu');
            }
        });
    }

    /* ----- Full Screen ----- */
    function resizebanner() {
        var $fullscreen = $(".full-screen");
        $fullscreen.css("height", $window.height());
        $fullscreen.css("width", $window.width());
    }
    resizebanner();
    $window.resize(function() {
        resizebanner();
    });

});