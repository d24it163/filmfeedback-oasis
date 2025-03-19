
import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  initialRating?: number;
  totalStars?: number;
  size?: number;
  editable?: boolean;
  onRatingChange?: (rating: number) => void;
}

const StarRating = ({
  initialRating = 0,
  totalStars = 5,
  size = 20,
  editable = false,
  onRatingChange
}: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index: number) => {
    if (!editable) return;
    const newRating = index + 1;
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (index: number) => {
    if (!editable) return;
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    if (!editable) return;
    setHoverRating(0);
  };

  const getStarFill = (index: number) => {
    const activeStar = hoverRating || rating;
    
    if (index < activeStar) {
      return "fill-current text-amber-400";
    }
    
    return "text-gray-300";
  };

  return (
    <div className="flex items-center space-x-1 transition-opacity">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          className={`
            cursor-${editable ? "pointer" : "default"}
            transition-all duration-150
            transform hover:scale-110
            ${getStarFill(index)}
          `}
          size={size}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default StarRating;
