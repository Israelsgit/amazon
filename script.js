// Get references to the DOM elements using their IDs
let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let tree = document.getElementById('tree');

// Add an event listener for the 'scroll' event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  let value = window.scrollY;

  // Update the position of the 'tree' element based on the scroll position
  tree.style.top = value * 2.5 + 'px';

  // Update the position and margin of the 'text' element based on the scroll position
  text.style.marginTop = value * 2.5 + 'px';

  // Update the position of the 'leaf' element based on the scroll position
  leaf.style.top = value * -1.5 + 'px';
  leaf.style.left = value * 1.5 + 'px';

  // Update the position of the 'hill5' and 'hill4' elements based on the scroll position
  hill5.style.left = value * 1.5 + 'px';
  hill4.style.left = value * -1.5 + 'px';

  // Update the position of the 'hill1' element based on the scroll position
  hill1.style.top = value * 2 + 'px';
});

// Add an event listener for the 'scroll' event to toggle the 'scrolled' class on the 'header' element
window.addEventListener("scroll", function () {
  // Get the 'header' element
  const header = document.getElementById("header");

  // Check if the scroll position is greater than 0
  if (window.scrollY > 0) {
    // Add the 'scrolled' class to the 'header' element
    header.classList.add("scrolled");
  } else {
    // Remove the 'scrolled' class from the 'header' element
    header.classList.remove("scrolled");
  }
});
