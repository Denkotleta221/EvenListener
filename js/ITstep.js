class Field {
  constructor(container) {
    this.element = document.createElement("div");
    this.element.classList.add("field");
    container.appendChild(this.element);
  }
}

class Ball {
  constructor(container, src) {
    this.element = document.createElement("img");
    this.element.classList.add("ball");
    this.element.src = src;
    container.appendChild(this.element);

    this.field = container; // Поле — это body
    this.ballSize = 100; // Размер мяча в пикселях (из CSS)
    this.moveDistance = 50; // Расстояние перемещения в пикселях

    // Начальная позиция мяча
    this.element.style.left = "0px";
    this.element.style.top = "0px";

    // Обработчик клика по всему экрану (body)
    document.body.addEventListener("click", (event) => this.moveBall(event));
  }

  moveBall(event) {
    // Получаем размеры и положение поля (body)
    const fieldRect = this.field.getBoundingClientRect();
    // Текущая позиция мяча
    const currentX = parseFloat(this.element.style.left) || 0;
    const currentY = parseFloat(this.element.style.top) || 0;
    // Позиция клика относительно поля
    const clickX = event.clientX;
    const clickY = event.clientY;
    // Центр мяча (относительно body)
    const ballCenterX = currentX + this.ballSize / 2;
    const ballCenterY = currentY + this.ballSize / 2;

    // Вычисляем направление клика
    let deltaX = clickX - ballCenterX;
    let deltaY = clickY - ballCenterY;

    // Нормализуем направление и задаем фиксированное расстояние (50 пикселей)
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    if (distance < 5) { // Игнорируем клики слишком близко к центру
      return;
    }

    deltaX = (deltaX / distance) * this.moveDistance;
    deltaY = (deltaY / distance) * this.moveDistance;

    // Новая позиция мяча
    let targetX = currentX + deltaX;
    let targetY = currentY + deltaY;

    // Ограничиваем движение мяча в пределах поля
    targetX = Math.max(0, Math.min(targetX, fieldRect.width - this.ballSize));
    targetY = Math.max(0, Math.min(targetY, fieldRect.height - this.ballSize));

    // Перемещаем мяч
    this.element.style.left = `${clickX - 50}px`; // :)
    this.element.style.top = `${clickY - 50}px`; // :]
  }
}

// Создаем мяч, используя body как поле
const ball = new Ball(document.body, "./img/ball.png");
