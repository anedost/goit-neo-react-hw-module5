# Movie Search App

This application allows users to search for movies using the TMDB (The Movie Database) API. Users can search for movies, view details, and navigate through different pages for the results.

## Features

- **Movie Search**: Users can search for movies by title using the search bar.
- **Movie Details**: When a movie is selected, users can see additional information such as release date, overview, and rating.
- **Pagination**: The search results are paginated, showing a limited number of movies per page. Users can navigate to different pages of results.
- **Image Display**: Movie posters and backdrops are displayed using images fetched from TMDB.

## Components

### 1. **SearchBar**
The `<SearchBar>` component contains an input field where users can type movie names. Upon form submission, the movie names are sent to the TMDB API to retrieve relevant movie data.

### 2. **MovieList**
The `<MovieList>` component displays the search results. Each movie in the list shows a poster, title, and release year.

### 3. **MovieCard**
The `<MovieCard>` component displays individual movie information. It includes a movie poster, title, and an option to view more details.

### 4. **MovieDetails**
The `<MovieDetails>` component shows detailed information about a selected movie, including an overview, rating, and release date.

### 5. **Pagination**
The pagination component allows users to navigate between pages of search results.

## API Integration

- **TMDB API**: The app uses the TMDB API to fetch movie data based on the search term. To use the API, you need to register for an account and obtain an API key.

### API Key
To access the TMDB API, you must register on [TMDB](https://www.themoviedb.org/) and obtain an API key. Once you have your API key, you can make HTTP requests to the TMDB API to fetch movie data.

### Image Paths
Movie posters and images are fetched from the TMDB API. The path for images will be provided in the API response, and you can append it to the base URL (`https://image.tmdb.org/t/p/w500/`) to display the image.

## Routing

- **React Router**: This app uses React Router to manage navigation. It supports navigating between search results, individual movie details, and other sections of the app.

## Code Splitting

- The app uses code splitting to ensure that only the necessary parts of the app are loaded when required. This improves the app's performance by reducing the initial load time.

## Topic Number
**Topic 10: Routing. Homework Assignment**
