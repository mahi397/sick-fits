import React from 'react';
import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h2>I am the page component</h2>
      <h3>{cool}</h3>
      {children}
    </div>
  );
}
/** for error that comes up in props argument */
Page.propTypes = {
  cool: PropTypes.string,
  // children: PropTypes.arrayOf(PropTypes.node), --- if we want multiple nodes as the children
  children: PropTypes.any,
  /* --- better alternative cause children can be anything! */
};
