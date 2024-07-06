// Find mid elements out of 3 elements.

// Explanation:
// -----------
// 1,5,3 --> Here 3 is the mid element.
// 12,22,30 --> Here 12 is the mid element.

function MidElement(a,b,c){
    if((a>=b && a<=c) || (a<=b && a>=c)){
       return a;
    }else if((b>=a && b<=c) || (b<=a && b>=c)){
        return b;
    }else{
        return c;
    }
}
console.log(MidElement(10,15,3))