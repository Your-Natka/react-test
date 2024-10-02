export default function SearchBar({
  filterText = '',
  inWhishListOnly = false,
 setFilterText,
 setInWhishListOnly,
}){
    return (
      <form className="filter-form">
        <input
          className="search-input"
          type="text"
          placeholder="Поиск по названию"
          value={filterText}
          onChange={ (e) => setFilterText(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            className="in-whish-list-checkbox"
            value={inWhishListOnly}
            onChange={(e) => setInWhishListOnly(e.target.checked)}
          />
            Только в списке желаемого
        </label>
      </form>
        );
      }