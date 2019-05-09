import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: []
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
  }

  handleAddingNewTicketToList(newTicket) {
    // why slice method used?
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({ masterTicketList: newMasterTicketList });
  }
  render() {
    const allContent = {
      maxWidth: 1200,
      margin: '0 auto'
    };
    return (
      <div style={allContent}>
        <style jsx global>{`
          body {
            overflow-y: scroll;
          }
          h2 {
            text-align: center;
          }
        `}</style>
        <Header />
        <Switch>
          <Route exact path='/' render={() => <TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
