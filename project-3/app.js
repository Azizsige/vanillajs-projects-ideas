const button = document.getElementById('button');
const text = document.getElementById('text');
const body = document.getElementsByTagName('body')

BgClrRgb();

function BgClrRgb() {
  let red = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);
  let alpha = Math.random().toFixed(1);

  let body = document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  text.innerHTML = body;

  console.log(body)
};

button.addEventListener('click', BgClrRgb)