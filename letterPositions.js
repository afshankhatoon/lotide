const letterPositions = function(sentence) {
  const results = {};
  var i;
  for (i=0;i<sentence.length;i++) {
    if(sentence[i]!==" "){
      if(results[sentence[i]]){
        results[sentence[i]].push(i);
      }
      else{
        var arr=[];
        results[sentence[i]]=arr;
        arr.push(i);
      }
  }
}
  return results;
};

const assertArraysEqual = function(actual, expected) {
  if(eqArrays(Object.keys(letterPositions(actual)),Object.keys(expected))){
    for(const letter of Object.keys(expected)){
      if(!(eqArrays(letterPositions(actual)[letter],expected[letter]))){
        console.log(`Assertion Failed: ${actual} === ${expected}`);
        return;
      }
    }
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};

function eqArrays(arr1,arr2){
  if(arr1.length!==arr2.length)
    return false;
  else{
    var i;
    for(i=0;i<arr1.length;i++){
      if(arr1[i]!==arr2[i])
        return false;
    }
    return true;
  }
}

assertArraysEqual("hello",{h:[0],e:[1],l:[2,3],o:[4]});
assertArraysEqual("hello",{h:[0],e:[1],l:[2,3],o:[5]});
assertArraysEqual("hello",{h:[0],e:[1],l:[2,3]});