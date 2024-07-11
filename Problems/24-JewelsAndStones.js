// Leetcode-771 : Jewels and Stones

  // APPROACH-1
  function JewelsAndStones(jewels,stones){
    let count=0;
       for(let i=0;i<jewels.length;i++){
        for(let j=0;j<stones.length;j++){
          if(stones[j]==jewels[i]){
            count++;
          }
        }
       }
    console.log(count)
  }
  JewelsAndStones("aA","aAAbbbb")
  JewelsAndStones("z","ZZ")
  
  
  
  // APPROACH-2
  function JewelsStones(jewels,stones){
    let count=0;
    for(let eachStone of stones){
      if(jewels.includes(eachStone)){
        count++
      }
    }
    console.log(count)
  }
  JewelsStones("aA","aAAbbbb")
  JewelsStones("z","ZZ")