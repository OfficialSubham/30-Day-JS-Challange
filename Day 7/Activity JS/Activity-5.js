//Task 8

const book = {
    title: "30 Days JavaScript Challenge",
    author: "Hitesh Sir",
    Year: 2024,
    method() {
        return `${this.title} ${this.Year}`;
    }

}

for (let keys in book) {
    console.log(`${keys} : ${book[keys]}`);
};

//Task 9

console.log(Object.keys(book));
console.log(Object.values(book));
