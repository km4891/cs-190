var myName = "William";
var classDescription = "Computer Science 190";
var theDate = "6/8/2021";

function confirmlink(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
         location = linkname;
 }

 function displayInfo() {
    if (alert(myName + classDescription + theDate))
         location = displayInfo;
 }
 
