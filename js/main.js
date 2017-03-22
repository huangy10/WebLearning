window.onload = function WindowLoaded(event) {
    // $.backstretch("img/background.jpg")
    Navigation.init();
};

var Navigation = (function($) {
    var navIndex;
    var init = function() {
        navIndex = 0;
        // create waypoints here
        $(".second-part").waypoint(function (direction) {
            setNav(direction);
            $(".second-part").toggleClass("second-part-active");
        }, {offset: "50px" });

        $(".third-part").waypoint(function (direction) {
            setNav(direction);
        })
    };

    var scrollTo = function (id) {
        $('html, body').dequeue();
        $('html, body').animate({scrollTop: $(id).offset().top}, 1000, "easeOutExpo");
    };

    var setNav = function(direction) {
        $(".navigation a").removeClass("active");
        navIndex = direction === "down" ? navIndex + 1 : navIndex - 1;

        $(".navigation a").eq(navIndex).addClass("active");

        console.log(navIndex);
    };

    return {
        init: init,
        scrollTo: scrollTo
    }

}(jQuery));