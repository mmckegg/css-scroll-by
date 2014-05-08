var transition = require('css-transition')

module.exports = scrollBy

function scrollBy(offset, time){
  var style = window.getComputedStyle(document.documentElement)
  var scroll = getScroll()
  var width = window.innerWidth || document.documentElement.clientWidth || body.clientWidth

  var start = {position: 'relative'}
  var end = {}

  if (typeof offset === 'number'){
    offset = [0, offset]
  }

  var maxScrollXOffset = width - scroll[0] - document.body.scrollWidth

  offset[0] = Math.max(-scroll[0], Math.min(offset[0], maxScrollXOffset))
  offset[1] = Math.max(-scroll[1], offset[1])

  if (offset[0]){
    end['marginLeft'] = (parseInt(style.marginLeft) - offset[0]) + 'px'
  }

  if (offset[1]){
    end['marginTop'] = (parseInt(style.marginTop) - offset[1]) + 'px'
  }

  set(document.documentElement, start)
  transition(document.documentElement, end, time, function(){
    var scroll = getScroll()
    set(document.documentElement, {
      position: '',
      marginTop: '',
      marginLeft: ''
    })
    setScroll([scroll[0] + offset[0], scroll[1] + offset[1]])
  })
}


function setScroll(scroll){
  document.body.scrollLeft = scroll[0]
  document.documentElement.scrollLeft = scroll[0]
  document.body.scrollTop = scroll[1]
  document.documentElement.scrollTop = scroll[1]
}

function getScroll(){
  return [   
    document.documentElement.scrollLeft || document.body.scrollLeft,
    document.documentElement.scrollTop || document.body.scrollTop
  ]
}

function set(element, attributes){
  Object.keys(attributes).forEach(function(key){
    element.style[key] = attributes[key]
  })
}