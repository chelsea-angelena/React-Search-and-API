import React, { useState, useEffect } from 'react';
// import Icons from './styles/js/fontAwesome';
import Student from './Student';

import axios from 'axios';

function StudentList() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [nameQuery, setNameQuery] = useState('');
	const [tagQuery, setTagQuery] = useState('');
	const [error, setError] = useState(null);
	const [tags, setTags] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios.get(
					'https://api.hatchways.io/assessment/students'
				);
				let allData = res.data.students.filter((student) => {
					if (nameQuery) {
						return student.firstName
							.toLowerCase()
							.includes(nameQuery.toLowerCase());
					}
					if (tagQuery) {
						return tags.toLowerCase().includes(tagQuery.toLowerCase());
					} else {
						return student;
					}
				});

				// setData(res.data.students);
				// let allData = res.data.students.filter((data) => {
				// 	if (queryTitle) {
				// 		return data.firstName
				// 			.toLowerCase()
				// 			.includes(queryTitle.toLowerCase());
				// }

				// if (queryBody) {
				// 	return data.body.toLowerCase().includes(queryBody.toLowerCase());
				// 	} else {
				// 		return data;
				// 	}
				// });
				setData(allData);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [nameQuery, tagQuery]);
	if (loading) {
		return <div>Loading...</div>;
	}
	if (error) {
		return <div>Error</div>;
	}
	return (
		<div className='studentlist'>
			<div className='studentlist__search'>
				<input
					onChange={(e) => setNameQuery(e.target.value)}
					value={nameQuery}
					type='text'
				/>
				<input
					onChange={(e) => setTagQuery(e.target.value)}
					value={tagQuery}
					type='text'
				/>
				<div>
					{data.map((student) => (
						<Student
							student={student}
							key={student.id}
							// tags={tags}
							setTags={setTags}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default StudentList;

// const List = ({ students, data }) => {
// 	console.log(data);
// 	return (
// 		<div>
// 			{students.map((student) => (
// 				<Student student={student} key={student.id} />
// 			))}
// 		</div>
// 	);
// };
