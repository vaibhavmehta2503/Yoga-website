import React from 'react'
import { IoIosStarHalf, IoIosStar, IoIosStarOutline } from "react-icons/io";

function RatingStar({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <IoIosStar key={`full-${i}`} className="text-yellow-400" />
      ))}

      {/* Half Star */}
      {halfStar && <IoIosStarHalf className="text-yellow-400" />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <IoIosStarOutline key={`empty-${i}`} className="text-gray-300" />
      ))}
    </div>
  );
}

export default RatingStar;
