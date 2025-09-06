// Simple script to remove spinner after 2 seconds
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const spinner = document.querySelector('.spinner-border');
    if (spinner) spinner.classList.add('animate__fadeOut');
    setTimeout(() => {
      if (spinner) spinner.style.display = 'none';
    }, 800);
  }, 2000);
});
