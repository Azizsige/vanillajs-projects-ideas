const button = document.getElementById('button');
const text = document.getElementById('text');
const body = document.getElementsByTagName('body')

changeBgClr();

function changeBgClr(){
  let heksa = Math.random().toString(16).slice(2, 8);

  let body = document.body.style.backgroundColor =  `#${heksa}`;
  text.innerHTML = `#${heksa}`;

  console.log(body);
};

button.addEventListener('click', changeBgClr)
