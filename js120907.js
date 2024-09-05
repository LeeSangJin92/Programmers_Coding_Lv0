const solution = (quiz) =>
  quiz.reduce((result, quizData) => {
    let data = quizData;
    console.log(data);
  }, []);

solution(["3 - 4 = -3", "5 + 6 = 11"]);
