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

const characters = [
  ["Адам", "Ева", "Ной", "Авраам", "Сарра", "Иаков", "Моисей", "Давид", "Мария и Иосиф", 
  "Иоанн Креститель", "Петр (Симон)", "Лазарь", "Иосиф", "Соломон", "Илия", "Иисус Христос"], //e
  ["Каин и Авель", "Есфирь", "Раав", "Руфь", "Самуил", "Даниил", "Лазарь", "Никодим"], //n
  ["Аполлос", "Гедеон", "Аггей", "Захария", "Амос", "Наум"] //h
];

const books = [
  ["Бытие", "Исход", "Псалмы", "Притчи", "Екклесиаст", "От Матфея", "Иона", "От Марка", "От Луки", "От Иоанна", "Деяния", "Римлянам", 
  "1 Коринфянам", "2 Коринфянам", "Откровение"], //e
  ["Левит", "Числа", "Второзаконие", "Иисус Навин", "Руфь", "1 Царств", "2 Царств", "3 Царств", "4 Царств", "Есфирь", "Иов", "Песня песней", 
  "Исаия", "Иеремия", "Даниил", "Иакова", "Иуда", "Филиппийцам", "1 Тимофею", "2 Тимофею", "Титу", "Евреям", "Судьи"], //n
  ["1 Паралипоменон", "2 Паралипоменон", "Ездра", "Неемия", "Плач Иеремии", "Иезекииль", "Осия", "Иоиль", "Амос", "Авдий", "Михей", "Наум", 
  "Аввакум", "Софония", "Аггей", "Захария", "Малахия", "1 Петра", "2 Петра", "1 Иоанна", "2 Иоанна", "3 Иоанна", "Галатам", "Ефесянам", 
  "1 Фессалоникийцам", "2 Фессалоникийцам", "Филимону"] //h
];

const events = [
  ["Пропавшая овца", "Всемирный потоп", "Содом и Гоморра", "Давид Против Голиафа", "Добрый Самарянин", "Вавилонская башня", 
  "Волхвы и звезда", "Крещение Иисуса", "Пост Иисуса в пустыне"], //e
  ["Нагорная проповедь", "Хождение по воде", "Блудный сын", "Фарисей и мытарь", "Богатый юноша"] , //n
  ["Павел и Сила в темнице", "Моисей и медный змей", "Раав и соглядатаи"] //h
];

let finalArray = [];

var score = 0;
var timer = time.value;

function startGame() {
  let flagEnd = false;
  if (time.value == "") {
    timerText.textContent = "Время: " + 60; 
    timer = 60;
  } else { 
    timerText.textContent = "Время: " + time.value;
    timer = time.value;
  }
  const intervalId = setInterval(function() {
    timer--;
    timerText.textContent = "Время: " + timer;
    if (timer == 1) {
      flagEnd = true;
    }
    if (timer < 0) {
      screenFirst();
      if (flagEnd === true) {
        alert("Вcе");
      }
      clearInterval(intervalId);
    }
  }, 1000);
  if (flagChar == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(characters[0]));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(characters[1]));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(characters[2]));
    }
  }
  if (flagBooks == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(books[0]));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(books[1]));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(books[2]));
    }
  }
  if (flagEvents == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(events[0]));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(events[1]));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(events[2]));
    }
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
}

function wordChoice() {
  let randNum = Math.floor(Math.random() * finalArray.length);
  while (finalArray[randNum] === undefined) {
    randNum = Math.floor(Math.random() * finalArray.length);
    if ([...new Set(finalArray)].length == 1) {
      alert("Слова кончились, скоро добавим больше)");
      screenFirst();
      score = 0;
      scoreText.textContent = "Очки: 0";
      timer = 0;
      break;
    }
  }
  word.textContent = finalArray[randNum];
  delete finalArray[randNum];
}

function backTo() {
  screenFirst();
  timer = 0;
}

function screenFirst() {
  document.querySelector("h1").style.display = "block";
  document.querySelector("#backBtn").style.display = "none";
  forHide.style.display = "block";
  forHide1.style.display = "none";
  complexity.value = "";
  score = 0;
  scoreText.textContent = "Очки: 0";
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
        playSound("facebook_sms.mp3");
    } else if(startingX-50 > movingX) {
        score--;
        playSound("oshibka-v-kompyutere.mp3");
    }
    scoreText.textContent = "Очки: " + score;
    wordChoice();
}
function playSound(audioName) {
  let audio = new Audio(audioName);
  audio.play();
}