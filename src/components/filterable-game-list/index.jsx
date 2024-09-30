import SearchBar from "../search-bar";
import GameList from "../game-list"

export default function FilterableGameList({ games = [] }) {
  return (
    <div className="filterable-game-list">
      <SearchBar 
      />
      <GameList
      />
    </div>
  );
}