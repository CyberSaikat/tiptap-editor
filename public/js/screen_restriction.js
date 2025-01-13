function checkScreenSize() {
    const blockScreen = document.getElementById('block-screen');
    if (window.innerWidth < 700) {
      blockScreen.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      blockScreen.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }
  }

  // Initial check on page load
  checkScreenSize();

  // Recheck on window resize
  window.addEventListener('resize', checkScreenSize)
