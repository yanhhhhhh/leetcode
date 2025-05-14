/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let ans = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;
  let s;
  for (let i = 0; i < n - 2; i++) {
      
      // 双指针
      let j = i + 1, k = n - 1;
      while (j < k) {
          s = nums[i] + nums[j] + nums[k];
          if (s === target) {
              return target;
          }
          if (s > target) {
              if (s - target < minDiff) { // s 与 target 更近
                  minDiff = s - target;
                  ans = s;
              }
              k--;
          } else { // s < target
              if (target - s < minDiff) { // s 与 target 更近
                  minDiff = target - s;
                  ans = s;
              }
              j++;
          }
      }
  }
  return ans;
};
// @lc code=end
console.log(threeSumClosest([-1, 2, 1, -4], 1)); //1
