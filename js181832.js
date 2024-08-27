const solution = (n) => {
    let maxRow = n;
    let row = 0;
    let maxCol = n;
    let col = 0;
    let numbers = Array.from({length:n**2},(_,index)=>index+1);
    let result = Array.from({length:n},()=>Array(n).fill(0));
    numbers.forEach((number)=>{
        if(number<=maxRow) {
            result[col][row] = number;
            row++;
        }

        if(row>maxRow&&col>maxCol){
            
        }
    })
    return result;
}


console.log(solution(5));