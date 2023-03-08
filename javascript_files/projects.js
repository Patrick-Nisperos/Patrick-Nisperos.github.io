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

/* Code for autoplaying project videos and creating a typewriter effect */
// Get a list of all elements with the "typewriter_text" class
const textList = document.querySelectorAll('.typewriter_text');

function playVideoWhenVisible(video) {
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

function typeWriter(text) {
  const textValue = text.innerHTML;
  let i = 0;
  let isTriggered = false; // Add a Boolean variable to check if the typewriter effect has been triggered for this element

  function write() {
    if (i < textValue.length) {
      text.innerHTML = textValue.substr(0, i+1);
      i++;
      setTimeout(write, 50); // Set the delay between each character being typed (in milliseconds)
    } else {
      // Update the isTriggered variable once the typewriter effect has finished
      isTriggered = true;
      // Remove the event listener once the typewriter effect has finished
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Check if the element is visible on the screen and the typewriter effect hasn't been triggered yet
  if (text.getBoundingClientRect().top < window.innerHeight && !isTriggered) {
    write();
  }
}


function handleScroll() {
  // Iterate over all project videos and check if they are visible
  const videoList = document.querySelectorAll('.project_video');
  videoList.forEach(function(video) {
    playVideoWhenVisible(video);
  });

  // Iterate over all elements with the "typewriter_text" class and apply the typewriter effect
  textList.forEach(function(text) {
    typeWriter(text);
  });
}

// Call handleScroll once to play any visible videos
handleScroll();

// Add an event listener to detect when the user scrolls
window.addEventListener('scroll', handleScroll);



// // Call the function to start the typewriter effect
// typeWriter();

/* Code to create a "typewriter" effect */
// const text = document.querySelector('#typewriter_text'); // Get the element where the text will be displayed
// const text_value = text.innerHTML;
// text.innerHTML = '';

// let i = 0;
// function typeWriter() {
//   if (i < text_value.length) {
//     text.innerHTML += text_value.charAt(i);
//     i++;
//     setTimeout(typeWriter, 50); // Set the delay between each character being typed (in milliseconds)
//   }
// }
// typeWriter();








