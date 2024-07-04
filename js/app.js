import Rectangle from "./Rectangle.js";

const controls = document.querySelectorAll(".control-item");

let shapeName;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    controls.forEach((item) => {
      item.classList.remove("active");
    });
    control.classList.add("active");
    shapeName = control.getAttribute("data-shape");
  });
});

const canvas = document.querySelector("canvas");
/** @type {CanvasRenderingContext2D} */
const dpi = window.devicePixelRatio;
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shapes = [];
let currentShape = null;

canvas.addEventListener("mousedown", handleMouseDown);
canvas.addEventListener("mousemove", handleMouseMove);
canvas.addEventListener("mouseup", handleMouseUp);

function handleMouseDown(e) {
  let startX = e.offsetX;
  let startY = e.offsetY;

  switch (shapeName) {
    case "rectangle":
      currentShape = new Rectangle(startX, startY, 0, 0, "red");
      shapes.push(currentShape);
      render(shapes);
      break;

    default:
      break;
  }
}

function handleMouseMove(e) {
  if (currentShape instanceof Rectangle) {
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
