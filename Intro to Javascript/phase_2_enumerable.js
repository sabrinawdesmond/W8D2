Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    let el = this[i]
    callback(el)
  }
}

Array.prototype.myMap = function(callback) {
  let final = []
  this.myEach(function(el) {
    final.push(callback(el))
  })
  return final
}

let arr = [1, 2, 3, 4]
function twice(num){
  return num * num
}
// console.log(arr.myEach(twice))

// Array.prototype.myMap = function(callback) {
//   let final = []
//   this.myEach(function() {
//     final.push(callback())
//   })
//   return final
// }
console.log(arr.myMap(twice))
