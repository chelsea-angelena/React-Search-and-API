// import React, { useState } from 'react';
// import Student from './Student';
// export default function Search({ data, setData }) {
// 	const [query, setQuery] = useState('');

// 	const getInfo = () => {
// 		const queryResults = students.filter(
// 			(student) => student.firstName || student.lastName === query
// 		);
// 		setData(queryResults);
// 	};

// 	return (
// 		<>
// 			<input
// 				type='text'
// 				placeholder='Search'
// 				value={query}
// 				onChange={(event) => setQuery(event.target.value)}
// 			/>
// 			<p>{query}</p>
// 			<button onClick={getInfo}>Click</button>

// 			<div>
// 				{results && results.map((item) => <SearchResults results={results} />)}
// 			</div>
// 		</>
// 	);
// }

// const SearchResults = ({ results }) => {
// 	console.log(results);
// 	return <Student student={results} />;
// };
