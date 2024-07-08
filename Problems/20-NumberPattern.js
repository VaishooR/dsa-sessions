// NUMBER PATTERN-1
// ----------------
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
function NumberPattern1(n){
    for(let i=1;i<=5;i++){
        let arr=[]
        for(let j=1;j<=i;j++){
            arr.push(j)
        }
        console.log(arr.join(' '))
    }
}
NumberPattern1(5)



// NUMBER PATTERN-2
// ----------------
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
function NumberPattern2(n){
    let val=1;
    for(let i=1;i<=n;i++){
        let arr=[];
        for(let j=1;j<=i;j++){
          arr.push(val++)
        }
        console.log(arr.join(' '))
    }
}
NumberPattern2(5)



// NUMBER PATTERN-3
// ----------------
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
function NumberPattern3(n){
    for(let i=1;i<=n;i++){
        let arr=[];
        for(let j=1;j<=i;j++){
          arr.push(i)
        }
        console.log(arr.join(' '))
    }
}
NumberPattern3(5)



// NUMBER PATTERN-4
// ----------------
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
function NumberPattern4(n){
    for(let i=n;i>=1;i--){
        let arr=[]
        for(let j=1;j<=i;j++){
            arr.push(j)
        }
        console.log(arr.join(' '))
    }
}
NumberPattern4(5)



// NUMBER PATTERN-5
// ----------------
//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5
function NumberPattern5(n){
    for(let i=1;i<=n;i++){
        let arr=[];
        for(let j=1;j<=n-i;j++){
            arr.push(" ")
        }
        for(let k=1;k<=i;k++){
            arr.push(i+" ")
        }
        console.log(arr.join(''))
    }
}
NumberPattern5(5)



// NUMBER PATTERN-6
// ----------------
// 5 5 5 5 5
//  4 4 4 4
//   3 3 3
//    2 2
//     1
function NumberPattern6(n) {
    for (let i = n; i >= 1; i--) {
        let arr = [];
        for (let j = n; j > i; j--) {
            arr.push(" ");
        }
        for (let k = 1; k <= i; k++) {
            arr.push(i + " ");
        }
        console.log(arr.join(''));
    }
}
NumberPattern6(5);