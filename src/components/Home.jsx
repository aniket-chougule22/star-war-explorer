import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Pagination from "../utils/Pagination";
import SearchInput from "./SearchInput";
import Shimmer from "./Shimmer";
import { useCharacterContext } from "../context/CharacterContext";

const Home = () => {
  const { characterList, loading } = useCharacterContext();
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);

  const cardsPerPage = 8;

  useEffect(() => {
    setFilteredList(characterList);
  }, [characterList]);

  useEffect(() => {
    const result = characterList.filter((card) =>
      card.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(result);
    setPage(0);
  }, [searchText, characterList]);

  const totalPages = Math.ceil(filteredList.length / cardsPerPage);

  const paginatedCards = filteredList.slice(
    page * cardsPerPage,
    (page + 1) * cardsPerPage
  );

  return (
    <div className="p-2 max-w-10xl mx-auto">
      <h1 className="text-3xl font-bold text-center mx-3 my-2 text-yellow-100">
        Star Wars Explorer 🚀
      </h1>

      <div className="flex justify-center mb-4">
        <SearchInput onSearchText={setSearchText} />
      </div>

      <div className="flex flex-wrap gap-4 min-h-[400px] mx-10">
        {loading ? (
          <Shimmer />
        ) : paginatedCards.length > 0 ? (
          paginatedCards.map((character) => (
            <CharacterCard key={character.name} character={character} />
          ))
        ) : (
          <p className="text-center text-yellow-400 mt-10 text-2xl">
            No characters found.
          </p>
        )}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
};

export default Home;
