import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props =>
<div className="row">
  {props.guests.map((guest, index) =>

      <Guest
        key={index}
        name={guest.name}
        isConfirmed={guest.isConfirmed}
        avatarURL={guest.avatarURL}
        />

  )}
</div>;

GuestList.proptypes = {
  guests: PropTypes.array.isRequired
}

export default GuestList;
