$(document).ready(function(){
    $("#load_button").click(function(){
        $("#area").empty().show();

        $.getJSON("E24HDO_orarend1.json", function(data){
            const headerHtml =
                "<h2>" + data.egyetem.toUpperCase() + "</h2>" +
                "<p><strong>Cím:</strong> " + data.cim + "</p>" +
                "<p><strong>Telefonszám:</strong></p>" +
                "<ul>" +
                "<li>Vezetékes: " + data.telefonszam.vezetekes + "</li>" +
                "<li>Mobil: " + data.telefonszam.mobil + "</li>" +
                "</ul>" +
                "<h3>" + data.cim_felirat + "</h3>";

            $("#area").append(headerHtml);

            $.each(data.orak.ora, function(index, ora){
                const oraHtml =
                    "<div class='class_block'>" +
                    "<p><strong>Tárgy:</strong> " + ora.targy + "</p>" +
                    "<p><strong>Időpont:</strong></p>" +
                    "<div class='time_details'>" +
                    "Nap: " + ora.idopont.nap + "<br>" +
                    "Tól: " + ora.idopont.tol + ":00<br>" +
                    "Ig: " + ora.idopont.ig + ":00" +
                    "</div>" +
                    "<p><strong>Helyszín:</strong> " + ora.helyszin + "</p>" +
                    "<p><strong>Oktató:</strong> " + ora.oktató + "</p>" +
                    "<p><strong>Szak:</strong> " + ora.szak + "</p>" +
                    "</div>";

                $("#area").append(oraHtml);
            });
        });
    });
});