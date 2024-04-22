// function twoSum(nums, target) {
//     for(i = 0; i < nums.length; i++) {
//         for(j = 0; j < nums.length; j++) {
//             if(i === j) {
//                 continue;
//             }else{
//                 if(nums[i] + nums[j] === target) {
//                     return [i, j];
//                 }
//             }
//         }
//     }
// }
// let arr = [2,7,11,15]
// let target = 9
// console.log(twoSum(arr, target));
function twoSum(nums, target) {
    let preNum = {}
    for(let i = 0; i < nums.length; i++) {
        let curNum = nums[i];
        let targetNum = target - curNum;
        let targetNumIndex = preNum[targetNum]
        if(targetNumIndex !== undefined){
            return [targetNumIndex,i]
        }else{
            preNum[curNum] = i
        }
    }
}
let arr = [2,3,3,7,7,11,15]
let target = 9
console.log(twoSum(arr, target));