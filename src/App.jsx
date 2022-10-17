import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/UI/Button";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
	const [startQuiz, setStartQuiz] = useState(false);
	function startQuizNow() {
		setStartQuiz(true);
	}
	console.log(startQuiz);
	return (
		<main className="container">
			{startQuiz ? (
				<div className="quiz-container">
					<Quiz />
				</div>
			) : (
				<div className="splash-screen">
					<h1 className="splash-title">Quizzical</h1>
					<p className="splash-subtitle text-primary">
						Some description if needed
					</p>
					<Button className="btn-primary start-btn" onClick={startQuizNow}>
						Start quiz
					</Button>
				</div>
			)}
		</main>
	);
}

export default App;
