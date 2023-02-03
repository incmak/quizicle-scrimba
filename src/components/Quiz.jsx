import React, { useState, useRef, useEffect } from "react";
import parse from "html-react-parser";
import QuizOptions from "./QuizOptions";
function Quiz(props) {
	const [options, setOptions] = useState([]);
	//Randomize options
	useEffect(() => {
		setOptions(
			[...props.incorrect_answers, props.correct_answer].sort(
				() => Math.random() - 0.5
			)
		);
	}, []);
	const optionsList = options.map((option_items, index) => {
		let option = parse(option_items);
		return (
			<QuizOptions
				key={index}
				id={props.id}
				option={option}
				checkVal={(event) => props.checkVal(event, props.id)}
				checkAnswers={props.checkAnswers}
				background={props.background}
			/>
		);
	});
	return (
		<div className="quiz">
			{/* <Scrim id={props.id} /> */}
			<p className="tex-primary quiz-text">{parse(props.question)}</p>
			<div className="quiz-options">{optionsList}</div>
		</div>
	);
}

export default Quiz;
