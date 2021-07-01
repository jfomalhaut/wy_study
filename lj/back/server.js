const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const userRouter = require('./routers/user');
const indexRouter = require('./routers/index');

app.use('/home', indexRouter);
app.use('/user', userRouter);

app.get('/api/getCompany/:id', (req, res) => {
	const { params: { id } } = req;
	// const { id } = req.params;
	// const id = req.params.id;

	switch(Number(id)) {
		case 1: res.send('삼성'); break;
		case 2: res.send('현대'); break;
		case 3: res.send('LG'); break;
		case 4: res.send('한화'); break;
	} 
});

app.get('/api/getBank', (req, res) => {
	const { query: { id, name } } = req;
	res.send(`<h1>${id}, ${name}</h1>`);
});

app.listen(PORT, () => {
	console.log(`Start Express Server, Port Number : ${PORT}`);
});