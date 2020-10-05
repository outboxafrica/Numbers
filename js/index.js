function search_category() { 
    let input = document.getElementByClassName('search').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('category'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";  location.assign("http://127.0.0.1:5500/Numbers/html/adminlogin.html");                
        } 
    } 
} 