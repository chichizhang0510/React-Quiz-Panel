function StartScreen({ numQuestions, onClick }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button className="btn" onClick={onClick}>
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
