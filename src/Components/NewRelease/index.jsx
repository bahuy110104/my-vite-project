import listAnime from '../data.js';
import Modal from '../Modal/index.jsx';
import Movie from '../MovieInfo';
import { useState } from 'react';
import './style.css';

const NewRelease = () => {
  const [openModal, setOpenModal] = useState(false);
    const [selectedItem,setSelectedItem] = useState({});
      const handleOpenModal = (open, info) => {
        setOpenModal (open);
        setSelectedItem (info);
      }

  return (
    <div className="movie">
      <div className="title">
        <h1>New Release</h1>
      </div>
      <div className="MovieList">
        <div className="div1" onClick={() => handleOpenModal(true, listAnime[0])}>
          <Movie info={listAnime[0]} />
        </div>
        <div className="div2" onClick={() => handleOpenModal(true, listAnime[1])}>
          <Movie info={listAnime[1]} />
        </div>
        <div className="div3" onClick={() => handleOpenModal(true, listAnime[2])}>
          <Movie info={listAnime[2]} />
        </div>
        <div className="div4" onClick={() => handleOpenModal(true, listAnime[3])}>
          <Movie info={listAnime[3]} />
        </div>
        <div className="div5" onClick={() => handleOpenModal(true, listAnime[4])}>
          <Movie info={listAnime[4]} />
        </div>
        <div className="div6" onClick={() => handleOpenModal(true, listAnime[5])}>
          <Movie info={listAnime[5]} />
        </div>
      </div>
      {openModal ? <Modal currentInfo={selectedItem}  onClose={() => handleOpenModal(false)}/> : null}
    </div>
  );
};

export default NewRelease;
