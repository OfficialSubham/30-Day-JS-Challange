//Task 9

const button = document.querySelector(".button")

button.addEventListener('click', () => {
    document.querySelector(".paragraph")
        .innerText = "This is the new paragraph"
})

//Task 10

document.querySelector(".paragraph")
    .addEventListener('mouseover', () => {
        document.querySelector(".paragraph").style.border = "5px solid black"
    })