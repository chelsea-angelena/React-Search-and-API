import React from 'react';

export default function Grades({ grades }) {
	const split = grades[0];

	let newArr = split.split(' ');

	return <div>Grades: {newArr}%</div>;
}
