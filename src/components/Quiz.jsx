import React, { useState } from "react";
import parse from "html-react-parser";
import QuizOptions from "./QuizOptions";
function Quiz(props) {
	const [options, setOptions] = useState({});
	console.log(options);
	function checkVal() {
		console.log(event.target.value);
	}
	const optionsArr = [...props.incorrect_answers, props.correct_answer].sort(
		() => Math.random() - 0.5
	);

	const optionsList = optionsArr.map((option_items, index) => {
		let option = parse(option_items);
		return (
			<QuizOptions
				key={index}
				id={props.id}
				option={option}
				checkVal={checkVal}
			/>
		);
	});
	return (
		<div className="quiz">
			<p className="tex-primary quiz-text">{parse(props.question)}</p>
			<div className="quiz-options">{optionsList}</div>
		</div>
	);
}

export default Quiz;
