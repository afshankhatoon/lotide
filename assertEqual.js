const assertEqual = function(actual, expected) {
  if(actual===expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

// TEST CODE
/* assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("apple","apple");
assertEqual(1, 1);
assertEqual(1, 2); */
/* const tail = function(arr) {
  let newArr=[];
  for (let i = 1; i<arr.length; i++){
    newArr.push(arr[i]);
  }
  return newArr;
} */
/* const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(typeof result);
const expResult = ["Lighthouse", "Labs"];
console.log(typeof expResult);
assertEqual(result, expResult); */

module.exports = assertEqual;