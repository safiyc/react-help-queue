import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  return (
    <div>
      <style jsx>{`
        div {
          max-width: 1050px;
          margin: 0 auto;
        }
      `}</style>
      <h2>In The Queue</h2>
      {props.ticketList.map((ticket, index) => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
