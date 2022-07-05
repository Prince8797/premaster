
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
        $(".header").addClass("scroll");
    } else {
        $(".header").removeClass("scroll");
    }
});
$(window).on('resize', function () {
    if ($(window).width() < 600) {
        $(document).ready(function () {
            $(".btn").click(function () {
                $("#showHide").css("visibility", "visible");
            });
            $('.nav').click(function () {
                $("#showHide").css("visibility", "hidden");
            });
        });
    }
});
