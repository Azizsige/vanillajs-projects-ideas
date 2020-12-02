const wordsEl = document.getElementById('words');
const lettersEl = document.getElementById('letters');

const input = document.querySelector('input');
const button = document.querySelector('button');

function getRemaining(){
  const textValue = input.value;
  const letters = textValue.length;

  lettersEl.textContent = `${letters}`;

  const words = textValue.split(" ");

  const wordsCount = words[words.length - 1] === "" ? words.length - 1 : words.length;

  wordsEl.textContent = `${wordsCount}`
}

input.addEventListener('input', getRemaining);

button.addEventListener('click', () => {
  if(input.value == ''){
    alert('Input is empty!');
  }

  wordsEl.textContent = '0'
  lettersEl.textContent = '0';
  input.value = ''
})
