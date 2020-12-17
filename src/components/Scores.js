import React, { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';

export default function Scores({ scores }) {
	const [isHidden, setHidden] = useState(true);
	const toggleHidden = () => {
		setHidden(!isHidden);
	};

	return (
		<>
			<button onClick={toggleHidden}>
				<FaPlus size={32} color='grey' style={{ border: 'none' }} />
			</button>
			<div className='student__scores' >
				{!isHidden && <Modal scores={scores} />}
			</div>
			<div className="student__border"></div>
		</>
	);
}

const Modal = ({ scores }) => (
	<div className='modal'>
		<ol>
			<li>Score 1</li>
			<li>Score 1</li>
			<li>Score 1</li>
		</ol>
	</div>
);
