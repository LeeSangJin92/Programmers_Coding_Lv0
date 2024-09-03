const solution = (A,B) => {
    let result = 0;
    return check([...A]);

    function check(arr){
        if(arr.join('') == B) {
            return result;
        }
        else if(result>arr.length){
            return -1;
        }
        else{
            result++;
            arr.unshift(arr.pop());
            return check(arr);
        }
    }
}

console.log(solution("hello","ohell"));
console.log(solution("apple","elppa"));