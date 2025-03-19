
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface MovieCardProps {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  year: string;
  genre: string;
}

const MovieCard = ({ id, title, posterUrl, rating, year, genre }: MovieCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  // Check if image is already cached
  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <Link 
      to={`/movie/${id}`} 
      className={cn(
        "group relative block overflow-hidden rounded-lg movie-card-shadow bg-white transition-all duration-300",
        !loaded && "animate-pulse bg-gray-200"
      )}
    >
      <div className="aspect-[2/3] w-full bg-gray-100 overflow-hidden">
        <img
          ref={imageRef}
          src={posterUrl}
          alt={title}
          className={cn(
            "object-cover w-full h-full transition-all duration-500 group-hover:scale-105",
            !loaded && "opacity-0",
            loaded && "opacity-100"
          )}
          onLoad={handleImageLoad}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="bg-white/90 backdrop-blur-card rounded-lg p-3 shadow-lg">
          <h3 className="font-semibold text-sm text-primary text-balance line-clamp-1">{title}</h3>
          <div className="flex justify-between items-center text-xs text-muted-foreground mt-1">
            <span>{year}</span>
            <span>{genre}</span>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <StarRating initialRating={rating} size={14} />
            <span className="text-xs font-medium">{rating.toFixed(1)}/5</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
