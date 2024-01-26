//배열 만들기4

function solution(arr) {
    let result = [];
    let i = 0;
    while (i<=arr.length) {
        let index = result.length;
        if(index==0) result.push(arr[i]);
        else{
            if(result[index-1]<arr[i]) result.push(arr[i]);
            else if(result[index-1]>=arr[i]){
                result.pop();
                continue;
            }
        }
        i++;
    }
    return result;
}


solution([1, 4, 2, 5, 3])