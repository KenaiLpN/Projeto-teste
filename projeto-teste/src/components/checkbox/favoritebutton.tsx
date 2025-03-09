import  { useState } from 'react';
import { MdOutlineStarOutline, MdStar } from 'react-icons/md';

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="flex bg-white transition"
    >
      {isFavorite ? (
        <MdStar className="h-6 w-6 text-yellow-500" />
      ) : (
        <MdOutlineStarOutline className="h-6 w-6 text-gray-500" />
      )}
    </button>
  );
}

export default FavoriteButton;
