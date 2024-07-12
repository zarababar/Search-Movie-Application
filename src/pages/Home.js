import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Pagination from '../components/pagination';
import Spinner from '../components/spinner';
import SearchInput from '../components/search';
import MovieCard from '../components/moviecard';
import DropDown from '../components/dropdown';

import './Home.css';

const Home = () => {
    const defaultValue = 'fast';
    const baseUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
    const navigate = useNavigate();

    const [type, setType] = useState('');
    const [search, setSearch] = useState(defaultValue);
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const fethcMovies = async () => {
        try {
            let response;
            let url = `${baseUrl}&s=${search}&page=${page}`;
            if (type) {
                url += `&type=${type}`
            }
            response = await axios.get(url);
            setMovies(response.data.Search || []);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }
    useEffect(() => {
        fethcMovies();
    }, [search, page, type]);

    const handleSearch = (e) => {
        let timeout;
        if (e.target.value.length >= 3) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setPage(1)
                setSearch(e.target.value);
            }, 500);
        } else if (e.target.value.length === 0) {
            setPage(1)
            setSearch(defaultValue);
        }
    }

    const handlePageChange = (pgNum) => {
        if (pgNum > 0) {
            setPage(pgNum);
            window.scrollTo(0, 0);
        }
    }
    const handleDropDownClick = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }

    return (
        <div>
            <div className="d-flex justify-content-center my-4">
                <div>
                    <SearchInput placeholder="Search for a movie..." handleSearch={handleSearch} />
                </div>
                <DropDown handleDropDownClick={handleDropDownClick} />
            </div>
            {
                loading ? (
                    <Spinner className={"ms-5 home-loader"} />
                ) :
                    (movies?.length === 0 && !loading) ? (
                        <h1 className='text-center font-style'>Movie Not Found!</h1>
                    ) : (
                        <div className='d-flex justify-content-center'>
                            <div className="page-container">
                                {movies?.map((movie) => (
                                    <div
                                        onClick={() => navigate(`/details?id=${movie.imdbID}`)}
                                        key={movie.imdbID}
                                        className="pointer movie-container"
                                    >
                                        <MovieCard movie={movie} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
            }
            {movies?.length > 0 && (
                <div className="pagination-container">
                    <Pagination page={page} handlePageChange={handlePageChange} />
                </div>
            )}
        </div>
    );
};

export default Home;
