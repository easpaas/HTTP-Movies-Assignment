import React, { useState } from 'react';

// {
//   id: 0,
//   title: "The Godfather",
//   director: "Francis Ford Coppola",
//   metascore: 100,
//   stars: ["Marlon Brando", "Al Pacino", "Robert Duvall"]
// },

const emptyData = {
  id: '',
  title: '',
  director: '',
  metascore: '', 
  stars: []
}

function MovieForm() {
  const [formData, setFormData] = useState(emptyData);

  const handleChanges = (e) => {
    console.log('inside changes')
    // setFormData({...formData, 
    //   [e.target.name]: e.target.value
    // })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('inside submit')
  }

  return (
    <form onSubmit={handleSubmit()}>
      <label htmlFor="title">
        Title:
        <input value={formData.title} />
      </label>
      <label htmlFor="director">
        Director:
        <input value={formData.director}/>
      </label>
      <label htmlFor="metascore">
        Metascore:
        <input value={formData.metascore}/>
      </label>
      <label htmlFor="stars">
        Stars:
        <input value={formData.stars} />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default MovieForm;
