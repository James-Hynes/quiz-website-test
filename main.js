let current_answer;
let round = 0;
let score = 0;
let current_country;
let audioSources = [new Audio("./resources/audio/correct.mp3"), new Audio("./resources/audio/incorrect.mp3")];

$(document).ready(() => {
    // setupHigherLowerGame();
});

function generateCountry(excluded_country) {
    let country_code = "";
    while(country_code.length !== 2 || country_code === excluded_country) {
        country_code = Object.keys(country_codes)[Math.floor(Math.random() * Object.keys(country_codes).length)];
    }
    return country_code;
}

function getCountryName(country_code) {
    return country_codes[country_code].toLowerCase();
}

function setFlag(country_a) {
    let flag_images = document.getElementsByClassName('flag_image');
    flag_images[0].src = "resources/flags/"+country_a+".png";
}