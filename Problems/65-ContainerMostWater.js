// Leetcode-11 : Container With Most Water

var maxArea = function (height) {
    let s = 0;
    let e = height.length-1;
    let maxArea = -1;
    while(s < e){
        let area = (e-s)*Math.min(height[s],height[e])
        maxArea = Math.max(maxArea,area)
        if(s < e){
            s++
        }else{
            e--
        }
    }
    return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))