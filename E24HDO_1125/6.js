$(document).ready(function () {

    $("#calc_button").click(function (event) {
        let value_a = $("#input_a").val().trim();
        let value_b = $("#input_b").val().trim();
        let operation = $("input[name='operation']:checked").val();

        if(!value_a || !value_b){
            $("#result_area").text("a és b számoknak kell, hogy legyenek!");
            return;
        }

        let number_a = Number(value_a);
        let number_b = Number(value_b);

        if(!Number.isInteger(number_a) || !Number.isInteger(number_b)){
            $("#result_area").text("Csak számokat adjon meg!");
            return;
        }

        if(!operation){
            $("#result_area").text("Válasszon műveletet!");
            return;
        }


        if(operation === "mul"){
            result = number_a * number_b;
        }else if (operation === "div"){
            if(number_b === 0){
                $("#result_area").text("Nullával nem lehet osztani!");
                return;
            }else{
                result = number_a / number_b;
            }
        }else if(operation === "add"){
            result = number_a + number_b;
        }else if(operation === "sub"){
            result = number_a - number_b;
        }

        $("#result_area").text(result);
    })
})