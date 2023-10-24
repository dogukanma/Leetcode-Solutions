/**
 * @date 24.10.2023
 * @author dogukanma
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const dataSet = [
    { letter: "I", value: 1 },
    { letter: "V", value: 5 },
    { letter: "X", value: 10 },
    { letter: "L", value: 50 },
    { letter: "C", value: 100 },
    { letter: "D", value: 500 },
    { letter: "M", value: 1000 },
  ];
  let value = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let order;
    // console.log("s.charAt(i) => " + s.charAt(i));
    for (let j = 0; j < dataSet.length; j++) {
      if (s.charAt(i) == dataSet[j].letter) {
        value += dataSet[j].value;
        order = j;
        break;
      }
    }
    // console.log("Current value: " + value);
    // console.log("Current order: " + order);
    if (i > 0 && order > 0) {
      // console.log("NO PROBLEM IN SECOND IF");
      for (let k = order - 1; k >= 0; k--) {
        // console.log("Problem occurs in k loop's if section :(")
        // console.log("dataSet[k].letter: " + dataSet[k].letter);
        // console.log("s.charAt(i - 1): " + s.charAt(i - 1));
        // console.log("dataSet[order].value / 5 == dataSet[k].value TRUE OR FALSE => " + (dataSet[order].value / 5 == dataSet[k].value));
        // console.log("dataSet[order].value / 10 == dataSet[k].value TRUE OR FALSE => " + (dataSet[order].value / 10 == dataSet[k].value));
        if (
          dataSet[k].letter == s.charAt(i - 1) &&
          (dataSet[order].value / 5 == dataSet[k].value ||
            dataSet[order].value / 10 == dataSet[k].value)
        ) {
          // console.log("Value: " + value + " is decreased by " + dataSet[k].value);
          value -= dataSet[k].value;
          // console.log("New value: " + value);
          i--;
          break;
        }
      }
    }
  }
  return value;
};

// console.log(romanToInt("I"));
// console.log(romanToInt("III"));
// console.log(romanToInt("LVIII"));
// console.log(romanToInt("MCMXCIV"));