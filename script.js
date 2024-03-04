const forHide = document.querySelector(".hide");
const forHide1 = document.querySelector(".hide1");
const label1 = document.querySelector("#checkText1");
const label2 = document.querySelector("#checkText2");
const label3 = document.querySelector("#checkText3");
const time = document.querySelector("input[type=number]");
const complexity = document.querySelector("input[type=text]");
const timerText = document.querySelector("#timerText");
const scoreText = document.querySelector("#scoreText");

const checkboxChar = document.getElementById('char');
const checkboxBooks = document.getElementById('books');
const checkboxEvents = document.getElementById('events');
let flagChar = false;
let flagBooks = false;
let flagEvents = false;
const word = document.getElementById('word');

const characters = ["Авраам", "Иосиф", "Моисей"];
const books = ["Бытие", "Исход", "Псалмы", "Притчи", "Екклесиаст", "От Матфея", "Иона", "От Марка", "От Луки", "От Иоанна", "Деяния", "Римлянам", "1 Коринфянам", "2 Коринфянам", "Откровение", 
"Левит", "Числа", "Второзаконие", "Иисус Навин", "Руфь", "1 Царств", "2 Царств", "3 Царств", "4 Царств", "Есфирь", "Иов", "Песня песней", "Исаия", "Иеремия", "Даниил", "Иакова", "Иуда", "Филиппийцам", "1 Тимофею", "2 Тимофею", "Титу", "Евреям", "Судьи", 
"1 Паралипоменон", "2 Паралипоменон", "Ездра", "Неемия", "Плач Иеремии", "Иезекииль", "Осия", "Иоиль", "Амос", "Авдий", "Михей", "Наум", "Аввакум", "Софония", "Аггей", "Захария", "Малахия", "1 Петра", "2 Петра", "1 Иоанна", "2 Иоанна", "3 Иоанна", "Галатам", "Ефесянам", "1 Фессалоникийцам", "2 Фессалоникийцам", "Филимону"];
const events = ["Великий потоп", "10 казней египетских", "Давид против Галиафа"];
let finalArray = [];

var score = 0;
function wordChoice() {
  let randNum = Math.floor(Math.random() * finalArray.length);
  word.textContent = finalArray[randNum];
}

function startGame() {
  let timer = time.value;
  if (time.value == "") {
    timerText.textContent = "Время: " + 60; 
    timer = 60;
  } else { 
    timerText.textContent = "Время: " + time.value;
  }
  setInterval(function() {
    timerText.textContent = "Время: " + timer;
    timer--;
    if (timer < 0) {
      alert("Вcе");
    }
  }, 1000);
  if (flagChar == true) {
    finalArray.push(...characters);
  }
  if (flagBooks == true) {
    finalArray.push(...books);
  }
  if (flagEvents == true) {
    finalArray.push(...events);
  }
  wordChoice();
  document.querySelector("h1").style.visibility = "hidden";
  forHide.style.display = "none";
  forHide1.style.display = "block";
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
    } else if(startingX-50 > movingX) {
        score--;
    }
    scoreText.textContent = "Очки: " + score;
    wordChoice();
}