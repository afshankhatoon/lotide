// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(eqObjects(actual,expected))
    console.log(`Assertion Passed: ${actual} === ${expected}`);
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

const eqObjects = function(object1, object2) {
  //console.log(typeof Object.keys(object1));
  if(Object.keys(object1).length===Object.keys(object2).length){
    //console.log("if 1");
    for(const objKey of Object.keys(object1)){
      //console.log("for", Object.keys(object2).indexOf(objKey));
      if(Object.keys(object2).indexOf(objKey)!=-1){
        //console.log("if 2", typeof object1[objKey], "   ", typeof object2[objKey]);
        //if(typeof object2[objKey])
        if(!eqArrays(object1[objKey],object2[objKey])){
         // console.log("if 3");
          return false;
        }
        else {
          //console.log("else 3");
        }
      }else {
        //console.log("else 2");
        return false;
      }
    }
    return true;
  }else{
    //console.log("else 1");
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, ba); 
assertEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(cd, dc);


 const cd2 = { c: "1", d: ["2", 3, 4] };

 assertEqual(cd, cd2);

