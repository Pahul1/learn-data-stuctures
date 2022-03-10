// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
    if(nums.length < 2) {
       return [-1, -1]; 
    }

    var map = new Map();
    for(let i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if(map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    
    return [-1, -1];
}