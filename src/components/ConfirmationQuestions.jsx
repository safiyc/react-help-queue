import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
  return (
    <div>
      <style jsx>{`
        div {
          max-width: 1050px;
          margin: 0 auto;
        }
      `}</style>
      {/* <h2>Create a Ticket</h2> */}
      <p>You went through Step 1?</p>
      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
};

export default ConfirmationQuestions;