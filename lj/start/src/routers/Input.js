import React, { useState } from 'react';

function Input() {
	const [username, setUsername] = useState('');

	const onChangeHandler = (ev) => {
		// console.log(ev.target.value);
		// const value = ev.target.value;
		const { target: { value, placeholder } } = ev;
		setUsername(value);
	};

	return (
		<div>
			<h1>Input Component</h1>
			<input type="text" value={username} onChange={onChangeHandler} placeholder="아이디를 입력하세요" />
			<h1>{username}</h1>
		</div>
	);
}

export default Input;
