// Leetcode-682 : Baseball Game

/* Rules: 
    1. Integer - Push to Array
    2. "+"     - Sum of previous two values
    3. "D"     - Double previous value
    4. "C"     - Remove last value          */

    
    function baseballRules(op,res){
        if(op == "C"){
            res.pop();
        }else if(op == "D"){
            let d=res[res.length-1]
            res.push(d*2);
        }else if(op == "+"){
            let sum=res[res.length-1]+res[res.length-2]
            res.push(sum);
        }else{
            let num = Number(op)
            res.push(num);
        }
    }
    var calPoints = function(operations) {
        let res=[]
        for(let i = 0; i < operations.length; i++){
            baseballRules(operations[i],res)
        }
        let totalSum = res.reduce((acc,curr)=>acc+curr,0)
        return totalSum
    };
    calPoints(["5","2","C","D","+"])
    calPoints(["5","-2","4","C","D","9","+","+"])
    calPoints(["1","C"])
    