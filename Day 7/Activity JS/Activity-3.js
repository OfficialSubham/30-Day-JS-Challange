//Task 5

const library = {
    name: "Kokata Library",

    books: [{
        bookTitle: "Rich Dad Poor Dad"
    },
    {
        bookTitle: "How to win friends and influence people"
    },
    {
        bookTitle: "Milionaire FastLane"
    },
    {
        bookTitle: "Psychology of Money"
    }],

 

};

function bookName() {
  
}

console.log(`${library.name}`);
library.books.forEach((book) => {
    console.log(book.bookTitle);
})