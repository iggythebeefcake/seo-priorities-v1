import React from 'react';
import Task from './Task';

const List = ({ name, items, taskClick }) => (
  <div>
    <h1>{name}</h1>
    <ul>
      {
        items.map( item => <Task key={item.id} {...item} taskClick={taskClick} /> )
      }
    </ul>
  </div>
)

export default List;