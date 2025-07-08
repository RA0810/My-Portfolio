// Typed.js effect for the word "Kumar" in the Home heading
// This code assumes Typed.js is already loaded and available

document.addEventListener("DOMContentLoaded", function() {
  // Only run if the Home heading exists
  var kumarSpan = document.querySelector('.home .content h2 span');
  if (kumarSpan) {
    // Always show 'Raghav' before the typewriter effect
    var parent = kumarSpan.parentNode;
    if (parent) {
      parent.childNodes[1].textContent = ' Raghav ';
    }
    var typeSpan = document.createElement('span');
    typeSpan.className = 'typing-kumar';
    kumarSpan.innerHTML = '';
    kumarSpan.appendChild(typeSpan);
    new Typed('.typing-kumar', {
      strings: ["Kumar"],
      typeSpeed: 100,
      showCursor: false,
      loop: true,
      backSpeed: 50,
      backDelay: 1000
    });
  }
});
