/*function flatten(arr) {
    let result = [];
    if(arr.length === 1) return arr[0];
    if(arr[0].length > 1) {
        for(let i = 0; i < arr[0].length; i++) {
            result.push(arr[0][i]);
        }
    } 
    result.push(arr[0]);
    return result.concat(flatten(arr.splice(1)));
}
*/

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }




console.log(flatten([1,2,[3,5,3,[3,4]]]));