import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {

  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/character/${character.name}`);
  };

  return (
    <div className="w-[280px] h-[230px] bg-yellow-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">
          {character.name}
        </h2>

        <div className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <div className="flex justify-between">
            <span className="font-semibold">Gender:</span>
            <span className="capitalize">{character.gender}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Birth:</span>
            <span>{character.birth_year}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Height:</span>
            <span>{character.height} cm</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Mass:</span>
            <span>{character.mass} kg</span>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <button className="px-3 py-1 bg-indigo-500 hover:bg-indigo-700 text-white text-sm rounded-2xl shadow transition cursor-pointer" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};


export default CharacterCard;