import React,{useState} from 'react';
import { MovieData } from './Data';
import MovieCard from './MovieCard';
import Add from './Add';

const MoviList = ({input}) => {
    const [movies,setMovies] =useState(MovieData);
const addMovie = (newMovie) =>{
  setMovies ([...movies,newMovie])
}
  return (
    <>
    <Add addMovie= {addMovie} />
    <br/>
    <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
   {movies.filter((el)=>el.title.toUpperCase().includes(input.toUpperCase()) || el.rate>=input).map((film)=>(<MovieCard list={film}/>))}
    </div>
    </>
  );
}; 

export default MoviList;