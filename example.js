var scrollBy = require('./')
var controls = document.createElement('div')
controls.style.position = 'fixed'
controls.style.right = '10px'
controls.style.top = '10px'
controls.innerHTML = '<button value="100">+100</button><button value="-100">-100</button>'
controls.onclick = function(event){
  var offset = parseInt(event.target.value)
  scrollBy(offset, 400)
}
document.body.appendChild(controls)

for (var i=0;i<200;i++){
  var element = document.createElement('div')
  element.textContent = i
  document.body.appendChild(element)
}