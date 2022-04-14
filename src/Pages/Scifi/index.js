import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Movies from "../../Components/Movies";
import axios from "axios";
const ScifiContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; 
  width: 100%;
`
export default function Scifi() {

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
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=878&language=pl-PL  `;
    axios.get(url).then((res) => {
      console.log(res);
      setTimeout(() => {
        setMovies([
          {
            title: res.data.results[11].original_title,
            score: res.data.results[11].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[11].backdrop_path}`,
            dsc: res.data.results[11].overview.slice(0, 300),
          },
          {
            title: res.data.results[16].original_title,
            score: res.data.results[16].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[16].backdrop_path}`,
            dsc: res.data.results[16].overview.slice(0, 300),
          },
          {
            title: res.data.results[17].original_title,
            score: res.data.results[17].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[17].backdrop_path}`,
            dsc: res.data.results[17].overview.slice(0, 300),
          },
          {
            title: res.data.results[7].original_title,
            score: res.data.results[7].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[7].backdrop_path}`,
            dsc: res.data.results[7].overview.slice(0, 300),
          },
          {
            title: res.data.results[8].original_title,
            score: res.data.results[8].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[8].backdrop_path}`,
            dsc: res.data.results[8].overview.slice(0, 300),
          },
          {
            title: res.data.results[9].original_title,
            score: res.data.results[9].vote_average,
            img: `http://image.tmdb.org/t/p/w500${res.data.results[9].backdrop_path}`,
            dsc: res.data.results[9].overview.slice(0, 300),
          },
        ]);
      }, 100);
    });
  }, []);


  return (
  <ScifiContainer>
    <Movies data={movies}/>
  </ScifiContainer>
  )
}
