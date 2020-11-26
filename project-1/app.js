const button = document.getElementById('button');
const text = document.getElementById('text');
const btnChange = document.getElementById('changeIt');
const numOpt = document.getElementById('numOpt');

let getRandomVal = Math.floor(Math.random() * 3);
let select = document.getElementById('select');
select.selectedIndex = getRandomVal;

numOpt.innerHTML = '';

getRandomColor();

function getRandomColor() {
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

  }
}

btnChange.addEventListener('click', () => {numOpt.innerHTML = `${select.value}`})

button.addEventListener('click', () => {
  if (numOpt.innerText === select.value) {
    if (numOpt.innerText == "(HEX)") return getColor(numOpt.innerHTML);
    if (numOpt.innerText == '(RGB)') return getColor(numOpt.innerHTML);
    if (numOpt.innerText == '(RGBA)') return getColor(numOpt.innerHTML);
  }

  return alert('Your Choice Does Not Match Or You Have Not Chosen Your Choice, Please Try Again')
})