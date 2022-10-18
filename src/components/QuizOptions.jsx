import React from "react";

function QuizOptions(props) {
	return (
		<>
			<input
				type="radio"
				name={`question ${props.id}`}
				value={props.option}
				id={props.option}
				onClick={() => props.checkVal()}
			/>
			<label className="btn quiz-btn" htmlFor={props.option}>
				{props.option}
			</label>
		</>
	);
}

export default QuizOptions;
