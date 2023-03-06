/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function list(array){
    let ls = [];
    for(let i=0;i<array[array.length-1];i++){
        ls.push(i+1);
    };
    console.log(ls)
    return ls;
}

function miss(input,ordered){
    let missing = [];
    ordered.forEach(function(elem){
        if(input.indexOf(elem)==-1){
            missing.push(elem);
        };
    });
    return missing;
}

var findKthPositive = function(arr, k) {
    let ls = list(arr);
    let missing = miss(arr,ls);
    if(missing.length<1 || missing[missing.length-1]<ls[ls.length-1]){
        for(let i=1; i<k+3;i++){
            ls.push(k+i);
        };
        missing = miss(arr,ls);
    }
    console.log(missing);
    return missing[k-1];
};

console.log(findKthPositive([5,6,7,8,9], 9));
