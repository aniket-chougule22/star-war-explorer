import { useParams, useNavigate } from "react-router-dom";
import { useCharacterContext } from "../context/CharacterContext";
import { useFetchCharacterDetails } from "../hooks/useFetchCharacterDetails";

const CharacterDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const { characterList, loading: listLoading } = useCharacterContext();

  const character = characterList.find(
    (char) => char.name.toLowerCase() === name.toLowerCase()
  );

  const { homeworld, films, vehicles, loading } =
    useFetchCharacterDetails(character);

  if (!character || loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-yellow-200 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  const {gender, birth_year, height, mass} = character;

  return (
    <div className="fixed inset-0 bg-opacity-50 flex flex-col items-center justify-center">
      <div className="absolute top-6 left-0 right-0 px-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold text-yellow-50 text-center w-full mt-5">
          {character.name}
        </h1>
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 right-10 bg-yellow-50 hover:bg-yellow-200 text-black font-semibold py-2 px-4 rounded shadow cursor-pointer"
        >
          Back
        </button>
      </div>

      <div className="bg-yellow-50 text-black rounded-xl shadow-lg p-8 w-full max-w-2xl mx-4 mt-10">
        <div className="mb-4 space-y-2">
          <p>
            <strong>Gender:</strong> {gender}
          </p>
          <p>
            <strong>Birth Year:</strong> {birth_year}
          </p>
          <p>
            <strong>Height:</strong> {height} cm
          </p>
          <p>
            <strong>Mass:</strong> {mass} kg
          </p>
          <p>
            <strong>Homeworld:</strong> {homeworld}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Films:</h2>
          {films.length > 0 ? (
            <ul className="list-disc ml-6">
              {films.map((film, i) => (
                <li key={i}>{film}</li>
              ))}
            </ul>
          ) : (
            <p>No films found.</p>
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">Vehicles:</h2>
          {vehicles.length > 0 ? (
            <ul className="list-disc ml-6">
              {vehicles.map((vehicle, i) => (
                <li key={i}>{vehicle}</li>
              ))}
            </ul>
          ) : (
            <p>No vehicles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
