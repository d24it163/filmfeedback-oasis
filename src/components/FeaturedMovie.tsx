
import { useState } from "react";
import { Link } from "react-router-dom";
import { Play, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import StarRating from "./StarRating";
import { cn } from "@/lib/utils";

interface FeaturedMovieProps {
  id: string;
  title: string;
  backdropUrl: string;
  posterUrl: string;
  rating: number;
  year: string;
  genres: string[];
  overview: string;
}

const FeaturedMovie = ({
  id,
  title,
  backdropUrl,
  posterUrl,
  rating,
  year,
  genres,
  overview
}: FeaturedMovieProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden animate-fade-in">
      {/* Backdrop Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-black">
        <img
          src={backdropUrl}
          alt={`${title} backdrop`}
          className={cn(
            "w-full h-full object-cover opacity-60 transition-opacity duration-1000",
            !loaded && "opacity-0",
            loaded && "opacity-60"
          )}
          onLoad={() => setLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 md:px-8 flex flex-col justify-end pb-16 md:pb-20">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Poster Image - Hidden on Mobile */}
          <div className="hidden md:block w-1/4 max-w-[220px] rounded-lg overflow-hidden shadow-2xl animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <img 
              src={posterUrl} 
              alt={`${title} poster`} 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-2/3 space-y-4 md:space-y-5">
            <div className="space-y-2 animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
              <div className="flex flex-wrap gap-2 mb-3">
                {genres.map((genre, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent"
                  >
                    <Tag className="mr-1 h-3 w-3" />
                    {genre}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">{title}</h1>
              
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-muted-foreground">{year}</span>
                <div className="flex items-center space-x-2">
                  <StarRating initialRating={rating} size={16} />
                  <span className="font-medium">{rating.toFixed(1)}/5</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-base md:text-lg line-clamp-3 md:line-clamp-4 max-w-2xl animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
              {overview}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 animate-slide-up opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
              <Button asChild>
                <Link to={`/movie/${id}`}>View Details</Link>
              </Button>
              <Button variant="outline" className="gap-1">
                <Play className="h-4 w-4" />
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
