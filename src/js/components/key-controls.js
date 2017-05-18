(function(document, window) {
  'use strict';

  const body = document.querySelector('body');
  const KEY_J = document.querySelector('#key-j');
  const KEY_K = document.querySelector('#key-k');
  const KEY_L = document.querySelector('#key-l');

  const KEY_CONTROL_ELEMENTS = {
    j: KEY_J,
    k: KEY_K,
    l: KEY_L
  };

  function handleKeydown(event) {
    const key = event.key;

    if (isAllowed(key)) {
      KEY_CONTROL_ELEMENTS[key].classList.add('is-pressed');
    }
  }

  function handleKeyup(event) {
    const key = event.key;

    if (isAllowed(key)) {
      KEY_CONTROL_ELEMENTS[key].classList.remove('is-pressed');
    }
  }

  function isAllowed(key) {
    return KEY_CONTROL_ELEMENTS.hasOwnProperty(key);
  }

  body.addEventListener('keyup', handleKeyup);
  body.addEventListener('keydown', handleKeydown);

})(document, window);