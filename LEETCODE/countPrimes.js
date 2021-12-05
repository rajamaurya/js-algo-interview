/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
    let results = []; 
    let primes = [];
    let count = 0;
    for(let i = 2; i < n; i++){
        primes[i] = true;
    }
    for(let i = 2; i * i < n; i++){
        for(let j = i; j*i < n; j++){
            primes[i*j] = false;
        }
    }
    for(let i = 2; i < primes.length; i++){
        if(primes[i]){
            count++;
        }
    }
    
  return count;
};