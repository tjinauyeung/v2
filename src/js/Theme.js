import classUtil from './classUtil';

class ThemeSwitch {
  constructor(config) {
    this.page = config.page || document.querySelector('html');
    this.storage = config.storage || window.localStorage;
    this.classUtil = config.classUtil || classUtil;
    this.switch = config.switchElement;
    this.sfx = config.sfxElement;
    this.themeClasses = config.themeClasses;
    this.themeType = config.themeType;
  }

  setup() {
    this.theme = this.getTheme();
    this.setTheme(this.theme);
    // TODO: move to seperate config
    this.sfx.volume = 0.1;
    this.switch.addEventListener('click', this.handleSwitch.bind(this));
  }

  handleSwitch() {
    this.toggleTheme();
    this.setTheme(this.theme);
    this.playSFX();
  }

  getTheme() {
    return this.storage.getItem(this.themeType) || this.themeClasses[0];
  }

  toggleTheme() {
    if (this.theme === this.themeClasses[0]) {
      return this.theme = this.themeClasses[1];
    }
    this.theme = this.themeClasses[0];
  }

  setTheme(theme) {
    this.classUtil.removeClasses(this.page, this.themeClasses);
    this.classUtil.setClass(this.page, theme);
    this.theme = theme;
    this.saveTheme(theme);
  }

  saveTheme(theme) {
    this.storage.setItem(this.themeType, theme);
  }

  playSFX() {
    this.sfx.currentTime = 0;
    this.sfx.play();
  }
}

export default ThemeSwitch;
