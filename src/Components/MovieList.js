import React from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";

function MovieList() {
  const movies = [
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1667403422/ingestion-images-archive-prod/archive/1667403422176_203457_cops_0.jpg",
      title: "Avatar: The Way of Water",
      description: "Sci-fi/Action",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1/ingestion-images-archive-prod/archive/8a0f37476a94.jpg",
      title: "Puss in Boots: The Last Wish",
      description: "Adventure/Comedy",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1669075662/ingestion-images-archive-prod/archive/1669075661884_297863_cops_0.jpg",
      title: "Black Panther: Wakanda Forever",
      description: "Action/Adventure",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1666888740/ingestion-images-archive-prod/archive/1666888740285_325983_cops_0.jpg",
      title: "Violent Night",
      description: "Action/Dark",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1670973662/ingestion-images-archive-prod/archive/1670973661885_311163_cops_0.jpg",
      title: "Whitney Houston: I Wanna Dance With Somebody",
      description: "Musical",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1670894561/ingestion-images-archive-prod/archive/1670894561098_303224_cops_0.jpg",
      title: "Babylon",
      description: "Comedy/Drama",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1667924689/ingestion-images-archive-prod/archive/1667924689386_336148_cops_0.jpg",
      title: "The Whale",
      description: "Drama/Horror",
    },
    {
      img: "https://atom-tickets-res.cloudinary.com/image/upload/c_scale,f_auto,h_360,q_auto,w_240/v1663173083/ingestion-images-archive-prod/archive/1663173083520_331561_cops_0.jpg",
      title: "The Menu",
      description: "Horror/Thriller",
    },
  ];
  return (
    <div className="movieList">
      {movies.map((movie) => {
        return <MovieCard movie={movie} />;
      })}
    </div>
  );
}

export default MovieList;
