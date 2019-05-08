import React from 'react';

function NewTicketForm() {
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
          width: 80%;
        }
        button {
          width: 70px;
          height: 30px;
          margin: 10px auto
        }
      `}</style>
      <h2>Create a Ticket</h2>
      <form>
        <input
          type="text"
          id="names"
          placeholder="Pair Names" />
        <input
          type="text"
          id="location"
          placeholder="Location" />
        <textarea
          id="issue"
          placeholder="Describe your issue" />
        <button type="submit">Help!</button>
      </form>
    </div>
  );
}

export default NewTicketForm;