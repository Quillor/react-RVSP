import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
<div className="row">
  {props.guests
    .filter(guest => !props.isFiltered || guest.isConfirmed )
    .map((guest, index) =>
      <Guest
        key={index}
        name={guest.name}
        totalGuestNumber={props.totalGuestNumber}
        guestNumber={index + 1}
        lastGuest={index === 0}
        isConfirmed={guest.isConfirmed}
        isEditing={guest.isEditing}
        avatarURL={guest.avatarURL}
        handleConfirmation={() => props.toggleConfirmationAt(index)}
        handleToggleEditing={() => props.toggleEditingAt(index)}
        setName={text => props.setNameAt(text, index)}
        handleRemove={() => props.removeGuestAt(index)}
        />
  )}
</div>;

GuestList.proptypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  guestNumber: PropTypes.string.isRequired,
  removeGuestAt: PropTypes.func.isRequired,

}

export default GuestList;
