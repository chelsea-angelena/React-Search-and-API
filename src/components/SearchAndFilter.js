import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

export default function Search() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [queryTitle, setQueryTitle] = useState('');
	const [queryBody, setQueryBody] = useState('');

	useEffect(() => {
		const getData = async () => {
			try {
				let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
				setData(res.data);
				let allData = res.data.filter((data) => {
					if (queryTitle) {
						return data.title.toLowerCase().includes(queryTitle.toLowerCase());
					}
					if (queryBody) {
						return data.body.toLowerCase().includes(queryBody.toLowerCase());
					} else {
						return data;
					}
				});
				setData(allData);
			} catch (e) {
				console.log(e);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [queryBody, queryTitle]);

	if (loading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h1>Hello CodeSandbox</h1>
			<input
				onChange={(e) => setQueryTitle(e.target.value)}
				value={queryTitle}
				type='text'
			/>
			<input
				onChange={(e) => setQueryBody(e.target.value)}
				value={queryBody}
				type='text'
			/>
			<div>
				{data.map((post) => (
					<List post={post} key={post.id} />
				))}
			</div>
			{/* {data.map(post => <List data={post} key=post.id/>)} */}
		</div>
	);
}

const List = ({ post, setData }) => {
	return (
		<>
			<div>{post.title}</div>
			<div>{post.body}</div>
			<div>{post.id}</div>
		</>
	);
};
