export default function SearchBar(){
    return (
      <form className="filter-form">
        <input
          className="search-input"
          type="text"
          placeholder="Поиск по названию" />
          <label>
            <input
              className="in-whish-list-checkbox"
              type="checkbox"/>
              Только в списке желаемого
            </label>
          </form>
        );
      }