const SubmitForm = document.getElementById("book-form");
const SubmitButton = document.getElementById("button1");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const fullName =SubmitForm.fullName.value;
    const title = SubmitForm.title.value;   const author = SubmitForm.author.value;
    const date = SubmitForm.date.value;
    const descript = SubmitForm.descript.value;
    const category = SubmitForm.category.value;
    const file = SubmitForm.file.value;
  
  
    if (fullName === "" && title === "" && date== "" && descript=="" && category=="" && file=="" && author=="") {
        alert("You have successfully added book."); location.assign("http://127.0.0.1:5500/Numbers/html/adminlogin.html");
       }
    
  
})