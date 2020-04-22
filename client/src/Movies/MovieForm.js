import React, { useState } from 'react';
// import axios from 'axios';

const emptyData = {
  id: '', 
  title: '',
  director: '',
  metascore: '',
  actors: [],
};

const MovieForm = props => {
  const [formData, setFormData] = useState(emptyData);

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
    // TODO reset state
    // TODO route to /movies
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="Title"
          value={formData.title}
        />
        {/* <div className="baseline" /> */}

        <input
          type="string"
          name="director"
          onChange={changeHandler}
          placeholder="Director"
          value={formData.director}
        />
        {/* <div className="baseline" /> */}

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="Metascore"
          value={formData.metascore}
        />
        {/* <div className="baseline" /> */}

        <input
          type="array"
          name="actors"
          onChange={changeHandler}
          placeholder="Actors"
          value={formData.actors}
        />
        {/* <div className="baseline" /> */}

        <input
          type="string"
          name="shipping"
          onChange={changeHandler}
          placeholder="Shipping"
          value={formData.shipping}
        />
        {/* <div className="baseline" /> */}

       <button>Update</button>
      </form>
    </div>
  );
};

export default MovieForm;
