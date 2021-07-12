var busName = "D*A*L*E's Army Surplus";
var address = "84 Rainey Street, Arlen, Texas";
var phone = "555-123-4567"

function getHeader () {
    
    var data = "<h1 style='padding-right:55%'>" + busName + "<h1>";
    document.getElementById('header').innerHTML = data;
}

function getFooter (busName, address, phone) {
    // var data = "<table style='width:100%'><tr style='background-color:#4b5320'><td >";
    // data +="<h1 style='text-align:right, text-size:20px'>" + busName + "</h1>";
    // data +="</td></tr></table>";
    data = `<footer class="bg-dark py-3">
    <p style="text-align:center" class="text-light"><b>
    ${busName} 
    Phone Number: ${phone}
    Address: ${address} </b> </p>
    App Name: ${navigator.appName} /
    App Version: ${navigator.appVersion}</p>
</footer>`;
document.getElementById("footer").innerHTML = data;
}


    
