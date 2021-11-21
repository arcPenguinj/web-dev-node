let movies = require("./movies.json");

module.exports = (app) => {
  const getAllMovies = (req, res) => res.json(movies);
  app.get('/api/movies', getAllMovies);

  const deleteMovie = (req, res) => {
    const id = req.params['mid'];
    movies = movies.filter(m => m._id !== id);
    res.json(movies);
  };
  app.delete('/api/movies/:mid', deleteMovie);

  const createMovie = (req, res) => {
    const movie = req.body;
    const id = (new Date()).getTime() + ''; //generate a random id
    movie['_id'] = id; // add the id to movie. so that each movie object contains three properties.
    movies = [...movies, movie];
    res.json(movies);
  }
  app.post('/api/movies', createMovie);

  const saveMovie = (req, res) => {
    const newMovie = req.body;
    const movieId = req.params['mid'];
    movies = movies.map(movie =>
        movie._id === movieId ? newMovie : movie);
    res.json(movies);
  }
  app.put('/api/movies/:mid', saveMovie);

};

