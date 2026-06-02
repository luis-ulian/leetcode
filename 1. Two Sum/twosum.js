var twoSum = function(nums, target) {
    position1 = null;
    position2 = null;
    positions = [];
    map = new Map();
    num = null

    for(i=0;i<nums.length;i++){
        map.set(nums[i],i);
    }

    for(i=0;i<nums.length;i++){

        num = map.get(target-nums[i]);
        console.log(num);
        if(num != i && num != null || undefined) break;
    }

    position1 = i;
    position2 = num;

    positions.push(position1,position2);

    return positions;
};

nums = [3,2,4];
target = 6;

console.log(twoSum(nums, target));
