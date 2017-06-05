import Theme from './Theme';

const pageElement = document.querySelector('html');
const colorSwitchElement = document.querySelector('#theme-switch');
const typographySwitchElement = document.querySelector('#typography-switch');

const colorConfig = {
  pageElement,
  switchElement: colorSwitchElement,
  themeClasses: ['default', 'theme-inverted'],
  themeType: 'colors'
};

const typographyConfig = {
  pageElement,
  switchElement: typographySwitchElement,
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
