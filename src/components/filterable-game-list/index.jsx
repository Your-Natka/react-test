import SearchBar from "../search-bar";
import GameList from "../game-list"
import {useState} from "react"

export default function FilterableGameList({ games = [] }) {
  const [filterText, setFilterText] = useState ('');
  const [inWhishListOnly, setInWhishListOnly ] = useState (false);
  return (
    <div className="filterable-game-list">
      <SearchBar 
      filterText={filterText}
      inWhishListOnly ={inWhishListOnly}
      setFilterText={setFilterText}
      setInWhishListOnly={setInWhishListOnly}
      />
      <GameList games= {games}
      filterText={filterText}
      inWhishListOnly={inWhishListOnly}
      />
    </div>
  );
}