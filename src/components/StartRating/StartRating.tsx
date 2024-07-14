import { useState } from "react";

export interface IStarRatingPropsType {
    rating: number;
    size: number;
    handleOnchange: (rating: number) => void;
}
export const StartRating = ({rating, size, handleOnchange}: IStarRatingPropsType) => {
  const[hoveredRating, setHoveredRating] = useState<number>(0);
  const handleStarHover = (hoveredRating: number) => {
    setHoveredRating(hoveredRating);
  }

  return (
    <div className="star-rating text-center">
      {Array(size)
        .fill("")
        .map((_, index) => {
          const starValue = index + 1;
          let starClass = "star";

          if (hoveredRating >= starValue) {
            starClass += " hover";
          } else if (rating >= starValue) {
            starClass += " active";
          }
          return (
            <span
              key={index}
              className={starClass}
              onClick={() => handleOnchange(starValue)}
              onMouseEnter={() => handleStarHover(starValue)}
              onMouseLeave={() => handleStarHover(0)}
            >
              &#9733;
            </span>
          );
        })}
    </div>
  )
}
