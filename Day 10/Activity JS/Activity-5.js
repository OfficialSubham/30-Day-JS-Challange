//Task 9

document.querySelector(".mylist")
    .addEventListener('click', (something) => {
        console.log(something.target.innerHTML, something);
        
    })

//Task 10

const item1 = document.createElement("li")
item1.innerText = "hello"

document.querySelector(".eventList")
    .prepend(item1)

document.querySelector(".eventList")
    .addEventListener("click", (event) => {
        console.log(event);
    })