(function(window, document) {
  'use strict';

  function initThemeSwitch() {
    var themeSwitch = document.querySelector('#theme-switch'),
        page = document.querySelector('html'),
        sfx = document.querySelector('#sfx-switch');

    function handleSwitch() {
      page.classList.toggle('theme-inverted');
      sfx.currentTime = 0;
      sfx.play();
    }

    sfx.volume = 0.5;
    themeSwitch.addEventListener('click', handleSwitch);
  }

  function initTypographySwitch() {
    var typographySwitch = document.querySelector('#typography-switch'),
        page = document.querySelector('html'),
        activeIndex = 0,

        TYPOGRAPHY_CLASSES = [
          'sans-serif',
          'serif',
        ];

    function handleTypography() {
      activeIndex = isLast() ? 0 : activeIndex + 1;
      return setTypography(TYPOGRAPHY_CLASSES[activeIndex]);
    }

    function setTypography(className) {
      removeClasses(page, TYPOGRAPHY_CLASSES);
      setClass(page, className);
    }

    function isLast() {
      return activeIndex >= TYPOGRAPHY_CLASSES.length - 1;
    }

    function removeClasses(el, classes) {
      return classes.forEach(c => el.classList.remove(c));
    }

    function setClass(el, className) {
      return el.classList.add(className);
    }

    typographySwitch.addEventListener('click', handleTypography);
  }

  function bootstrap(event) {
    if (event.target.readyState === 'interactive') {
      initThemeSwitch();
      initTypographySwitch();
    }
  };

  document.addEventListener('readystatechange', bootstrap, false);

})(window, document);
