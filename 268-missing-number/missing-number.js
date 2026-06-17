/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     let n = nums.length;
//     let totSum = n * (n + 1) / 2;
//     let sum =0;
//     for(let i =0; i< n ; i++)    {
//         sum = sum + nums[i];
//     }
//     return totSum - sum;
// };


var missingNumber = function(nums) {
    let sum =0;
    let n= nums.length ;
    let totalSum = (n*(n+1))/2;
    for(let i=0; i< nums.length ; i++ ){
        sum += nums[i];
    }
    return totalSum - sum;
}

