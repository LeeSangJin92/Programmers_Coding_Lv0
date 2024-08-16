function solution(employess){

    var employessList = [];
    employess.forEach((data,index) => {
        let team = data.match(/^\d+/)[0];
        var member = new Map();
        member = {
            id:index,
            team:team};
        employessList.push(member);
    });
    return employessList;
}

console.log(solution(["40 주방 거실 화장실","2 주방","3 거실"]));