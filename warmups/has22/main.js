/*
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.

has22() → true
has22([]) → false
has22([2, 1, 2]) → false
*/

function has22(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i + 1] != undefined && nums[i] === 2) {
            if (nums[i] === nums[i + 1]) {
                return true;
            }
        }
    }
}
console.log(has22([1, 2, 1, 2]));