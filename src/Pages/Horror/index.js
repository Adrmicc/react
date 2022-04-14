import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Movies from "../../Components/Movies";
import axios from "axios";
const HorrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; 
  width: 100%;
`
export default function Horror() {
  const API_KEY = "b5f28bbe241368225920f30c70d13e90";


  const [movies, setMovies] = useState([
    { title: "", score: "", img: "", dsc: "" },
    { title: "", score: "", img: "", dsc: "" },
    { title: "", score: "", img: "", dsc: "" },
    { title: "", score: "", img: "", dsc: "" },
    { title: "", score: "", img: "", dsc: "" },
    { title: "", score: "", img: "", dsc: "" },
  ]);
  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27&language=pl-PL  `;
    axios.get(url).then((res) => {
      console.log(res);
      setTimeout(() => {
        setMovies([
          {
            title: res.data.results[6].original_title,
            score: res.data.results[6].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[6].backdrop_path}`,
            dsc: res.data.results[6].overview.slice(0, 300),
          },
          {
            title: res.data.results[1].original_title,
            score: res.data.results[1].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[1].backdrop_path}`,
            dsc: res.data.results[1].overview.slice(0, 300),
          },
          {
            title: res.data.results[2].original_title,
            score: res.data.results[2].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[2].backdrop_path}`,
            dsc: res.data.results[2].overview.slice(0, 300),
          },
          {
            title: res.data.results[3].original_title,
            score: res.data.results[3].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[3].backdrop_path}`,
            dsc: res.data.results[3].overview.slice(0, 300),
          },
          {
            title: res.data.results[4].original_title,
            score: res.data.results[4].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[4].backdrop_path}`,
            dsc: res.data.results[4].overview.slice(0, 300),
          },
          {
            title: res.data.results[7].original_title,
            score: res.data.results[7].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[7].backdrop_path}`,
            dsc: res.data.results[7].overview.slice(0, 300),
          },
        ]);
      }, 100);
    });
  }, []);


  return (
    <HorrorContainer>
      <Movies data={movies} />
    </HorrorContainer>
  
  )
}
