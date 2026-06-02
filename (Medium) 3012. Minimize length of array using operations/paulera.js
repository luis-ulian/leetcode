var minimumArrayLength = function(nums) {
    let minSize;
    /* 
    map = new Map();

    for(i=0;i<nums.length;i++){
        map.set(i, nums[i]);
    }
    */
    nums.sort((a,b) => b-a);

    for(i=0;i<nums.length;i++){
        for(y=nums.length - 1;y>=0;y--){
            if(i === y) continue;
            if(nums[i] === 0|| nums[y] === 0) continue;

            console.log("nums = " + nums + "\ni, y = " + i + " " + y)
            
            rest = nums[y] % nums[i];

            nums.push(rest);
            
            if(i >= y){
                nums.splice(i,1);
                nums.splice(y,1);
            } else {
                nums.splice(y,1);
                nums.splice(i,1);
            }
            i = -1;
            y = nums.length + 1;
            break;
        }
    }

    minSize = nums.length;

    console.log(nums);

    return minSize;
};

nums = [5,2,2,2,9,10]
console.log(minimumArrayLength(nums))