/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */
// 双指针 + 两数之和
// 1. 排序
// 2. 遍历数组，固定一个数，使用双指针查找另外两个数
// 3. 如果三数之和为0，加入结果集
// 4. 如果三数之和小于0，左指针右移
// 5. 如果三数之和大于0，右指针左移
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var i = 0;
  var ans = [];
  nums.sort((a,b)=>a-b);

  for (; i < nums.length - 2; i++) {

    
    if (nums[i] > 0) break;
    if(nums[i] ==nums[i-1]) continue;
    if(nums[i]+nums[i+1]+nums[i+2]>0) break; // 优化1，这里是剪枝
    if(nums[i]+nums[nums.length-1]+nums[nums.length-2]<0) continue; // 优化2，这里是剪枝
    var j = i + 1;
    var k = nums.length - 1;
    while (j < k) {
      var sum = nums[i] + nums[j] + nums[k];
      if (sum == 0) {
        ans.push([nums[i], nums[j], nums[k]]);
       
        while(j<k && nums[j]==nums[j+1]) j++;
        while(j<k && nums[k]==nums[k-1]) k--;
        j++;
        k--;
       
      } else if (sum < 0) {
        j++;
        
      }else{
        k--;
      }
    }
  }
  return ans;
};
// @lc code=end
// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0,0,0,0]))
