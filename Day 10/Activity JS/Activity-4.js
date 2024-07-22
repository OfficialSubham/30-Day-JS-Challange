//Task 7

const studentArray = []

document.querySelector("button")
    .addEventListener("click", () => {
        const studentName = document.querySelector(".name").value
        const studentClass = document.querySelector(".class").value
        const studentRoll = document.querySelector(".roll").value

        const sutdentDescription = {
            name: studentName,
            class: studentClass,
            roll: studentRoll
        };

        studentArray.push(sutdentDescription);

        console.log(studentArray);
        
    })

//Task 8

document.querySelector("p").innerText = document.querySelector("select").value

document.querySelector("select")
    .addEventListener("change", () => {
        document.querySelector("p").innerText = document.querySelector("select").value
    })