const articleImages = document.querySelectorAll('.article-image');

window.addEventListener('scroll', () => {
  articleImages.forEach((image) => {
    if (isElementInViewport(image)) {
      image.classList.add('animate');
    }
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


