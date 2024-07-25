// Leetcode-167 : Two Sum II - Input Array is sorted

function TwoSumSortedInput(numbers, target) {
    let l = 0;
    let r = numbers.length-1;
    while(l < r){
        if(numbers[l] + numbers[r] == target){
            return [++l,++r]
        }else if(numbers[l] + numbers[r] < target){
            l++
        }else{
            r--
        }
    } 
 };
 console.log(TwoSumSortedInput([2,3,4],6))