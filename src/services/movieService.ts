
// Mock data storage - in a real app, this would be replaced with API calls
let MOVIES_DATA = {
  "1": {
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
    trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    watchUrl: "https://www.netflix.com/title/70131314",
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
  },
  "2": {
    id: "2",
    title: "The Shawshank Redemption",
    backdropUrl: "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 4.9,
    year: "1994",
    releaseDate: "October 14, 1994",
    runtime: "142 min",
    director: "Frank Darabont",
    cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    genres: ["Drama", "Crime"],
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    trailerUrl: "https://www.youtube.com/watch?v=6hB3S9bIaco",
    watchUrl: "https://www.amazon.com/Shawshank-Redemption-Tim-Robbins/dp/B001EQNK5W",
    reviews: [
      {
        id: "201",
        author: "Michael Brown",
        avatarUrl: "https://i.pravatar.cc/150?img=12",
        content: "A timeless classic that gets better with each viewing. Freeman and Robbins deliver career-defining performances.",
        rating: 5,
        date: "2023-05-22"
      }
    ]
  }
};

// Service functions for movies
export const getAllMovies = () => {
  return Object.values(MOVIES_DATA);
};

export const getMovieById = (id: string) => {
  return MOVIES_DATA[id as keyof typeof MOVIES_DATA] || null;
};

export const addReview = (
  movieId: string, 
  reviewData: { 
    author: string, 
    content: string, 
    rating: number,
    avatarUrl?: string
  }
) => {
  const movie = MOVIES_DATA[movieId as keyof typeof MOVIES_DATA];
  
  if (!movie) {
    throw new Error("Movie not found");
  }
  
  const newReview = {
    id: `review-${Date.now()}`,
    author: reviewData.author,
    avatarUrl: reviewData.avatarUrl || `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    content: reviewData.content,
    rating: reviewData.rating,
    date: new Date().toISOString().split('T')[0]
  };
  
  // Add the review to the movie
  movie.reviews = [newReview, ...movie.reviews];
  
  // Update the movie's overall rating
  const totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
  movie.rating = parseFloat((totalRating / movie.reviews.length).toFixed(1));
  
  return newReview;
};

export const getMovieInfoForReview = (movieId: string) => {
  const movie = MOVIES_DATA[movieId as keyof typeof MOVIES_DATA];
  if (!movie) return null;
  
  return {
    id: movie.id,
    title: movie.title,
    year: movie.year,
    posterUrl: movie.posterUrl
  };
};
