/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    s = s.split("");
    const roman = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
    
    let suma = s.map(function(arg){
        return roman[arg];
    }).reduce(function (i,arg){
      return i+arg;
    });
    
    for (let i=1; i<s.length; i++){
      switch (s[i-1]) {
        case "I" : if((s[i]=="V")||(s[i]=="X")){suma-=2};
        case "X" : if((s[i]=="L")||(s[i]=="C")){suma-=20};
        case "C" : if((s[i]=="D")||(s[i]=="M")){suma-=200};
      };
    };

    return suma;
};

console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("IX"));
console.log(romanToInt("XIII"));
console.log(romanToInt("XIX"));
console.log(romanToInt("CXL"));
console.log(romanToInt("MCMXIX"));