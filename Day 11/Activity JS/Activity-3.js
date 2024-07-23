//Task 4

async function waiting() {
    const wait = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello I am resolved")
        }, 3000);
        
    })

    console.log(wait);
    
}

waiting();

//Task 5

tryCatch();

async function tryCatch() {

    try{
        const rejPromise = await new Promise ((resolve, reject) => {
            setTimeout(() => {
                reject("error hai bhai")
            }, 2000);
            
        })
        console.log(rejPromise);
    }
    catch(error) {
        console.log(error)
    }

}