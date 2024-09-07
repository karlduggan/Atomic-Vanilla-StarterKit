document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const headerText = document.querySelectorAll('#navLinks a');
  const logo = document.getElementById('logo');
  const mobileMenuButton = document.getElementById('mobileMenuButton');
  const mobileMenu = document.getElementById('mobileMenu');
  let mobileMenuOpen = false;

  // Handle scroll event to toggle header background, logo, and text color
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('bg-white');
      headerText.forEach((element) => {
        element.classList.add('text-black');
      });
      logo.src = '../assets/images/Logo-lightmode.svg';
    } else {
      header.classList.remove('bg-white');
      headerText.forEach((element) => {
        element.classList.remove('text-black');
      });
      logo.src = '../assets/images/Logo-darkmode.svg';
    }
  });

  // Toggle mobile menu
  mobileMenuButton.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      mobileMenu.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    } else {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }
  });
});
