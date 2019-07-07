import React from 'react';

const filterLink = (current, name, setFilter ) => {
  if (current === name )
    return <span>{name}</span>
  else
    return <span onClick={ () => setFilter(name) }>{name}</span>
}

const Footer = ({ filter, setFilter }) => (
  <div>
    {
      ['All', 'Active', 'Complete'].map( f => filterLink( filter, f, setFilter) )
    }
  </div>
)

export default Footer;