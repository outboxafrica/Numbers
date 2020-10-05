document.getElementByClassName('search').onsubmit = function() {
    window.location = 'http://www.google.com/search?q=site:Numbers/html/adminlogin.html ' + document.getElementById('test').value;
    return false;
}