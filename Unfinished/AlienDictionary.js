/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
//optimize for cases when the words length are only 1 character
var isAlienSorted = function(words, order) {
    let state = true;
    for(let i=1; i<words.length; i++){
        if(state===false){break}
        for(let j=0; i<words[i-1].length; j++){
            if(order.indexOf(words[i-1][j])>order.indexOf(words[i][j])){
                state = false;
                break;
            } else{
              if (order.indexOf(words[i-1][j])<order.indexOf(words[i][j])){
                break;
              }
            }
            
        }
    }
    return state;
};
