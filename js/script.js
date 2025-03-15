
window.onresize = autoResizeDiv;
autoResizeDiv();

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();//for controlling navbar color
  progress();//for animating skill bar
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
var x = document.getElementsByClassName("clr");//collecting to change color of nav elements 

var l = x.length

var y = document.getElementsByClassName("btclr");

function myFunction() {
  if (window.pageYOffset > sticky) {

    header.classList.add("stick");
    for (var i = 0; i < l; i++) {
      if (i < 3)
        y[i].style.backgroundColor = "black";
      x[i].style.color = "black";
      x[i].classList.add("blk");


    }


  } else {
    header.classList.remove("stick");
    for (var i = 0; i < l; i++) {
      if (i < 3)
        y[i].style.backgroundColor = "white";
      x[i].style.color = "white"
      x[i].classList.remove("blk");
    }






  }
}

function autoResizeDiv() {
  document.getElementById('main').style.height = window.innerHeight + 'px';
  
}

/*Menu icon animation */

function cross() {
  var a = document.getElementById("buttn");
  a.classList.toggle("change");
}
/*Menu icon animation */

/*animate progress bar*/
function progress() {
  var skill = document.getElementById("about");
  var skil = skill.offsetTop;
  if (window.pageYOffset >= skil) {

    var prog = document.getElementsByClassName("progress-bar");

    for (var n = 0; n < prog.length; n++) {

      prog[n].style.width = prog[n].attributes[2].nodeValue + '%';


    }
  }
}
/*animate progress bar end*/