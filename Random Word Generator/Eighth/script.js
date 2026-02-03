// A robust collection of 6th-grade spelling challenges
const spellingBee2026 = [
    // Level 1: One Bee
    "access",
    "dehydrate",
    "havoc",
    "outweigh",
    "acknowledge",
    "deluxe",
    "height",
    "parachute",
    "adjust",
    "device",
    "horrific",
    "passion",
    "affects",
    "diaphragm",
    "hourly",
    "phrase",
    "amnesty",
    "diffuse",
    "hydrate",
    "physics",
    "antidote",
    "documentary",
    "infinite",
    "pierce",
    "asphalt",
    "dominance",
    "integrity",
    "propaganda",
    "asthma",
    "eclectic",
    "internally",
    "protein",
    "barometer",
    "economics",
    "ironing",
    "recital",
    "berserk",
    "elevator",
    "juicy",
    "relevant",
    "bimonthly",
    "emergency",
    "kennel",
    "repulsive",
    "biscuit",
    "empathy",
    "lazy",
    "robotic",
    "budget",
    "escalator",
    "ligament",
    "rupture",
    "buffalo",
    "evidence",
    "linear",
    "scientist",
    "building",
    "federal",
    "linguist",
    "snobbery",
    "caught",
    "fiasco",
    "malady",
    "subscribe",
    "channel",
    "flimsy",
    "mercenary",
    "succulent",
    "chaos",
    "fluffy",
    "meteor",
    "surmise",
    "chief",
    "foresee",
    "narrate",
    "tactics",
    "classic",
    "formula",
    "nightmare",
    "tangible",
    "college",
    "fourteenth",
    "nosy",
    "traditional",
    "complex",
    "gender",
    "novel",
    "trophy",
    "concept",
    "genetic",
    "obstruct",
    "unicorn",
    "cough",
    "geometry",
    "ordinary",
    "utmost",
    "crowd",
    "glamour",
    "oregano",
    "utopia",
    "crypt",
    "gravity",
    "orphan",
    "vessel",
    "weight",
    "vocalize",
    "wager",

    // Level 2: Two Bee
    "accommodate",
    "edible",
    "naive",
    "rescue",
    "accustomed",
    "elaborate",
    "naturally",
    "rhetoric",
    "anecdote",
    "endemic",
    "nemesis",
    "sensitive",
    "annoyance",
    "entice",
    "nervous",
    "serviceable",
    "antiseptic",
    "eventual",
    "occurred",
    "shuddering",
    "anxious",
    "exhibit",
    "oligarchy",
    "solitary",
    "architect",
    "facilitate",
    "ounce",
    "technically",
    "arrangement",
    "fascinate",
    "parallel",
    "temporary",
    "atrocity",
    "flexible",
    "pastrami",
    "tourism",
    "backwards",
    "fortunate",
    "plaintiff",
    "unduly",
    "blizzard",
    "fragrant",
    "poison",
    "union",
    "bounce",
    "fraud",
    "potential",
    "vigilant",
    "bracelet",
    "gazelle",
    "preach",
    "wealthy",
    "brilliance",
    "gentleman",
    "priority",
    "wheat",
    "burglary",
    "glamorous",
    "lettuce",
    "propeller",
    "capably",
    "gutsy",
    "literary",
    "rearrange",
    "catastrophe",
    "hammock",
    "lucrative",
    "recycle",
    "chemical",
    "hazelnut",
    "malign",
    "religious",
    "circuit",
    "headquarters",
    "meticulous",
    "desirable",
    "civilian",
    "heritage",
    "metropolitan",
    "distortion",
    "collateral",
    "hilarious",
    "debris",
    "doubtful",
    "confiscation",
    "hospitality",
    "decisive",
    "dysfunction",
    "counsel",
    "immediate",
    "inhibit",
    "innate",
    "cylinder",
    "cypress",
    "debacle",
    "jealous",
];
let speech = new SpeechSynthesisUtterance();
let btn = document.getElementById("btn");
let correctBtn = document.getElementById("correct");
let incorrectBtn = document.getElementById("incorrect");
let wordText = document.getElementById("word");
let replayAudioBtn = document.getElementById("replay");

let currentWord = "";

btn.onclick = () => {
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    let wordID = Math.floor(Math.random() * spellingBee2026.length);

    currentWord = spellingBee2026[wordID];

    wordText.textContent = currentWord;
    wordText.style.color = "black";
    speech.text = currentWord;

    window.speechSynthesis.speak(speech);
};

correctBtn.onclick = () => {
    wordText.style.color = "green";
    let correctSound = new Audio("correct.mp3");
    correctSound.play();
};

incorrectBtn.onclick = () => {
    wordText.style.color = "red";
    let wrongSound = new Audio("wrong.mp3");
    wrongSound.play();
};

replayAudioBtn.onclick = () => {
    if (currentWord !== "") {
        speech.text = currentWord;
        window.speechSynthesis.speak(speech);
    } else {
        console.log("No word has been selected yet! Click the start button first.");
    }
};

document.getElementById("thisonething").innerText = spellingBee2026.join("\n");

// ... (your existing array and variables)

const toggleBtn = document.getElementById("toggleBtn");
const wordListDisplay = document.getElementById("thisonething");

// 1. Fill the list but keep it hidden initially
// Using .join('<br>') puts every word on its own line!
wordListDisplay.innerHTML = spellingBee2026.join("<br>");

// 2. The Toggle Logic
toggleBtn.onclick = () => {
    if (wordListDisplay.style.display === "none") {
        wordListDisplay.style.display = "block";
        toggleBtn.innerText = "Hide Word List";
        toggleBtn.classList.replace("btn-secondary", "btn-dark");
    } else {
        wordListDisplay.style.display = "none";
        toggleBtn.innerText = "Show Word List";
        toggleBtn.classList.replace("btn-dark", "btn-secondary");
    }
};
