import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const emptyData = {
  id: '', 
  title: '',
  director: '',
  metascore: '',
  stars: [],
};

const MovieForm = (props) => {
  const [formData, setFormData] = useState(emptyData);
  const { id } = useParams();
  const { push } = useHistory();

  useEffect(()=> {
    axios.get(`http://localhost:5000/api/movies/${id}`)
    .then((response) => {
      console.log(response.data)
      setFormData(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [id]);

  const changeHandler = e => {
    e.persist();
    let value = e.target.name === 'stars' ?
      e.target.value.split(',') :
      e.target.value

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Push request to server
    axios.put(`http://localhost:5000/api/movies/${id}`, formData)
    .then(response => {
      props.getMovieList();
      push(`/`);
    })
    .catch(error => {
      console.log(error)
    })
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
          type="text"
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={formData.stars.join(',')}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default MovieForm;
