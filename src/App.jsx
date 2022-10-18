import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/UI/Button";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
	const [startQuiz, setStartQuiz] = useState(
		localStorage.getItem("playingQuiz")
	);
	const [quiz, setQuiz] = useState([]);
	function QuizNow() {
		setStartQuiz((prevState) => !prevState);
	}
	startQuiz
		? localStorage.setItem("playingQuiz", true)
		: localStorage.removeItem("playingQuiz");

	useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=5")
			.then((res) => res.json())
			.then((data) => setQuiz(data.results))
			.catch((error) => console.log("error: ", error));
	}, []);

	const QuizList = quiz.map((quiz, index) => {
		return (
			<Quiz
				key={index}
				id={index}
				question={quiz.question}
				correct_answer={quiz.correct_answer}
				incorrect_answers={quiz.incorrect_answers}
			/>
		);
	});
	return (
		<main className="container">
			{startQuiz ? (
				<div className="quiz-container">
					{QuizList}
					<div className="footer">
						<Button
							className="btn-primary footer-btn quit-btn"
							onClick={QuizNow}
						>
							Quit
						</Button>
						<Button
							className="btn-primary footer-btn check-btn"
							// onClick={"j"}
						>
							Check answers
						</Button>
						<Button
							className="btn-primary footer-btn replay-btn"
							// onClick={QuizNow}
						>
							Reset
						</Button>
					</div>
				</div>
			) : (
				<div className="splash-screen">
					<h1 className="splash-title">Quizzical</h1>
					<p className="splash-subtitle text-primary">
						Some description if needed
					</p>
					<Button className="btn-primary start-btn" onClick={QuizNow}>
						Start quiz
					</Button>
				</div>
			)}
		</main>
	);
}

export default App;
