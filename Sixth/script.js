// A robust collection of 6th-grade spelling challenges
const spellingBee2026 = [
    // Level: One Bee
    "accomplish",
    "elegant",
    "ketchup",
    "reply",
    "admire",
    "entrance",
    "knock",
    "revolve",
    "adventure",
    "envy",
    "lately",
    "school",
    "algebra",
    "explain",
    "library",
    "signature",
    "already",
    "extinct",
    "linger",
    "simple",
    "arctic",
    "eyebrow",
    "lizard",
    "stereo",
    "author",
    "factors",
    "loyal",
    "style",
    "bamboo",
    "forest",
    "macaroni",
    "survive",
    "basket",
    "foul",
    "mango",
    "symbol",
    "bazaar",
    "fries",
    "menu",
    "tennis",
    "because",
    "garbage",
    "mouse",
    "theory",
    "bicycle",
    "gasoline",
    "neon",
    "thumb",
    "calendar",
    "grammar",
    "normal",
    "tornado",
    "candle",
    "granola",
    "nuclear",
    "twelve",
    "chalk",
    "harmony",
    "object",
    "uniform",
    "champion",
    "heard",
    "opera",
    "union",
    "colony",
    "humane",
    "outrage",
    "vertical",
    "column",
    "humor",
    "palace",
    "violet",
    "concept",
    "igloo",
    "phone",
    "wardrobe",
    "continent",
    "index",
    "picnic",
    "watch",
    "cough",
    "instant",
    "picture",
    "window",
    "darling",
    "instinct",
    "plastic",
    "wolves",
    "desert",
    "island",
    "plumber",
    "diagram",
    "jagged",
    "prism",
    "display",
    "joking",
    "quiet",
    "download",
    "juiced",
    "rarely",
    "dragon",
    "kernel",
    "recent",

    // Level: Two Bee
    "acne",
    "divide",
    "impress",
    "policy",
    "acre",
    "double",
    "interesting",
    "practical",
    "against",
    "eagle",
    "jointly",
    "quality",
    "appointment",
    "easier",
    "journal",
    "refrigerator",
    "average",
    "effective",
    "judged",
    "request",
    "awful",
    "envelope",
    "knives",
    "response",
    "barely",
    "ethnic",
    "knuckle",
    "science",
    "bonanza",
    "excellent",
    "language",
    "shield",
    "boycott",
    "fifteen",
    "locate",
    "society",
    "burnt",
    "figure",
    "mascara",
    "specific",
    "calcium",
    "forbidden",
    "massive",
    "straight",
    "casserole",
    "fossil",
    "milligram",
    "success",
    "classic",
    "friendly",
    "minimum",
    "tasty",
    "committee",
    "geography",
    "natural",
    "texture",
    "complain",
    "glimpse",
    "nearby",
    "thunder",
    "countries",
    "government",
    "operate",
    "tight",
    "coupon",
    "gymnast",
    "orientation",
    "turtle",
    "crocodile",
    "habitat",
    "original",
    "units",
    "democracy",
    "hamper",
    "passenger",
    "utter",
    "deputy",
    "horizon",
    "pastry",
    "vein",
    "descend",
    "hurried",
    "percent",
    "vinegar",
    "diamond",
    "iceberg",
    "perfume",
    "visible",
    "difficult",
    "import",
    "pocket",
    "wallet",
    "young",
    "witness",
    "waltz",
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
