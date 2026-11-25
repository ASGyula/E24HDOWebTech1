$(document).ready(function () {
    $("#main_title").mouseleave(function (){
        alert("egér elhúzva");
    });

    $("#click1").click(function (){
        $("#p1").hide();
    });

    $("#click2").dblclick(function (){
        $("#p2").hide();
    });

    $("#request_button").mouseenter(function (){
        alert("alert dialóg");
    });

    $("input").hover(
        function () {
            $(this).css("border-color", "red");
        },
        function () {
            $(this).css("border-color", "#888");
        }
    );

    $("input").focus(function () {
        $(this).css("background-color", "#ffffcc");
    });

    $("input").blur(function () {
        $(this).css("background-color", "white");
    });

    $("#hide_button").click(function () {
        $("p").hide();
    });

    $("#show_button").click(function () {
        $("p").show();
    });

    $("#on_off_button").click(function () {
        $("p").toggle();
    });

    $("#transparency_0_1_button").click(function () {
        $("#request_form").fadeTo("slow", 0.1);
    });

    $("#transparency_0_5_button").click(function () {
        $("#request_form").fadeTo("slow", 0.5);
    });

    $("#transparency_0_8_button").click(function () {
        $("#request_form").fadeTo("slow", 0.8);
    });

    $("#hide_bottom_button").click(function () {
        $("#request_form").hide();
    });

    $("#show_bottom_button").click(function () {
        $("#request_form").show();
    });

    $("#on_off_bottom_button").click(function () {
        $("#request_form").toggle();
    });
});