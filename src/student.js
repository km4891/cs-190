var customertype = "direct";
var myName = "William";
var classDescription = "Computer Science 190";
var theDate = "6/8/2021";


function changetype (customertype) {
    
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
