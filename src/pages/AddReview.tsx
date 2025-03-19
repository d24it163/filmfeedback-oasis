
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Film, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import StarRating from "@/components/StarRating";
import Navbar from "@/components/Navbar";
import { useToast } from "@/components/ui/use-toast";
import { getMovieInfoForReview, addReview } from "@/services/movieService";

const AddReview = () => {
  const { toast } = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const movieId = queryParams.get("movie");
  
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [authorName, setAuthorName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [movie, setMovie] = useState<any>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    if (movieId) {
      const movieInfo = getMovieInfoForReview(movieId);
      setMovie(movieInfo);
    }
  }, [movieId]);
  
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!movieId) {
      toast({
        title: "No movie selected",
        description: "Please select a movie to review.",
        variant: "destructive"
      });
      return;
    }
    
    if (rating === 0) {
      toast({
        title: "Rating required",
        description: "Please select a rating before submitting your review.",
        variant: "destructive"
      });
      return;
    }
    
    if (review.trim().length < 10) {
      toast({
        title: "Review too short",
        description: "Please write a more detailed review (minimum 10 characters).",
        variant: "destructive"
      });
      return;
    }
    
    if (authorName.trim().length < 3) {
      toast({
        title: "Name required",
        description: "Please provide your name (minimum 3 characters).",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      addReview(movieId, {
        author: authorName,
        content: review,
        rating
      });
      
      toast({
        title: "Review submitted",
        description: "Thank you for sharing your thoughts!",
      });
      
      navigate(`/movie/${movieId}`);
    } catch (error) {
      console.error(error);
      toast({
        title: "Error submitting review",
        description: "An error occurred while submitting your review. Please try again.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`min-h-screen bg-background transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      
      <div className="container max-w-3xl px-6 md:px-8 pt-24 pb-16 mx-auto animate-slide-up">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-6" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="bg-card rounded-lg border border-border p-6 md:p-8 shadow-sm">
          <h1 className="text-2xl font-bold mb-6">Write a Review</h1>
          
          {movie ? (
            <div className="flex items-center space-x-4 mb-6 p-3 bg-secondary/40 rounded-md">
              <img 
                src={movie.posterUrl} 
                alt={movie.title} 
                className="w-12 h-16 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{movie.title}</h2>
                <p className="text-sm text-muted-foreground">{movie.year}</p>
              </div>
            </div>
          ) : (
            <div className="mb-6 p-4 border border-dashed border-muted rounded-md flex justify-center items-center">
              <Film className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="text-muted-foreground">No movie selected</span>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="authorName" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="authorName"
                  placeholder="Enter your name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Minimum 3 characters required
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Rating
                </label>
                <div className="p-4 bg-secondary/30 rounded-md flex items-center justify-center">
                  <StarRating 
                    initialRating={rating} 
                    editable={true} 
                    size={28} 
                    onRatingChange={handleRatingChange} 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="review" className="block text-sm font-medium mb-2">
                  Your Review
                </label>
                <Textarea
                  id="review"
                  placeholder="Share your thoughts about the movie..."
                  className="min-h-[150px]"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Minimum 10 characters required
                </p>
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button 
                  type="submit" 
                  className="min-w-[120px]" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
