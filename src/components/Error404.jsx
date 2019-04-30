import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props) {
  // console.log(props);
  return (
    <div>
      <h2>The page <em>{props.location.pathname}</em> doesn't exist.</h2>
      <h3>Would you like to return <Link to="/">home?</Link></h3>
    </div>
  );
}
// 
Error404.propTypes = {
  location: PropTypes.object,
  // pathname: PropTypes.string
};

export default Error404;