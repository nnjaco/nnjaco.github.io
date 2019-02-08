//Deaclared HTML-Element vars
var btn_add = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btn_clear = document.getElementById("clear");


//Events
btn_add.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPressed);
btn_clear.addEventListener("click", clear);


//add a new element to the list on click
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement()
    }
}

//add a new element to the list on enter press
function addListAfterKeyPressed(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    }
}

//returns the length of the text in the input element
function inputLength() {
    return input.value.length;
}

//Create a new li element with the text on input
function createListElement() {
    var newLi = document.createElement("li");
    newLi.appendChild(document.createTextNode(input.value));
    newLi.addEventListener("click", doneOnOff);
    
    ul.appendChild(newLi);
    input.value = "";
}

//clean the input text field
function clear() {
    //Other ways to remove all elements from the list
    //method to remove all in the ul node.
    ul.innerHTML = "";
    input.value = "";
}

function doneOnOff(event){
    event.toElement.classList.toggle("done");
}


//not_working 
/* function clear() {
    ul.childNodes.forEach(element => {
        debugger;
        element.remove();
    });
    input.value = "";
} */

//not_working - after use not able to add more list elements
/* function clear() {
    if (ul.childNodes.length > 0)
        for (let i = 0; i < ul.childNodes.length; i++) {
            const element = ul.childNodes[i];
            ul.remove(element);
        }
        input.value = "";
} */

