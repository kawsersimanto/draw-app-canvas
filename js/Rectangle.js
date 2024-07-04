import Shape from "./Shape.js";

export default class Rectangle extends Shape {
  constructor(x, y, width, height, color) {
    super(color);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw(context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  update(x, y) {
    this.width = x - this.x;
    this.height = y - this.y;
  }
}
