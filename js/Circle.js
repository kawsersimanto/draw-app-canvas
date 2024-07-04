import Shape from "./Shape.js";

export default class Circle extends Shape {
  constructor(x, y, radius, color) {
    super(color);
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.strokeWidth = 2;
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

  update(x, y) {
    const dx = x - this.x;
    const dy = y - this.y;

    this.radius = Math.sqrt(dx * dx + dy * dy);
  }
}
