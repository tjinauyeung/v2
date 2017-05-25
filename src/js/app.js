import Theme from './Theme';

const colorConfig = {
  sfxElement: document.querySelector('#sfx-switch'),
  switchElement: document.querySelector('#theme-switch'),
  themeClasses: ['default', 'theme-inverted'],
  themeType: 'colors'
};

const typographyConfig = {
  sfxElement: document.querySelector('#sfx-switch'),
  switchElement: document.querySelector('#typography-switch'),
  themeClasses: ['sans-serif', 'serif'],
  themeType: 'typography'
};

const App = () => {
  const colorTheme = new Theme(colorConfig);
  const typographyTheme = new Theme(typographyConfig);

  return {
    init() {
      colorTheme.setup();
      typographyTheme.setup();
    }
  };
};

const app = App();
app.init();

