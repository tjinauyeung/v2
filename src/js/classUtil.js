const classUtil = {
  removeClasses(el, classes) {
    return classes.forEach(c => el.classList.remove(c));
  },

  setClass(el, className) {
    return el.classList.add(className);
  }
};

export default classUtil;
