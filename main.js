let round = 0;
let score = 0;

let current_answer;
let current_country;

let allowed_countries = ["af", "al", "at", "ad"];
let used_countries = [];
let current_setting = "world_no_territories";

let audioSources = [new Audio("./resources/audio/correct.mp3"), new Audio("./resources/audio/incorrect.mp3")];

$(document).ready(() => {
    // setupFlagChoiceGame();
    // setupHigherLowerGame();
    let pos = calculatePixelCoordsFromLatLong(34.0522, 118.2437);
    $('.pointer').css({left: pos[0], top: 470 - pos[1]});
});

function calculatePixelCoordsFromLatLong(lat, long) {
    // return [(degreesToRadians(long) * 780) / 360, (degreesToRadians(lat) * 400)/180];
    // get x   
    var x = (long + 180) * (780 / 360);
    // convert from degrees to radians
    var latRad = lat * Math.PI / 180;
    // get y value
    var mercN = Math.log(Math.tan((Math.PI / 4) + (latRad / 2)));
    var y = (400 / 2) - (780 * mercN / (2 * Math.PI));
    return [x, y];
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}