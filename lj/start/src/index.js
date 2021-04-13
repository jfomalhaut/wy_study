import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './routers/Counter';
import Input from './routers/Input';
import Printer from './routers/Printer';
import Phonebook from './routers/Phonebook';
import Phonebook2 from './routers/Phonebook2';
import Survey from './routers/Survey';

const object = {
	name: '포도',
	price: 1000
};

ReactDOM.render(<Survey />, document.getElementById('root'));