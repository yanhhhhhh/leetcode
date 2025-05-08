/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const newArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = newArray.length;
  if (len % 2 === 0) {
    return (newArray[len / 2 - 1] + newArray[len / 2]) / 2;
  }
  return newArray[(len - 1) / 2];
}
// @lc code=end
console.log(findMedianSortedArrays([1, 3], [2])); // 2
console.log(findMedianSortedArrays([1, 2], [3, 4])); // 2.5
console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0
