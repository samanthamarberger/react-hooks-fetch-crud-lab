import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((r) => r.json())
    .then((questions) => setQuizQuestions(questions));
  }, [])

  function handleAddQuestion(newQuestion) {
    setQuizQuestions([...quizQuestions, newQuestion]);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{quizQuestions.map((question) => <li>{question.prompt}</li>)}</ul>
      {/* THIS IS WHERE THE DISPLAY ISSUE IS COMING FROM \/ */}
      <QuestionForm onAddItem={handleAddQuestion}/>
    </section>
  );
}

export default QuestionList;
