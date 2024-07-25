// Leetcode-1 : Two Sum


// APPROACH-1 (Two loops)
function TwoSum(arr,target){
    for(let i=0;i<arr.length;i++){
       for(let j=i+1;j<arr.length;j++){
          if(arr[i]+arr[j] == target){
             return [i,j]
          }
       }
    }
 }
 console.log(TwoSum([2,7,11,15],9))
 console.log(TwoSum([3,2,4],6))
 
 


 // APPROACH-2 (Two pointers) //! (Wrong Approach)
 function TwoSumSorted(arr,target){
    let res=arr.sort((a,b)=>a-b);
    let l=0;
    let r=res.length-1;
    for(let i=0;i<res.length;i++){
       if(arr[l]+arr[r] == target){
          return [l,r]
       }else if(arr[l] + arr[r] < target){
          l++
       }else{
          r--
       }
    }
 }
 console.log(TwoSumSorted([3,2,1,4],5))
 //! Error : The above code finds the correct elements that is equal to target. But the index gets chnaged on Sorting.
 

 
 function TwoSumSortedObject(arr,target){
     let res = arr.map((val,index)=>({val,index}))
     res.sort((a,b)=>a.val-b.val)
 
     let l=0;
     let r=res.length-1;
 
     while(l<r){
       if(res[l].val + res[r].val == target){
          return [res[l].index,res[r].index]
       }else if(res[l].val + res[r].val < target){
          l++
       }else{
          r--
       }
     }
 
 }
 console.log(TwoSumSortedObject([3,2,4],6))
 