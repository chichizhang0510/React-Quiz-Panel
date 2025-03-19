export function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null;

  return (
    <div
      className="btn btn-ui"
      onClick={() =>
        index === numQuestions - 1
          ? dispatch({ type: "finished" })
          : dispatch({ type: "nextQuestion" })
      }
    >
      {index === numQuestions - 1 ? "Finish" : "Next"}
    </div>
  );
}
