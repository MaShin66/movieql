export let movies = [
    {
        id: 0,
        name: 'mar',
        score: 1
    },
    {
        id: 1,
        name: 'mar2',
        score: 8
    },
    {
        id: 2,
        name: 'mar3',
        score: 99
    },
    {
        id: 3,
        name: 'mar4',
        score: 2
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMoive = id => {
    const cleanedMoives = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMoives.length) {
        movies = cleanedMoives;
        return true;
    } else {
        return false;
    }
}

export const addMoive = (name, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}