// O(n) - Time | O(1) space
function repeatedString(s, n) {
    let aInS = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a'){
            aInS +=1;
        }
    }

    let repeat = Math.floor(n / s.length);
    let totalA = repeat * aInS;

    if(n % s.length > 0){
      let mod = n % s.length;

      for(let j = 0; j < mod; j++){
        if(s[j] === 'a'){
          totalA += 1;
        }
      }
    }
    return totalA;
}
// repeatedString('abcac', 10) // 4
repeatedString('aba', 10) //7