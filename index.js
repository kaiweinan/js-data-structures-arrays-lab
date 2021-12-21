// Write your solution here!
var kittens = ["Milo", "Otis", "Garfield"]

function Append(name){
    kittens.push(name)
    return kittens
  }
  function Prepend(name){
    kittens.unshift(name)
    return kittens
  }
  function RemoveLast(){
    kittens.pop()
  }
  function RemoveFirst(){
    kittens.shift()
  }
  function append(name){
    return [...kittens,name]
  
  }
  function prepend(name){
    return [name,...kittens]
  }  
  function removeLast(){
    var new_kittens  = kittens.slice(0,-1)
    return new_kittens
  }
  function removeFirst(){
    var new_kittens = kittens.slice(1)
    return new_kittens
  }