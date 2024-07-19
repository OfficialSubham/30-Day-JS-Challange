//Task 3

const book = {
    title: "30 Days JavaScript Challenge",
    author: "Hitesh Sir",
    Year: 2024,
    method() {
        return `${this.title} ${this.author}`;
    },

    year(year) {
        this.Year = year;
    }
};
console.log(book.method());

//Task 4

book.year(3360);

console.log(book);
