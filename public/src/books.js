/////////////////////////////////////
/////Find Method param function/////
///////////////////////////////////

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}


////////////////////////////////////
//////find Method param function///
//////////////////////////////////

const findBookById = (books, id) => books.find((book) => book.id === id);


//////////////////////////////////////////////////////////////////////////////
// This code simply is filtering out books that are not borrowed or returned.
////////////////////////////////////////////////////////////////////////////

function partitionBooksByBorrowedStatus(books) {  
  const borrowed = books.filter((book) => book.borrows.some((borrow) => !borrow.returned));  //filter out books not borrowed.
  const returned = books.filter((book) => book.borrows.every((borrow) => borrow.returned)); //filter out books not returned.
  const bookStatuses = [[...borrowed], [...returned]];    //spread opporator to combine arrays that been filterd out by status.
  return bookStatuses};       


////////////////////////////////////
/* This code is getting the borrowers for a book.It's finding all of the transactions that are associated with this book, and then it's sorting them by company name.Then it's returning only 10 results (the top 10 companies).
 */
////////////////////////////////////
////////////////////////////////////

function getBorrowersForBook(book, accounts) {
  // `borrows` is a list of transactions, each of type { id: string, returned: true }
  const {
    borrows
  } = book;

  const borrowers = borrows.map(({
    id,
    returned
  }) => {
    //find account that matches the borrower's ID//
    const account = accounts.find((account) => account.id === id);

    // return the matching account, along with the `returned` info//
    return {
      ...account,
      returned,
    };
  });

  return borrowers
    .sort((borrowerA, borrowerB) => {
      const companyA = borrowerA.company;
      const companyB = borrowerB.company;
      return companyA.localeCompare(companyB);
    })
    .slice(0, 10);
}

//---------------------------------------------------------------------------------------------------------------------//
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};