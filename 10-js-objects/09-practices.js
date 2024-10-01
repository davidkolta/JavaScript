/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm: 60 and final: 90

Output your object to the console
*/


const person = {
    firstName: 'Alex',
    lastName: 'Smoth',
    hobbies: ['Soccer - Watching movies'],
    exam_score: {
        midterm:60,
        final:90
    }};
console.log(person);

console.log(person.hobbies);


console.log((student.exam_scores.midterm + student.exam_scores.final) / 2); // 75
// Better solution for more exams
const allScores = Object.values(student.exam_scores);
let sum = 0;
for(const score of allScores) {
  sum += score;
}
console.log(sum / allScores.length); // 75


  /*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/


const book = {
    bookName: 'Amok',
    Author: {
        firstName: 'Stefan',
        lastName: 'Zweig'},
    genre: 'Novell'
    };

    console.log(book);




    const books = [
        {
          name: "Amok",
          author: {
            fname: "Stefan",
            lname: "Zweig",
          },
          genre: "Novella",
        },
        {
          name: "My Name Is Red",
          author: {
            fname: "Orhan",
            lname: "Pamuk",
          },
          genre: "Historical Novel",
        },
        {
          name: "1984",
          author: {
            fname: "George",
            lname: "Orwell",
          },
          genre: "Dystopian Literature",
        },
      ];
      
      // Count the books where Author first name has an 'a' -> 2

      let count = 0;

      for(const book of books) {
        if (book.author.fname.toLowerCase().includes('a')){
            count++;
        }
      }

      console.log(count);

      const nameOfBook = [];

      for(const book of books) {

    nameOfBook.push(book.name);
      }

      console.log(nameOfBook);