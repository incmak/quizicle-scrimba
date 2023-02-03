import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Button from "./components/UI/Button";
import Quiz from "./components/Quiz";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
	const [startQuiz, setStartQuiz] = useState(
		localStorage.getItem("playingQuiz")
	);
	const [quiz, setQuiz] = useState([]);
	const [check, setCheck] = useState(false);
	const [score, setScore] = useState(0);
	const [options, setOptions] = useState({});
	function QuizNow() {
		setStartQuiz((prevState) => !prevState);
		setCheck(false);
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
	const optionsObj = {};
	const answersObj = {};
	function checkVal(e, id) {
		optionsObj[id] = e.target.value;
		answersObj[id] = quiz[id].correct_answer;
	}

	const [background, setBackground] = useState("");
	function checkAnswers(e) {
		e.preventDefault();
		for (let key in optionsObj) {
			if (optionsObj[key] === answersObj[key]) {
				setScore((prevScrore) => prevScrore + 1);
				setBackground("correct-answer");
			}
		}
		setCheck((prevCheck) => !prevCheck);
		console.log(optionsObj);
		console.log(answersObj);
	}
	console.log(score);
	// function checkAnswers(e) {
	// 	e.preventDefault();
	// 	console.log(optionsObj);
	// 	console.log(answersObj);

	// }
	const QuizList = quiz.map((quiz, index) => {
		const optionsArr = [...quiz.incorrect_answers, quiz.correct_answer].sort(
			() => Math.random() - 0.5
		);
		return (
			<Quiz
				key={index}
				id={index}
				question={quiz.question}
				correct_answer={quiz.correct_answer}
				incorrect_answers={quiz.incorrect_answers}
				all_options={optionsArr}
				checkVal={checkVal}
				checkAnswers={checkAnswers}
				background={background}
			/>
		);
	});
	console.log(check);
	return (
		<main className="container">
			{startQuiz ? (
				<form onSubmit={checkAnswers}>
					<div className="quiz-container">
						{QuizList}
						<div className="footer">
							<Button
								className="btn-primary footer-btn quit-btn"
								onClick={QuizNow}
							>
								Quit
							</Button>
							{!check ? (
								<Button
									className="btn-primary footer-btn check-btn"
									type="submit"
									// onClick={"j"}
								>
									Check answers
								</Button>
							) : (
								<p> You scored {score}/5 correct answers </p>
							)}
							<Button
								className="btn-primary footer-btn replay-btn"
								// onClick={resetNow}
							>
								Reset
							</Button>
						</div>
					</div>
				</form>
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
