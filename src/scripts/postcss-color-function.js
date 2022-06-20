const postcss = require('postcss');
const postcssColorMod = require('postcss-color-mod-function');
const autoprefixer = require('autoprefixer');
const less = require('less')


const cssContent = `
.brand-faded {
  color: color-mod(rgba(0,0,0,0.5) alpha(1%));
  background: color-mod(rgba(255, 255, 255, 0.03) alpha(+1%));
  border-color-top: color-mod(#bfbfbf red(-10%)  blue(-10%)  green(-10%));
  border-color-left: color-mod(#1890ff whiteness(+35%));
  border-color-right: color-mod(#007fff tint(90%));
  border-color-bottom: color-mod(#007fff shade(90%));
}`


const lessCssContent = `
.brand-faded {
  color: fade(rgba(0,0,0,0.5), 1%);
  background: fadein(rgba(255, 255, 255, 0.03), 1%);
  border-color-top: darken(#bfbfbf, 10%);
  border-color-left: lighten(#1890ff, 35%);
  border-color-right: tint(#007fff, 90%);
  border-color-bottom: shade(#007fff, 90%);
}`

less.render(lessCssContent).then(res => {
  console.log('less output:::', res.css);
}).catch(e => {
  console.log(e);
})


postcss([postcssColorMod, autoprefixer]).process(cssContent).then(res => {
  console.log('postcss output:::',res.css);
}).catch(e => {
  console.log(e)
})