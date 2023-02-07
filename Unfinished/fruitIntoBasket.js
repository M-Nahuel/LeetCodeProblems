/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let basket1 = 0;
    let basket2 = 0;
    let type1;
    let type2;
    let start = 0;
    for(let i=start; i<fruits.length; i++){
        if (i === start){
        type1 = fruits[i];
        };
        if(fruits[i]!=type1 && type2===undefined){
            type2 = fruits[i];
        }
        switch(fruits[i]){
            case type1:
            basket1++;
            break;
            case type2:
            basket2++;
            break;
            default:
            break;
        }
    }

return basket1 + basket2;



};
