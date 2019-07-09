import React from 'react';
import Task from './Task';

const List = ({ items, taskClick }) => (
  <div>
    <ul>
      {
        items.map( item => <Task key={item.id} {...item} taskClick={taskClick} /> )
      }
    </ul>
  </div>
)

export default List;