// A robust collection of 7th-grade spelling challenges
const spellingBee2026 = [
    // Level: One Bee
    "ability",
    "diameter",
    "hooves",
    "pillar",
    "absorb",
    "digital",
    "humid",
    "premium",
    "acres",
    "double",
    "hybrid",
    "priority",
    "admit",
    "dumb",
    "idle",
    "puny",
    "advance",
    "easily",
    "illegal",
    "quarter",
    "advice",
    "economy",
    "incredible",
    "quirky",
    "arrest",
    "eighty",
    "innocent",
    "rabbi",
    "attitude",
    "elite",
    "involve",
    "realm",
    "bacteria",
    "emu",
    "juice",
    "reliant",
    "balance",
    "erosion",
    "known",
    "rhino",
    "barely",
    "eruption",
    "laboratory",
    "rotten",
    "bogus",
    "extract",
    "lecture",
    "skeptical",
    "boredom",
    "fanatic",
    "liberal",
    "slumber",
    "building",
    "flamingo",
    "listen",
    "smudge",
    "cactus",
    "flick",
    "mansion",
    "theme",
    "candidate",
    "fossil",
    "median",
    "pillar",
    "chews",
    "fought",
    "missile",
    "premium",
    "chirp",
    "fundamental",
    "mustard",
    "priority",
    "chocolate",
    "gallop",
    "nifty",
    "puny",
    "complex",
    "geology",
    "notch",
    "quarter",
    "conductor",
    "grammar",
    "novel",
    "quirky",
    "culminate",
    "group",
    "obtain",
    "rabbi",
    "culprit",
    "havoc",
    "omit",
    "realm",
    "dawn",
    "hiccup",
    "organism",
    "reliant",
    "dedicate",
    "hijack",
    "panic",
    "rhino",
    "delayed",
    "honest",
    "parade",
    "rotten",
    "thought",
    "tragedy",
    "type",
    "victim",
    "view",
    "voice",
    "vulgar",
    "weapon",
    "wrote",

    // Level: Two Bee
    "abandon",
    "diagonal",
    "healthy",
    "ordinary",
    "accurate",
    "dilemma",
    "heroic",
    "outbreak",
    "advise",
    "divide",
    "hormones",
    "pacify",
    "alternative",
    "dough",
    "horrible",
    "panicky",
    "analyze",
    "drought",
    "horrify",
    "paralyze",
    "atmosphere",
    "emerald",
    "imitate",
    "phantom",
    "attendance",
    "emotion",
    "inequality",
    "phrase",
    "authority",
    "engulf",
    "influence",
    "privilege",
    "barge",
    "ethics",
    "inherit",
    "quash",
    "bizarre",
    "evident",
    "instead",
    "quiver",
    "bomber",
    "expensive",
    "involvement",
    "reasonable",
    "bound",
    "explore",
    "judgment",
    "rectify",
    "brief",
    "extinct",
    "juror",
    "release",
    "brilliant",
    "facial",
    "kettle",
    "restrict",
    "calamity",
    "fiscal",
    "language",
    "scenery",
    "calculate",
    "forecast",
    "length",
    "secretary",
    "canopy",
    "frequently",
    "lightning",
    "sincerely",
    "capable",
    "fruitful",
    "mileage",
    "supervisor",
    "civilize",
    "funeral",
    "moist",
    "tangible",
    "commercial",
    "garlic",
    "movement",
    "tendency",
    "committed",
    "grizzly",
    "murmur",
    "tolerate",
    "concentrate",
    "growl",
    "narrate",
    "tuxedo",
    "confuse",
    "guilty",
    "nuzzle",
    "version",
    "decoy",
    "harass",
    "obstacle",
    "vertical",
    "visual",
    "voyage",
    "wilderness",
    "youth",
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
