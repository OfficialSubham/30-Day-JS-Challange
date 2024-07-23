//Task 6

const usingFetch = new Promise((resolve, reject) => {
    let data = fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=082fadc58f06877f50c19190d7d39a5e")
    resolve(data)
}).then((data) => {
    const jsonData = data.json();
    return new Promise((resolve, reject) => {
        resolve(jsonData)
    })
}).then((data) => {
    console.log(data);
    
})


//Task 7

fetchAPI();

async function fetchAPI() {
    const data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=082fadc58f06877f50c19190d7d39a5e")
    const jsonData = await data.json()
    console.log(jsonData);
    
}

/* https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=082fadc58f06877f50c19190d7d39a5e */