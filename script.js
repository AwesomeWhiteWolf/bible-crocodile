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
  ["Адам и Ева", "Сиф", "Мария Магдалина", "Ной", "Авраам", "Сарра", "Исаак", 
  "Иаков", "Исав", "Моисей", "Давид", "Мария и Иосиф", "Иоанн Креститель", 
  "Апостол Петр", "Лазарь", "Иосиф", "Соломон", "Пророк Илия", 
  "Иисус Христос", "Саул", "Ревекка", "Иисус Навин", "Лот", "Марфа и Мария", "Самсон", 
  "Апостол Андрей", "Апостол Иоанн", "Понтий Пилат", 
  "Рувим", "Левий", "Иуда (сын Иакова)", 
  "Апостол Павел", "Апостол Матфей", "Апостол Иаков Зеведеев", 
  "Апостол Фома", "Апостол Лука", "Апостол Филипп", "Вениамин"], //e 
  ["Каин и Авель", "Есфирь", "Раав", "Лия", "Руфь", "Самуил", "Даниил", 
  "Никодим", "Авессалом", "Иов", "Друзья Иова", "Аарон",
  "Ноеминь", "Иезекииль", "Иеремия", "Исаия", "Тимофей", 
  "Апостол Симон Кананит", "Тит", "Сим", "Измаил",
  "Иафет", "Хам", "Фамарь", "Агарь", "Вирсавия", "Ефрем", 
  "Рахиль", "Стефан", "Апостол Нафанаил"], //n.
  ["Аполлос", "Авигея", "Гедеон", "Халев", "Аггей", "Иоав", "Пророк Нафан", "Авенир", "Захария", "Амос", 
  "Наум", "Мемфивосфей", "Ездра", "Урия Хеттеянин", "Ахитофел", 
  "Ионафан", "Мардохей", "Офни и Финеес", "Неемия", 
  "Царица Савская", "Иосафат", "Озия", "Сепфора", "Анна", "Тавифа", 
  "Девора", "Зеведей", "Корнилий (сотник)", "Прискилла и Акила", "Осия", 
  "Вооз", "Зоровавель", "Мириам", "Авимелех", "Иеффай", "Илий", 
  "Иаков (брат Христа)", "Иуда (брат Христа)", "Мелхиседек", "Елисей"] //h
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
  "2 Петра", "1 Иоанна", "2 Иоанна", "3 Иоанна", "Колоссянам", "Галатам", "Ефесянам", 
  "1 Фессалоникийцам", "2 Фессалоникийцам", "Филимону"] //h
];

const events = [
  ["Всемирный потоп","Давид Против Голиафа", "Добрый Самарянин", "Вавилонская башня", 
  "Крещение Иисуса", "Пост Иисуса в пустыне", 
  "Исход из Египта", "Воскрешение Лазаря", "Спасение Лота из Содома", 
  "Грех Давида", "Тайная вечеря", "Получение 10 заповедей"], //e
  ["Нагорная проповедь", "Хождение по воде", "Блудный сын", 
  "Фарисей и мытарь", "Богатый юноша", "Эпоха Судей", 
  "Построение Храма Соломоном", "Испытание Авраама", 
  "Встреча апостола Павла с Христом", "Взятие Иерихона", "Сон Иакова", 
  "Переход через Красное море", "12 соглядатаев", "Покаяние Ниневии", "Сон Навуходоносора", "Гедеон и руно", "Иисус кормит голодных"] , //n
  ["Павел и Сила в темнице", "Моисей и медный змей", "Вавилонский плен", 
  "Раав и соглядатаи", "Завет между Богом и Авраамом", 
  "Разделение Израильского царства", "Чудо Пурима", "Завоевание Ханаана", 
  "Горящий терновый куст", "Поиск жены для Исаака", "Лепта вдовы", 
  "Брак в Кане Галилейской", "Изгнание торгующих из храма", "Четверо в огненной печи", "Илия против пророков Ваала"] //h
];

const geography = [
  ["Чермное море","Вавилон", "Израиль", "Назарет", 
  "Иудея", "Содом и Гоморра", "Гора Синай", 
  "Самария", "Ханаан", 
  "Вифлеем", "Палестина", "Иерихон", "Рим", "Эфес", "Галатия", 
  "Гора Арарат", "Ниневия", "Египет", "Коринф", "Дамаск"], //e
  ["Иордан", "Город Давида", 
  "Вифания", "Кана Галилейская", "Вефиль"] , //n
  ["Ливан", "Силом", "Кармил (Кармель)",
  "Цуф", "Земля Уц", "Гива",
  "Геф", "Рама Вениаминова", "Иоппия", "Хеврон", 
  "Вифсаида", "Фисон", "Река Агава", 
  "Моав", "Земля Нод", "Гихон", "Хиддекель", "Гора Иегова–Ире", "Елеонская (Масличная) гора"] //h
];



function startGame() {
  let flagEnd = false;
  if (time.value == "") {
    timerText.textContent = "Время: 60"; 
    timer = 60;
  } else { 
    timerText.textContent = `Время: ${time.value}`;
    timer = time.value;
  }

  const intervalId = setInterval(function() {
    timer--;
    timerText.textContent = `Время: ${timer}`;
    if (timer == 1) {
      flagEnd = true;
    }
    if (timer < 0) {
      if (flagEnd === true) {
        modal.classList.add("open");
        modalText.textContent =`Время вышло. Ваш результат: ${score}`;
        finalArray = [];
      }
      screenFirst();
      clearInterval(intervalId);
    }
  }, 1000);
  
  finalArray = [];
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
  if (flagGeography == true) {
    if (complexity.value == "Простая" || complexity.value == "") {
      finalArray.push(...(geography[0]));
    }
    else if (complexity.value == "Средняя") {
      finalArray.push(...(geography[1]));
    }
    else if (complexity.value == "Сложная") {
      finalArray.push(...(geography[2]));
    }
  }
  if (flagBooks == false && flagChar == false && flagEvents == false && flagGeography == false) {
    modal.classList.add("open");
    modalText.textContent ="Пожалуйста, выберите хотя бы одну тему.";
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
      modalText.textContent =`Слова закончились, скоро добавим больше :) Ваш результат: ${score}`;
      screenFirst();
      score = 0;
      scoreText.textContent = "Очки: 0";
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
  scoreText.textContent = `Очки: ${score}`;
  wordChoice();
}

function openDictionary() {
  window.location.href = "dictionary/index.html";
}

function changeLang() {
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