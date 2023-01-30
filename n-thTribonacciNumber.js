/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let trib = {
        0: 0,
        1: 1,
        2: 1
    };
    if (trib[n] != undefined) return fib[n];
    for (let i=3; i<=n; i++){
        trib[i]=(trib[i-1]+trib[i-2]+trib[i-3]);
    }
    return trib[n];
};
console.log(tribonacci(4));
console.log(tribonacci(25));
