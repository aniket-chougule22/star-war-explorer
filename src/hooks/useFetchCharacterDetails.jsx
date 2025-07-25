import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchCharacterDetails = (character) => {
  const [homeworld, setHomeworld] = useState("");
  const [films, setFilms] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchDetails = async () => {
      try {
        const homeworldRes = await axios.get(character.homeworld);
        setHomeworld(homeworldRes.data.name);
      } catch {
        setHomeworld("Unknown");
      }

      try {
        const filmTitles = [];
        for (const url of character.films) {
          const res = await axios.get(url);
          filmTitles.push(res.data.title);
        }
        setFilms(filmTitles);
      } catch {
        setFilms([]);
      }

      try {
        const vehicleNames = [];
        for (const url of character.vehicles) {
          const res = await axios.get(url);
          vehicleNames.push(res.data.name);
        }
        setVehicles(vehicleNames);
      } catch {
        setVehicles([]);
      }

      setLoading(false);
    };

    fetchDetails();
  }, [character]);

  return { homeworld, films, vehicles, loading };
};