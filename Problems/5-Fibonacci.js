// 0,1,1,2,3,5,8,13


// APPROACH-1 (using Array)

function fibonacci(n){
   let fiboArray=[0,1]
   for(let i=2;i<=n;i++){
    fiboArray.push(fiboArray[i-1]+fiboArray[i-2])
   }
   return fiboArray.join()
}
console.log(fibonacci(4))


// APPROACH-2 (without Array)

function fibo(n){
    let a=0,b=1,nextTerm;
    let arr=[]
    arr.push(a)
    console.log(a)

    if(n> 1) {console.log(b)
      arr.push(b)
    }

    for(let i=3;i<n;i++){
      nextTerm =a+b;
      arr.push(nextTerm)
      console.log(nextTerm)
      a=b;
      b=nextTerm;
    }

    console.log(arr.join())
  }
  fibo(10)






// -----------------------------------------------
function fibonacci(n){
  let fiboArray=[0,1]

  if(n== 0) return [0];

  for(let i=2;i<n;i++){
   fiboArray.push(fiboArray[i-1]+fiboArray[i-2])
  }
  return fiboArray.join()
}
console.log(fibonacci(2))


// -----------------------------------------------
function fibo(n){
  let a=0,b=1,nextTerm;
  console.log(a)
  console.log(b)
  for(let i=2;i<n;i++){
     nextTerm = a + b
     console.log(nextTerm)
     a=b;
     b=nextTerm;
  }
}
fibo(7)



// -----------------------------------------------
function fibo(n){
  let arr=[0,1]
  if(n== 0) return [0];
  for(let i=2;i<n;i++){
     arr.push(arr[i-1]+arr[i-2])
  }
  return arr.join()
}
console.log(fibo(7))