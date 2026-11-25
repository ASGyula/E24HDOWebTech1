$(document).ready(function(){
    $("#start_anim_button").click(function(){
        $("#box")
            .animate({
                left: "600px",
                width: "450px",
                fontSize: "30pt"
            }, 1000)
            .animate({
                top: "400px",
                width: "250px",
                height: "110px",
                fontSize: "14pt"
            }, 1000)
            .animate({
                left: "300px",
                opacity: "0.4"
            }, 1000)
            .animate({
                top: "250px",
                width: "300px",
                height: "100px",
                opacity: "1",
                fontSize: "12pt"
            }, 1000, function(){
                alert("VÉGE");
            });
    });

    $("#hide_p_button").click(function(){
        $("#paragraphs").hide(500, function(){
            $("#box").animate({
                top: "120px"
            }, 500, function(){
                alert("Bekezdések elrejtése");
            });
        });
    });

    $("#toggle_box_button").click(function(){
        $("#box")
            .slideToggle(500)
            .slideToggle(500)
            .animate({
                left: "550px",
                width: "400px"
            }, 1000);
    });
});