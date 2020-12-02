const button = document.getElementById('button');
const text = document.getElementById('text');
const btnChange = document.getElementById('changeIt');
const numOpt = document.getElementById('numOpt');

numOpt.innerHTML = '';

getRandomColor();

function getRandomColor() {
  let getRandomVal = Math.floor(Math.random() * 3);
  let select = document.getElementById('select');
  select.selectedIndex = getRandomVal;

  if (select.value == '(HEX)') {
    getColor(select.value);
  } else if (select.value == '(RGB)') {
    getColor(select.value);
  } else if (select.value == '(RGBA)') {
    getColor(select.value);
  }

  let options = document.getElementsByTagName('option')[getRandomVal].value;


  numOpt.innerHTML = `${options}`;

  console.log(options)
}

function getOption() {
  let selectOpt = document.getElementById('select').selectedIndex;
  let options = document.getElementsByTagName('option')[selectOpt].value;

  numOpt.innerHTML = `${options}`;

  console.log(options)
}

function getColor(color) {
  let hex = Math.random().toString(16).slice(2, 8);
  let red = Math.floor(Math.random() * 225);
  let green = Math.floor(Math.random() * 225);
  let blue = Math.floor(Math.random() * 225);
  let alpha = Math.random().toFixed(1);

  if (color == '(HEX)') {
    let body = document.body.style.backgroundColor = `#${hex}`;
    text.innerHTML = `#${hex}`;

    console.log(body);
  } else if (color == '(RGB)') {
    let body = document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    text.innerHTML = body;

    console.log(body)
  } else if (color == '(RGBA)') {
    let body = document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

    text.innerHTML = body;

    console.log(body)
  }
}

let getBtn = btnChange.addEventListener('click', getOption)

button.addEventListener('click', () => {
  let selectOpt = document.getElementById('select').selectedIndex;
  let options = document.getElementsByTagName('option')[selectOpt].value;

  if (numOpt.innerText === options) {
    if (numOpt.innerText == "(HEX)") return getColor(numOpt.innerText);
    if (numOpt.innerText == '(RGB)') return getColor(numOpt.innerText);
    if (numOpt.innerText == '(RGBA)') return getColor(numOpt.innerText);
  } else {
    alert('Your Choice Does Not Match Or You Have Not Chosen Your Choice, Please Try Again')
  }
})