// Leetcode-852 : Peak Index in a Mountain Array


// APPROACH  (Compare 2 elements)
var peakIndexInMountainArray = function(arr) {
    let s = 0;
    let e = arr.length-1;
    while(s < e){
        let mid = Math.floor((s + e)/2);
        if(arr[mid] < arr[mid+1]){
            s = mid + 1
        }else if(arr[mid] > arr[mid+1]){
            e = mid
        }
    }
    return s
};
console.log(peakIndexInMountainArray([0,1,0]))
console.log(peakIndexInMountainArray([0,1,2,5,4,0]))



//! Wrong Approach  (Don't compare 3 elements. Instead just compare 2) 
var peakIndexInMountainArray = function(arr) {
    let s=0;
    let e=arr.length-1;
    while(s<=e){
        let mid=Math.floor((s+e)/2);
        if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]){
            return mid;
        }
        if(arr[mid-1] < arr[mid] && arr[mid] < arr[mid+1]){
            s = mid+1;
        }else if(arr[mid-1] > arr[mid] && arr[mid] > arr[mid+1]){
            e = mid-1;
        }
    }
};