// Leetcode-345 : Reverse Vowels of a String

function isVowel(l){
    let vowels=['a','e','i','o','u','A','E','I','O','U'];
    return vowels.includes(l)
 }
 
 function ReverseVowel(str){
      let l=0;
      let r=str.length-1;
      let strArr=str.split('')
 
      while(l<r){
       if(!isVowel(strArr[l])){
          l++  
       }else if(!isVowel(strArr[r])){
          r--
       }else{
          [strArr[l],strArr[r]] = [strArr[r],strArr[l]]
          l++
          r--
       }
      }
      
      console.log(strArr.join(''))
 }
 ReverseVowel('hello')
 ReverseVowel('leetcode')