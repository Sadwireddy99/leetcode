/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// var reverseString = function(s) {
//    let len = s.length;
//    let n = Math.floor(len/2);
//    for(let i =0; i< n ;i++){

//     let temp = s[i];
//     s[i]= s[len-1-i];
//     s[len-1-i] = temp;
//    }
//    return s
// };



                            //June 9th
// var reverseString = function(s) {
//     let n = Math.floor(s.length/2);
//     for(let i=0; i<n ; i++){
//         let temp = s[i];
//         s[i] = s[s.length - 1-i];
//         s[s.length-1-i] = temp;
//     }
//     return s;
// }


var reverseString = function(s) {
    let s1= s.reverse();
    return s1;
}
