import React from "react";
import Button from "./UI/Button";
import QuizOptions from "./QuizOptions";
function Quiz() {
	return (
		<div className="quiz">
			<p className="tex-primary quiz-text">
				How would one say goodbye in Spanish?
			</p>
			<div className="quiz-options">
				<Button className="quiz-btn selected-answer">Adiós</Button>
				<Button className="quiz-btn correct-answer">Hola</Button>
				<Button className="quiz-btn wrong-answer">Au Revoir</Button>
				<Button className="quiz-btn">Salir</Button>
			</div>
		</div>
	);
}

export default Quiz;
