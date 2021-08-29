let round = 0;
let score = 0;

let current_answer;
let current_country;

let allowed_countries = ["af", "al", "at", "ad"];
let used_countries = [];
let current_setting = "world_no_territories";

let audioSources = [new Audio("./resources/audio/correct.mp3"), new Audio("./resources/audio/incorrect.mp3")];

$(document).ready(() => {
    setupFlagChoiceGame();
});

function generateCountry(excluded_country) {
    let country_code = "";
    while(country_code.length !== 2 || country_code === excluded_country) {
        country_code = allowed_countries[Math.floor(Math.random() * allowed_countries.length)];
    }
    return country_code;
}

function getCountryName(country_code) {
    console.log(country_code);
    return country_codes[country_code].toLowerCase();
}

function setFlagGameFlag(country_a) {
    document.getElementsByClassName("flag_game_flag_image")[0].src = "./resources/flags/"+country_a+".png";
}

function setFlagChoiceOptions(countries) {
    console.log(countries);
    let flag_option_text = document.getElementsByClassName("flag_game_country_option_text");
    for(let country in countries) {
        let f_country_name = humanize(getCountryName(countries[country]));
        flag_option_text[country].innerHTML = (f_country_name.length > 32) ? f_country_name.substring(0, 29)+"..." : f_country_name;
    }
}

function checkFlagGameAnswer(n) {
    if(n === current_answer) {
        score++;
        audioSources[0].currentTime=0;
        audioSources[0].play();
        used_countries.push(current_answer);
    } else {
        score = 0;
        audioSources[1].currentTime=0;
        audioSources[1].play();
        used_countries = [];
    }
    setScore();
    generateFlagChoiceRound();
}

function setScore() {
    document.getElementById('score').innerHTML = "Score: " + score;
}

function generateFlagChoiceRound() {
    let country_a = generateCountry();
    let country_a_name;
    while(used_countries.includes(country_a)) {
        country_a = generateCountry();
    }
    country_a_name = getCountryName(country_a);

    let country_options_incorrect = [];
    while(country_options_incorrect.length < 3) {
        country_option = (Math.random() < 0.5) ? generateSimilarCountry(country_a_name) : generateCountry();
        if(!country_options_incorrect.includes(country_option) && country_option !== country_a) {
            country_options_incorrect.push(country_option);
        }
    }
    let flag_options = country_options_incorrect;
    flag_options.push(country_a);

    shuffleArray(flag_options);
    current_answer = flag_options.indexOf(country_a);

    setFlagChoiceOptions(flag_options);
    setFlagGameFlag(country_a);
}

function generateSimilarCountry(country_a_name) {
    let similarity_scores = [];
    for (let code in allowed_countries) {
        similarity_scores.push([allowed_countries[code], LevenshteinDistance(country_a_name, allowed_countries[code])])
    }
    similarity_scores.sort(function(a, b) {
        return a[1] - b[1];
    });
    return similarity_scores[similarity_scores.length - (Math.floor(Math.random() * 10))-1][0];
}

function setupFlagChoiceGame() {
    let quiz_container = document.getElementsByClassName('quiz_container')[0];

    let flag_container = document.createElement('div');
    flag_container.className = "flag_game_flag_container";
    let flag_img = document.createElement('img');
    flag_img.className = "flag_game_flag_image";
    flag_img.src = "./resources/flags/af.png";
    quiz_container.appendChild(flag_container);
    flag_container.appendChild(flag_img);
    quiz_container.appendChild(document.createElement('hr'));
    let flag_game_choice_container = document.createElement('div');
    flag_game_choice_container.className = "flag_game_multi_choice_container";
    let flag_game_country_option = document.createElement('div');
    flag_game_country_option.className = "flag_game_country_option";
    quiz_container.appendChild(flag_game_choice_container);
    flag_game_choice_container.appendChild(flag_game_country_option);

    for(let i = 0; i < 4; i++) {
        let flag_game_country_option_container = document.createElement('div');
        flag_game_country_option_container.className = "flag_game_country_option_container";
        flag_game_country_option_container.onclick = () => {checkFlagGameAnswer(i)}
        flag_game_country_option.appendChild(flag_game_country_option_container);
        let flag_game_country_option_text = document.createElement('span');
        flag_game_country_option_text.innerHTML = "Afghanistan";
        flag_game_country_option_text.className = "flag_game_country_option_text";
        flag_game_country_option_container.appendChild(flag_game_country_option_text);
    }

    let score_container = document.createElement("div");
    score_container.className = "score_container score_container_flag_game";
    let score_span = document.createElement("span");
    score_span.id="score";
    score_span.innerHTML = "Score: 0";

    quiz_container.appendChild(score_container);
    score_container.appendChild(score_span);

    changeSettings({value: "world_no_territories"});
    generateFlagChoiceRound();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function changeSettings(setting) {
    allowed_countries = [];
    switch(setting.value) {
        case "world": addToAllowedCountries([oceaniaCountries, southAmericanCountries, northAmericanCountries, africanCountries, asianCountries, europeanCountries]); break;
        case "oceania": addToAllowedCountries([oceaniaCountries]); break;
        case "south_america": addToAllowedCountries([southAmericanCountries]); break;
        case "north_america": addToAllowedCountries([northAmericanCountries]); break;
        case "africa": addToAllowedCountries([africanCountries]); break;
        case "asia": addToAllowedCountries([asianCountries]); break;
        case "europe": addToAllowedCountries([europeanCountries]); break;
        case "middle_east": addToAllowedCountries([middleEasternCountries]); break;
        case "all_america": addToAllowedCountries([northAmericanCountries, southAmericanCountries]); break;
        case "eurasia": addToAllowedCountries([europeanCountries, asianCountries]); break;
        case "world_no_territories": 
            addToAllowedCountries([oceaniaCountries, southAmericanCountries, northAmericanCountries, africanCountries, asianCountries, europeanCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "oceania_no_territories": 
            addToAllowedCountries([oceaniaCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "south_america_no_territories": 
            addToAllowedCountries([southAmericanCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "north_america_no_territories": 
            addToAllowedCountries([northAmericanCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "africa_no_territories": 
            addToAllowedCountries([africanCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "asia_no_territories": 
            addToAllowedCountries([asianCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "europe_no_territories": 
            addToAllowedCountries([europeanCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "eurasia_no_territories": 
            addToAllowedCountries([europeanCountries, asianCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        case "americas_no_territories": 
            addToAllowedCountries([northAmericanCountries, southAmericanCountries]); 
            removeFromAllowedCountries(allTerritories);
            break;
        
    }
    resetGame();
}

function addToAllowedCountries(countries_arr) {
    countries_arr.forEach( (a) => {
        a.forEach((b) => {
            if(!allowed_countries.includes(b)) {
                allowed_countries.push(b[1]);
            }
        })
    })
}

function removeFromAllowedCountries(countries) {
    for(let i = 0; i < countries.length; i++) {
        if(allowed_countries.includes(countries[i][1])) {
            allowed_countries.splice(allowed_countries.indexOf(countries[i][1]), 1);
        }
    }
}

function resetGame() {
    score = 0;
    round = 0;
    generateFlagChoiceRound();
}