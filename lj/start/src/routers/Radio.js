import React, { useState } from 'react';

function Radio() {
	const [sports, setSports] = useState('');

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		console.log(value);
		setSports(value);
	};

	return (
		<section>
			<h1>Favorite Sports</h1>
			<article>
				<label>
					<input type="radio" name="sports" checked={sports === 'soccer'} value="soccer" onChange={onChangeHandler} />
					<span>축구</span>
				</label>
			</article>
			<article>
				<label>
					<input type="radio" name="sports" checked={sports === 'basketball'} value="basketball" onChange={onChangeHandler} />
					<span>농구</span>
				</label>
			</article>
			<article>
				<label>
					<input type="radio" name="sports" checked={sports === 'baseball'} value="baseball" onChange={onChangeHandler} />
					<span>야구</span>
				</label>
			</article>

			<button onClick={() => setSports('soccer')}>축구</button>
			<button onClick={() => setSports('basketball')}>농구</button>
			<button onClick={() => setSports('baseball')}>야구</button>
		</section>
	);
}

export default Radio;