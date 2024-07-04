import Shape from "./Shape.js";

export default class Line extends Shape {
  constructor(x, y, color) {
    super(color);
    this.x = x;
    this.y = y;
  }

  draw(context) {}

  update(context) {}
}
