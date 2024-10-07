function isPrime (num) {
    let flag = false;
    for(let i = 2; i <= num/2; i++){
        if(num % i === 0){
            flag = true;
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

isPrime(10)