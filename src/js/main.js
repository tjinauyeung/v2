(function(window, document) {
  'use strict';

  function initThemeSwitch() {
    const themeSwitch = document.querySelector('#theme-switch');
    const page = document.querySelector('html');
    const sfx = document.querySelector('#sfx-switch');

    function handleSwitch(event) {
      page.classList.toggle('theme-inverted');
      sfx.currentTime = 0;
      sfx.play();
    }

    sfx.volume = 0.5;

    themeSwitch.addEventListener('click', handleSwitch);
  }

  function bootstrap(event) {
    if (event.target.readyState === 'interactive') {
      initThemeSwitch();
    }
  };

  document.addEventListener('readystatechange', bootstrap, false);

})(window, document);