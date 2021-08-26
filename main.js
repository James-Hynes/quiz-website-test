let current_answer;
let round = 0;
let score = 0;
let current_country;

$(document).ready(() => {
    let flag_buttons = document.getElementsByClassName("country_container");
    flag_buttons[0].style.float = "left";
    flag_buttons[1].style.float = "right";

    generateNewRound();
});

function setFlags(country_a, country_b) {
    let flag_images = document.getElementsByClassName('flag_image');
    flag_images[0].src = "resources/flags/"+country_a+".png";
    flag_images[1].src = "resources/flags/"+country_b+".png";
}

function setCountries(country_a_name, country_b_name) {
    let country_names = document.getElementsByClassName("country_name_sub");
    country_names[0].innerHTML = humanize(country_a_name);
    country_names[1].innerHTML = humanize(country_b_name);
}

function setQuestion(question) {
    let question_span = document.getElementById("question");
    question_span.innerHTML = question;
}

function setScore() {
    let score_span = document.getElementById('score');
    score_span.innerHTML = "Score: " + score;
}

function generateCountry(excluded_country) {
    let country_code = "";
    while(country_code.length !== 2 || country_code === excluded_country) {
        country_code = Object.keys(country_codes)[Math.floor(Math.random() * Object.keys(country_codes).length)];
    }
    return country_code;
}

function generateComparison() {
    return {comparison: "population", "comparison_category": countryDemoData};
}

function generateQuestion(comparison) {
    switch(comparison["comparison"]) {
        case "population":
            return "Which of these countries has a higher population?";
        default:
            return "N/A";
    }
}

function getCountryName(country_code) {
    return country_codes[country_code].toLowerCase();
}

function getAnswer(comparison, country_a_name, country_b_name) {
    return (comparison["comparison_category"][country_a_name][comparison["comparison"]]["total"] > comparison["comparison_category"][country_b_name][comparison["comparison"]]["total"]) ? 0 : 1;
    // return {country_a_name: comparison["comparison_category"][country_a_name][comparison["comparison"]]["total"], country_b_name: comparison["comparison_category"][country_b_name][comparison["comparison"]]["total"]}
}

function getCurrentCountryCode(n) { // n = 0 || 1
    let flag = document.getElementsByClassName('flag_image')[n];
    return flag.src.split(".png")[0].slice(-2);
}

function generateNewRound(prev_country) {
    country_a = prev_country || generateCountry();
    country_b = generateCountry(country_a);

    country_a_name = getCountryName(country_a);
    country_b_name = getCountryName(country_b);

    let comparison = generateComparison();
    let question = generateQuestion(comparison);

    current_country = country_a;

    console.log(country_a_name, country_b_name);
    try {
        current_answer = getAnswer(comparison, country_a_name, country_b_name);
    } catch {
        if(round == 0) {
            generateNewRound()
        } else {
            generateNewRound(current_country);
        }
    }

    setFlags(country_a, country_b);
    setCountries(country_a_name, country_b_name);
    setQuestion(question);
}

function checkAnswer(n) {
    round++;
    if(n === current_answer) {
        console.log("correct!");
        score++;
        setScore();
        generateNewRound(getCurrentCountryCode(n));
    } else {
        console.log("incorrect!");
    }
}

function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function humanize(str) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }