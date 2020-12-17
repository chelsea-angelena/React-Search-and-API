import React, { useState, useEffect } from 'react';
import Icons from './styles/js/fontAwesome';
import StudentList from './components/StudentList';
import axios from 'axios';

function App() {
	return (
		<div className='app'>
			<StudentList />
		</div>
	);
}

export default App;
