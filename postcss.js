const fs = require("fs");
const postcss = require("postcss");
const postcssImports = require("import-postcss");
const autoprefixer = require('autoprefixer');

const css = fs.readFileSync("src/css/main.css", "utf8");
 
postcss([autoprefixer])
  .use(postcssImports())
  .process(css, {
    from: "src/css/main.css"
  })
  .then(result => fs.writeFile('dist/main.css', result.css, (err) => {
    console.log(result.css);
    if (err) {
      return console.log(err);
    } else {
      console.log('Success');
    }
  }));