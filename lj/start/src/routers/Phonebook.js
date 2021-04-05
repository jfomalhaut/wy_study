import React, { useState } from 'react';

function Phonebook() {
	const [list, setList] = useState([]);
	const [user, setUser] = useState('');
	const [age, setAge] = useState('');
	const [phone, setPhone] = useState('');

	const onChangeUser = (ev) => {
		const { target: { value } } = ev;
		setUser(value);
	};

	const onChangeAge = (ev) => {
		const { target: { value } } = ev;
		setAge(value);
	};

	const onChangePhone = (ev) => {
		const { target: { value } } = ev;
		setPhone(value);
	};

	const insert = () => {
		const newList = list.concat({ user, age, phone });
		setList(newList);
	};

	return (
		<div>
			<input value={user} onChange={onChangeUser} placeholder="이름" />
			<input value={age} onChange={onChangeAge} placeholder="나이" />
			<input value={phone} onChange={onChangePhone} placeholder="전화번호" />
			<button onClick={insert}>입력</button>
			<ul>
				{list.map(item => (
					<li>{item.user}</li>
				))}
			</ul>
		</div>
	);
}

export default Phonebook;