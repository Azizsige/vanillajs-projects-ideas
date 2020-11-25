const button = document.getElementById('button');
const text = document.getElementById('text');
const btnChange = document.getElementById('changeIt');
const numOpt = document.getElementById('numOpt');

numOpt.innerHTML = '';

getRandom();

function getRandom() {
  let getRandomVal = Math.floor(Math.random() * 3);
  let select = document.getElementById('select');
  select.selectedIndex = getRandomVal;

  if(select.value == '(HEX)') {
    changeHex();
  } else if (select.value == '(RGB)'){
    changeRgb();
  } else if(select.value == '(RGBA)'){
    changeRgba();
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
  let selectOpt = document.getElementById('select').selectedIndex;
  let options = document.getElementsByTagName('option')[selectOpt].value;

  if (numOpt.innerText === options) {
    if (numOpt.innerText == "(HEX)") return changeHex();
    if (numOpt.innerText == '(RGB)') return changeRgb();
    if (numOpt.innerText == '(RGBA)') return changeRgba();
  } else {
    alert('Your Choice Does Not Match Or You Have Not Chosen Your Choice, Please Try Again')
  }
})