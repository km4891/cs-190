var busName = "D*A*L*E's Army Surplus"

function getHeader () {
    var data = busName;
    document.getElementById('header').innerHTML = data;
}

function getFooter () {
    var data = "<table style='width:100%'><tr style='background-color:#4b5320'><td >";
    data +="<h1 style='text-align:right, text-size:20px'>" + busName + "</h1>";
    data +="</td></tr></table>";
    return(data);
}