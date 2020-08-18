$(".navbar-toggler ").click(function toggle(){
    $(".collapse").toggleClass("mydesign")
})

$(window).on("scroll", function() {
    if($(window).scrollTop() > 80) {
        $(".header").addClass("navcolor");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".header").removeClass("navcolor");
    }
});
