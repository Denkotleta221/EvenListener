const ball = document.getElementById("ball");

document.body.addEventListener("click", function(event) {
  ball.style.left = (event.clientX - 50) + "px";
  ball.style.top = (event.clientY - 50) + "px";
});
