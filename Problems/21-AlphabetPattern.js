// ALPHABET PATTERN-1
// ------------------
// A
// A B
// A B C
// A B C D
// A B C D E
function AlphabetPattern1(n){
    for(let i=1;i<=n;i++){
       let ascii=65;
       let arr=[];
       for(let j=1;j<=i;j++){
         arr.push(String.fromCharCode(ascii++))
       }
       console.log(arr.join(' '))
    }
}
AlphabetPattern1(5)



// ALPHABET PATTERN-2
// ------------------
// A
// B C
// D E F
// G H I J
// K L M N O
function AlphabetPattern2(n){
    let ascii=65;
    for(let i=1;i<=n;i++){
       let arr=[];
       for(let j=1;j<=i;j++){
         arr.push(String.fromCharCode(ascii++))
       }
       console.log(arr.join(' '))
    }
}
AlphabetPattern2(5)



// ALPHABET PATTERN-3
// ------------------
// A
// B B
// C C C
// D D D D
// E E E E E
function AlphabetPattern3(n){
    for(let i=1;i<=n;i++){
       let arr=[];
       let ascii=65;
       for(let j=1;j<=i;j++){
         arr.push(String.fromCharCode(ascii+i-1))
       }
       console.log(arr.join(' '))
    }
}
AlphabetPattern3(5)

function AlphabetPattern3(n){
    let ascii=65;
    for(let i=1;i<=n;i++){
       let arr=[];
       for(let j=1;j<=i;j++){
         arr.push(String.fromCharCode(ascii))
       }
       ascii++
       console.log(arr.join(' '))
    }
}
AlphabetPattern3(5)



// ALPHABET PATTERN-4
// ------------------
// E
// D D
// C C C
// B B B B
// A A A A A
function AlphabetPattern4(n){
  let ascii=69;
  for(let i=1;i<=n;i++){
      let arr=[]
      for(let j=1;j<=i;j++){
          arr.push(String.fromCharCode(ascii))
      }
      console.log(arr.join(' '))
      ascii--
  }
}
AlphabetPattern4(5)



// ALPHABET PATTERN-5
// ------------------
// A
// Z Z
// B B B
// Y Y Y Y
// C C C C C
// X X X X X X
function AlphabetPattern5(n) {
  let startChar = 'A'.charCodeAt(0); // ASCII code for 'A'
  let endChar = 'Z'.charCodeAt(0); // ASCII code for 'Z'
  for (let i = 1; i <= n; i++) {
      let arr = [];
      if (i % 2 !== 0) {
          // Odd row: start from 'A', 'B', 'C', ...
          let char = String.fromCharCode(startChar + Math.floor((i - 1) / 2));
          for (let j = 0; j < i; j++) {
              arr.push(char);
          }
      } else {
          // Even row: start from 'Z', 'Y', 'X', ...
          let char = String.fromCharCode(endChar - Math.floor((i - 1) / 2));
          for (let j = 0; j < i; j++) {
              arr.push(char);
          }
      }
      console.log(arr.join(' '));
  }
}
AlphabetPattern5(6);


function AlphabetPattern5(n) {
  let startChar = 65
  let endChar = 90
  let x=0
  let y=0
  for (let i = 1; i <= n; i++) {
      let arr = [];
      if (i % 2 !== 0) {
          let char = String.fromCharCode(startChar + x++);
          for (let j = 0; j < i; j++) {
              arr.push(char);
          }
      } else {
          let char = String.fromCharCode(endChar - y++);
          for (let j = 0; j < i; j++) {
              arr.push(char);
          }
      }
      console.log(arr.join(' '));
  }
}
AlphabetPattern5(6);