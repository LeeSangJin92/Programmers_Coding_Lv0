//수 조작하기 1

function solution(n, control) {
    control.split("").forEach(data => {
        switch(data){
            case "w" :
                n = n+1;
                break;
            case "s" :
                n = n-1;
                break;
            case "d" :
                n = n+10;
                break;
            case "a"  :
                n = n-10;
                break;
        }
    });
    return n;
}