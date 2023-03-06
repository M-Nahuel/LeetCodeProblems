/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function list(array,n){
    let ls = [];
    for(let i=0;i<array[array.length-1]+n;i++){
        ls.push(i+1);
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
    let ls = list(arr,k);
    let missing = miss(arr,ls);

    return missing[k-1];
};

console.log(findKthPositive([1,3], 5));
console.log(findKthPositive([5,6,7,8,9], 9));
