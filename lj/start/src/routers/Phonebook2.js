import React, { useEffect, useState } from 'react';

function Phonebook2() {
	const [list, setList] = useState([]);
	const [info, setInfo] = useState({
		user: '',
		age: '',
		phone: '',
	});

	const { user, age, phone } = info;

	const onChangeHandler = (ev) => {
		const { target: { value, name } } = ev;
		setInfo({
			...info,
			[name]: value
		});
	};

	useEffect(() => {
		console.log(info);
	}, [info]);

	return (
		<div>
			<input value={user} name="user" onChange={onChangeHandler} placeholder="이름" />
			<input value={age} name="age" onChange={onChangeHandler} placeholder="나이" />
			<input value={phone} name="phone" onChange={onChangeHandler} placeholder="전화번호" />
		</div>
	);
}

export default Phonebook2;