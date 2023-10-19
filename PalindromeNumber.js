/**
 * @date 20.10.2023
 * @author dogukanma
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
      return false;
  } else if (x == 0) {
      return true;
  }
  let copy = x;
  let reverse = 0;
  while (copy > 0) {
      let remainder = copy % 10;
      reverse += remainder;
      copy = Math.floor(copy / 10);
      if (copy == 0) {
          return (reverse == x);
      } else {
          reverse *= 10;
      }
  }
};