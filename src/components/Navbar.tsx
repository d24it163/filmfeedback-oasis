
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Search, Film, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MovieSelector from "@/components/MovieSelector";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Search functionality will be implemented later
    console.log("Searching for:", searchQuery);
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
        <form onSubmit={handleSearch} className="relative">
          <Input
            type="search"
            placeholder="Search movies..."
            className="w-[220px] pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </form>
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
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </form>
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
