import React, { useState, useEffect } from 'react';
import Grades from './Grades';
import AddTags from './AddTags';
import { FaPlus } from 'react-icons/fa';

// import Scores from './Scores';

const Student = ({ student, tags, setTags }) => {
	const [items, setItems] = useState([]);
	const [itemName, setItemName] = useState('');
	const [isHidden, setHidden] = useState(true);
	const toggleHidden = () => {
		setHidden(!isHidden);
	};
	const { company, email, firstName, grades, lastName, pic, skill } = student;

	return (
		<>
			<div className='student'>
				<img
					className='student__avatar'
					src={pic}
					alt='avatar'
					width='100px'
					height='100px'
				/>
				<div className='student__col'>
					<h1 className='student__row'>
						{firstName}
						<span>{lastName}</span>
					</h1>
					<div className='student__stats'>
						<p>Email: {email}</p>
						<p>Company: {company}</p>
						<p>Skill: {skill}</p>
						<Grades grades={grades} />
						<div className='student__scores'>{!isHidden && <Modal />}</div>
						<div className='student__tagDiv'>
							<AddTags
								items={items}
								setItems={setItems}
								itemName={itemName}
								setItemName={setItemName}
							/>
						</div>
					</div>
				</div>
				<button onClick={toggleHidden}>
					<FaPlus size={32} color='grey' style={{ border: 'none' }} />
				</button>
			</div>
			<div className='student__border'></div>
		</>
	);
};
export default Student;
const Modal = () => (
	<>
		<div className='modal'>
			<ol>
				<li>Score 1</li>
				<li>Score 1</li>
				<li>Score 1</li>
			</ol>
		</div>
		<div className='student__border'></div>
	</>
);
