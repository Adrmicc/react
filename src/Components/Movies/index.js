import React from "react";
import {
  MovieContainer,
  MovieImage,
  MovieImageContainer,
  MovieRating,
  MovieRatingContainer,
  MovieTitle,
  MovieDescription,
  GridContainer,
  Element
} from "./styles";

const returnMovies = (data) => {
  let movies= [];
  for(let i =0; i<6; i++)
  {
    movies.push(
  <Element gridArea={"a"+(i+1)}>
    <MovieContainer>
      <MovieImageContainer>
        <MovieImage img={data[i].img}><MovieDescription>{data[i].dsc}</MovieDescription></MovieImage>
      </MovieImageContainer>
      <MovieRatingContainer>
        <MovieTitle>{data[i].title}</MovieTitle>
        <MovieRating>{data[i].score}</MovieRating>
      </MovieRatingContainer>
    </MovieContainer>
  </Element>)
  }
  return movies.map(item => item);
}

function Movies({data}) {

  return (
    <GridContainer>
      {returnMovies(data)}
    </GridContainer>
  );
}

export default Movies;
