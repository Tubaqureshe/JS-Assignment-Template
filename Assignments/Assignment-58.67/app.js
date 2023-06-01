
var mainContent = document.getElementById("main-content");
console.log(mainContent.childNodes);
var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}
document.getElementById("first-name").value = "John";
document.getElementById("last-name").value = "Doe";
document.getElementById("email").value = "johndoe@example.com"