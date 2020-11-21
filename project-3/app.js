const show = document.getElementById('show');
const modal = document.querySelector('.modal');
const close = document.getElementById('close');

show.addEventListener('click', () => {
  modal.classList.add('open')
})

close.addEventListener('click', () => {
  modal.classList.remove('open')
} )

