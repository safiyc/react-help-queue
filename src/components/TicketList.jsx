import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issueX: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issueX: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issueX: 'Donkey picture not displaying on hover.'
  }
];
function TicketList() {
  return (
    <div>
      <style jsx>{`
        div {
          width: 90%;
          margin: 0 auto;
        }
      `}</style>
      <h2>In The Queue</h2>
      {masterTicketList.map((ticket, index) => (
        <Ticket
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issueX}
          key={index} />
      ))}
    </div>
  );
}

export default TicketList;
