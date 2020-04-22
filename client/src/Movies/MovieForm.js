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
      console.log(response.data);
      setFormData(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [id]);


  // useEffect(() => {
  //   const movieToUpdate = props.movies.find(thing => `${thing.id}` === id)
  //   setFormData(movieToUpdate)
  // }, [id, props.movies])

  const changeHandler = e => {
    e.persist();
    let value = e.target.value;

    if (e.target.type === 'array') {
      setFormData({
        ...formData,
        stars: [...formData.stars,
          value
        ]
      });
    }
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Push request to server
    axios.put(`http://localhost:5000/api/movies/${id}`, formData)
    .then(response => {console.log(response.data)})
    .catch(error => console.log(error))

    // reset state
    setFormData({emptyData});
    // route to /movies/:id
    push(`/movies/${id}`);
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
          name="stars"
          onChange={changeHandler}
          placeholder="Stars"
          value={formData.stars}
        />

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default MovieForm;
