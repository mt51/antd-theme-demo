var { PluginManager } = require("less");

function LessPluginFunctionRewrite() {
}

LessPluginFunctionRewrite.prototype.install = function(less, PluginManager, functions) {
  functions.add('fade', (color, percent = '100%') => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return `color-mod(${color.args[0].value} a(${percent.value}%))`;
      }
    } else {
      return `color-mod(${color.value} a(${percent.value}%))`
    }
  })

  functions.add('fadein', (color, percent) => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return `color-mod(${color.args[0].value} a(+${percent.value}%))`;
      } else if (color.name === 'var') {
        return `color-mod(var(${color.args[0].value}) a(+${percent.value}%))`
      }
    }
    return `color-mod(${color.value} a(+${percent.value}%))`
  })

  functions.add('fadeout', (color, percent) => {
    if (color.type === 'Call') {
      if ( color.value === 'var') {
        return `color-mod(${color.args[0].value} a(-${percent.value}%))`;
      } else if(color.name === 'var') {
        return `color-mod(var(${color.args[0].value}) a(-${percent.value}%))`;
      }
    } 
    return `color-mod(${color.value} a(-${percent.value}%))`
  })

  functions.add('darken', (color, percent) => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return `color-mod(${color.args[0].value} red(-${percent.value}%) blue(-${percent.value}%) green(-${percent.value}%))`;
      } else if (color.name === 'var') {
        return `color-mod(var(${color.args[0].value}) red(-${percent.value}%) blue(-${percent.value}%) green(-${percent.value}%))`;
      }
    }

    return `color-mod(${color.value} red(-${percent.value}%) blue(-${percent.value}%) green(-${percent.value}%))`
  })

  functions.add('lighten', (color, percent) => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return `color-mod(${color.args[0].value} whiteness(${percent.value}%))`
      } else if (color.name === 'var') {
        return `color-mod(var(${color.args[0].value}) whiteness(${percent.value}%))`
      }
    }
    return `color-mod(${color.value} whiteness(${percent.value}%))`
  })

  functions.add('tint', (color, percent) => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return `color-mod(${color.args[0].value} tint(${percent.value}%))`
      } else if (color.name === 'var') {
        return `color-mod(var(${color.args[0].value}) tint(${percent.value}%))`
      }
    }
    return `color-mod(${color.value} tint(${percent.value}%))`
  })

  functions.add('shade', (color, percent) => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return `color-mod(${color.args[0].value} shade(${percent.value}%))`
      } else if (color.name === 'var') {
        return `color-mod(var(${color.args[0].value}) shade(${percent.value}%))`;
      }
    }
    return `color-mod(${color.value} shade(${percent.value}%))`
  })

  functions.add('color', (color) => {
    if (color.type === 'Call') {
      if (color.value === 'var') {
        return color.args[0].value
      }
    }
    return color.value
  })
}

module.exports = LessPluginFunctionRewrite
