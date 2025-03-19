import { NextButton } from "./NextButton";

function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
      <div className="result">
        <p>
          you scored <strong>{points}</strong> out of{" "}
          <strong>{maxPoints} </strong>({Math.ceil(percentage)}%)
        </p>
      </div>
      <p className="highscore">(Highscore: {highscore})</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
