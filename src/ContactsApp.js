import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
// import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';

class ContactsApp extends Component {
  constructor() {
    super();
    this.state = {
      filterText: '',
    };
  }

  handleUserInput(searchTerm){
    this.setState({filterText: searchTerm})
  }

  render() {
    return(
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText} />
      </div>
    );
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}


class ContactList extends Component {
  render() {
    let filteredContacts = this.props.contacts.filter(
      (contact) => contact.name.indexOf(this.props.filterText) !== -1
    );

    return(
      <ul>
         {filteredContacts.map(
            (contact) => <ContactItem key={contact.email}
                                      name={contact.name}
                                      email={contact.email} />
         )}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

class ContactItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email}</li>;
  }
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}


export default ContactsApp;
