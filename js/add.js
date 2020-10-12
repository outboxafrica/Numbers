function ShowBook(e) {
  e.preventDefault()

  var book = document.getElementById("Book-title").value;
  console.log(book);
    document.getElementById("first").innerHTML ="book";
}
document.getElementById('book-form').addEventListener('submit', ShowBook, false);