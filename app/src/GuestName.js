import React from 'react';
import PropTypes from 'prop-types';

const GuestName = props => {
    if (props.isEditing){
      return (
        <input type="text" className="form-control" value={props.children}/>
      );
    }

    return (
      <span class="p-2">{props.children}</span>
    );
};

GuestName.proptypes = {
  isEditing: PropTypes.bool.isRequired,
};

export default GuestName;
