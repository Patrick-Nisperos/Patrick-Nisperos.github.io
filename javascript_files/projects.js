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

/* Code for autoplaying project videos */
const video = document.getElementById('project_video');

function playVideoWhenVisible() {
  // Get the video element's position and dimensions on the page
  const videoPosition = video.getBoundingClientRect();
  const videoHeight = videoPosition.height;
  const videoWidth = videoPosition.width;
  
  // Calculate the viewport dimensions
  const viewportHeight = window.innerHeight;
  
  // Calculate the distance of the top and bottom of the video from the top of the viewport
  const videoTopFromViewportTop = videoPosition.top;
  const videoBottomFromViewportTop = videoTopFromViewportTop + videoHeight;
  
  // Calculate the height of the video that is visible on the screen
  const visibleVideoHeight = Math.min(videoBottomFromViewportTop, viewportHeight) - Math.max(videoTopFromViewportTop, 0);
  
  // Check if at least 50% of the video is visible on the screen
  if (visibleVideoHeight >= videoHeight / 2) {
    // If at least 50% of the video is visible, play it
    video.play();
  } else {
    // Otherwise, pause the video
    video.pause();
  }
}

// Add an event listener to detect when the user scrolls
window.addEventListener('scroll', playVideoWhenVisible);




//const video_speedup = document.getElementById('project_video');
//video_speedup.autoplay = true; // enable autoplay
//video_speedup.playbackRate = 2.0; // set the playback rate to 2x


/* Code to create a "typewriter" effect */

// // Set the delay between each character being typed (in milliseconds)
// const delay = 100;

// // Get the element where the text will be displayed
// const typewriter = document.getElementById("typewriter");

// // Start the typewriter effect
// const text = document.getElementById('typewriter')
// let i = 0;
// function typeWriter() {
//   if (i < text.length) {
//     typewriter.innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter, delay);
//   }
// }

// // Call the function to start the typewriter effect
// typeWriter();

const text = document.querySelector('#typewriter_text');
const textValue = text.innerHTML;
text.innerHTML = '';

let i = 0;
function typeWriter() {
  if (i < textValue.length) {
    text.innerHTML += textValue.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}
typeWriter();







