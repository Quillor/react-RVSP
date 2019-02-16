import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';



const Guest = (props)  =>
<div className="col-md-12 d-block Guest-Fade" id="Guest" >
  <div className="card p-1 my-1">
    <div className="row p-4">
        <div className="col-8 d-flex flex-direction-row align-items-center">
          <h3 className="d-block">{props.guestNumber}</h3>
          <input
            type="checkbox"
            checked={props.isCompleted}
            onChange={props.handleConfirmation}
            />
          <GuestName
            isEditing={props.isEditing}
            handChangeEdits={e => props.setName(e.target.value)}
            >
            {props.name}

          </GuestName>

        </div>
        <div className="col-4">
          <div className="d-flex flex-direction-row align-items-center">
            <button onClick={props.handleRemove}
              className='btn btn-sm m-1  btn-block btn-outline-danger'>remove</button>
            <button
              onClick={props.handleToggleEditing}
              className={props.isEditing ? 'btn btn-sm m-1  btn-block btn-success' : 'btn btn-sm m-1  btn-block btn-primary'}>
               {props.isEditing ? 'save' : 'edit'}
            </button>

          </div>
        </div>

          <div className="row">
            <div className="col">

            </div>
          </div>

    </div>
  </div>
</div>
  ;



Guest.proptypes = {
  name: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  avatarURL: PropTypes.string.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handleToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Guest;
