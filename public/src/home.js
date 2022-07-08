//////////////////////////////////////////////////////
//////////GETTING LENGTH OF BOOKs ARRAY///////////////
//////////////////////////////////////////////////////
function getTotalBooksCount(books) {
  return books.length;
}
////////////////////////////////////////////////
//////////GETTING ACCOUNT OBJs/////////////////
//////////////////////////////////////////////
function getTotalAccountsCount(accounts) {
  return accounts.length;
}
////////////////////////////////////////////////
//////////Filtering out Brrowed Books//////////
//////////////////////////////////////////////
function getBooksBorrowedCount(books) {
  return books.filter((book) =>
    book.borrows.find((borrow) => borrow.returned === false)
  ).length;
}
/////////////////////////////////////////////////////
//////////compairng arrays and returning data.../////
/////////////////////////////////////////////////////
function getMostCommonGenres(books) {
  const bookGenres = books.map((book) => book.genre);
  const temp = [];
  //map over book genres
  bookGenres.map((genre) => {
    //for each genre, first check to see if genre already exists in array
    const genreLocation = temp.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      temp[genreLocation].count = temp[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      temp.push({
        name: genre,
        count: 1,
      });
    }
  });
  temp.sort((a, b) => b.count - a.count);
  if (temp.length > 5) {
    return temp.slice(0, 5);
  }
  return temp;
}
/////////////////////////////////////////////////////
////////MAP & SORT//////////////////////////////////
///////////////////////////////////////////////////
// function getMostPopularBooks(books) {
// const popularBooks = books.map(book => {
//     return { name: book.title, count: book.borrows.length }   //returns an object with the book title and # of borrows
//   })
//   popularBooks.sort((bookA, bookB) => bookB.count - bookA.count).splice(5)
//   return popularBooks;
// }

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
function getMostPopularBooks(books) {
  //  returns an object with the book title and # of borrows
  const popBooks = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return popBooks.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

function getMostPopularAuthors(books, authors) {
  const topAuthors = authors
    .map((a) => ({
      ...a,
      // books: books.filter(b => b.authorId === a.id),
      bookCount: books.filter((b) => b.authorId === a.id).length,
      borrowCount: books
        .filter((b) => b.authorId === a.id)
        .reduce((acc, cur) => acc + cur.borrows.length, 0),
    }))
    .sort((b, a) => a.borrowCount - b.borrowCount);
  topAuthors.length = 5;
  return topAuthors.map((ta) => {
    return {
      count: ta.borrowCount,
      name: ta.name.first + " " + ta.name.last,
    };
  });
}

/* function getMostPopularAuthor(books,authors){
  const result =[]; //create an empty array to hold the results
  authors.forEach((author) => {
    let authorStats = {
      name: `${author.name.first} ${author.name.last}`,//create a new object to hold the author's name and borrow    
      count: 0,}
  };
  books.forEach((book) => {
    if (book.authorId === author.id) {
      authorStats.count =+ book.borrows.length; //
    }
  });
  result.push(authorStats);
});
  return result)
}; */

/* function getMostPopularAuthors(books, authors) {
  const popularAuthors = authors.map(author => {
    const authoredBooks = book.filter(book => book.authorId ===author.id);
    const borrows = authoredBooks.reduce((acc,book) => acc + book.borrows.length, 0);
    const author = { name: author.name.first + " " + author.name.last, count: borrows };)
 }
 */
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
