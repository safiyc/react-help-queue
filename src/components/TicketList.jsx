import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props) {
  console.log(props.ticketList);
  return (
    <div>
      <style jsx>{`
        div {
          max-width: 1050px;
          margin: 0 auto;
        }
      `}</style>
      <h2>In The Queue</h2>
      {props.ticketList.map((ticket) => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={ticket.id}
          scTest={ticket.id} />
      ))}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;
