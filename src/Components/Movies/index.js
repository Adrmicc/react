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
  Element1,
  Element2,
  Element3,
  Element4,
  Element5,
  Element6,
} from "./styles";

function Movies({data}) {
  return (
    <GridContainer>
      <Element1>
        <MovieContainer>
          <MovieImageContainer>
            <MovieImage img={data[0].img}><MovieDescription>{data[0].dsc}</MovieDescription></MovieImage>
          </MovieImageContainer>
          <MovieRatingContainer>
            <MovieTitle>{data[0].title}</MovieTitle>
            <MovieRating>{data[0].score}</MovieRating>
          </MovieRatingContainer>
        </MovieContainer>
      </Element1>
      <Element2>
      <MovieContainer>
          <MovieImageContainer>
            <MovieImage img={data[1].img}><MovieDescription>{data[1].dsc}</MovieDescription></MovieImage>
          </MovieImageContainer>
          <MovieRatingContainer>
            <MovieTitle>{data[1].title}</MovieTitle>
            <MovieRating>{data[1].score}</MovieRating>
          </MovieRatingContainer>
        </MovieContainer>
      </Element2>
      <Element3>
      <MovieContainer>
          <MovieImageContainer>
            <MovieImage img={data[2].img}><MovieDescription>{data[2].dsc}</MovieDescription></MovieImage>
          </MovieImageContainer>
          <MovieRatingContainer>
            <MovieTitle>{data[2].title}</MovieTitle>
            <MovieRating>{data[2].score}</MovieRating>
          </MovieRatingContainer>
        </MovieContainer>
      </Element3>
      <Element4>
      <MovieContainer>
          <MovieImageContainer>
            <MovieImage img={data[3].img}><MovieDescription>{data[3].dsc}</MovieDescription></MovieImage>
          </MovieImageContainer>
          <MovieRatingContainer>
            <MovieTitle>{data[3].title}</MovieTitle>
            <MovieRating>{data[3].score}</MovieRating>
          </MovieRatingContainer>
        </MovieContainer>
      </Element4>
      <Element5>
      <MovieContainer>
          <MovieImageContainer>
            <MovieImage img={data[4].img}><MovieDescription>{data[4].dsc}</MovieDescription></MovieImage>
          </MovieImageContainer>
          <MovieRatingContainer>
            <MovieTitle>{data[4].title}</MovieTitle>
            <MovieRating>{data[4].score}</MovieRating>
          </MovieRatingContainer>
        </MovieContainer>
      </Element5>
      <Element6>
      <MovieContainer>
          <MovieImageContainer>
            <MovieImage img={data[5].img}><MovieDescription>{data[5].dsc}</MovieDescription></MovieImage>
          </MovieImageContainer>
          <MovieRatingContainer>
            <MovieTitle>{data[5].title}</MovieTitle>
            <MovieRating>{data[5].score}</MovieRating>
          </MovieRatingContainer>
        </MovieContainer>
      </Element6>
    </GridContainer>
  );
}

export default Movies;
