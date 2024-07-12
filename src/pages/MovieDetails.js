import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Spinner from '../components/spinner';
import MovieInfo from '../components/movieinfo';

import './MovieDetails.css';

const MovieDetails = () => {
  const baseUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const params = new URLSearchParams(window.location.search);
  const imbdId = params.get('id');

  const fethcMovies = async () => {
    const response = await axios.get(`${baseUrl}&i=${imbdId}`);
    setDetail(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fethcMovies();
  }, []);

  return (
    <>
      {
        loading ? (
          <Spinner className={"my-5 loader"} />
        ) : (
          <>
            <div className="movie-details mx-4">
              <div>
                <h3>{detail.Title}</h3>
              </div>
              <div className='d-flex'>
                <img src={detail.Poster} alt={detail.Title} className="poster" />
                <div>
                  <div className="details">
                    <MovieInfo detail={detail} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  );
};

export default MovieDetails;
