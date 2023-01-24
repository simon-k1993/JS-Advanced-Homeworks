let colorElement = document.getElementById("color");
let fontSizeElement = document.getElementById("fontSize");
let clickBtn = document.getElementById("btn");
let header = document.getElementById("hOne");

// function color(element, color) {
//   if (color) {
//     return (element.style.color = color);
//   } else {
//     element.style.color = "black";
//   }
// }

// clickBtn.addEventListener("click", function () {
//   return `${color(header, colorElement.value)}`;
// });
// clickBtn.addEventListener("click", function () {
//   colorElement.value = "";
// });

// function fontSize(element, font) {
//   if (font) {
//     return (element.style.fontSize = font + "px");
//   } else {
//     element.style.fontSize = 24 + "px";
//   }
// }

// clickBtn.addEventListener("click", function () {
//   return `${fontSize(header, fontSizeElement.value)}`;
// });

// clickBtn.addEventListener("click", function () {
//   fontSizeElement.value = "";
// });

let color = (element, color) =>
  color ? (element.style.color = color) : (element.style.color = "black");
let fontSize = (element, font) =>
  font
    ? (element.style.fontSize = font + "px")
    : (element.style.fontSize = 24 + "px");

clickBtn.addEventListener("click", () => {
  return `${color(header, colorElement.value)}, ${fontSize(
    header,
    fontSizeElement.value
  )}`;
});

clickBtn.addEventListener("click", () => {
  colorElement.value = "";
  fontSizeElement.value = "";
});
