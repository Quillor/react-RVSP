import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
    if (props.isEditing){
      return (
        <input
          type="text"
          className="form-control h2"
          value={props.children}
          onChange={props.handChangeEdits}
        />
      );
    }

    return (
      <span class="p-2 form-control">{props.children}</span>
    );
};

GuestName.proptypes = {
  isEditing: PropTypes.bool.isRequired,
  handChangeEdits: PropTypes.func.isRequired
};

export default GuestName;
