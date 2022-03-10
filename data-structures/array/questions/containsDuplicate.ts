// https://leetcode.com/problems/contains-duplicate/description/

function containsDuplicate(nums: number[]): boolean {
    var set = new Set();
    for(var i = 0; i < nums.length; i++) {
        if(set.has(nums[i])) {
            return true;
        }   
        set.add(nums[i]);
    }
    return false;
};