class Field {
  constructor(container) {
    this.element = document.createElement("div");
    this.element.classList.add("field");
    container.appendChild(this.element);
  }
}

class Ball {
  constructor(field, src) {
    this.element = document.createElement("img");
    this.element.classList.add("ball");
    this.element.src = src;
    field.element.appendChild(this.element);

    const ball = this.element;

    field.element.addEventListener("click", function(event) {
      ball.style.left = (event.clientX - 50) + "px";
      ball.style.top = (event.clientY - 50) + "px";
    })
  }
}

const field1 = new Field(document.body);
const ball = new Ball(field1, "./img/ball.png");
