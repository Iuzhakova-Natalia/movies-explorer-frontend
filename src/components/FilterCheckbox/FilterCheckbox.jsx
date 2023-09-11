import './FilterCheckbox.css';
function FilterCheckbox({
	text,
	toggleShort,
	setToggleShort,
	searchQuery,
	handleSubmitSearch,
}) {
	const handleChange = () => {
		setToggleShort(!toggleShort);
	};

	return (
		<label className='filter-checkbox'>
			<input
				className='filter-checkbox__input'
				type='checkbox'
				checked={toggleShort}
				onChange={handleChange}
				defaultValue={false}
			/>
			<span className='filter-checkbox__slider'></span>
			<span className='filter-checkbox__text'>{text}</span>
		</label>
	);
}

export default FilterCheckbox;
