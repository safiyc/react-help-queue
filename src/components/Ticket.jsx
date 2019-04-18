import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props) {
  return (
    <div>
      <style jsx global>{`
        div {
          background-color: green;
        }
      `}</style>
      <h3>
        {props.location} - {props.names}
      </h3>
      <p>
        <em>{props.issues}</em>
      </p>
      <hr />
    </div>
  );
}

// declaring Proptypes is optional
Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issues: PropTypes.string
};

export default Ticket;
