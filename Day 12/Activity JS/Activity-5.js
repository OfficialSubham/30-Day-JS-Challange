//Task 8

 usingFetch();

async function usingFetch() {
    await fetch("https://invalid").catch(() => {
        console.log("error hai");
    })
}

fetch("http://invalidURL")
    .catch((error) => {

        console.log("url is not valid");
    }) 

//Task 9

tryCatch()

async function tryCatch() {
    try {
        const data = await fetch("https://jhshjasnask")
        console.log(data);
    }
    catch(error) {
        console.log("Its all about the error");
    }
}
