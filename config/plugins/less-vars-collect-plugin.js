
function LessPluginVarsCollect() {
}

function Visitor(less) {
  this._less = less;
}

Visitor.prototype.run = function(root, imp) {
  let variables = root.variables()
  if (variables) {
    const result = {};
    Object.keys(variables).forEach(item => {
      const valueNode = variables[item].value;
      if (valueNode && typeof valueNode === 'string') {
        result[item] = valueNode;
      }
    })

    console.log(result);
  }
}

LessPluginVarsCollect.prototype.install = function(less, pluginManager, functions) {
  pluginManager.addVisitor(new Visitor(less));
}

module.exports = LessPluginVarsCollect
