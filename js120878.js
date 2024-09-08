const solution = (a, b) => {
   let num = gcd(a,b);
   
   return (cal(b/num)==1||cal(b/num)%2==0||cal(b/num)%5==0)?1:2;

    function cal(b){
        while(b%2==0||b%5==0){
            let temp = b;
            if(b%2==0) b = b/2;
            else if(b%5==0) b = b/5;
        }
        return b;
    }


    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

// console.log(solution(1,1))
// console.log(solution(5,5))
// console.log(solution(20,20))
console.log(solution(7,20))
// console.log(solution(11,22))
console.log(solution(12,21))