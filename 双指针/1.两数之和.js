/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = new Map()
  var i =0;
  while(i<nums.length){

      if(map.has(nums[i])){

          return [i,map.get(nums[i])]
      }
      map.set(target-nums[i],i)
      i++;
  }

}
console.log(twoSum([2,7,11,15],9))
// @lc code=end


