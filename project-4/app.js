index = 1;

showSlide(index);

function plusSlide(n){
  showSlide(index = index + n);
}

function currentSlide(n){
  showSlide(index = n);
}

function showSlide(n){
  let slides = document.getElementsByClassName('slide');
  let dots = document.getElementsByClassName('dot');

  let i;

  if(n < 1){
    index = slides.length;
  }

  if(n > slides.length){
    index = 1;
  }

  for(i = 0; i<slides.length; i++){
    slides[i].style.display = "none"
  }

  for(i = 0; i<dots.length; i++){
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[index-1].style.display = "block";
  dots[index-1].className += " active";

}