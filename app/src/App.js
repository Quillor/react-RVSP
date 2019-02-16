import React, { Component } from 'react';
import './App.css';
import  GuestList from './GuestList';

class App extends Component {
  state = {
    isFiltered: false,
    guests: [
      {
        name: 'Sarah',
        isConfirmed: false,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/female-44.jpg',
        isEditing: true,

      },
      {
        name: 'Nick',
        isConfirmed: true,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/male-14.jpg',
        isEditing: false,

      },
      {
        name: 'Jessica',
        isConfirmed: false,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/female-4.jpg',
        isEditing: false,

      },
      {
        name: 'James',
        isConfirmed: true,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/male-2.jpg',
        isEditing: false,

      },
      {
        name: 'Megan',
        isConfirmed: false,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/female-2.jpg',
        isEditing: false,

      },
      {
        name: 'Sam',
        isConfirmed: true,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/male-1.jpg',
        isEditing: false,

      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange){
          return{
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest
      })
    });

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index =>
    this.toggleGuestPropertyAt("isEditing", index);



  setNameAt = (name, indexToChange) =>
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange){
          return{
            ...guest,
            name
          };
        }
        return guest
      })
    });


  toggleFilter = () =>
    this.setState({isFiltered: !this.state.isFiltered});
  getTotalInvited = () => this.state.guests.length;
  // Get Attending Guest

  // Get how many are not coming


  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form>
              <input type="text" value="Safia" placeholder="Invite Someone"/>
              <button type="submit" name="submit" value="submit" onSubmit={""}>Submit</button>
          </form>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                check={this.state.isFiltered}
                /> Hide those who havent responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>{this.state.guests.filter(guest => guest.isConfirmed).length}</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>{this.state.guests.filter(guest => !guest.isConfirmed).length}</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>{this.state.guests.length}</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <GuestList
              guests={this.state.guests}
              toggleConfirmationAt={this.toggleConfirmationAt}
              toggleEditingAt={this.toggleEditingAt}
              isFiltered={this.state.isFiltered}
              setNameAt={this.setNameAt}
              />
          </div>



        </div>
      </div>
    );
  }
}

export default App;
