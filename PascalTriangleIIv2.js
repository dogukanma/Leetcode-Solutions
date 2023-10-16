/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var getRow = function(rowIndex){
  let arr = [1];
  if(rowIndex == 0){
    return arr;
  }
  for(let i = 1; i < rowIndex; i++){
      arr[i] = choose(rowIndex, i);
  }
  arr.push(1);
  return arr;
}

function factorial(n){
  let result = 1;
  for(let i = 1; i <= n; i++){
      result *= i;
  }
  return result;
}

function choose(n, r){
  let result = factorial(n) / (factorial(r) * factorial((n - r)));
  return result;
}

// console.log(getRow(5));