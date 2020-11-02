/* const assertEqual = function(actual, expected) {
  if(actual===expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};
 */
const tail=function(array){
  return array[0];
}

/* assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(tail([]),undefined);
assertEqual(tail([5]),5);
 */
module.exports = tail;