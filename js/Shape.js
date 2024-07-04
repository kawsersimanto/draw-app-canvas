export default class Shape {
  constructor(color) {
    this.color = color;
  }
  draw(context) {
    throw new Error(`Draw method must be implemented.`);
  }
}
