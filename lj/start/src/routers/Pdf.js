// import PDFViewer from 'pdf-viewer-reactjs';
import React from 'react';
import Image1 from '../files/anime3.png';

const Pdf = () => {

	const onSuccess = () => {
		console.log('success');
	}

	return (
		<div>
			<h1>Pdf</h1>
			<img src={Image1} />
		</div>
	);
};

export default Pdf;
