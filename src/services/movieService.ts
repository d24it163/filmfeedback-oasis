
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
  },
  "3": {
    id: "3",
    title: "The Dark Knight",
    backdropUrl: "https://image.tmdb.org/t/p/original/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.7,
    year: "2008",
    releaseDate: "July 18, 2008",
    runtime: "152 min",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Gary Oldman"],
    genres: ["Action", "Crime", "Drama"],
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    watchUrl: "https://www.hbomax.com/",
    reviews: [
      {
        id: "301",
        author: "David Wilson",
        avatarUrl: "https://i.pravatar.cc/150?img=15",
        content: "Heath Ledger's performance as the Joker is simply unforgettable. One of the greatest comic book films ever made.",
        rating: 5,
        date: "2023-04-10"
      },
      {
        id: "302",
        author: "Sarah Thomas",
        avatarUrl: "https://i.pravatar.cc/150?img=20",
        content: "The Dark Knight redefined what a superhero movie could be. Nolan's direction and the performances are stellar.",
        rating: 4.8,
        date: "2023-06-05"
      }
    ]
  },
  "4": {
    id: "4",
    title: "Pulp Fiction",
    backdropUrl: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcAd.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: 4.6,
    year: "1994",
    releaseDate: "October 14, 1994",
    runtime: "154 min",
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
    genres: ["Crime", "Drama"],
    overview: "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    trailerUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY",
    watchUrl: "https://www.amazon.com/Pulp-Fiction-John-Travolta/dp/B008Y7YYG2",
    reviews: [
      {
        id: "401",
        author: "Robert Johnson",
        avatarUrl: "https://i.pravatar.cc/150?img=25",
        content: "Tarantino's masterpiece. The nonlinear storytelling and dialogue are revolutionary.",
        rating: 4.9,
        date: "2023-03-15"
      }
    ]
  },
  "5": {
    id: "5",
    title: "Parasite",
    backdropUrl: "https://image.tmdb.org/t/p/original/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    rating: 4.5,
    year: "2019",
    releaseDate: "May 30, 2019",
    runtime: "132 min",
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
    genres: ["Drama", "Thriller", "Comedy"],
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    trailerUrl: "https://www.youtube.com/watch?v=5xH0HfJHsaY",
    watchUrl: "https://www.hulu.com/",
    reviews: [
      {
        id: "501",
        author: "Michelle Park",
        avatarUrl: "https://i.pravatar.cc/150?img=30",
        content: "A masterful blend of genres that delivers scathing social commentary. Deserved every Oscar it won.",
        rating: 4.8,
        date: "2023-05-07"
      },
      {
        id: "502",
        author: "James Kim",
        avatarUrl: "https://i.pravatar.cc/150?img=33",
        content: "Brilliant direction and performances. The tonal shifts are handled perfectly, and the social message is powerful.",
        rating: 4.7,
        date: "2023-07-12"
      }
    ]
  },
  "6": {
    id: "6",
    title: "Interstellar",
    backdropUrl: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    rating: 4.7,
    year: "2014",
    releaseDate: "November 7, 2014",
    runtime: "169 min",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
    genres: ["Adventure", "Drama", "Sci-Fi"],
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    watchUrl: "https://www.paramountplus.com/",
    reviews: [
      {
        id: "601",
        author: "Daniel Clark",
        avatarUrl: "https://i.pravatar.cc/150?img=40",
        content: "A breathtaking journey through space and time. The visual effects and Hans Zimmer's score are outstanding.",
        rating: 4.6,
        date: "2023-02-28"
      }
    ]
  },
  "7": {
    id: "7",
    title: "The Godfather",
    backdropUrl: "https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 4.9,
    year: "1972",
    releaseDate: "March 24, 1972",
    runtime: "175 min",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano"],
    genres: ["Crime", "Drama"],
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    trailerUrl: "https://www.youtube.com/watch?v=sY1S34973zA",
    watchUrl: "https://www.paramountplus.com/",
    reviews: [
      {
        id: "701",
        author: "Thomas Anderson",
        avatarUrl: "https://i.pravatar.cc/150?img=45",
        content: "The definitive American crime film. Perfect performances, direction, and screenplay. A true masterpiece.",
        rating: 5,
        date: "2023-01-15"
      },
      {
        id: "702",
        author: "Lisa Rodriguez",
        avatarUrl: "https://i.pravatar.cc/150?img=49",
        content: "The performances by Brando and Pacino are legendary. Every aspect of filmmaking at its finest.",
        rating: 4.9,
        date: "2023-04-22"
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

// New function to search movies
export const searchMovies = (query: string) => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchTerm = query.toLowerCase().trim();
  return Object.values(MOVIES_DATA).filter(movie => {
    return (
      movie.title.toLowerCase().includes(searchTerm) ||
      movie.director.toLowerCase().includes(searchTerm) ||
      movie.genres.some(genre => genre.toLowerCase().includes(searchTerm)) ||
      movie.cast.some(actor => actor.toLowerCase().includes(searchTerm)) ||
      movie.overview.toLowerCase().includes(searchTerm)
    );
  });
};

// Function to get featured movie (for homepage)
export const getFeaturedMovie = () => {
  // For simplicity, we'll just return a movie with high rating
  const allMovies = getAllMovies();
  const sortedMovies = [...allMovies].sort((a, b) => b.rating - a.rating);
  return sortedMovies[0];
};

// Function to get similar movies based on genres
export const getSimilarMovies = (movieId: string, limit = 4) => {
  const movie = getMovieById(movieId);
  if (!movie) return [];
  
  const allMovies = getAllMovies();
  const similarMovies = allMovies
    .filter(m => m.id !== movieId && m.genres.some(genre => movie.genres.includes(genre)))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
    
  return similarMovies;
};
