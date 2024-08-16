function solution(names) {
    return names.filter((name, index) => {
            if(index%5===0) return name;
    });
}