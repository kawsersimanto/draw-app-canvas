import Shape from "./Shape.js";

export default class Line extends Shape {
  constructor(x1, y1, color) {
    super(color);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x1;
    this.y2 = y1;
  }

  draw(context) {
    context.beginPath();
    context.strokeStyle = this.color;
    context.moveTo(this.x1, this.y1);
    context.lineTo(this.x2, this.y2);
    context.stroke();
    context.closePath();
  }

  update(newX, newY) {
    this.x2 = newX;
    this.y2 = newY;
  }
}
