import React from 'react';

// {
//   id: 0,
//   title: "The Godfather",
//   director: "Francis Ford Coppola",
//   metascore: 100,
//   stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
// },

const MovieForm = () => {
  return (
    <form>
      <label htmlFor="title">
        Title:
        <input />
      </label>
      <label htmlFor="director">
        Director:
        <input />
      </label>
      <label htmlFor="metascore">
        Metascore:
        <input />
      </label>
      <label htmlFor="stars">
        Stars:
        <input />
      </label>
    </form>
  );
}

export default MovieForm;
