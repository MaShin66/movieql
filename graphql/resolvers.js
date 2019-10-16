import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => getMovies(limit, rating)
    }
}

export default resolvers;

// import { getMovies, getMovie, getSuggestions } from "./db";

// const resolvers = {
//   Query: {
//     movies: (_, { rating, limit }) => getMovies(limit, rating),
//     movie: (_, { id }) => getMovie(id),
//     suggestions: (_, { id }) => getSuggestions(id)
//   }
// };

// export default resolvers;