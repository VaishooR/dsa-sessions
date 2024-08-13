// Leetcode-278 : First bad version

function BadVersion(mid){
    if(mid == 3 || mid == 4 || mid == 5 || mid == 6 || mid == 7 ){
        return true;
    }else if(mid == 1 || mid == 2){
        return false;
    }
}

function FindBadVersion(version){
    let min=0;
    let start=1;
    let end=version;
    while(start<=end){
        let mid= Math.floor((start+end)/2);
        if(BadVersion(mid)){
            min = mid;
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }
    return min
}
console.log(FindBadVersion(7))
