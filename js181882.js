function solution(arr) {

    arr.forEach((data, index) => {
       arr[index] = data%2==0&&data>=50?data/2:data%2==1&&data<50?data*2:data;        
    });
    return arr;
}