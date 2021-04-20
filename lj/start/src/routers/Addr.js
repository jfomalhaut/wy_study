import React, { useState } from 'react';
import Axios from 'axios';

const JUSO_APIKEY = 'devU01TX0FVVEgyMDIxMDMxMjExMDIwNDExMDkwNzM=';
const JUSO_URL = 'https://www.juso.go.kr/addrlink/addrLinkApi.do';

function Addr() {
	const [keyword, setKeyword] = useState('');

	const onChangeHandler = (ev) => {
		const { target: { value } } = ev;
		setKeyword(value);
	};

	const search = async () => {
		const url = `${JUSO_URL}?confmKey=${JUSO_APIKEY}&currentPage=1&countPerPage=10&resultType=json&keyword=${keyword}`;
		const result = await Axios.get(url);
		console.log(result);
	};

	return (
		<div>
			<h1>Address Component</h1>
			<input type="text" value={keyword} onChange={onChangeHandler} />	
			<button onClick={search}>검색</button>
		</div>
	);
}

export default Addr;