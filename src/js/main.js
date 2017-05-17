(function(window, document) {
  const projects = document.querySelectorAll('.project');
  const projectPreview = document.querySelector('.project__preview');
  let currentActiveProject;

  projects.forEach(project => project.addEventListener('click', () => {
      const projectName = project.dataset.projectName;
      projectPreview.setAttribute('data-active-project', projectName);
    })
  );

})(window, document);