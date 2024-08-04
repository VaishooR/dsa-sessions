// Leetcode-11 : Container With Most Water

// APPROACH:
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(area, maxArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}




var maxArea = function (height) {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    maxArea = Math.max(
      maxArea,
      Math.min(height[left], height[right]) * (right - left)
    );
    height[left] <= height[right] ? left++ : right--;
  }
  return maxArea;
};
