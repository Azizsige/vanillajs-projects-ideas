const imgs = document.querySelectorAll('img');

let index = 0;

// setInterval(slide, 1000)

function slide() {
  let img = imgs[index];

  if (index === imgs.length) {
    index = 0;
  } else {
    imgs[index].classList.toggle('left');
    index++;
  }
  console.log(img)
}

// let index = 0;

// setInterval(() => {
//   if (index === 10) {
//     index = 0;
//   } else {
//     index++
//   }

//   console.log(index);
// }, 1000)