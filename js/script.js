var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('menu-superior').outerHTML
            = this.responseText;
    }
}
xhttp.open('GET','menu.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('menu-superior2').outerHTML
            = this.responseText;
    }
}
xhttp.open('GET','menu2.html', true);
xhttp.send();

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('menu-superior3').outerHTML
            = this.responseText;
    }
}
xhttp.open('GET','menu3.html', true);
xhttp.send();