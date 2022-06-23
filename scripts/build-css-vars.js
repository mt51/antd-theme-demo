const path = require('path');
const fs = require('fs');
const { fileURLToPath } = require('url');
const dark = require('../src/themes/dark');
const light = require('../src/themes/light');
const formatToCSS = require('./jsToCssVars.js');


const destination = path.join(__dirname, '../src/themes');

const generateCSSVars = scoped => {
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(light, scoped));
};

const generateDarkCSSVars = scoped => {
    fs.writeFileSync(path.join(destination, 'dark-vars.css'), formatToCSS(dark, scoped));
};

generateCSSVars();
generateDarkCSSVars('[data-theme="dark"]');
