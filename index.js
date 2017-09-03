function getFirstSelector(selector) {
  var result = document.querySelector(selector)
  return result
}

function nestedTarget() {
var result = document.querySelector("#nested .target")
return result
}

function increaseRankBy(n) {
  var b = parseInt(n)
  var a = []
a = document.getElementById('app').querySelectorAll("ul.ranked-list")
  for (var i = 0; i < a.length; i++) {
    a[i].innerHTML = (i + 3).toString()
  }
}

function deepestChild(){
  var a = document.querySelector('#grand-node div div div div')
  return a
}
