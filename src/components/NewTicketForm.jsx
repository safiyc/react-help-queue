import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(e) {
    e.preventDefault();
    props.onNewTicketCreation({ names: _names.value, location: _location.value, issue: _issue.value, id: v4() });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }

  return (
    <div>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
        }
        input, textarea {
          margin: 3px auto;
          width: 400px;
        }
        button {
          width: 70px;
          height: 30px;
          margin: 10px auto
        }
      `}</style>
      {/* <h2>Create a Ticket</h2> */}
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type="text"
          id="names"
          placeholder="Pair Names"
          ref={(input) => { _names = input; }} />
        <input
          type="text"
          id="location"
          placeholder="Location"
          ref={(input) => { _location = input; }} />
        <textarea
          id="issue"
          placeholder="Describe your issue"
          ref={(textarea) => { _issue = textarea; }} />
        <button type="submit">Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};
export default NewTicketForm;