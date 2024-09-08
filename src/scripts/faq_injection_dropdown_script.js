document.addEventListener("DOMContentLoaded", function() {
    const faqButtons = document.querySelectorAll('button[aria-expanded]');
  
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        const answer = button.nextElementSibling;
  
        // Toggle visibility
        if (expanded) {
          answer.style.display = 'none'; // Hide the answer
        } else {
          answer.style.display = 'block'; // Show the answer
        }
  
        // Toggle button state
        button.setAttribute('aria-expanded', !expanded);
      });
    });
  });
  
  