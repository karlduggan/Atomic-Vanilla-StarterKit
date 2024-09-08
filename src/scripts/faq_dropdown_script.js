document.addEventListener("DOMContentLoaded", function() {
  const faqButtons = document.querySelectorAll('button[aria-expanded]');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      const answer = button.nextElementSibling;

      // Collapse all other answers and remove classes
      faqButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.classList.remove('bg-highlight', 'text-white');
          otherButton.nextElementSibling.style.display = 'none';
        }
      });

      // Toggle visibility for the clicked button
      if (expanded) {
        answer.style.display = 'none'; // Hide the answer
        button.classList.remove('bg-highlight', 'text-white'); // Remove classes
      } else {
        answer.style.display = 'block'; // Show the answer
        button.classList.add('bg-highlight', 'text-white'); // Add classes
      }

      // Toggle button state
      button.setAttribute('aria-expanded', !expanded);
    });
  });
});
