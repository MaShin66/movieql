import { getMovies, getById, addMoive, deleteMoive } from "./db";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id)
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMoive(name, score),
        deleteMoive: (_, { id }) => deleteMoive(id)
    }
}

export default resolvers;