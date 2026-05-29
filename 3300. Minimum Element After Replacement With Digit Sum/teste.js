/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    for(i=0;i<nums.length;i++) {
        sum = 0;
        var numString = nums[i].toString();
        for(y=0;y<numString.length;y++){
            number = parseInt(numString.charAt(y));
            sum += number;
        }
        if(sum < minSum){
            minSum = sum;
        }
        sum = 0;
    }
    return minSum;
};

console.log("resultado - " + minElement([10,12,13,14]));