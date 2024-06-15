const forHide = document.querySelector(".hide");
const forHide1 = document.querySelector(".hide1");
const label1 = document.querySelector("#checkText1");
const label2 = document.querySelector("#checkText2");
const label3 = document.querySelector("#checkText3");
const label4 = document.querySelector("#checkText4");
const time = document.querySelector("input[type=number]");
const complexity = document.querySelector("input[type=text]");
const timerText = document.querySelector("#timerText");
const scoreText = document.querySelector("#scoreText");
const modal = document.querySelector('#modal1');
const modalText = document.querySelector('#modalText');
const word = document.querySelector('#word');

const checkboxChar = document.querySelector('#char');
const checkboxBooks = document.querySelector('#books');
const checkboxEvents = document.querySelector('#events');
const checkboxGeography = document.querySelector('#geog');


let flagChar = false;
let flagBooks = false;
let flagEvents = false;
let flagGeography = false;
let flagLang = true;
let finalArray = [];
var score = 0;
var timer = time.value;

const characters = [
  ["Adam and Eve", "Mary Magdalene", "Noah", "Abraham", "Sarah", 
  "Jacob", "Moses", "David", "Mary and Joseph", "John the Baptist", 
  "Apostle Peter", "Lazarus", "Joseph", "Solomon", "Elijah", 
  "Jesus Christ", "Saul", "Rebekah", "Lot", "Martha and Mary", "Samson", 
  "Apostle Andrew", "Apostle John", "Pontius Pilate", 
  "Apostle Paul", "Apostle Matthew", "Apostle James", "Apostle Thomas", 
  "Apostle Luke", "Apostle Philip", "Apostle Nathanael"], //e
  ["Cain and Abel", "Esther", "Rahab", "Ruth", "Samuel", "Daniel", 
  "Nicodemus", "Absalom", "Job", "Aaron", "Tamar", 
  "Naomi", "Ezekiel", "Jeremiah", "Isaiah", "Timofey", 
  "Ecclesiastes", "Apostle Simon the Canaanite", "Emmanuel", "Titus", "Sim", "Japheth", "Ham", 
  "Tamar", "Hagar", "Bathsheba", "Rachel", "Stephen"], //n
  ["Apollos", "Gideon", "Haggai", "Zechariah", "Amos", 
  "Nahum", "Ezra", "Jonathan", "Mordecai", "Nehemiah", 
  "Queen of Sheba", "Jehoshaphat", "Uzziah", "Zipporah", 
  "Anna", "Tabitha", "Devorah", "Zebedee", 
  "Cornelius (centurion)", "Priscilla and Aquila", 
  "Hosea", "Boaz", "Zerubbabel", "Miriam", "Abimelech", "Jephthah", "Elijah",
  "Jacob (Christ's brother)", "Judas (Christ's brother)", "Melchizedek", "Elisha"] //h
];

const books = [
  ["Genesis", "Exodus", "Psalms", "Proverbs", "Ecclesiastes", "Matthew", 
  "Jonah", "Mark", "Luke", "John", "Acts", "Romans", 
  "1 Corinthians", "2 Corinthians", "Revelation"], //e
  ["Leviticus", "Numbers", "Deuteronomy", "Joshua", "Ruth", "1 Samuel",
  "2 Samuel", "1 Kings", "2 Kings", "Esther", "Job", "Song of Songs", 
  "Isaiah", "Jeremiah", "Daniel", "James", "Jude", "Philippians", 
  "1 Timothy", "2 Timothy", "Titus", "Hebrews", "Judges"], //n
  ["1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", 
  "Lamentations", "Ezekiel", "Hosea", "Joel", "Amos", "Obadiah", "Micah", 
  "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "1 Peter", 
  "2 Peter", "1 John", "2 John", "3 John", "Galatians", "Ephesians", 
  "1 Thessalonians", "2 Thessalonians", "Philemon"] //h
];

const events = [
  ["Noah's Flood", 
  "David Vs Goliath", "Good Samaritan", "Tower of Babel", 
  "Baptism of Jesus", "Jesus' Fast in the Desert", 
  "Exodus from Egypt", "Raising Lazarus", "Lot's rescue", 
  "David's sin", "Lord's Supper", "10 Commandments"], //e
  ["Sermon on the Mount", "Walking on water", "Prodigal son", 
  "Pharisee and Publican", "Rich young man", "Age of Judges", 
  "Construction of the Temple by Solomon", "Test of Abraham", 
  "Conversion of the Apostle Paul", "Capture of Jericho", "Jacob's Dream", 
  "Crossing the Red Sea", "12 spies", "The Repentance of Nineveh", "The Dream of Nebuchadnezzar", "Gideon and the Fleece", "Jesus Feeds the Hungry"] , //n
  ["Paul and Silas in prison", "Moses and the Brass Serpent", "Babylonian captivity", 
  "Rahab and the spies", "Covenant between God and Abraham", 
  "Division of the Kingdom of Israel", "Miracle of Purim", "Conquest of Canaan", 
  "Burning thorn bush", "Finding a wife for Isaac", "Widow's Mite", 
  "Marriage in Cana of Galilee", "Expulsion of traders from the temple", "Four in the Fiery Furnace", "Elijah Against the Prophets of Baal"] //h
];

