// Leetcode-344 : Reverse Array

// APPROACH-1
function ReverseArray(arr){
    let start=0;
    let end=arr.length-1;
    while(start<end){
       let temp=arr[start];
       arr[start]=arr[end];
       arr[end]=temp;
       start++;
       end--;
    }
    return arr
 }
 console.log(ReverseArray(["c","a","r","s"]))
 // TIME & SPACE:
 // Time Complexity = O(n/2) = O(n)
 // Overall Space Complexity = O(n)
 // Auxiliary Space Complexity = O(1)
 
 
 
 
 function ReverseArray2(arr){
    for(let i=0; i<arr.length/2; i++){
       let temp=arr[i];
       arr[i] = arr[arr.length-1-i];
       arr[arr.length-1-i] = temp;
    }
    console.log(arr)   
 }
 ReverseArray2(["b","a","b","y"])
 
 
 
 
 
 // APPROACH-2
 function ReverseArray3(arr){
    let resArray=[];
    for(let i=arr.length-1;i>=0;i--){
       resArray.push(arr[i]);
    }
    console.log(resArray)
 }
 ReverseArray3(['hi',"hello",'bye'])
 // TIME & SPACE:
 // Time Complexity = O(n/2) = O(n)
 // Overall Space Complexity = O(n)
 // Auxiliary Space Complexity = O(n)