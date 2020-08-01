var i = 0;
var txt = 'an ingenious Web Developer'; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("sub-header")[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
setTimeout(typeWriter,1000)
function showMail() {
	var d = document.getElementById("email");
	d.style.display = "block";
}