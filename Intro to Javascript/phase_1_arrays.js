Array.prototype.uniq = function() {
  let unique = []
  for (let i = 0; i < this.length; i++) {
    let ele = this[i]
    if (!unique.includes(ele)) {
      unique.push(ele)
    }
  }
  return unique
}

// console.log([1,2,2,3,4,3,2].uniq())

Array.prototype.twoSum = function() {
  final = []
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      num1 = this[i]
      num2 = this[j]
      if (num1 + num2 === 0) {
        final.push([i, j])
      }
    }
  }
  return final
}

// console.log([1,-1,2,3,-2,4].twoSum())

Array.prototype.transpose = funtion() {
  let final = []

  for (let i = 0; i < this[0].length; i++) {
    
  }
}