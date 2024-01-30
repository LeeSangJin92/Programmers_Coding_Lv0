function solution(n, slicer, num_list) {
    let result = [];

    switch(n){
        case 1 :
            result = num_list.slice(0,slicer[1]+1);
            break;

        case 2 :
            result = num_list.slice(slicer[0]);
            break;

        case 3 :
            result = num_list.slice(slicer[0],slicer[1]+1)
            break;

        case 4 :
            result = num_list.slice(slicer[0],slicer[1]+1).filter((data,index)=>{
                    return index%slicer[2]==0;
            })
    }
    console.log(result);
}

solution(2, [0, 1, 1] ,[1, 2, 3, 4, 5, 6, 7, 8, 9]);
