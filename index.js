var recipes = {

};

function updateObjectWithKeyAndValue(obj, key, val) {
   const obj2 = Object.assign({}, obj);
   return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
   obj[key] = val;
   return obj;
}

function deleteFromObjectByKey(obj, key) {
   var newObj = Object.assign({}, obj);
   delete newObj[key];
}

function destructivelyDeleteFromObjectByKey(obj, key) {
   
}