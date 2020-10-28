// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual,expected))
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  else
    console.log(`Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length===Object.keys(object2).length){
    for(const objKey of Object.keys(object1)){
      if(Object.keys(object2).indexOf(objKey)!=-1){
        if(!eqArrays(object1[objKey],object2[objKey])){
          return false;
        }
        else {
        }
      }else {
        return false;
      }
    }
    return true;
  }else{
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba); 
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);


const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

