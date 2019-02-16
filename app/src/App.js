import React, { Component } from 'react';
import './App.css';
import  GuestList from './GuestList';


class App extends Component {
  state = {

    isFiltered: true,
    pendingGuest: "",
    guests: [
      {
        name: 'Get the Milk',
        isCompleted: false,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/female-44.jpg',
        isEditing: false,
        id: 1,
      },
      {
        name: 'Nick',
        isCompleted: true,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/male-14.jpg',
        isEditing: false,
        id: 2,
      },
      {
        name: 'Jessica',
        isCompleted: false,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/female-4.jpg',
        isEditing: false,
        id: 3,
      },
      {
        name: 'James',
        isCompleted: true,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/male-2.jpg',
        isEditing: false,
        id: 4,
      },
      {
        name: 'Megan',
        isCompleted: false,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/female-2.jpg',
        isEditing: false,
        id: 5,
      },
      {
        name: 'Sam',
        isCompleted: true,
        avatarURL: 'https://d3iw72m71ie81c.cloudfront.net/male-1.jpg',
        isEditing: false,
        id: 6,
      }
    ],
    displayLength: 6,
  }

  checkDisplayLength = () =>
    this.setState({
      displayLength: this.state.guest.filter(
      ).length
    }
  );

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
    this.toggleGuestPropertyAt("isCompleted", index);

  removeGuestAt = index =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });

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

  handleNameInput = e =>
      this.setState({ pendingGuest: e.target.value});

  newGuestSubmitHandler = e =>{
    if (this.state.pendingGuest.trim().length >= 1) {
      e.preventDefault(
        this.setState({
          guests: [
            {
              name: this.state.pendingGuest,
              isCompleted: false,
              avatarURL: `https://d3iw72m71ie81c.cloudfront.net/male-${Math.floor(Math.random() * Math.floor(50))}.jpg`,
              // avatarURL: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
              isEditing: false,
            },
            ...this.state.guests

          ],
          pendingGuest: ''
        })
      );
    } else {
      alert("Please enter a name");
    }

  }
  getTotalInvited = () => this.state.guests.length;
  // Get Attending Guest

  // Get how many are not coming


  render() {
    return (
      <div className="App">
        {this.checkDisplayLength}
        {console.log(`${this.state.displayLength}`)}
        <header>
          <h1>To Do</h1>
          <form onSubmit={this.newGuestSubmitHandler}>
              <input
                type="text"
                value=""
                onChange={this.handleNameInput}
                value={this.state.pendingGuest}
                placeholder="New Task"/>
              <button
                type="submit"
                name="submit"
                value="submit"
                className="btn btn-primary"
                disabled={this.state.pendingGuest.trim().length < 1}

                >Add</button>
          </form>
        </header>
        <div className="main">
          <div>
            <label>
              <input
                type="checkbox"
                onChange={this.toggleFilter}
                check={this.state.isFiltered}
                /> Show Completed Tasks
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Completed:</td>
                <td>{this.state.guests.filter(guest => guest.isCompleted).length}</td>
              </tr>
              <tr>
                <td>In Complete:</td>
                <td>{this.state.guests.filter(guest => !guest.isCompleted).length}</td>
              </tr>
              <tr>
                <td>Tasks:</td>
                <td>{this.state.guests.length}</td>
              </tr>
            </tbody>
          </table>
          <div className="row">
            <GuestList
              guests={this.state.guests}
              totalGuestNumber={this.state.guests.length}
              toggleConfirmationAt={this.toggleConfirmationAt}
              toggleEditingAt={this.toggleEditingAt}
              isFiltered={this.state.isFiltered}
              setNameAt={this.setNameAt}
              removeGuestAt={this.removeGuestAt}
              />
          </div>



        </div>
      </div>
    );
  }
}

export default App;
