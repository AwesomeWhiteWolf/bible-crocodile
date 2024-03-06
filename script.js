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

const characters = ["Адам", "Ева", "Ной", "Авраам", "Сарра", "Иаков", "Моисей", "Давид", "Мария и Иосиф", "Иоанн Креститель", "Петр (Симон)", "Лазарь", "Иосиф", "Соломон", "Илия", "Иисус Христос",  
"Каин и Авель", "Есфирь", "Раав", "Руфь", "Самуил", "Даниил", "Лазарь", "Никодим", 
"Аполлос", "Гедеон", "Аггей", "Захария", "Амос", "Наум"];

const books = ["Бытие", "Исход", "Псалмы", "Притчи", "Екклесиаст", "От Матфея", "Иона", "От Марка", "От Луки", "От Иоанна", "Деяния", "Римлянам", "1 Коринфянам", "2 Коринфянам", "Откровение", 
"Левит", "Числа", "Второзаконие", "Иисус Навин", "Руфь", "1 Царств", "2 Царств", "3 Царств", "4 Царств", "Есфирь", "Иов", "Песня песней", "Исаия", "Иеремия", "Даниил", "Иакова", "Иуда", "Филиппийцам", "1 Тимофею", "2 Тимофею", "Титу", "Евреям", "Судьи", 
"1 Паралипоменон", "2 Паралипоменон", "Ездра", "Неемия", "Плач Иеремии", "Иезекииль", "Осия", "Иоиль", "Амос", "Авдий", "Михей", "Наум", "Аввакум", "Софония", "Аггей", "Захария", "Малахия", "1 Петра", "2 Петра", "1 Иоанна", "2 Иоанна", "3 Иоанна", "Галатам", "Ефесянам", "1 Фессалоникийцам", "2 Фессалоникийцам", "Филимону"];

const events = ["Пропавшая овца", "Всемирный потоп", "Содом и Гоморра", "Давид Против Голиафа", "Добрый Самарянин", "Вавилонская башня", "Волхвы и звезда", "Крещение Иисуса", "Пост Иисуса в пустыне", 
"Нагорная проповедь", "Хождение по воде", "Блудный сын", "Фарисей и мытарь", "Богатый юноша", 
"Павел и Сила в темнице", "Моисей и медный змей", "Раав и соглядатаи"];

let finalArray = [];

var score = 0;

function startGame() {
  let timer = time.value;
  if (time.value == "") {
    timerText.textContent = "Время: " + 60; 
    timer = 60;
  } else { 
    timerText.textContent = "Время: " + time.value;
  }
  const intervalId = setInterval(function() {
    timer--;
    timerText.textContent = "Время: " + timer;
    if (timer < 0) {
      alert("Вcе");
      screenFirst();
      clearInterval(intervalId);
    }
  }, 1000);
  if (flagChar == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(characters.slice(0, 16)));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(characters.slice(16, 24)));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(characters.slice(24, characters.length)));
    }
  }
  if (flagBooks == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(books.slice(0, 15)));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(books.slice(15, 38)));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(books.slice(38, books.length)));
    }
  }
  if (flagEvents == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(events.slice(0, 9)));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(events.slice(9, 14)));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(events.slice(14, events.length)));
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
      break;
    }
  }
  word.textContent = finalArray[randNum];
  delete finalArray[randNum];
}

function screenFirst() {
  document.querySelector("h1").style.visibility = "visible";
  forHide.style.display = "block";
  forHide1.style.display = "none";
  complexity.value = "";
}

function screenSecond() {
  document.querySelector("h1").style.visibility = "hidden";
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
    } else if(startingX-50 > movingX) {
        score--;
    }
    scoreText.textContent = "Очки: " + score;
    wordChoice();
}