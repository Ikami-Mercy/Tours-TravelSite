


// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// Get the modal
var modal1 = document.getElementById('myModal1');
// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/*############################KILIMANJARO################################*/
// Get the modal
let modalKimalimambogo = document.getElementById('myModalKilimabogo');
// Get the button that opens the modal
let myBtnKilimambogo = document.getElementById("myBtnKilimabogo");

// Get the <span> element that closes the modal
let spanKilimambogo = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal
myBtnKilimambogo.onclick = function() {
    modalKimalimambogo.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanKilimambogo.onclick = function() {
    modalKimalimambogo.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modalKimalimambogo) {
        modalKimalimambogo.style.display = "none";
    }
};

/*############################################################*/

/*############################ MT KENYA ################################*/
// Get the modal
let  myModalKenya = document.getElementById('myModalKenya');
// Get the button that opens the modal
let myBtnKenya = document.getElementById("myBtnKenya");

// Get the <span> element that closes the modal
let spanKenya = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
myBtnKenya.onclick = function() {
    myModalKenya.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanKenya.onclick = function() {
    myModalKenya.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === myModalKenya) {
        myModalKenya.style.display = "none";
    }
};

/*############################################################*/

/*############################ NAIROBI CITY ################################*/
// Get the modal
let  myModalCity = document.getElementById('myModalCity');
// Get the button that opens the modal
let myBtnCity = document.getElementById("myBtnCity");

// Get the <span> element that closes the modal
let spanCity = document.getElementsByClassName("close")[4];

// When the user clicks the button, open the modal
myBtnCity.onclick = function() {
    myModalCity.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanCity.onclick = function() {
    myModalCity.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === myModalCity) {
        myModalCity.style.display = "none";
    }
};

/*############################################################*/

/*############################ LONGONOT################################*/
// Get the modal
let  myModalLogonot = document.getElementById('myModalLogonot');
// Get the button that opens the modal
let myBtnLogonot = document.getElementById("myBtnLogonot");

// Get the <span> element that closes the modal
let spanLogonot = document.getElementsByClassName("close")[5];

// When the user clicks the button, open the modal
myBtnLogonot.onclick = function() {
    myModalLogonot.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanLogonot.onclick = function() {
    myModalLogonot.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === myModalLogonot) {
        myModalLogonot.style.display = "none";
    }
};

/*############################################################*/
// Get the samburu hotels modal
var modal2= document.getElementById('myModal2');
// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}



// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "100%";
    }
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
    }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}