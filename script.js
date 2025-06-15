let btn = document.querySelector("button");
let imges = [
  "./images/chi.png",
  "./images/do.png",
  "./images/pi.png",
  "./images/sin.png",
];

let body = document.body;

btn.addEventListener("click", function () {
  let index = Math.trunc(Math.random() * imges.length);
  let x = Math.trunc(Math.random() * 90);
  let y = Math.trunc(Math.random() * 90);
  let r = Math.trunc(Math.random() * 360);

  let img = document.createElement("img");
  img.setAttribute("src", imges[index]);
  img.style.width = "100px";
  img.style.position = "absolute";
  img.style.left = x + "%";
  img.style.top = y + "%";
  img.style.rotate = r + "deg";

  body.appendChild(img);
});
