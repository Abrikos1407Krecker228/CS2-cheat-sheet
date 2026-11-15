const заголовок = document.querySelector("h1");     //как то выбрать заголовок <h1>
заголовок.textContent = "Hello world";              //подставить в него значение


const myImage = document.querySelector("img");      // cмены изображений при клике на них

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

document.querySelector("p").textContent = "PRIVET!" // без объявления переменной

var button_user = document.querySelector("sendbutton");
var hi = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Please enter your name.");  //диалоговое окно
  localStorage.setItem("name", myName);  // вызов API, хранить данные в браузере, в свойтве под названием "name", устанавливаем значение в переменную myName
  hi.textContent = "CS2 is cool, ";      // устанавливаем тест заголовку <h1>
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  hi.textContent = "CS2 is cool, " + storedName;
}
button_user.onclick = function () {
  setUserName();
};