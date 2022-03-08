/* Javascript for the projects */

/* Code for sliding through images automatically by timer */
var slideIndex = 0;
showSlidesAuto();
function showSlidesAuto() {
  let i;
  let slides = document.getElementsByClassName("projects_slideshow");
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if(slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlidesAuto, 10000); // Change image every 10000 milisecs(10 secs)
}

/* Code for clicking through images by arrow button */
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("projects_slideshow");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}