///////////////////////////////////////
//---compair Id within Account------//
/////////////////////////////////////
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
////////////////////////////////////////////////////////
//////////using deconstruction.////////////////////////
//////////////////////////////////////////////////////
/* 
function sortAccountsByLastName(accounts) {                                                          return accounts.sort(({ name: { last: nameOne } }, { name: {last: nameTwo} }  ) => nameOne > nameTwo ? 1 : -1);  
}
*/
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function sortAccountsByLastName(accounts) {
  return accounts.sort((aName, zName) =>
    aName.name.last > zName.name.last ? 1 : -1
  );
}
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
function getTotalNumberOfBorrows(account, books) {
  const accId = account.id;
  let total = 0;
  books.forEach((book) =>
    book.borrows.forEach((borrow) => accId === borrow.id && total++)
  );
  return total;
}
/* function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => { book["author"] = authors.find((author) => author.id === book.authorID); return book; }
} */
function getBooksPossessedByAccount(account, books, authors) {
  //Here is my function for getting books possesed By account
  let borrowedBooks = books.filter((book) =>
    book.borrows.some((borrow) => borrow.id === account.id && !borrow.returned)
  );
  borrowedBooks.forEach(
    (book) =>
    (book.author = authors.find((author) => author.id === book.authorId))
  );
  return borrowedBooks;
}
/////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};