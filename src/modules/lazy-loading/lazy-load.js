(function initLazyLoadImages() {
  'use strict';
  let lazyNodelist = document.querySelectorAll('.lazy-load');
  let lazyArray = convertToArray(lazyNodelist);

  function convertToArray(nodelist) {
    return [].slice.call(nodelist);
  }

  function lazyLoad() {
    replaceAttributesIfInViewport();
    cleanLazy();
  }

  function replaceAttributesIfInViewport() {
    return lazyArray.forEach(image => {
      if (isInViewportAndHasSrcAttribute(image)) {
        replaceSrcAttributes(image);
        reveal(image, 500);
      }
    });
  }

  function replaceSrcAttributes(el) {
    el.src = el.getAttribute('data-src');
    el.removeAttribute('data-src');
    cleanLazy();
  }

  function reveal(el, delay) {
    return setTimeout(() => (el.style.opacity = 1), delay);
  }

  function isInViewportAndHasSrcAttribute(el) {
    return isInViewport(el) && el.hasAttribute('data-src');
  }

  function cleanLazy() {
    lazyArray = lazyArray.filter(image => image.hasAttribute('data-src'));
  }

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();

    return (
      rect.bottom >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  window.addEventListener('scroll', lazyLoad);
})();
