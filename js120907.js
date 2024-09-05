const solution = (quiz) => 
    quiz.reduce((result, quizData) => 
        [...result,calculate(quizData.split("="))], []);

const calculate = (question) => eval(question[0])==question[1]?"O":"X";

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); 
