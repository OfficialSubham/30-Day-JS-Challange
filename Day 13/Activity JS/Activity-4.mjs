// Task 6
 
import _ from 'lodash';
import axios from 'axios';

const numbers = [1, 2, 3, 4, 5];
const sum = _.sum(numbers);
console.log('Sum of numbers:', sum); 

//Task 7

request()

async function request() {
    try {
        const data = await axios.get("https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3197208")
        console.log(data.data);
    }
    catch(error) {
        console.log(error.message);
    }
 
}

