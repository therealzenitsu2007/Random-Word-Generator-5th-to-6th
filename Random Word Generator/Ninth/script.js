// A robust collection of 6th-grade spelling challenges
const spellingBee2026 = [
    // Level: One Bee
    "absorption",
    "education",
    "kayak",
    "raise",
    "accomplice",
    "elimination",
    "khaki",
    "ratio",
    "altercation",
    "error",
    "laminate",
    "regulate",
    "angrily",
    "exercise",
    "lasagna",
    "renegade",
    "apparel",
    "finally",
    "latitude",
    "renovate",
    "artistic",
    "forcible",
    "length",
    "shimmer",
    "ballot",
    "formula",
    "llama",
    "signal",
    "bankrupt",
    "fragment",
    "lollipop",
    "skiing",
    "basically",
    "frustrate",
    "machinery",
    "southern",
    "bombshell",
    "fulfill",
    "medallion",
    "strawberries",
    "bravado",
    "fungi",
    "metabolic",
    "studied",
    "business",
    "generator",
    "monotony",
    "suitcase",
    "canoe",
    "gimmick",
    "mortality",
    "swelter",
    "caught",
    "giraffe",
    "neighbor",
    "technique",
    "celebration",
    "glimpse",
    "novice",
    "tournament",
    "churn",
    "grammar",
    "nutrition",
    "traffic",
    "collections",
    "hapless",
    "okra",
    "ultimate",
    "complain",
    "heartfelt",
    "omit",
    "understood",
    "cremate",
    "height",
    "ornate",
    "vacant",
    "cultivate",
    "hijack",
    "outage",
    "vaccine",
    "damage",
    "honorable",
    "panorama",
    "vessel",
    "details",
    "hundredth",
    "piano",
    "vineyard",
    "develop",
    "ignorant",
    "playwright",
    "wheat",
    "diminish",
    "impede",
    "primitive",
    "worldview",
    "distance",
    "institution",
    "quaint",
    "wrestle",
    "ditch",
    "juicer",
    "quarter",

    // Level: Two Bee
    "accidentally",
    "distinction",
    "heritage",
    "quibble",
    "achieve",
    "dominant",
    "humorous",
    "redundant",
    "affiliation",
    "dormitory",
    "inconsolable",
    "refrigerator",
    "ambiguous",
    "encouraged",
    "indelible",
    "relevancy",
    "approximately",
    "enlightened",
    "irrelevant",
    "retrieve",
    "bacteria",
    "exceed",
    "junctures",
    "savvy",
    "bandwidth",
    "experience",
    "kiln",
    "scorch",
    "bout",
    "familiar",
    "laudable",
    "scuttle",
    "broaden",
    "fatigue",
    "leverage",
    "simplicity",
    "broccoli",
    "firefighter",
    "loaves",
    "stringent",
    "cerebral",
    "flume",
    "lodge",
    "volatile",
    "chaotic",
    "foresight",
    "longitude",
    "whine",
    "charcoal",
    "frequency",
    "lyrical",
    "wrangle",
    "chronic",
    "fungus",
    "magnificence",
    "harrowing",
    "correspondence",
    "furrow",
    "malicious",
    "hedgehog",
    "corroborate",
    "galloping",
    "momentous",
    "hedonism",
    "crease",
    "ghetto",
    "monochrome",
    "syllable",
    "curriculum",
    "gravelly",
    "narwhal",
    "technician",
    "descend",
    "verbatim",
    "necessity",
    "theatrical",
    "devotion",
    "versatile",
    "newt",
    "unforgettable",
    "difference",
    "visionary",
    "ogle",
    "valiant",
    "optimism",
    "ordain",
    "peril",
    "preferred",
    "orchard",
    "oriental",
    "perjury",
    "proximity",
    "quag",
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
