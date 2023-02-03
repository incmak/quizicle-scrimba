import React, { useState } from "react";

function QuizOptions(props) {
	//   const [selected, setSelected] = useState(false);
	//   const [correct, setCorrect] = useState(false);
	//   const [incorrect, setIncorrect] = useState(false);
	//   const [selectedOption, setSelectedOption] = useState("");
	//   const [correctOption, setCorrectOption] = useState("");
	//   const [incorrectOption, setIncorrectOption] = useState("");
	//   const [options, setOptions] = useState(() => {});
	//   function checkVal(event, id) {

	// 	let enteredInput = event.target.value;
	// 	let answer = props.correct_answer;
	// 	if (enteredInput === answer) {
	// 		console.log("correct");
	// 		setCorrect(true);
	// 		setCorrectOption(enteredInput);
	// 	} else {
	// 		console.log("incorrect");
	// 		setIncorrect(true);
	// 		setIncorrectOption(enteredInput);
	// 	}
	// 	console.log(enteredInput, answer);
	// 	setSelected(true);
	// 	setSelectedOption(enteredInput);
	// 	// console.log(props.correct_answer);
	localStorage.setItem("quiz", JSON.stringify(props));
	let quiz = JSON.parse(localStorage.getItem("quiz"));
	return (
		<>
			<input
				type="radio"
				name={`question ${props.id}`}
				value={props.option}
				id={`${props.option}${props.id}`}
				onClick={(event) => props.checkVal(event, props.id)}
			/>
			<label
				className={`btn quiz-btn ${props.background}`}
				htmlFor={`${props.option}${props.id}`}
			>
				{props.option}
			</label>
		</>
	);
}

export default QuizOptions;
