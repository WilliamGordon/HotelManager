// JAVASCRIPT CODE FOR CHECK IN PROCESS
// NEED TO DISPLAY A TABLE IN HTML WITH THE INFORMATION AFTER THE FORM IS SEND
// NEED TO CREATE AN OBJECT WHICH STORES THE INFO OF EACH PERSONS
// NEED TO CREATE AN OBJECT WHICH STORES EACH PERSONS 

//BEING ABLE TO ASK HOW MANY NIGHTS AND GIVE THE CHECK OUT DATE INSTEAD OF ASKING FOR IT
//BEING TO ALERT THAT THE ROOM IS TO SMALL IF THERE IS TO MANY PEOPLE
//BEING ABLE TO ASK THEM IF THEY WANT TO BUY ANOTHER ROOM OR CHANGE ROOM FOR A BIGGER ONE

//SEND AN ALERT IF SUBMIT AND DIDNT FILL OUT SOME INFO + HIGHLIGHT THE INFO WHICH HASN4T BEEN SUBMITED

"use = strict";

document.getElementById('add-reservation-button').onclick = function() {
    document.getElementById('reservation-form-popup').style.display="block";
    document.getElementById('html-content').style.opacity="0.2";
}

document.getElementById('abort-button').onclick = function() {
    document.getElementById('reservation-form-popup').style.display="none";
    document.getElementById('html-content').style.opacity="1";
}