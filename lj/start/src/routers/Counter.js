import React, { useEffect, useState } from 'react';

function Counter() {
	const [count, setCount] = useState(100);

	const increasement = () => {
		setCount(count + 1);
	};

	const decreasement = () => {
		setCount(count - 1);
	};

	useEffect(() => {
		const remain = count % 10;
		if (remain === 0) {
			console.log('count는 10의 배수');
		} else {
			console.log('count는 10의 배수가 아니다')
		}
	}, [count]);

	return (
		<div>
			<h1>Count : {count}</h1>
			<button onClick={increasement}>increasement</button>
			<button onClick={decreasement}>decreasement</button>
		</div>
	);
}

export default Counter;