
function toggleMenu() {
    const mobileLinks = document.querySelector('.mobile-links');
    mobileLinks.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
    const openModalButtons = document.querySelectorAll('.open-modal');
  
    openModalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
      });
    });
  
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modal = this.closest('.modal');
        const video = modal.querySelector('video');
        
        if (video) {
          video.pause();      // Pause the video
          video.currentTime = 0; // Reset the video's current time to the start
        }
        
        modal.style.display = 'none';
      });
    });
  
    window.addEventListener('click', function(event) {
      const modals = document.querySelectorAll('.modal');
      modals.forEach(modal => {
        if (event.target == modal) {
          const video = modal.querySelector('video');
          
          if (video) {
            video.pause();      // Pause the video
            video.currentTime = 0; // Reset the video's current time to the start
          }
          
          modal.style.display = 'none';
        }
      });
    });
  });
  
  