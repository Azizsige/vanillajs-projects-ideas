const button = document.getElementById('button');
const text = document.getElementById('text');
const body = document.getElementsByTagName('body');
const btnChange = document.getElementById('changeIt');
const numOpt = document.getElementById('numOpt');

getOption();

function getOption() {
  let selectOpt = document.getElementById('select').selectedIndex;
  let options = document.getElementsByTagName('option')[selectOpt].value;

  numOpt.innerHTML = `(${options})`;
}

function changeHex() {
  hex = Math.random().toString(16).slice(2, 8);

  let body = document.body.style.backgroundColor = `#${hex}`;
  text.innerHTML = `#${hex}`;

  console.log(body);
};

function changeRgb() {
  let red = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);

  let body = document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  text.innerHTML = body;

  console.log(body)
};

function changeRgba() {
  let red = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);
  let alpha = Math.random().toFixed(1);

  let body = document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  text.innerHTML = body;

  console.log(body)
};

let getBtn = btnChange.addEventListener('click', getOption)

button.addEventListener('click', () => {
  if (numOpt.innerText == "(HEX)") {
    changeHex();
  } else if (numOpt.innerText == '(RGB)') {
    changeRgb();
  } else if (numOpt.innerText == '(RGBA)') {
    changeRgba();
  }
})