function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

function getPrimes(n){
    var arr = [];

    for(var i =2;i<n+1;i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
    return arr;
}
 
function primeMultiply(n){
    var result = 1.0e-320;
    for(var i =2;i<n+1;i++){
        if(isPrime(i)){
            result*=i;
        }
    }
    return result;
}

var multiplyResult =  primeMultiply(100);

console.log(multiplyResult);

var a = getPrimes(500);
console.log(a)