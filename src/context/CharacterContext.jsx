import { createContext, useContext, useState, useEffect } from "react";
import { getPeopleList } from "../services/apiService";

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCharacters = async () => {
    try {
      const data = await getPeopleList();
      setCharacterList(data);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch character list:", err);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <CharacterContext.Provider value={{ characterList, loading }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => useContext(CharacterContext);
