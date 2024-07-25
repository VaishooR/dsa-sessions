// Leetcode-283 : Move Zeroes


// APPROACH-1 
function MoveZeroes(arr) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[k] = arr[i];
        k++;
      }
    }
    for (let j = k; j < arr.length; j++) {
      arr[j] = 0;
    }
    return arr
  }
  console.log(MoveZeroes([0, 1, 0, 3, 12]));
  
  
  
  
  // APPROACH-2
  function MoveZeroes1(arr){
    for(let i=0;i<arr.length;i++){
     for(let j=0;j<arr.length-1;j++){
        if(arr[j]==0){
           [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
     }
    }
    return arr
  }
  console.log(MoveZeroes1([0, 1, 0, 3, 12]))
  
  