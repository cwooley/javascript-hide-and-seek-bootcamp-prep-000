function getFirstSelector(selector){
 return  document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target')
  // const nest = document.getElementById('nested')
  // var pointer
  // for (var i = 0; i < nest.length i++){
  //   if (nest)
  // }
  // Works but is really lame...
  //return nest.querySelector('div div div div.target')
}

function increaseRankBy(n){
  var elements = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (var i = 0; i < elements.length; i++){
    var newHTML = parseInt(elements[i].innerHTML)  + n
    elements[i].innerHTML = newHTML
  }
}

function deepestChild(){
  var grandNode = document.getElementById('grand-node').querySelectorAll('div')
  var pointer

  for(var i = 0; i < grandNode.length; i++){
    pointer = grandNode[i]
    if (grandNode[i+1]){
      pointer = grandNode[i+1]
    }
  }
  return pointer
}