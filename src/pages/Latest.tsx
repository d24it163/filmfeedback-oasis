
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { getAllMovies } from "@/services/movieService";

const Latest = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // For demo purposes, we'll just sort by year (newest first)
    // In a real app, you'd fetch the latest movies from the API
    const allMovies = getAllMovies();
    const sortedMovies = [...allMovies].sort((a, b) => parseInt(b.year) - parseInt(a.year));
    setMovies(sortedMovies);
    setIsVisible(true);
  }, []);
  
  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <div className="container px-6 md:px-8 pt-24 pb-16 mx-auto">
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Latest Movies</h1>
        
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="animate-slide-up opacity-0" style={{ animationDelay: `${parseInt(movie.id) * 0.1}s`, animationFillMode: "forwards" }}>
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  posterUrl={movie.posterUrl}
                  rating={movie.rating}
                  year={movie.year}
                  genre={movie.genres[0]}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-64">
            <p className="text-muted-foreground">Loading movies...</p>
          </div>
        )}
      </div>
      
      <footer className="py-8 bg-secondary/80 border-t border-border">
        <div className="container px-6 md:px-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2023 CineCritic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Latest;
