const assertEqual = function(actual, expected) {
  if(actual===expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

function countLetters(sentence){
  const results = {};
  for (const item of sentence) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  return results;
}

const sentence = "Hello World";
const result1 = countLetters(sentence);

assertEqual(result1["H"], 1);
assertEqual(result1["w"], undefined);
assertEqual(result1["e"], 2);
assertEqual(result1["l"], 2);
assertEqual(result1["h"], 1);
