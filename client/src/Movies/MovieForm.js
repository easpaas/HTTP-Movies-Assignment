import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
// import axios from 'axios';

const emptyData = {
  id: '', 
  title: '',
  director: '',
  metascore: '',
  actors: [],
};

const MovieForm = () => {
  const [formData, setFormData] = useState(emptyData);
  const { push } = useHistory();

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;
    
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO push request to server
    Axios.put('/api/movies/:id', formData)
    // TODO reset state
    setFormData({emptyData})
    // TODO route to /movies
    push("/movies");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Edit Movie</h3>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={formData.title}
        />

        <input
          type="string"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={formData.director}
        />

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={formData.metascore}
        />

        <input
          type="array"
          name="actors"
          onChange={changeHandler}
          placeholder="Actors"
          value={formData.actors}
        />

        <button type={"submit"}>Update</button>
      </form>
    </div>
  );
};

export default MovieForm;
