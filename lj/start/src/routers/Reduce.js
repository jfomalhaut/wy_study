import React, { useEffect, useState } from 'react';

const DATA = ['포도', '사과', '귤'];
const FRUITS = {
	item1: '포도',
	item2: '사과',
	item3: '키위',
	item4: '오렌지',
};

const CART = [
	{ id: 1, name: '포도', qty: 5, price: 1000 },
	{ id: 2, name: '사과', qty: 3, price: 2000 },
	{ id: 3, name: '키위', qty: 1, price: 3000 },
	{ id: 4, name: '오렌지', qty: 4, price: 4000 },
];

const HISTORY = [
	{ id: 1, year: 2010, record: '한국공교육원 설립' },
	{ id: 2, year: 2010, record: '국내 최초 민방위 사이버 교육 시작' },
	{ id: 3, year: 2011, record: '민방위 사이버 교육 콜센터 오픈' },
	{ id: 4, year: 2012, record: '스마트폰 모바일 교육서비스 시작' },
	{ id: 5, year: 2015, record: '교육 이수자 100만명 돌파' },
	{ id: 6, year: 2018, record: '온라인 교육 및 전자고지 사업부 분사' },
	{ id: 7, year: 2018, record: '박근범 대표이사 취임' },
	{ id: 9, year: 2018, record: '국내 최초 민방위 교육시스템 특허 취득' },
	{ id: 10, year: 2019, record: '벤처기업 인증 획득' },
	{ id: 11, year: 2019, record: '기술평가 우수기업 인증 획득' },
	{ id: 12, year: 2019, record: '교육 이수자 300만명 돌파' },
	{ id: 13, year: 2019, record: '누적 계약 기관 300개 돌파' },
	{ id: 14, year: 2020, record: '공공부문 네이버 공공 클라우드 도입' },
	{ id: 15, year: 2020, record: '네이버, 카카오페이와 업무협약 체결' },
	{ id: 16, year: 2020, record: '운수종사자 온라인교육 센터 오픈' },
	{ id: 17, year: 2020, record: '모바일 전자고지 수령 100만건 돌파' },
	{ id: 18, year: 2020, record: '누적 계약 기관 400개 돌파' },
	{ id: 22, year: 2018, record: '국내 최초 민방위 모바일 전자고지 서비스 시작' },
	{ id: 27, year: 2020, record: 'SK주식회사 비즈니스 파트너쉽 계약' },
];

const TEMP = [
	{
		year: '2010',
		records: [
			{ id: 1, year: 2010, record: '한국공교육원 설립' },
			{ id: 2, year: 2010, record: '국내 최초 민방위 사이버 교육 시작' },
		]
	},
	{
		year: '2019',
		records: [
			{ id: 10, year: 2019, record: '벤처기업 인증 획득' },
			{ id: 11, year: 2019, record: '기술평가 우수기업 인증 획득' },
			{ id: 12, year: 2019, record: '교육 이수자 300만명 돌파' },
			{ id: 13, year: 2019, record: '누적 계약 기관 300개 돌파' },
		]
	},
	{
		year: '2020',
		records: [
			{ id: 14, year: 2020, record: '공공부문 네이버 공공 클라우드 도입' },
			{ id: 15, year: 2020, record: '네이버, 카카오페이와 업무협약 체결' },
			{ id: 16, year: 2020, record: '운수종사자 온라인교육 센터 오픈' },
			{ id: 17, year: 2020, record: '모바일 전자고지 수령 100만건 돌파' },
			{ id: 18, year: 2020, record: '누적 계약 기관 400개 돌파' },
			{ id: 27, year: 2020, record: 'SK주식회사 비즈니스 파트너쉽 계약' },
		]
	},
];

const TEMP2 = {
	'2010': [
		{ id: 1, year: 2010, record: '한국공교육원 설립' },
		{ id: 2, year: 2010, record: '국내 최초 민방위 사이버 교육 시작' },
	],
	'2019': [
		{ id: 10, year: 2019, record: '벤처기업 인증 획득' },
		{ id: 11, year: 2019, record: '기술평가 우수기업 인증 획득' },
		{ id: 12, year: 2019, record: '교육 이수자 300만명 돌파' },
		{ id: 13, year: 2019, record: '누적 계약 기관 300개 돌파' },
	],
	'2020': [
		{ id: 14, year: 2020, record: '공공부문 네이버 공공 클라우드 도입' },
		{ id: 15, year: 2020, record: '네이버, 카카오페이와 업무협약 체결' },
		{ id: 16, year: 2020, record: '운수종사자 온라인교육 센터 오픈' },
		{ id: 17, year: 2020, record: '모바일 전자고지 수령 100만건 돌파' },
		{ id: 18, year: 2020, record: '누적 계약 기관 400개 돌파' },
		{ id: 27, year: 2020, record: 'SK주식회사 비즈니스 파트너쉽 계약' },
	]
};

const Reduce = () => {
	const [list, setList] = useState([]);

	const study = () => {
		const initValue = 0;
		const total = CART.reduce((acc, cur, idx) => {
			const result = cur.price * cur.qty;
			return acc + result;
		}, initValue);
		console.log(total);
	};

	const study2 = () => {
		const combineYear = HISTORY.reduce((acc, cur, idx) => {
			return {
				...acc,
				[cur.year]: acc[cur.year] ? [ ...acc[cur.year], cur ] : [cur]
			}
		}, {});

		setList(combineYear);

		const combineYear2 = HISTORY.reduce((acc, cur) => {
			const index = acc.map(item => item.year).indexOf(cur.year);
			if (index === -1) {
				return acc.concat({
					year: cur.year,
					records: [cur]
				});
			} else {
				acc[index].records.concat(cur);
				return acc;
			}
		}, []);
		// console.log(combineYear2);
	};

	useEffect(() => {
		study2();
	}, []);

	return (
		<div>
			<h1>Reduce 활용</h1>
			<ul>
				{Object.keys(list).map(item => (
					<li>
						<label>{item}</label>
						<ul>
							{list[item].map(child => (
								<li>{child.record}</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Reduce;
