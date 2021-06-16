var myName = "William";
var classDescription = "Computer Science 190";
var theDate = "6/8/2021";

var customertype = 'direct';


function getName () {
    var person = prompt("Please enter your name");
  if (person.length > 10) {
      alert("You have a long name");
      document.getElementById("yourname").innerHTML = "Your name is: " + person;
  } else if (person.length < 5) {
      alert("You have a short name");
      document.getElementById("yourname").innerHTML = "Your name is: " + person;
  } else if (person.length < 10) {
      alert("You have a medium name")
      document.getElementById("yourname").innerHTML = "Your name is: " + person;
  }

}




function changetype () {
    var newtype;
    if (customertype == 'direct') {
        newtype = 'advertising';
        customertype = newtype;
        window.alert("Customer Type has changed to " + customertype);
        console.log("hi");
    } else if (customertype == 'advertising') {
        newtype = 'subscription';
        customertype = newtype;
        window.alert("Customer Type has changed to " + customertype);
        console.log("hi1");

    } else if (customertype = 'subscription') {
        newtype = 'direct';
        customertype = newtype;
        window.alert("Customer Type has changed to " + customertype);
        console.log("hi2");
    }
}

function displaytype (changetype) {
    if (customertype == 'direct') {
        window.alert("Buy Now! From this web page! My children need new shoes! " + customertype);
        console.log("hi");
    } else if (customertype == 'advertising') {
        window.alert("Support our advertisers! Click on an ad, so I can make money! " + customertype);
        console.log("hi1");

    } else if (customertype = 'subscription') {
        window.alert("Renew your subscription today! My children need medicine! " + customertype);
        console.log("hi2");
    }
}

function confirmlink(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
         location = linkname;
 }

 function displayInfo() {
    if (alert(myName + "\n" + classDescription + "\n" + theDate))
         location = displayInfo;
 }
 
     // declare this variable outside of your functions
     var currentspecial = 1     // selects which item that is "on special"

     function displayspecial() {
 
        if (currentspecial == 1) {
           alert("The current special is #1")
        }
        if (currentspecial == 2)  {
           alert("The current special is #2")
        }
        if (currentspecial == 3 )  {
           alert("The current special is #3")
        }
        currentspecial = currentspecial + 1
        if (currentspecial > 3) {
          currentspecial = 1
        }
 
    }
