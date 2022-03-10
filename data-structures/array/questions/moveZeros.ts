https://leetcode.com/problems/move-zeroes/description/

/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    if(nums.length < 2) return;

    var wp = 0;
    var rp = 0;    
    for(rp; rp < nums.length; rp++) {
        if(nums[rp] !== 0) {
            let temp = nums[wp];
            nums[wp] = nums[rp];
            nums[rp] = temp;
            wp++;
        }
    }
};