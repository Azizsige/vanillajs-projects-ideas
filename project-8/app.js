const timeH = document.querySelector('h1');
let timeSecond = 10;

displayTime(timeSecond)

const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);

  if(timeSecond <= 0 || timeSecond < 1){
    timeH.innerHTML = 'Time Out!';
    clearInterval(countDown);
  }
},1000)

function displayTime(timeSecond){
  const min = Math.floor(timeSecond / 60);
  const sec = Math.floor(timeSecond % 60);

  timeH.innerHTML = `${min<10 ? '0' : ''}${min}:${sec<10 ? '0': ''}${sec}`;
}