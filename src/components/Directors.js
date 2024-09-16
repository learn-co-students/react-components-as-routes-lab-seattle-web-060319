import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(dir => {
        return(<div>{dir.name} + " " +
        {dir.movies.map(movie => {return(<ul>{movie}</ul>)})}</div>)
      })}
    </div>
  );
}

export default Directors
