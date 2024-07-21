//Task 3

const div = document.createElement("div")
div.append("some text")
document.querySelector("body").append(div);

//Task 4

const anotherList = document.createElement("li")
anotherList.prepend("complete js project")

document.querySelector("ul")
    .append(anotherList)