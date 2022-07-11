///////////////////////////////////////
//---compair Id within Account------//
/////////////////////////////////////
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
////////////////////////////////////////////////////////
//////////sort using deconstruction.///////////////////
//////////////////////////////////////////////////////
/* 
function sortAccountsByLastName(accounts => {return accounts.sort(({ name: { last: nameOne } }, { name: {last: nameTwo} }  ) => nameOne > nameTwo ? 1 : -1);  
*/
//////////////////////////////////////////////////////////
////////////////sort useing ternary opp//////////////////
////////////////////////////////////////////////////////
function sortAccountsByLastName(accounts) {
  return accounts.sort((aName, zName) =>
    aName.name.last > zName.name.last ? 1 : -1);
}
/////////////////////////////////////////////////////////////
////-----Match borrows id index, return ------//////////////
///////////////////////////////////////////////////////////
const getTotalNumberOfBorrows = (account, books) => {
  return books.filter((book) =>                                           //filter books that have a borrow id match account id
    book.borrows.some((borrow) => borrow.id === account.id)).length;     //return the length of the filtered books
}

//-------------------------------------------------------//
///////////////////Function no worky/////////////////////////////
/* function getBooksPossessedByAccount(account, books, authors) {
  return (books.filter((book) => book.borrows[0].id === account.id && !book.borrows[0].returned).map((book) => { book["author"] = authors.find((author) => author.id === book.authorID); return book; }
} */
//-------------------------------------------------------//


/////////////////////////////////////////////////////////////
// This code is filtering the books that are borrowed by the account and then it's getting the author of each book.
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

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
//-------------------------------------------------------//
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};