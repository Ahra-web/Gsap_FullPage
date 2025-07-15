let currentIndex = 0;
const panels = document.querySelectorAll('.panel');
const maxIndex = panels.length - 1;
let isScrolling = false;

function scrollToSection(index) {
  isScrolling = true;
  gsap.to(window, {
    duration: 1,
    scrollTo: { y: panels[index], autoKill: false },
    onComplete: () => {
      isScrolling = false;
    }
  });
}

function handleWheel(event) {
  if (isScrolling) return;

  if (event.deltaY > 0 && currentIndex < maxIndex) {
    currentIndex++;
    scrollToSection(currentIndex);
  } else if (event.deltaY < 0 && currentIndex > 0) {
    currentIndex--;
    scrollToSection(currentIndex);
  }
}

window.addEventListener('wheel', handleWheel, { passive: false });

window.scrollTo(0, 0);