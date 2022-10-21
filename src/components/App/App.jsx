import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // GET gallery on page load
  useEffect(() => {getGallery()}, []);

  const [gallery, setGallery] = useState([]);
  console.log('setGallery', gallery); // array of objects from server ✅

  // GET
  const getGallery = () => {
    axios.get('/gallery')
        .then(response => {
            console.log('GET response.data from server', response.data);
            setGallery(response.data);
        })
        .catch(err => {
            console.log('GET error from server', err);
        })
}

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
