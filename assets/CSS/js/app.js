let cl=console.log;



function isPrime(n){
    if(n < 2){
        return ${n} is not a prime number
    }
    for (let i = 2; i< n; i++) {
       if(n%i === 0){
        return ${n} is not a prime number
       }else{
        return ${n} is Prime number
       }
        
    }
}
cl(isPrime(12))