const COMPARISONS = [{comparison: "population", "comparison_category": countryDemoData}, 
{comparison: "gdp", "comparison_category": countryEconData}, {comparison: "death_rate", "comparison_category": countryDemoData}, 
{comparison: "birth_rate", "comparison_category": countryDemoData}, {comparison: "literacy", "comparison_category": countryDemoData},
{comparison: "religions", "comparison_category": countryDemoData}]

// Get the correct answer to a generated question from the data
function getHigherLowerAnswer(comparison, country_a_name, country_b_name) {
    let country_a_comp = comparison["comparison_category"][country_a_name][comparison["comparison"]];
    let country_b_comp = comparison["comparison_category"][country_b_name][comparison["comparison"]];
    // Find the two categories being compared within the data

    switch(comparison["comparison"]) { // Some comparisons require going deeper into the object
        case "population": return (country_a_comp["total"] > country_b_comp["total"]) ? 0 : 1;
        case "gdp": return country_a_comp["purchasing_power_parity"]["annual_values"][0]["value"] > country_b_comp["purchasing_power_parity"]["annual_values"][0]["value"] ? 0 : 1;
        case "death_rate": return country_a_comp["deaths_per_1000_population"] > country_b_comp["deaths_per_1000_population"] ? 0 : 1;
        case "birth_rate": return country_a_comp["births_per_1000_population"] > country_b_comp["births_per_1000_population"] ? 0 : 1;
        case "literacy": return country_a_comp["total_population"]["value"] > country_b_comp["total_population"]["value"] ? 0 : 1;
        case "religions": return country_a_comp["religion"].length > country_b_comp["religion"].length ? 0 : 1;
    }
}

function getCurrentHigherLowerCountryCode(n) { // n = 0 || 1
    let flag_buttons = document.getElementsByClassName("country_container");
    flag_buttons[0].style.float = "left";
    flag_buttons[1].style.float = "right";
    let flag = document.getElementsByClassName('flag_image')[n]; // either flag 0 or 1
    return flag.src.split(".png")[0].slice(-2); // get the country code of the flag (all country codes are 2 char by specification)
}

function generateNewHigherLowerRound(prev_country) {
    country_a = prev_country || generateCountry(); // on round 0 we generate two random countries, otherwise keeping the previous correct answer
    country_b = generateCountry(country_a);

    country_a_name = getCountryName(country_a);
    country_b_name = getCountryName(country_b);

    let comparison = generateHigherLowerComparison();
    let question = generateHigherLowerQuestion(comparison);

    current_country = country_a;
    // generate all data for the round, then attempt to find the answers 

    try {
        // some countries do not contain as full of information as others, so sometimes we attempt to compare to nothing.
        current_answer = getHigherLowerAnswer(comparison, country_a_name, country_b_name);
    } catch {
        if(round == 0) { // if the round is 0, either country 0 or 1 could be the problem
            generateNewHigherLowerRound()
        } else {
            generateNewHigherLowerRound(current_country); // if we aren't in round 0, we know the current country is not the problem, so we keep it.
        }
    }

    setHigherLowerFlags(country_a, country_b); 
    setHigherLowerCountries(country_a_name, country_b_name);
    setHigherLowerQuestions(question);

    // change the images, change the captions, change the question
}

function checkAnswer(n) { // called when user clicks an answer
    round++;
    if(n === current_answer) { 
        console.log("correct!");
        audioSources[0].currentTime=0;
        audioSources[0].play();
        score++;
        setHigherLowerScore();
        generateNewHigherLowerRound(getCurrentHigherLowerCountryCode(n));
    } else {
        audioSources[1].currentTime=0;
        audioSources[1].play();
        console.log("incorrect!");
        score = 0;
        round = 0;
        current_answer = -1;
        current_country = -1;
        setHigherLowerScore();
        generateNewHigherLowerRound();
    }
}

function generateHigherLowerComparison() {
    return COMPARISONS[Math.floor(Math.random() * COMPARISONS.length)];
}

function generateHigherLowerQuestion(comparison) {
    switch(comparison["comparison"]) {
        case "population":
            return "Which of these countries has a higher population?";
        case "gdp":
            return "Which of these countries has a higher real GDP? (PPP)";
        case "death_rate":
            return "Which of these countries has a higher death rate (per 1000 population)?";
        case "birth_rate":
            return "Which of these countries has a higher birth rate (per 1000 population)?";
        case "literacy":
            return "Which of these countries have a higher total literacy rate (% 15 and over, can read and write)?";
        case "religions":
            return "Which of these countries have more total religions? (At least N people identifying as such?)";
        default:
            return "N/A";
    }
}


function capitalizeFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function setHigherLowerFlag(country_a) {
    let flag_images = document.getElementsByClassName('flag_image');
    flag_images[0].src = "resources/flags/"+country_a+".png";
}

function humanize(str) {
    var i, frags = str.split('_');
    for (i=0; i<frags.length; i++) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}

function setHigherLowerFlags(country_a, country_b) {
    let flag_images = document.getElementsByClassName('flag_image');
    flag_images[0].src = "resources/flags/"+country_a+".png";
    flag_images[1].src = "resources/flags/"+country_b+".png";
}

function setHigherLowerCountries(country_a_name, country_b_name) {
    let country_names = document.getElementsByClassName("country_name_sub");
    country_names[0].innerHTML = humanize(country_a_name);
    country_names[1].innerHTML = humanize(country_b_name);
}

function setHigherLowerQuestions(question) {
    let question_span = document.getElementById("question");
    question_span.innerHTML = question;
}

function setHigherLowerScore() {
    let score_span = document.getElementById('score');
    score_span.innerHTML = "Score: " + score;
}

function setupHigherLowerGame() {
    quiz_body = document.getElementsByClassName('quiz_container')[0];

    // Setup country section
    for(let i = 0; i < 2; i++) {
        let country_container = document.createElement('div');
        country_container.style.float = (i === 0) ? "left" : "right";
        country_container.className = "country_container";
        quiz_body.appendChild(country_container);
        let fig = document.createElement('figure');
        country_container.appendChild(fig);
        let big_flag = document.createElement("div");
        big_flag.className = "big_flag_button";
        big_flag.onclick = () => {
            checkAnswer(i);
        };
        fig.appendChild(big_flag);
        let flag_img = document.createElement("img");
        flag_img.src = "resources/flags/ad.png";
        flag_img.className = "flag_image";
        big_flag.appendChild(flag_img);
        let cap = document.createElement("figcaption");
        cap.className = "country_name_sub"
        cap.innerHTML = "Andorra";
        fig.appendChild(cap);
    }

    let question_container = document.createElement("div");
    question_container.className = "question_container";
    let question_span = document.createElement("span");
    question_span.id="question";
    question_span.innerHTML = "Which of these two countries has a higher population?";

    quiz_body.appendChild(question_container);
    question_container.appendChild(question_span);

    let score_container = document.createElement("div");
    score_container.className = "score_container";
    let score_span = document.createElement("span");
    score_span.id="score";
    score_span.innerHTML = "Score: 0";

    quiz_body.appendChild(score_container);
    score_container.appendChild(score_span);

    generateNewHigherLowerRound();
}