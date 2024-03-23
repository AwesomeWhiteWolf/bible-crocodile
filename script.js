const forHide = document.querySelector(".hide");
const forHide1 = document.querySelector(".hide1");
const label1 = document.querySelector("#checkText1");
const label2 = document.querySelector("#checkText2");
const label3 = document.querySelector("#checkText3");
const time = document.querySelector("input[type=number]");
const complexity = document.querySelector("input[type=text]");
const timerText = document.querySelector("#timerText");
const scoreText = document.querySelector("#scoreText");

const modal = document.getElementById('modal1');
const modalText = document.getElementById('modalText');
const langBtn = document.getElementById('langBtn');

const checkboxChar = document.getElementById('char');
const checkboxBooks = document.getElementById('books');
const checkboxEvents = document.getElementById('events');

const word = document.getElementById('word');

let flagChar = false;
let flagBooks = false;
let flagEvents = false;
let flagLang = true;
let finalArray = [];
var score = 0;
var timer = time.value;

const characters = [
  ["Адам и Ева", "Мария Магдалина", "Ной", "Авраам", "Сарра", 
  "Иаков", "Моисей", "Давид", "Мария и Иосиф", "Иоанн Креститель", 
  "Апостол Петр", "Лазарь", "Иосиф", "Соломон", "Илия", 
  "Иисус Христос", "Саул", "Ревекка", "Лот", "Марфа и Мария", "Самсон", 
  "Апостол Андрей", "Апостол Иоанн", "Понтий Пилат", 
  "Апостол Павел", "Апостол Матфей", "Апостол Иаков", 
  "Апостол Фома", "Апостол Лука", "Апостол Филипп", "Апостол Нафанаил"], //e
  ["Каин и Авель", "Есфирь", "Раав", "Руфь", "Самуил", "Даниил", 
  "Никодим", "Авессалом", "Иов", "Аарон", "Фамарь", 
  "Ноеминь", "Иезекииль", "Иеремия", "Исаия", "Тимофей", "Екклесиаст", 
  "Апостол Симон Кананит", "Еммануил"], //n
  ["Аполлос", "Гедеон", "Аггей", "Захария", "Амос", "Наум", "Ездра", 
  "Ионафан", "Мардохей", "Неемия", 
  "Царица Савская", "Иосафат", "Озия", "Сепфора", "Анна", "Тавифа", 
  "Девора", "Зеведей", "Корнилий (сотник)", "Прискилла и Акила", "Осия", 
  "Вооз", "Зоровавель", "Мириам"] //h
];

const books = [
  ["Бытие", "Исход", "Псалмы", "Притчи", "Екклесиаст", "От Матфея", 
  "Иона", "От Марка", "От Луки", "От Иоанна", "Деяния", "Римлянам", 
  "1 Коринфянам", "2 Коринфянам", "Откровение"], //e
  ["Левит", "Числа", "Второзаконие", "Иисус Навин", "Руфь", "1 Царств",
  "2 Царств", "3 Царств", "4 Царств", "Есфирь", "Иов", "Песнь песней", 
  "Исаия", "Иеремия", "Даниил", "Иакова", "Иуда", "Филиппийцам", 
  "1 Тимофею", "2 Тимофею", "Титу", "Евреям", "Судьи"], //n
  ["1 Паралипоменон", "2 Паралипоменон", "Ездра", "Неемия", 
  "Плач Иеремии", "Иезекииль", "Осия", "Иоиль", "Амос", "Авдий", "Михей", 
  "Наум", "Аввакум", "Софония", "Аггей", "Захария", "Малахия", "1 Петра", 
  "2 Петра", "1 Иоанна", "2 Иоанна", "3 Иоанна", "Галатам", "Ефесянам", 
  "1 Фессалоникийцам", "2 Фессалоникийцам", "Филимону"] //h
];

const events = [
  ["Всемирный потоп","Давид Против Голиафа", "Добрый Самарянин", "Вавилонская башня", 
  "Волхвы и звезда", "Крещение Иисуса", "Пост Иисуса в пустыне", 
  "Исход из Египта", "Воскрешение Лазаря", "Спасение Лота", 
  "Грех Давида", "Тайная вечеря"], //e
  ["Нагорная проповедь", "Хождение по воде", "Блудный сын", 
  "Фарисей и мытарь", "Богатый юноша", "Эпоха Судей", 
  "Строение Храма Соломоном", "Испытание Авраама", 
  "Обращение апостола Павла", "Взятие Иерихона", "Сон Иакова", 
  "Переход через Красное море", "12 соглядатаев"] , //n
  ["Павел и Сила в темнице", "Моисей и медный змей", "Вавилонский плен", 
  "Раав и соглядатаи", "Завет между Богом и Авраамом", 
  "Разделение Израильского Царства", "Чудо Пурима", "Завоевание Ханаана", 
  "Горящий терновый куст", "Поиск жены для Исаака", "Лепта вдовицы", 
  "Брак в Кане Галилейской", "Изгнание торгующих из храма"] //h
];

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
      if (flagEnd === true) {
        modal.classList.add("open");
        modalText.textContent ="Время вышло. Ваш результат: " + score;
      }
      screenFirst();
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
      modal.classList.add("open");
      modalText.textContent ="Слова закончились, скоро добавим больше :) Ваш результат: " + score;
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
      //playSound("facebook_sms.mp3");
  } else if(startingX-50 > movingX) {
      score--;
      //playSound("oshibka-v-kompyutere.mp3");
  }
  scoreText.textContent = "Очки: " + score;
  wordChoice();
}

function checkLang() {
  window.location.href = "eng/index.html";
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