document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('#table-header > div');
    const drawerButtons = document.querySelectorAll('#drawers > button');
    const drawerContents = document.querySelectorAll('#drawers > div');
    const content = document.getElementById('content');
  
    let selectedColumn = null;
    let selectedDrawer = null;
  
    // Handle desktop header clicks
    headers.forEach((header, index) => {
      header.addEventListener('click', () => {
        selectedColumn = (selectedColumn === index) ? null : index;
        updateDesktopContent();
      });
    });
  
    // Handle mobile drawer button clicks
    drawerButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        selectedDrawer = (selectedDrawer === index) ? null : index;
        updateMobileDrawers();
      });
    });
  
    // Function to update content for desktop view
    function updateDesktopContent() {
      headers.forEach((el, i) => {
        el.className = `p-2 cursor-pointer text-white text-center ${
          i === selectedColumn ? 'bg-blue-500' : 'bg-secondary'
        }`;
      });
  
      content.innerHTML = selectedColumn !== null ? drawerContents[selectedColumn].innerHTML : '';
      content.classList.toggle('hidden', selectedColumn === null);
    }
  
    // Function to update drawers for mobile view
    function updateMobileDrawers() {
      drawerButtons.forEach((btn, i) => {
        btn.className = `w-full p-2 text-left border-b border-gray-700 ${
          i === selectedDrawer ? 'bg-blue-500 text-white' : 'bg-secondary'
        }`;
      });
  
      drawerContents.forEach((div, i) => {
        div.classList.toggle('hidden', selectedDrawer !== i);
      });
    }
  });
  