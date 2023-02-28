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
  let final = [];
  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      num1 = this[i];
      num2 = this[j];
      if (num1 + num2 === 0) {
        final.push([i, j]);
      }
    }
  }
  return final;
}

// console.log([1,-1,2,3,-2,4].twoSum())

Array.prototype.transpose = function() {
  let final = [];
  for (let i = 0; i < this[0].length; i++) {
    let temp = []
    debugger;
    for (let j = 0; j < this.length; j++) {
      debugger;
      temp.push(this[j][i]);
    }
    final.push(temp)
  }
  return final;
}

console.log([
  [1, 2, 3],
  [4, 5, 6]
].transpose())

// final[i].push(j)
// [1, 2, 3]
// [4, 5, 6]

// [0][0] = 1
// [1][0] = 4

// [1, 4]
// [2, 5]
// [3, 6]
