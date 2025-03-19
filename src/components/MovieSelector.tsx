
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getAllMovies } from "@/services/movieService";

const MovieSelector = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const allMovies = getAllMovies();
    setMovies(allMovies);
  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectMovie = (movieId: string) => {
    setIsOpen(false);
    navigate(`/add-review?movie=${movieId}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          Write Review
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Select a Movie to Review</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4"
          />
          
          <div className="max-h-[400px] overflow-y-auto space-y-2 pr-2">
            {filteredMovies.length > 0 ? (
              filteredMovies.map(movie => (
                <Card 
                  key={movie.id} 
                  className="cursor-pointer hover:bg-accent/5 transition-colors"
                  onClick={() => handleSelectMovie(movie.id)}
                >
                  <CardContent className="p-3 flex items-center space-x-3">
                    <div className="flex-shrink-0 w-12 h-16 rounded overflow-hidden">
                      <img 
                        src={movie.posterUrl} 
                        alt={movie.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{movie.title}</h4>
                      <p className="text-sm text-muted-foreground">{movie.year}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center p-4 text-muted-foreground">
                <Film className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p>No movies found</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MovieSelector;
