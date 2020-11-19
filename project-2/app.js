const button = document.getElementById('button');
const text = document.getElementById('text');
const body = document.getElementsByTagName('body')

BgClrRgb();

function BgClrRgb() {
  let red = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);

  let body = document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  text.innerHTML = body;

  console.log(body)
};

button.addEventListener('click', BgClrRgb)