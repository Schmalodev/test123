var notion = document.getElementById("notion");
const textField = document.getElementById("InputField");
var button = document.getElementById("Button");

button.addEventListener("click", function(){
    const textValue = textField.value;
    localStorage.setItem("notion", textValue);

    notion.innerHTML = localStorage.getItem("notion");
})

notion.innerHTML = localStorage.getItem("notion");