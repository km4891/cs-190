var myName = "William";
var classDescription = "Computer Science 190";
var theDate = "6/8/2021";
var firstname = "Billy";
var l_name = "Bob"
var fullName = firstname + l_name;

function confirmlink(linkname) {
    if (confirm("Are you sure you want to jump to " + linkname + "?"))
         location = linkname;
 }

 function displayInfo() {
    if (alert(myName + "\n" + classDescription + "\n" + theDate))
         location = displayInfo;
 }
 
 console.log(fullName);
