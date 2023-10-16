/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let arr = [1, 1];
  let oldArr = [1, 1];
  if (rowIndex == 0) {
    return [1];
  } else if (rowIndex == 1) {
    return [1, 1];
  }
  for (let i = 2; i <= rowIndex; i++) {
    arr = [1];
    // let count = 1;
    for (let j = 1; j < rowIndex; j++) {
      // console.log("loop works for the " + count + ". time");
      // console.log("arr = " + arr);
      arr[j] = oldArr[j - 1] + oldArr[j];
      // count++;
    }
    // console.log("This is arr after the loop: " + arr);
    arr[0] = 1;
    arr[i] = 1;
    // console.log("After adjusting first and last element: " + arr);
    if (i == rowIndex) {
      return arr;
    } else {
      oldArr = arr;
      // console.log("oldArr = " + oldArr);
    }
  }
};
// console.log(getRow(13));