const tagComponent = function(tagName,textNode){
  return`<${tagName}>${textNode}</${tagName}>`
}

module.exports = tagComponent