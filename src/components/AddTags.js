import React, { useState } from 'react';

export default function AddTags({items, setItems, itemName, setItemName}) {
	

	const addItem = (event) => {
		event.preventDefault();
		setItems([
			...items,
			{
				id: items.length,
				name: itemName,
			},
		]);
		setItemName('');
	};

	return (
		<>
			<form onSubmit={addItem}>
				<label>
					<input
						name='item'
						type='text'
						value={itemName}
						onChange={(e) => setItemName(e.target.value)}
					/>
				</label>
			</form>
			<ul>
				{items.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</>
	);
}
