//주사위 게임 2
function solution(a, b, c) {
    let calculate = [];
    let result = 0;
        calculate.push(a===b);
        calculate.push(b===c);
        calculate.push(c===a);
        switch (calculate.filter((x)=>x===true).length) {
            case 3:
                result = (a+b+c)*(a*a+b*b+c*c)*(a**3+b**3+c**3);
                break;
            case 1:
                result = (a+b+c)*(a*a+b*b+c*c);
                break;
            default:
                result = (a+b+c);
                break;
        }
    return result;
}