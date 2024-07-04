import Circle from "./Circle.js";
import Line from "./Line.js";
import Rectangle from "./Rectangle.js";

const controls = document.querySelectorAll(".control-item");
const canvas = document.querySelector("canvas");
/** @type {CanvasRenderingContext2D} */
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
let currentShape = null;

let shapeName;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    controls.forEach((item) => {
      item.classList.remove("active");
      canvas.classList.remove(`cursor-${item.getAttribute("data-shape")}`);
    });
    control.classList.add("active");
    shapeName = control.getAttribute("data-shape");
    canvas.classList.add(`cursor-${shapeName}`);
  });
});

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);

function handleMouseDown(e) {
  let startX = e.offsetX;
  let startY = e.offsetY;

  switch (shapeName) {
    case "rectangle":
      currentShape = new Rectangle(startX, startY, 0, 0, "red");
      break;

    case "circle":
      currentShape = new Circle(startX, startY, 0, "red");
      break;
    case "line":
      currentShape = new Line(startX, startY, "red");
      break;

    default:
      currentShape = new Rectangle(startX, startY, 0, 0, "red");
      break;
  }

  shapes.push(currentShape);
  render(shapes);
}

function handleMouseMove(e) {
  if (currentShape instanceof Rectangle) {
    currentShape.update(e.offsetX, e.offsetY);
    render(shapes);
  }
  if (currentShape instanceof Circle) {
    currentShape.update(e.offsetX, e.offsetY);
    render(shapes);
  }
  if (currentShape instanceof Line) {
    currentShape.update(e.offsetX, e.offsetY);
    render(shapes);
  }
}

function handleMouseUp(e) {
  currentShape = null;
  render(shapes);
}

function render(shapes) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  shapes.forEach((shape) => {
    shape.draw(context);
  });
}
