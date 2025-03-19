
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import FeaturedMovie from "@/components/FeaturedMovie";
import MovieCard from "@/components/MovieCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  ThumbsUp 
} from "lucide-react";

// Mock data for demonstration
const FEATURED_MOVIE = {
  id: "1",
  title: "Inception",
  backdropUrl: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
  posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  rating: 4.8,
  year: "2010",
  genres: ["Action", "Sci-Fi", "Thriller"],
  overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: inception, the implantation of another person's idea into a target's subconscious."
};

const POPULAR_MOVIES = [
  {
    id: "1",
    title: "Inception",
    posterUrl: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 4.8,
    year: "2010",
    genre: "Sci-Fi"
  },
  {
    id: "2",
    title: "The Shawshank Redemption",
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 4.9,
    year: "1994",
    genre: "Drama"
  },
  {
    id: "3",
    title: "The Dark Knight",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.7,
    year: "2008",
    genre: "Action"
  },
  {
    id: "4",
    title: "Pulp Fiction",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 4.6,
    year: "1994",
    genre: "Crime"
  },
  {
    id: "5",
    title: "Forrest Gump",
    posterUrl: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    rating: 4.5,
    year: "1994",
    genre: "Drama"
  },
  {
    id: "6",
    title: "The Matrix",
    posterUrl: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 4.4,
    year: "1999",
    genre: "Sci-Fi"
  }
];

const RECENT_REVIEWS = [
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
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      {/* Hero Section with Featured Movie */}
      <section className="pt-0">
        <FeaturedMovie {...FEATURED_MOVIE} />
      </section>
      
      {/* Popular Movies Section */}
      <section className="py-12 md:py-16">
        <div className="container px-6 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Popular Movies</h2>
              <p className="text-muted-foreground">Discover the most-watched films this week</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {POPULAR_MOVIES.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-12 bg-secondary/50">
        <div className="container px-6 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex items-center space-x-4">
                <div className="rounded-full bg-amber-100 p-3">
                  <Star className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Top Rated</h3>
                  <p className="text-sm text-muted-foreground">
                    The highest-rated films of all time
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex items-center space-x-4">
                <div className="rounded-full bg-blue-100 p-3">
                  <Clock className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Latest Releases</h3>
                  <p className="text-sm text-muted-foreground">
                    New films released this month
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6 flex items-center space-x-4">
                <div className="rounded-full bg-green-100 p-3">
                  <ThumbsUp className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Critics' Choice</h3>
                  <p className="text-sm text-muted-foreground">
                    Films acclaimed by critics
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Reviews Section */}
      <section className="py-12 md:py-16">
        <div className="container px-6 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight">Recent Reviews</h2>
              <p className="text-muted-foreground">What our community is saying</p>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {RECENT_REVIEWS.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        </div>
      </section>
      
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

export default Index;
