import { useState } from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({
	toggleShort,
	setToggleShort,
	searchQuery,
	handleSubmitSearch,
	setForSaved,
	isLoading,
}) {
	const [inputField, setInputField] = useState(searchQuery);
	const [error, setError] = useState(false);
	function handleOnSubmit(e) {
		e.preventDefault();
		if (inputField === '') {
			setError(true);
		} else {
			setError(false);
			if (setForSaved) {
				setForSaved(inputField);
			}
			handleSubmitSearch(inputField, toggleShort);
		}
	}

	return (
		<section className='search-form'>
			<div className='search-form__container'>
				<form
					className='search-form__form'
					onSubmit={(e) => handleOnSubmit(e)}
				>
					<fieldset className='search-form__field-text'>
						<input
							type='text'
							placeholder={error ? 'Нужно ввести ключевое слово' : 'Фильм'}
							className={`search-form__input ${error && 'search-form__error'}`}
							value={inputField}
							onChange={(e) => setInputField(e.target.value)}
						/>
						<button
							disabled={isLoading}
							className='search-form__submit-btn'
						>
							Поиск
						</button>
					</fieldset>
					<FilterCheckbox
						text={'Короткометражки'}
						searchQuery={searchQuery}
						toggleShort={toggleShort}
						handleSubmitSearch={handleSubmitSearch}
						setToggleShort={setToggleShort}
					/>
				</form>
			</div>
		</section>
	);
}

export default SearchForm;
