import React from 'react';

const Company = [
	{ id: 1, name: '광진컴퍼니', type: 3, employ: 5000 },
	{ id: 2, name: '현대', type: 2, employ: 3000 },
	{ id: 3, name: '삼성', type: 3, employ: 6000 },
	{ id: 4, name: 'LG', type: 1, employ: 1000 },
	{ id: 5, name: '리먼브라더스', type: 5, employ: 1000 },
];

// type에 대해
// 1: 중소기업, 2: 중견기업, 3: 대기업

const nf = new Intl.NumberFormat();

function Printer() {

	const transType = (type) => {
		switch (type) {
			case 1: return '중소기업';
			case 2: return '중견기업';
			case 3: return '대기업';
			default: return '미분류';
		}
	};
	
	return (
		<div>
			<h1>Printer Component</h1>
			<ul>
				{Company.map(item => (
					<li key={`COMPANY${item.id}`}>
						<h3>회사명: {item.name}</h3>
						<h4>분류: {transType(item.type)}</h4>
						<h4>직원수: {nf.format(item.employ)}명</h4>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Printer;


// Props로 사용해보기