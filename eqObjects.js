// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if(actual===expected)
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  else
    console.log(`Assertion Failed: ${actual} === ${expected}`);
};


const eqObjects = function(object1, object2) {
  //console.log(typeof Object.keys(object1));
  if(Object.keys(object1).length===Object.keys(object2).length){
    //console.log("if 1");
    for(const objKey of Object.keys(object1)){
      //console.log("for", Object.keys(object2).indexOf(objKey));
      if(Object.keys(object2).indexOf(objKey)!=-1){
       // console.log("if 2", object1[objKey], "   ", object2[objKey]);
        if(object1[objKey]!==object2[objKey]){
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
assertEqual(eqObjects(ab, ba),true); 
assertEqual(eqObjects(ab, abc),false);