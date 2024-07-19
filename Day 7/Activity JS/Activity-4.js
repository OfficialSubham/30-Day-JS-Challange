//Task 7

const book = {
    title: "30 Days JavaScript Challenge",
    author: "Hitesh Sir",
    Year: 2024,
    method() {
        return `${this.title} ${this.Year}`;
    }

}

console.log(book.method());
