/* eslint-env node */
const EmberAddon = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    snippetSearchPaths: ['tests/dummy']
  })

  return app.toTree()
}
