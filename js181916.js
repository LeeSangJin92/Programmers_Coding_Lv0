function solution(a, b, c, d) {
    
    let numberArr = [];
    [a,b,c,d].forEach(data=>{if(!numberArr.includes(data))numberArr.push(data);})

    if(numberArr.length==1) return 1111*a;
    else if(numberArr.length==4) return Math.min(...numberArr);
    else if(numberArr.length==3) {
        let result = [];
        numberArr.forEach(number => {
            let numArr = [a,b,c,d].filter(data => data==number);
            if(numArr.length==1) result.push(number);
        })
        return result[0]*result[1];
    }
    else if(numberArr.length==2){
        let result = 0;
        numberArr.forEach((number,index)=>{
                 switch([a,b,c,d].filter(data=>data==number).length){
                case 1 :
                    result = Math.pow((10*numberArr[index^1]+number),2);
                    break;
                case 2 :
                    result = (number+numberArr[index^1])*Math.abs(number-numberArr[index^1]);
                    break;
                case 3 :
                    result = Math.pow((10*number+numberArr[index^1]),2);
                }
            });
            return result;
    }
}