const _ = require('lodash')


const template = _.template(`:root {
  <% _.each(props, function(prop, classname) { %><%= classname %>
  <% _.each(prop, (value, rule) => { %><% if (typeof value === 'object') { %>  &.<%= rule %> {<% _.each(value, (subvalue, subrule) => { %>
    <%= subrule %>: <%= subvalue %>;<% }) %>
  }<% } else { %>  <%= rule %>: <%= value %>;<% } %>
<% }) %><% }) %>}
`)

var findObjectByLabel = function(obj, label) {
  if(obj.label === label) { return obj; }
  for(var i in obj) {
      if(obj.hasOwnProperty(i)){
          var foundLabel = findObjectByLabel(obj[i], label);
          if(foundLabel) { return foundLabel; }
      }
  }
  return null;
};

const StyleDictionary = require('style-dictionary')

  .registerFormat({
    name: 'css/variables',
    formatter: function(dictionary, config) {
      const { allProperties } = dictionary

      const props = {}

      allProperties.map(prop => {

        const { attributes, value } = prop

        const { category, type, item, subitem, state, key } = attributes

        let classname

        if(state !== undefined) {
          classname = `--${type}-${item}-${subitem}-${state}: ${value};`
        } else if (subitem !== undefined && state == undefined) {
          classname = `--${type}-${item}-${subitem}: ${value};`
        } else {
          classname = `--${type}-${item}: ${value};`
        }

        /*if(type == 'font-size') {
          //Add 'px'
        }*/

        props[classname] = ''

      })

      return template({ props })
    }
  })
  .extend({
    source: ['**/*.json'],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: '',
        transforms: [
          'attribute/cti',  // setup attributes object
          'color/css',      // transform color values to hex
          'name/cti/kebab', // prevent name collisions
          'size/px'         // transform size values to px
        ],
        files: [
          {
            destination: 'variables.css',
            format: 'css/variables',
          }
        ]
      }
    }
  })

// run Style Dictionary
StyleDictionary.buildAllPlatforms()