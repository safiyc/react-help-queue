import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx global>{`
        h3 {
          color: black;
          margin-bottom: 4px;
          padding-left: 15px;
        }
      `}</style>
      <style jsx>{`
        p {
          margin-top: 0;
          padding-left: 15px;
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
