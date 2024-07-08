// STAR-PATTERN-1
// --------------
// *
// * *
// * * *
// * * * *
// * * * * *
function StarPattern1(n){
    for(let i=0;i<=n;i++){
       let arr=[];
       for(let j=1;j<=i;j++){
          arr.push('*')
       }
       console.log(arr.join(' '))
    }
}
StarPattern1(5)



// STAR-PATTERN-2
// --------------
// * * * * *
// * * * *
// * * *
// * *
// *
function StarPattern2(n){
    for(let i=n;i>=1;i--){
        let arr=[];
        for(let j=1;j<=i;j++){
           arr.push("*")
        }
        console.log(arr.join(' '))
    }
}
StarPattern2(5)

function StarPattern2(n){
    for(let i=1;i<=n;i++){
        let arr=[];
        for(let j=i;j<=n;j++){
           arr.push("*")
        }
        console.log(arr.join(' '))
    }
}
StarPattern2(5)



// STAR-PATTERN-3
// --------------
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
function StarPattern3(n){
    for(let i=1;i<=n;i++){
        let arr=[];
        for(let j=1;j<=n-i;j++){
            arr.push(" ")
        }
        for(let k=1;k<=i;k++){
            arr.push("* ")
        }
        console.log(arr.join(''))
    }
}
StarPattern3(5)



// STAR-PATTERN-4
// --------------
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
function StarPattern4(n) {
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j < i; j++) {
            arr.push(" ");
        }
        for (let k = 0; k < n - i; k++) {
            arr.push("* ");
        }
        console.log(arr.join(''));
    }
}
StarPattern4(5);



// STAR-PATTERN-5
// --------------
// *
// * * 
// * * *
// * * * *
// * * * * *
// * * * * 
// * * *
// * * 
// *
function StarPattern5(n){
    for(let i=1;i<=n;i++){
        let arr=[];
        for(let j=1;j<=i;j++){
            arr.push("*")
        }
        console.log(arr.join(' '));
    }
    for(let i=1;i<n;i++){
        let arr=[];
        for(let j=i;j<=n-1;j++){
            arr.push("*")
        }
        console.log(arr.join(' '));
    }
}
StarPattern5(4)



// STAR-PATTERN-6
// --------------
// *   *
//  * *
//   *
//  * *
// *   *
function StarPattern6(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (j === i || j === n - 1 - i) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
StarPattern6(5);

function StarPattern6(n) {
    let mid = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (j === mid - Math.abs(mid - i) || j === mid + Math.abs(mid - i)) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
StarPattern6(5);



// STAR-PATTERN-7
// --------------
//   *
//  * *
// *   *
//  * *
//   *
function DiamondPattern(n) {
    let mid = Math.floor(n / 2);
    
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            if (i <= mid) {
                if (j === mid - i || j === mid + i) {
                    row += '*';
                } else {
                    row += ' ';
                }
            } else {
                if (j === i - mid || j === (n - 1) - (i - mid)) {
                    row += '*';
                } else {
                    row += ' ';
                }
            }
        }
        console.log(row);
    }
}
DiamondPattern(5);



