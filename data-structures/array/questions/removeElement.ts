//https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/

function removeElement(nums: number[], val: number): number {
    if(nums.length < 1) return 0;
    var wp = 0;
    while(nums[wp] != val && wp < nums.length) {
        wp++;
    }
    
    if(wp >= nums.length) return nums.length;
    
    for(var rp = wp + 1; rp < nums.length; rp++) {
        if(nums[rp] !== val) {
            nums[wp] = nums[rp];
            nums[rp] = val;
            wp++;
        }
    }
    
    return wp;
};