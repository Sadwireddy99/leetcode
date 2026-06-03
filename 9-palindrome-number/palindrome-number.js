/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copyX= x;
    let rev =0;
    if(x<0){
        return false
    }
    while(x>0){
        let rem = x%10;
        rev = (rev*10)+rem;
        x = Math.floor(x/10);
    }
    // if(rev == copyX ) {
    //     return true;
    // }else{
    //     return false;
    // } 

    return rev === copyX;
};
console.log(isPalindrome(121));