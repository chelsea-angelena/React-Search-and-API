import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = () => {
	const [results, setResults] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const callAPI = async () => {
			try {
				let res = await axios.get(
					'https://api.hatchways.io/assessment/students'
				);
				setResults(res.data.students);
			} catch (e) {
				setError(e);
			} finally {
				setLoading(false);
			}
		};
		callAPI();
	}, []);

	return [results, setResults, error, loading];
};
export default useSearch;
