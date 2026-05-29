/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    var separateArray = []
    for(i=0;i<nums.length;i++){
        numbers = nums[i].toString();
        for(y=0;y<numbers.length;y++){
            number = parseInt(numbers.charAt(y));
            separateArray.push(number)
        }
    }
    return separateArray;
};

console.log(separateDigits([13,25,83,77]));