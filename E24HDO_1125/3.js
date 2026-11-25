$(document).ready(function (){
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
        function(){
            $(this).css("border-color", "red");
        },
        function(){
            $(this).css("border-color", "#888");
        }
    );

    $("input").focus(function () {
        $(this).css("background-color", "#ffffcc");
    });

    $("input").blur(function () {
        $(this).css("background-color", "white");
    });
});