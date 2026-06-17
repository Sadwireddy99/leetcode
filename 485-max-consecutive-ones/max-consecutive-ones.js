/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//     let currCount = 0; 
//     let maxCount =0;
//     for(let i =0; i< nums.length;i++){
//         if(nums[i] == 1){
//             currCount++;
//         }
//         else {
//            maxCount = Math.max(currCount , maxCount);
//            currCount =0;
//         }
//     }
//     return Math.max(currCount,maxCount);
//  };


                    //Approach2   (self)
var findMaxConsecutiveOnes = function(nums) {
     let count =0;
    let max =0;
    for(let i=0; i<nums.length ; i++){
        if(nums[i] !==0 ){
            count++;
            if(count > max){
            max = count;
            }
            //max = Math.max(count,max);
        }
        else{
            count =0;
        }
        
    }
    return max;
}