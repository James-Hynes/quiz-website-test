let country_codes = {
    "ad": "Andorra",
    "ae": "United_Arab_Emirates",
    "af": "Afghanistan",
    "ag": "Antigua_and_Barbuda",
    "ai": "Anguilla",
    "al": "Albania",
    "am": "Armenia",
    "ao": "Angola",
    "aq": "Antarctica",
    "ar": "Argentina",
    "as": "American_Samoa",
    "at": "Austria",
    "au": "Australia",
    "aw": "Aruba",
    "ax": "Åland_Islands",
    "az": "Azerbaijan",
    "ba": "Bosnia_and_Herzegovina",
    "bb": "Barbados",
    "bd": "Bangladesh",
    "be": "Belgium",
    "bf": "Burkina_Faso",
    "bg": "Bulgaria",
    "bh": "Bahrain",
    "bi": "Burundi",
    "bj": "Benin",
    "bl": "Saint_Barthelemy",
    "bm": "Bermuda",
    "bn": "Brunei",
    "bo": "Bolivia",
    "bq": "Caribbean_Netherlands",
    "br": "Brazil",
    "bs": "Bahamas",
    "bt": "Bhutan",
    "bv": "Bouvet_Island",
    "bw": "Botswana",
    "by": "Belarus",
    "bz": "Belize",
    "ca": "Canada",
    "cc": "Cocos_Keeling_Islands",
    "cd": "Democratic_Republic_of_the_Congo",
    "cf": "Central_African_Republic",
    "cg": "Republic_of_the_Congo",
    "ch": "Switzerland",
    "ci": "Cote_d'_Ivoire",
    "ck": "Cook_Islands",
    "cl": "Chile",
    "cm": "Cameroon",
    "cn": "China",
    "co": "Colombia",
    "cr": "Costa_Rica",
    "cu": "Cuba",
    "cv": "Cape_Verde",
    "cw": "Curacao",
    "cx": "Christmas_Island",
    "cy": "Cyprus",
    "cz": "Czechia",
    "de": "Germany",
    "dj": "Djibouti",
    "dk": "Denmark",
    "dm": "Dominica",
    "do": "Dominican_Republic",
    "dz": "Algeria",
    "ec": "Ecuador",
    "ee": "Estonia",
    "eg": "Egypt",
    "eh": "Western_Sahara",
    "er": "Eritrea",
    "es": "Spain",
    "et": "Ethiopia",
    "fi": "Finland",
    "fj": "Fiji",
    "fk": "Falkland_Islands",
    "fm": "Micronesia",
    "fo": "Faroe_Islands",
    "fr": "France",
    "ga": "Gabon",
    "gb": "United Kingdom",
    "gb-eng": "England",
    "gb-nir": "Northern_Ireland",
    "gb-sct": "Scotland",
    "gb-wls": "Wales",
    "gd": "Grenada",
    "ge": "Georgia",
    "gg": "Guernsey",
    "gh": "Ghana",
    "gi": "Gibraltar",
    "gl": "Greenland",
    "gm": "Gambia",
    "gn": "Guinea",
    "gp": "Guadeloupe",
    "gq": "Equatorial_Guinea",
    "gr": "Greece",
    "gs": "South_Georgia",
    "gt": "Guatemala",
    "gu": "Guam",
    "gw": "Guinea_Bissau",
    "gy": "Guyana",
    "hk": "Hong Kong",
    "hm": "Heard_Island_and_McDonald_Islands",
    "hn": "Honduras",
    "hr": "Croatia",
    "ht": "Haiti",
    "hu": "Hungary",
    "id": "Indonesia",
    "ie": "Ireland",
    "il": "Israel",
    "im": "Isle_of_Man",
    "in": "India",
    "io": "British_Indian_Ocean_Territory",
    "iq": "Iraq",
    "ir": "Iran",
    "is": "Iceland",
    "it": "Italy",
    "je": "Jersey",
    "jm": "Jamaica",
    "jo": "Jordan",
    "jp": "Japan",
    "ke": "Kenya",
    "kg": "Kyrgyzstan",
    "kh": "Cambodia",
    "ki": "Kiribati",
    "km": "Comoros",
    "kn": "Saint_Kitts_and_Nevis",
    "kp": "North_Korea",
    "kr": "South_Korea",
    "kw": "Kuwait",
    "ky": "Cayman_Islands",
    "kz": "Kazakhstan",
    "la": "Laos",
    "lb": "Lebanon",
    "lc": "Saint_Lucia",
    "li": "Liechtenstein",
    "lk": "Sri_Lanka",
    "lr": "Liberia",
    "ls": "Lesotho",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "lv": "Latvia",
    "ly": "Libya",
    "ma": "Morocco",
    "mc": "Monaco",
    "md": "Moldova",
    "me": "Montenegro",
    "mf": "Saint_Martin",
    "mg": "Madagascar",
    "mh": "Marshall_Islands",
    "mk": "North_Macedonia",
    "ml": "Mali",
    "mm": "Myanmar",
    "mn": "Mongolia",
    "mo": "Macau",
    "mp": "Northern_Mariana_Islands",
    "mq": "Martinique",
    "mr": "Mauritania",
    "ms": "Montserrat",
    "mt": "Malta",
    "mu": "Mauritius",
    "mv": "Maldives",
    "mw": "Malawi",
    "mx": "Mexico",
    "my": "Malaysia",
    "mz": "Mozambique",
    "na": "Namibia",
    "nc": "New_Caledonia",
    "ne": "Niger",
    "nf": "Norfolk_Island",
    "ng": "Nigeria",
    "ni": "Nicaragua",
    "nl": "Netherlands",
    "no": "Norway",
    "np": "Nepal",
    "nr": "Nauru",
    "nu": "Niue",
    "nz": "New_Zealand",
    "om": "Oman",
    "pa": "Panama",
    "pe": "Peru",
    "pf": "French_Polynesia",
    "pg": "Papua_New_Guinea",
    "ph": "Philippines",
    "pk": "Pakistan",
    "pl": "Poland",
    "pm": "Saint_Pierre_and_Miquelon",
    "pn": "Pitcairn_Islands",
    "pr": "Puerto_Rico",
    "ps": "Palestine",
    "pt": "Portugal",
    "pw": "Palau",
    "py": "Paraguay",
    "qa": "Qatar",
    "re": "Réunion",
    "ro": "Romania",
    "rs": "Serbia",
    "ru": "Russia",
    "rw": "Rwanda",
    "sa": "Saudi_Arabia",
    "sb": "Solomon_Islands",
    "sc": "Seychelles",
    "sd": "Sudan",
    "se": "Sweden",
    "sg": "Singapore",
    "sh": "Saint_Helena_Ascension_and_Tristan_da_Cunha",
    "si": "Slovenia",
    "sj": "Svalbard",
    "sk": "Slovakia",
    "sl": "Sierra_Leone",
    "sm": "San_Marino",
    "sn": "Senegal",
    "so": "Somalia",
    "sr": "Suriname",
    "ss": "South_Sudan",
    "st": "São_Tomé_and_Príncipe",
    "sv": "El_Salvador",
    "sx": "Sint_Maarten",
    "sy": "Syria",
    "sz": "Eswatini",
    "tc": "Turks_and_Caicos_Islands",
    "td": "Chad",
    "tf": "French_Southern_and_Antarctic Lands",
    "tg": "Togo",
    "th": "Thailand",
    "tj": "Tajikistan",
    "tk": "Tokelau",
    "tl": "Timor_Leste",
    "tm": "Turkmenistan",
    "tn": "Tunisia",
    "to": "Tonga",
    "tr": "Turkey",
    "tt": "Trinidad_and_Tobago",
    "tv": "Tuvalu",
    "tw": "Taiwan",
    "tz": "Tanzania",
    "ua": "Ukraine",
    "ug": "Uganda",
    "um": "United_States_Minor_Outlying_Islands",
    "us": "United_States",
    "uy": "Uruguay",
    "uz": "Uzbekistan",
    "va": "Vatican_City",
    "vc": "Saint_Vincent_and_the_Grenadines",
    "ve": "Venezuela",
    "vg": "British_Virgin_Islands",
    "vi": "United_States_Virgin_Islands",
    "vn": "Vietnam",
    "vu": "Vanuatu",
    "wf": "Wallis_and_Futuna",
    "ws": "Samoa",
    "xk": "Kosovo",
    "ye": "Yemen",
    "yt": "Mayotte",
    "za": "South_Africa",
    "zm": "Zambia",
    "zw": "Zimbabwe",
}