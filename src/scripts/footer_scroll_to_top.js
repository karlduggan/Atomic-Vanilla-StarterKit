// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  }
  
  // Add event listener to the scroll-to-top button
  document.getElementById('scroll-to-top').addEventListener('click', scrollToTop);
  