/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function list(array){
    ls = [];
    for(let i=1;i<array[array.length-1];i++){
        ls.push(i);
    };
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
    if(missing.length<1){
        for(let i=1; i<k+2;i++){
            ls.push(k+i);
        };
        missing = miss(arr,ls);
    }
    return missing[k-1];
};
