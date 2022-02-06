canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_the_x, last_position_of_the_y;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
mouseEvent="mousedown";
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
current_position_of_the_x = e.clientX-canvas.offsetLeft;
current_position_of_the_y = e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
console.log("last position of the x and y cordinates");
console.log("x =" + last_position_of_the_x + "y =" + last_position_of_the_y);
ctx.moveTo(last_position_of_the_x, last_position_of_the_y);
console.log("current position of the x and y cordinates");
ctx.lineTo(current_position_of_the_x, current_position_of_the_y);
ctx.stroke();
}
last_position_of_the_x = current_position_of_the_x;
last_position_of_the_y = current_position_of_the_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}