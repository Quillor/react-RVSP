import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';



const Guest = (props)  =>
<div className="col-md-6 Guest-Fade" id="Guest" >
  <div className="card p-3 my-3">
    <div className="row">
        <div className="col-4">
          <img src={props.avatarURL} className="w-100 border border-dark rounded-circle" alt={props.name} />
        </div>
        <div className="col-8">
          <GuestName
            isEditing={props.isEditing}
            handChangeEdits={e => props.setName(e.target.value)}
            >
            {props.name}
          </GuestName>
          <div className="my-3">
            <input
              type="checkbox"
              checked={props.isConfirmed}
              onChange={props.handleConfirmation}
              /> Confirmed
          </div>
          <div className="d-flex flew-row w-100 justify-content-between">
            <button
              onClick={props.handleToggleEditing}
              className={props.isEditing ? 'btn btn-sm btn-success' : 'btn btn-sm btn-primary'}>

               {props.isEditing ? 'save' : 'edit'}
            </button>
            <button className='btn btn-sm btn-outline-danger'>remove</button>
          </div>
        </div>
    </div>
  </div>
</div>
  ;



Guest.proptypes = {
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  avatarURL: PropTypes.string.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired
};

export default Guest;
