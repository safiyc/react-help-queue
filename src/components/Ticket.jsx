import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx global>{`
        div {
          background-color: green;
        }
        h3 {
          color: blue;
        }
      `}</style>
      <style jsx>{`
        p {
          background: purple;
        }
      `}</style>
      <h3>
        {props.location} - {props.names}
      </h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr />
    </div>
  );
}

// declaring Proptypes is optional
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
