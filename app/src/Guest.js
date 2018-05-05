import React from 'react';
import PropTypes from 'prop-types';


const Guest = props =>
<div className="col-md-6">
  <div className="card p-3 my-3">
    <div className="row">
        <div className="col-4">
          <img src={props.avatarURL} className="w-100 border border-dark rounded-circle" alt={props.name} />
        </div>
        <div className="col-8">
          <h3>{props.name}</h3>
          <div className="my-3">
            <input type="checkbox" checked={props.isConfirmed} /> Confirmed
          </div>
          <div className="d-flex flew-row w-100 justify-content-between">
            <button className='btn btn-sm btn-primary'>edit</button>
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
  avatarURL: PropTypes.string.isRequired,
};

export default Guest;
