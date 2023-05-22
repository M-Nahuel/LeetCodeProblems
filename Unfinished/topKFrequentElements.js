/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let obj = {};
    let cont = 0;
    nums.forEach(elem => {
        if (Object.keys(obj).indexOf(elem.toString()) === -1){
            cont = 1;
        } else {
            cont++;
        }
        obj[elem] = cont;
    })
    let arr = Object.values(obj);
    arr.sort((a, b) => a - b);

    let outp = [];
    for (let i=0; i<k; i++){
        outp.push(arr[i]);
    }
    return outp;
};