const geography = [
  ["Red Sea","Babylon", "Israel", "Nazareth", 
  "Judea", "Sodom and Gomorrah", "Mount Sinai", 
  "Samaria", "Canaan", "Temple of Solomon", 
  "Bethlehem", "Palestine", "Jericho", "Rome", "Ephesus", "Galatia", "Ararat Mount", "Nineveh", "Egypt", "Damascus", "Mesopotamia"], //e
  ["Jordan", 
  "Jacob's Well", "City of David", "Temple Mount", 
  "Damascus", "Temple of Zerubbabel", 
  "Bethany", "Cana of Galilee", 
  "Judean Desert", "Euphrates", "Vifel"] , //n
  ["Lebanon", "Mount of Beatitudes", "Mountain of Overthrow", 
  "Zuf", "Earth Uts", 
  "Tarshish", "Joppa", "Hebron", 
  "Bethsaida", "Fison", "Agave (river)", 
  "Moab", "Land of Nod", "Gihon", "Khiddekel", "Kibrot-Gattaawa", "Mount Jehovah-Jireh"] //h
];

function startGame() {
  let flagEnd = false;
  if (time.value == "") {
    timerText.textContent = "Time: 60"; 
    timer = 60;
  } else { 
    timerText.textContent = `Time: ${time.value}`;
    timer = time.value;
  }

  const intervalId = setInterval(function() {
    timer--;
    timerText.textContent = `Time: ${timer}`;
    if (timer == 1) {
      flagEnd = true;
    }
    if (timer < 0) {
      if (flagEnd === true) {
        modal.classList.add("open");
        modalText.textContent =`Time is out. Your result: ${score}`;
        finalArray = [];
      }
      screenFirst();
      clearInterval(intervalId);
    }
  }, 1000);

  finalArray = [];
  if (flagChar == true) {
    if (complexity.value == "Easy" || complexity.value == "") {
      finalArray.push(...(characters[0]));
    }
    else if (complexity.value == "Normal") {
      finalArray.push(...(characters[1]));
    }
    else if (complexity.value == "Hard") {
      finalArray.push(...(characters[2]));
    }
  }
  if (flagBooks == true) {
    if (complexity.value == "Easy" || complexity.value == "") {
      finalArray.push(...(books[0]));
    }
    else if (complexity.value == "Normal") {
      finalArray.push(...(books[1]));
    }
    else if (complexity.value == "Hard") {
      finalArray.push(...(books[2]));
    }
  }
  if (flagEvents == true) {
    if (complexity.value == "Easy" || complexity.value == "") {
      finalArray.push(...(events[0]));
    }
    else if (complexity.value == "Normal") {
      finalArray.push(...(events[1]));
    }
    else if (complexity.value == "Hard") {
      finalArray.push(...(events[2]));
    }
  }
  if (flagGeography == true) {
    if (complexity.value == "Easy" || complexity.value == "") {
      finalArray.push(...(geography[0]));
    }
    else if (complexity.value == "Normal") {
      finalArray.push(...(geography[1]));
    }
    else if (complexity.value == "Hard") {
      finalArray.push(...(geography[2]));
    }
  }
  if (flagBooks == false && flagChar == false && flagEvents == false && flagGeography == false) {
    modal.classList.add("open");
    modalText.textContent ="Please select at least one topic.";
    screenFirst();
    return;
  }
  wordChoice();
  screenSecond();
}

function checkCheck() {
  if (checkboxChar.checked) {
    label1.style.color = "#65B741";
    flagChar = true;
  } else {
    label1.style.color = "black";
    flagChar = false;
  }
  if (checkboxBooks.checked) {
    label2.style.color = "#65B741";
    flagBooks = true;
  } else {
    label2.style.color = "black";
    flagBooks = false;
  }
  if (checkboxEvents.checked) {
    label3.style.color = "#65B741";
    flagEvents = true;
  } else {
    label3.style.color = "black";
    flagEvents = false;
  }
  if (checkboxGeography.checked) {
    label4.style.color = "#65B741";
    flagGeography = true;
  } else {
    label4.style.color = "black";
    flagGeography = false;
  }
}

function wordChoice() {
  let randNum = Math.floor(Math.random() * finalArray.length);
  while (finalArray[randNum] === undefined) {
    randNum = Math.floor(Math.random() * finalArray.length);
    if ([...new Set(finalArray)].length == 1) {
      modal.classList.add("open");
      modalText.textContent =`We've run out of words, we'll add more soon :) Your result: ${score}`;
      screenFirst();
      score = 0;
      scoreText.textContent = "Score: 0";
      timer = 0;
      finalArray = [];
      break;
    }
  }
  word.textContent = finalArray[randNum];
  delete finalArray[randNum];
}

function screenFirst() {
  document.querySelector("h1").style.display = "block";
  document.querySelector("#backBtn").style.display = "none";
  forHide.style.display = "block";
  forHide1.style.display = "none";
  complexity.value = "";
  score = 0;
  scoreText.textContent = "Score: 0";
}

function screenSecond() {
  document.querySelector("h1").style.display = "none";
  document.querySelector("#backBtn").style.display = "block";
  forHide.style.display = "none";
  forHide1.style.display = "block";
}



let startingX, startingY, movingX, movingY;
function touchStart(e){
  startingX = e.touches[0].clientX;
  startingY = e.touches[0].clientY;
}
function touchMove(e){
  movingX = e.touches[0].clientX;
  movingY = e.touches[0].clientY;
}
function touchEnd() {
  if(startingX+50 < movingX) {
      score++;
      playSound("../facebook_sms.mp3");
  } else if(startingX-50 > movingX) {
      score--;
      playSound("../oshibka-v-kompyutere.mp3");
  }
  scoreText.textContent = `Score: ${score}`;
  wordChoice();
}

function checkLang() {
  window.location.href = "../index.html";
}

function playSound(audioName) {
  let audio = new Audio(audioName);
  audio.play();
}

function closeModal() {
  modal.classList.remove("open");
}

function backTo() {
  screenFirst();
  timer = 0;
}
