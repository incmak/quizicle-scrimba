import React, { useState } from "react";

function Scrim(props) {
	const [formData, setFormData] = useState({});
	console.log(formData);

	function handleChange(event) {
		const { name, value, type, checked } = event.target;
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: type === "checkbox" ? checked : value,
			};
		});
	}

	return (
		<fieldset>
			<legend>Current employment status</legend>

			<input
				type="radio"
				id="unemployed"
				name="employment"
				value="unemployed"
				onClick={handleChange}
			/>
			<label htmlFor="unemployed">Unemployed</label>
			<br />

			<input
				type="radio"
				id="part-time"
				name="employment"
				value="part-time"
				onClick={handleChange}
			/>
			<label htmlFor="part-time">Part-time</label>
			<br />

			<input
				type="radio"
				id="full-time"
				name="employment"
				value="full-time"
				onClick={handleChange}
			/>
			<label htmlFor="full-time">Full-time</label>
			<br />

			<input
				type="radio"
				id="full-time-2"
				name={`employment ${props.id}`}
				value="full-time-2"
				onClick={handleChange}
			/>
			<label htmlFor="full-time-2">Full-time</label>
			<br />
		</fieldset>
	);
}

export default Scrim;
