import React, { useState } from 'react';

const field = {
	scale: '',
	location: '',
	startup: '',
	moneyType: '',
};

function Question() {
	const [info, setInfo] = useState(field);
	const { scale, location, startup, moneyType } = info;

	const onChangeHandler = (ev) => {
		const { target: { name, value } } = ev;
		setInfo({
			...info,
			[name]: value * 1
		});
	};

	return (
		<section>
			<article>
				<h1>Q1. 기업규모는?</h1>
				<div>
					<label>
						<input type="radio" value={1} checked={scale === 1} name="scale" onChange={onChangeHandler} />
						<span>중소</span>
					</label>
					<label>
						<input type="radio" value={2} checked={scale === 2} name="scale" onChange={onChangeHandler} />
						<span>대</span>
					</label>
					<label>
						<input type="radio" value={3} checked={scale === 3} name="scale" onChange={onChangeHandler} />
						<span>계열</span>
					</label>
				</div>
			</article>
		</section>
	);
}

export default Question;