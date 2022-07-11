//////////////////////////////////////////////
//////////GETTING LENGTH OF BOOKs ARRAY/////
const getTotalBooksCount = books => books.length;
//////////////////////////////////////////////
//////////GETTING ACCOUNT OBJs/////////////
const getTotalAccountsCount = accounts => accounts.length;
/////////////////////////////////////////////
//////////Filtering out Brrowed Books///////
function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows.find((borrow) => borrow.returned === false)).length;
}

//////////////////////////////////////////////
////compairng arrays and returning data...///
////////////////////////////////////////////


/* This code is mapping over the books array and returning an array of genre objects.The map function iterates through each book in the books array, which contains a property called genre.It then pushes that value into an empty object with a name property equal to the current book's genre and count property equal to 1.
 */

function getMostCommonGenres(books) {
  const totalBookCount = getTotalBooksCount 
  const bookGenres = books.map((book) => book.genre);  //map over the books array and return an array of genre values
  const acc = [];
  //map over book genres
  bookGenres.map((genre) => { 
    //for each genre, first check to see if genre already exists in array
    const genreLocation = acc.findIndex((element) => element.name === genre);
    //second, if it exists, increase count by 1
    if (genreLocation >= 0) {
      acc[genreLocation].count = acc[genreLocation].count + 1;
      //else, if it don't exist, push a new genre object onto array with count of 1
    } else {
      acc.push({
        name: genre,
        count: 1,
      });
    }
  });
  acc.sort((genresA, genresB) => genresB.count - genresA.count);
  if (acc.length > 5) {
    return acc.slice(0, 5);
  }
  if (acc.length <= totalBookCount){
   return acc;
  }else{
return null;
  }
}

/////////////////////////////////////////////////////
////////MAP & SORT//////////Not sure if this works..
///////////////////////////////////////////////////
///////////////////////////////////////////////////

// function getMostPopularBooks(books) {
// const popularBooks = books.map(book => {
//     return { name: book.title, count: book.borrows.length }   //returns an object with the book title and # of borrows
//   })
//   popularBooks.sort((bookA, bookB) => bookB.count - bookA.count).splice(5)
//   return popularBooks;
// }
/////////////////////////////////////////////////////
/* This code is returning an object with the book title and # of borrows.
The map function iterates through each element in the array, creating a new object for each element.
The sort function sorts the objects by their count property(the number of times they were borrowed).
It then returns only 5 elements from that sorted list. */
/////Vvvv///////////////////////////////////vvvV///
//////////////////////////////////////////////////

function getMostPopularBooks(books) {
  //  returns an object with the book title and # of borrows
  const popBooks = books.map((book) => ({
    name: book.title,
    count: book.borrows.length,
  }));
  return popBooks.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
////////////////|/////////////////////|///////////////
///////////////!Vvv!CODE WITH BUGS!vvvV!/////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

/* function getMostPopularAuthors(books, authors) {
  const topAuthors = authors
    .map((popAuthor) => ({
      ...popAuthor,
      // books: books.filter(b => b.authorId === a.id),
      bookCount: books.filter((b) => b.authorId === popAuthor.id).length,
      borrowCount: books
        .filter((b) => b.authorId === popAuthor.id)
        .reduce((acc, cur) => acc + cur.borrows.length, 0),
    }))
    .sort((b, popAuthor) => popAuthor.borrowCount - b.borrowCount);
  topAuthors.length = 5;
  return topAuthors.map((ta) => {
    return {
      count: ta.borrowCount,
      name: ta.name.first + " " + ta.name.last,
    };
  });
} */

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
 } */
//////////////////////////////////////////////////////
///////////////^^^^^CODE WITH BUGS^^^^^^/////////////
///////////////||///////////////////||//////////////
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
////////////////...MAP.FILTER.FILTER.FILTER.${Oobjectified$}/////RETURN...//////////////////////////////
//////////////////////////////////////////////////////
/* This code is mapping over the authors array and creating a new object for each author.The new object has two properties, bookCount and borrowCount.
bookCount is equal to the number of books that have an authorId matching the current author's id in the authors array.
borrowCount is equal to all of those books' borrows added together (reduced). */
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
function getMostPopularAuthors(books, authors) {
  const topAuthors = authors.map(aAuthor => ({ ...aAuthor,
    bookCount: books.filter(zAuthor => zAuthor.authorId === aAuthor.id).length,
    borrowCount: books.filter(zAuthor => zAuthor.authorId === aAuthor.id).reduce((acc, cur) => acc + cur.borrows.length, 0)
  })).sort((zAuthor, aAuthor) => aAuthor.borrowCount - zAuthor.borrowCount); 
  // console.log(topAuthors);
  topAuthors.length = 5;
      
  return topAuthors.map(ta => {
  return { 
    count: ta.borrowCount, 
    name: ta.name.first + " " + ta.name.last 
    };
  })
}

//-------------------------------------------------------------------------------------------------------------------//
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
