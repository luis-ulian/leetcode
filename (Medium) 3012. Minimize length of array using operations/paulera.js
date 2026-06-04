var minimumArrayLength = function(nums) {
    let minSize = 0;
    let occursOnce = null;
    let count = 1;
    nums.sort((a,b) => a-b);

    minNum = nums[0];

    for(i=1; i < nums.length; i++){
        if(nums[i] == minNum){
            count++;
            occursOnce = 0;
        } else if (occursOnce != 0){
            occursOnce = 1;
        }
        if(nums[i] % minNum < minNum && nums[i] % minNum != 0){
            occursOnce = 1;
        }
    }

    if(occursOnce == 1) minSize = 1;
    else {
        return Math.ceil(count/2);
    }

    return minSize;
};

nums = [5,2,2,2,9,10]
console.log(minimumArrayLength(nums))