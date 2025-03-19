
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Tag, Clock, Film, Calendar, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";
import Navbar from "@/components/Navbar";

// Mock data for demonstration
const MOVIE_DETAILS = {
  id: "1",
  title: "Inception",
  backdropUrl: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  rating: 4.8,
  year: "2010",
  releaseDate: "July 16, 2010",
  runtime: "148 min",
  director: "Christopher Nolan",
  cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy", "Ken Watanabe"],
  genres: ["Action", "Sci-Fi", "Thriller"],
  overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious.",
  reviews: [
    {
      id: "101",
      author: "Jane Smith",
      avatarUrl: "https://i.pravatar.cc/150?img=5",
      content: "A masterpiece of modern cinema. The visual effects are stunning, and the story is captivating from start to finish. The performances are exceptional, particularly DiCaprio's portrayal of Cobb.",
      rating: 5,
      date: "2023-06-15"
    },
    {
      id: "102",
      author: "John Doe",
      avatarUrl: "https://i.pravatar.cc/150?img=8",
      content: "An incredible film that challenges the mind. Nolan's direction is impeccable, weaving a complex narrative that rewards multiple viewings. The score by Hans Zimmer is haunting and memorable.",
      rating: 4.5,
      date: "2023-07-02"
    },
    {
      id: "103",
      author: "Alice Johnson",
      avatarUrl: "https://i.pravatar.cc/150?img=9",
      content: "While visually impressive, I found the plot unnecessarily convoluted. The concept is innovative, but the execution leaves something to be desired. Still worth watching for the spectacle.",
      rating: 3.5,
      date: "2023-08-10"
    }
  ]
};

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    
    window.scrollTo(0, 0);
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // In a real app, we'd fetch the movie details based on the ID
  // For now, we'll just use the mock data
  const movie = MOVIE_DETAILS;
  
  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Backdrop Image */}
      <div className="relative w-full h-[60vh]">
        <div className="absolute inset-0 bg-black">
          <img
            src={movie.backdropUrl}
            alt={`${movie.title} backdrop`}
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 -mt-40 md:-mt-60 container px-6 md:px-8 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          {/* Poster */}
          <div className="hidden md:block w-1/4 max-w-[300px] animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src={movie.posterUrl} 
                alt={`${movie.title} poster`} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Movie Info */}
          <div className="md:w-3/4 space-y-4 animate-slide-up opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="flex flex-wrap gap-2 mb-2">
              {movie.genres.map((genre, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent"
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {genre}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{movie.title}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <StarRating initialRating={movie.rating} size={18} />
                <span className="ml-2 font-medium">{movie.rating.toFixed(1)}/5</span>
              </div>
              <span className="text-muted-foreground">|</span>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                <span>{movie.runtime}</span>
              </div>
              <span className="text-muted-foreground">|</span>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>{movie.year}</span>
              </div>
            </div>
            
            <p className="text-base text-muted-foreground max-w-3xl my-4">{movie.overview}</p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 max-w-2xl">
              <div>
                <span className="text-sm font-medium">Director</span>
                <p className="text-muted-foreground">{movie.director}</p>
              </div>
              <div>
                <span className="text-sm font-medium">Release Date</span>
                <p className="text-muted-foreground">{movie.releaseDate}</p>
              </div>
              <div className="col-span-2 mt-2">
                <span className="text-sm font-medium">Cast</span>
                <p className="text-muted-foreground">{movie.cast.join(", ")}</p>
              </div>
            </div>
            
            <div className="pt-4 flex space-x-4">
              <Button>Watch Now</Button>
              <Button variant="outline">+ Add to Watchlist</Button>
            </div>
          </div>
        </div>
        
        {/* Floating action bar on scroll */}
        <div className={`fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-card border-t border-border py-3 px-4 transform transition-transform duration-300 ${isScrolled ? 'translate-y-0' : 'translate-y-full'} md:hidden z-40`}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{movie.title}</h3>
              <div className="flex items-center text-sm">
                <StarRating initialRating={movie.rating} size={14} />
                <span className="ml-2">{movie.rating.toFixed(1)}/5</span>
              </div>
            </div>
            <Button size="sm">Watch Now</Button>
          </div>
        </div>
        
        {/* Tabs Section */}
        <div className="my-8 md:my-12 animate-slide-up opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          <Tabs defaultValue="reviews">
            <TabsList className="w-full border-b mb-6 rounded-none bg-transparent h-auto p-0 justify-start space-x-6">
              <TabsTrigger 
                value="reviews" 
                className="rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-accent text-foreground data-[state=active]:shadow-none data-[state=active]:text-foreground"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                Reviews
              </TabsTrigger>
              <TabsTrigger 
                value="cast" 
                className="rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-accent text-foreground data-[state=active]:shadow-none data-[state=active]:text-foreground"
              >
                <User className="h-4 w-4 mr-2" />
                Cast & Crew
              </TabsTrigger>
              <TabsTrigger 
                value="similar" 
                className="rounded-none px-4 py-3 data-[state=active]:border-b-2 data-[state=active]:border-accent text-foreground data-[state=active]:shadow-none data-[state=active]:text-foreground"
              >
                <Film className="h-4 w-4 mr-2" />
                Similar Movies
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="reviews" className="pt-2">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Movie Reviews</h2>
                <Button asChild variant="outline" size="sm">
                  <Link to={`/add-review?movie=${movie.id}`}>Write a Review</Link>
                </Button>
              </div>
              
              <div className="space-y-6">
                {movie.reviews.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="cast">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Cast & Crew information coming soon</p>
              </div>
            </TabsContent>
            
            <TabsContent value="similar">
              <div className="text-center py-8">
                <p className="text-muted-foreground">Similar movies coming soon</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      {/* Footer */}
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

export default MovieDetail;
