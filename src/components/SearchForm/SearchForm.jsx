import useFormWithValidation from "../hooks/useFormWithValidation";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

const SearchForm = () => {
  const { values, handleChange } = useFormWithValidation();
  return (
    <section className="search-container">
      <form className="search__form" name="search" noValidate>
        <input
          className="search__input"
          name="search"
          type="text"
          placeholder="Фильм"
          autoComplete="off"
          value={values.search || ""}
          onChange={handleChange}
          required
        />
        <span className="search__error"></span>
        <button className="search__button" type="submit"></button>
      </form>
      <FilterCheckbox />
    </section>
  );
};

export default SearchForm;
