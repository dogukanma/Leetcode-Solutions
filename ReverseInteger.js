/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x == 0) {
    return x;
  }
  let sign;
  if (x < 0) {
    sign = -1;
    x *= -1;
  } else {
    sign = 1;
  }
  let copy = x;
  let reverse = 0;
  while (copy > 0) {
    reverse += copy % 10;
    copy /= 10;
    copy = Math.floor(copy);
    if (copy == 0) {
      if (sign === -1) {
        if (reverse > 0x80000000) {
          return 0;
        } else {
          reverse *= -1;
          return reverse;
        }
      } else {
        if (reverse > 0x7fffffff) {
          return 0;
        } else {
          return reverse;
        }
      }
    } else {
      reverse *= 10;
    }
  }
};
