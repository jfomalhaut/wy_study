import React from 'react'
import { Row } from '../styled';

const Survey = () => {
	return (
		<div>
			<Row height={30}>
				<label>회사명</label>
				<input placeholder="한글만 입력하세요." />
			</Row>
			<Row height={50}>
				<label>회사명</label>
				<input placeholder="한글만 입력하세요." />
			</Row>
			<Row>
				<label>회사명</label>
				<input placeholder="한글만 입력하세요." />
			</Row>
			<Row>
				<label>회사명</label>
				<input placeholder="한글만 입력하세요." />
			</Row>
		</div>
	);
};

export default Survey;
