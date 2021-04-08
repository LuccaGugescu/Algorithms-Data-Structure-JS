/*function same(arr1, arr2) {
    let acc1 = 0;
    let acc2 = 0;
    for(let i = 0; i < arr1.length; i++) {
        acc1 += Math.pow(arr1[i], 2);
        acc2 += arr2[i];
    }
    return acc1 === acc2? true : false;
}
*/


function same(arr1, arr2) {
  let freqCounter1 = {};
  let freqCounter2 = {};
  for(let i of arr1) {
      freqCounter1[i] = (freqCounter1[i] || 0) + 1;
  }
  for(let i of arr2) {
    freqCounter2[i] = (freqCounter2[i] || 0) + 1;  
  }
  console.log(freqCounter1);
  for(let key in freqCounter1) {
      if(!(key**2 in freqCounter2) || (freqCounter1[key] !== freqCounter2[key ** 2])) {
          return false;
      }
  }
  return true;

}
console.log(same([1,2,3, 2], [1, 4,4,9]));