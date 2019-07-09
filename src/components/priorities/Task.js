import React from 'react';

const styles = {
  todo: {
    cursor: 'pointer',
  },
  complete: {
    color: 'grey', 
    textDecoration: 'line-through',
  }
}

const Task = ({ id, name, complete, taskClick }) => (
  <li
    style={complete ? { ...styles.task, ...styles.complete } : styles.task }
    onClick={ () => taskClick(id) }
  >
    { name }
  </li>
)


export default Task;