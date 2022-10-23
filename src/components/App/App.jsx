import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import PostForm from '../PostImage/PostForm';

function App() {
  // GET gallery on page load
  useEffect(() => { getGallery() }, []);

  const [gallery, setGallery] = useState([]);
  console.log('setGallery', gallery); // array of objects from server

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

  // POST
  const postImage = (newImage) => {
    axios({
      method: 'POST',
      url: '/gallery',
      data: newImage
    })
      .then((response) => {
        console.log('POST response.data from server', response.data);
        getGallery();
      })
      .catch((err) => {
        console.log('POST err from server', err);
      })
  }

  // PUT
  const updateLikes = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        console.log('PUT response from server', response.data); // Ok
        getGallery();
      })
      .catch(err => {
        console.log('PUT err from server', err);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Life</h1>
      </header>
      {/* gallery is the entire gallery
          updateLikes is the axios call
          updateLikes is shipped to GalleryList.jsx, then to GalleryItem.jsx where it is called when "like it" is pressed */}
      <PostForm postImage={postImage} />
      <GalleryList gallery={gallery} updateLikes={updateLikes} />
    </div>
  );
}

export default App;
