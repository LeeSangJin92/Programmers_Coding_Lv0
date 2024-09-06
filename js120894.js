const solution = (numbers) => +numbers.match(/zero|one|two|three|four|five|six|seven|eight|nine/g)
.map(word=>
    (word=="zero"&&'0')||
    (word=="one"&&'1')||
    (word=="two"&&'2')||
    (word=="three"&&'3')||
    (word=="four"&&'4')||
    (word=="five"&&'5')||
    (word=="six"&&'6')||
    (word=="seven"&&'7')||
    (word=="eight"&&'8')||
    (word=="nine"&&'9')
).join('');

console.log(solution("onetwothreefourfivesixseveneightnine"));
console.log(solution("onefourzerosixseven"));