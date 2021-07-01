import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './routers/Counter';
import Input from './routers/Input';
import Printer from './routers/Printer';
import Phonebook from './routers/Phonebook';
import Phonebook2 from './routers/Phonebook2';
import Survey from './routers/Survey';
import Radio from './routers/Radio';
import Addr from './routers/Addr';
import Custom from './routers/Custom';
import Question from './routers/Question';
import Pdf from './routers/Pdf';


const object = {
	name: '포도',
	price: 1000
};

ReactDOM.render(<Pdf />, document.getElementById('root'));