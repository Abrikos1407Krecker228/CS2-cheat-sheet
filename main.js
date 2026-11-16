const myImage = document.querySelector("img");      // cмены изображений при клике на них(разобраться позже)

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/cs2main.jpg") {
    myImage.setAttribute("src", "images/cs2yellow.avif");
  } else {
    myImage.setAttribute("src", "images/cs2main.jpg");
  }
});


/*
Всё, что находится тут - комментарий.
*/

const заголовок = document.querySelector("p");      //выбрать заголовок <p>
заголовок.textContent = "Hello world";              //подставить в него значение

document.querySelector("p").textContent = "PRIVET!" //тоже самое но без объявления переменной


var button_user = document.querySelector("button"); //беру кнопку в переменную чтобы цепануть к ней событие click, которое запустит функцию setUserName
var hi = document.querySelector("h1");              //в этот заголовок подставлю имя пользователя

function setUserName() {
  var myName = prompt("Please enter your name.");  //диалоговое окно ввода имени
  localStorage.setItem("name", myName);  // вызов API, хранить данные в браузере (local storage), в ключе под названием "name", устанавливаем значение.. в переменную myName
  hi.textContent = ("h1 ") + myName;      // устанавливаем текст заголовку <h1> + введённое имя
}
if (!localStorage.getItem("name")) {           // если в памяти браузера нет информации о имени или она стёрта
  setUserName();                               // то вызываю функцию setUserName
} else {
  var storedName = localStorage.getItem("name"); // в противном случае беру имя из памяти 
  hi.textContent = ("h1 ") + storedName;          // и ставлю его в заголовок <h1>
}
button_user.onclick = function () {         // нажал кнопку - вбил новое имя
  setUserName();                            // используя функцию setUserName
};

// разобраться как оставить текст <h1> из html файла, чтобы не копировать его текст тут
// в строках 29 и 35