// Typed.js effect for the word "Kumar" in the Home heading
// This code assumes Typed.js is already loaded and available

document.addEventListener("DOMContentLoaded", function() {
  // Only run if the Home heading exists
  var kumarSpan = document.querySelector('.home .content h2 span');
  if (kumarSpan) {
    // Show 'Raghav Kumar' together, no typewriter effect
    kumarSpan.innerHTML = 'Raghav Kumar';
  }
});
