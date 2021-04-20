import React, { useState } from 'react';
import styled from 'styled-components';

function Custom() {
	const [scale, setScale] = useState(1);

	return (
		<div>
			<article>
				<h1>기업 규모는?</h1>
				<label>
					<RadioButton active={scale === 1} onClick={() => setScale(1)} />
					<b>중소</b>
				</label>
				<label>
					<RadioButton active={scale === 2} onClick={() => setScale(2)} />
					<b>대</b>
				</label>
				<label>
					<RadioButton active={scale === 3} onClick={() => setScale(3)} />
					<b>계열</b>
				</label>
			</article>
		</div>
	);
}

export default Custom;

const RadioButton = styled.span`
	display: inline-block;
	width: 20px;
	height: 20px;
	border: 1px solid #bbb;
	box-sizing: border-box;
	border-radius: 50%;
	margin-right: 10px;
	padding: 3px;
	
	&:before {
		content: '';
		display: ${props => props.active ? 'block' : 'none'};
		background: dodgerblue;
		border-radius: 50%;
		width: 100%;
		height: 100%;
	}
`;