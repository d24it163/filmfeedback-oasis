
import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, Film, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import MovieSelector from "@/components/MovieSelector";
import { searchMovies } from "@/services/movieService";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Close search results when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowResults(false);
    setSearchQuery("");
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    
    const results = searchMovies(searchQuery);
    setSearchResults(results);
    setShowResults(true);
    
    if (results.length === 0) {
      toast({
        title: "No results found",
        description: `No movies found matching "${searchQuery}"`,
      });
    }
  };
  
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      return;
    }
    
    // Auto-search after typing
    const results = searchMovies(value);
    setSearchResults(results);
    setShowResults(true);
  };
  
  const handleSelectSearchResult = (movieId: string) => {
    setShowResults(false);
    setSearchQuery("");
    navigate(`/movie/${movieId}`);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between",
        scrolled
          ? "bg-white/80 backdrop-blur-card shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="flex items-center space-x-2">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary font-semibold text-xl transition-opacity hover:opacity-80"
        >
          <Film className="h-6 w-6" />
          <span>CineCritic</span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <div className="relative" ref={searchRef}>
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="Search movies..."
              className="w-[220px] pl-9"
              value={searchQuery}
              onChange={handleSearchInputChange}
              onFocus={() => searchResults.length > 0 && setShowResults(true)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </form>
          
          {/* Search Results Dropdown */}
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full mt-1 w-[280px] max-h-[400px] overflow-y-auto bg-white/95 backdrop-blur-card shadow-lg rounded-md border border-border animate-in fade-in-80 slide-in-from-top-5 z-50">
              <div className="py-2">
                {searchResults.map((movie) => (
                  <div
                    key={movie.id}
                    className="px-3 py-2 hover:bg-accent/10 cursor-pointer flex items-center gap-3"
                    onClick={() => handleSelectSearchResult(movie.id)}
                  >
                    <div className="w-10 h-14 rounded overflow-hidden flex-shrink-0">
                      <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{movie.title}</h4>
                      <p className="text-xs text-muted-foreground">{movie.year} • {movie.genres[0]}</p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs font-medium">★ {movie.rating.toFixed(1)}/5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-x-4">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname === "/" ? "text-accent" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link 
            to="/top-rated" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname === "/top-rated" ? "text-accent" : "text-muted-foreground"
            )}
          >
            Top Rated
          </Link>
          <Link 
            to="/latest" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname === "/latest" ? "text-accent" : "text-muted-foreground"
            )}
          >
            Latest
          </Link>
        </div>
        <MovieSelector />
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-primary" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-card shadow-lg py-4 px-6 md:hidden animate-slide-up">
          <form onSubmit={handleSearch} className="relative mb-4">
            <Input
              type="search"
              placeholder="Search movies..."
              className="w-full pl-9"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Button 
              type="submit" 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          
          {/* Mobile Search Results */}
          {showResults && searchResults.length > 0 && (
            <div className="mb-4 border border-border rounded-md overflow-hidden">
              {searchResults.slice(0, 3).map((movie) => (
                <div
                  key={movie.id}
                  className="p-3 hover:bg-accent/10 cursor-pointer flex items-center gap-3 border-b border-border last:border-b-0"
                  onClick={() => handleSelectSearchResult(movie.id)}
                >
                  <div className="w-10 h-14 rounded overflow-hidden flex-shrink-0">
                    <img src={movie.posterUrl} alt={movie.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{movie.title}</h4>
                    <p className="text-xs text-muted-foreground">{movie.year}</p>
                  </div>
                </div>
              ))}
              {searchResults.length > 3 && (
                <div className="p-2 text-center text-xs text-muted-foreground">
                  {searchResults.length - 3} more results...
                </div>
              )}
            </div>
          )}
          
          <div className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium transition-colors py-2",
                location.pathname === "/" ? "text-accent" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link 
              to="/top-rated" 
              className={cn(
                "text-sm font-medium transition-colors py-2",
                location.pathname === "/top-rated" ? "text-accent" : "text-muted-foreground"
              )}
            >
              Top Rated
            </Link>
            <Link 
              to="/latest" 
              className={cn(
                "text-sm font-medium transition-colors py-2",
                location.pathname === "/latest" ? "text-accent" : "text-muted-foreground"
              )}
            >
              Latest
            </Link>
            <MovieSelector />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
