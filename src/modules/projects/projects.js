(function(window, document) {
  'use strict';
  const projects = document.querySelectorAll('.project');
  const projectPreview = document.querySelector('.project__preview');

  function handlePreview(event) {
    const projectName = event.target.dataset.projectName;
    projectPreview.setAttribute('data-active-project', projectName);
  }

  projects.forEach(project => project.addEventListener('click', handlePreview));
})(window, document);
