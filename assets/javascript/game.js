Ryu = {
    name: "Ryu",
    health: 100,
    attack: 10,
    counter: 10,
}
Ken = {
    name: "Ken",
    health: 125,
    attack: 8,
    counter: 13,
}
Cammy = {
    name: "Cammy",
    health: 80,
    attack: 15,
    counter: 12,
}
Chun = {
    name: "Chun",
    health: 90,
    attack: 13,
    counter: 13,
}
Bison = {
    name: "Bison",
    health: 140,
    attack: 11,
    counter: 17,
}

Player= {};
Opponent = {};


function randNumber(num){
    var randNum = (Math.floor(Math.random() * num) + 1);
    return randNum;
};

function newBackground() {
    var randNum = randNumber(10);
    randNum = randNum.toString();
    if (randNum !== "10"){
        randNum = ("0" + randNum);
    }
    else if (randNum === "10"){
        randNum = "10";
    }
    $("body").css("background-image", "url(./assets/images/backgrounds/000" + randNum + ".gif");
};

function pickCharacter(){
    if ( $("#player").contents().length === 0){
        $(this).appendTo("#player");
        playerName = $(this).attr("data-name");
        var index = 0;

        $(".select").each(function(){
            
            if ( ($(this).attr("data-name")) !== playerName ){
                var selector = ("#enemies .row .column" + index);
                $(this).appendTo(selector);
                index++;
            };
        });

        switch (playerName){
            case "ryu":
                Player = Ryu;
                break;

            case "ken":
                Player = Ken;
                break;
            
            case "cammy":
                Player = Cammy;
                break;

            case "chun":
                Player = Chun;
                break;

            case "bison":
                Player = Bison;
                break;
        }

        $("#player-health").text(Player.health);
    }
    else if ( $("#player").contents().length === 1 && $("#opponent").contents().length === 0){
        $(this).appendTo($("#opponent"));
        opponentName = $(this).attr("data-name");
        
        switch (opponentName){
            case "ryu":
                Opponent = Ryu;
                break;

            case "ken":
                Opponent = Ken;
                break;
            
            case "cammy":
                Opponent = Cammy;
                break;

            case "chun":
                Opponent = Chun;
                break;

            case "bison":
                Opponent = Bison;
                break;
        }

        $("#opponent-health").text(Opponent.health);
    };

    if ( $("#player").contents().length === 1 &&  $("#opponent").contents().length === 1){
        $("#fight").prop("disabled", false);
    }
};

function fight(){
    Opponent.health -= Player.attack;
    Player.attack += Player.attack;

    Player.health -= Opponent.counter;

    $("#player-health").text(Player.health);
    $("#opponent-health").text(Opponent.health);

    if (Player.health <= 0){
        $("#player").empty();
        $("#player-health").text("YOU LOSE");
        $("#fight").prop("disabled", true);
    };

    if (Opponent.health <= 0){
        $("#opponent").empty();
        $("#opponent-health").text("YOU WIN");
        $("#fight").prop("disabled", true);
    };
}