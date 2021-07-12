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
    data = `<footer>
    <p style="text-align:center" class="text-light"><b>
    ${busName} 
    Phone Number: ${phone}
    Address: ${address} </b> </p>
    App Name: ${navigator.appName} /
    App Version: ${navigator.appVersion}</p>
</footer>`;
document.getElementById("footer").innerHTML = data;
}

function makeMenu() {
    // var size = product_list.length;
    var data = ``;
   
    
    for (var i = 0; i < 4; i++) {
      data += "Menu <br>";
    }
    return data;
  }

  function makeMain () {
      data = `<table style='width:100%' border=1 cellpadding=10><tr>
      <td rowspan=3 style='width:30%;text-align:center;vertical-align:middle'>
      <span id='prod_img'>Product Image</span></td>
      <td id='prod_name'>Product Name</td>
      <td style='text-align:right' id='prod_id'>Product ID</td></tr>
      <tr><td style='text-align:center' colspan=2>
      <span id='prod_bar'>Shopping Cart Link Bar</span> </td></tr>
      <tr><td colspan=2 id='prod_desc'>Product Description</td></tr>
      </table>`;
      return data;
  }


    
