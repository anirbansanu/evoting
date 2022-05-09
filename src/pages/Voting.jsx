import React from 'react';
import PropTypes from 'prop-types';

function Voting(props) {
  return (
    <div className="container-fluid mb-2">
      <div className='row mt-3'>
        <div className='col-12 col-md-6'>
          <div className='card mt-3 w-100 border-secondary p-3' style={{height: "75px"}}>
            <div className='card' style={{height: "40px",width: '40px',background: '#222', borderRadius:'50%'}}>
            </div>
          </div>
          <div className='card mt-3 w-100 border-secondary p-3' style={{height: "75px"}}>
            <div className='card' style={{height: "40px",width: '40px',background: '#222', borderRadius:'50%'}}>
            </div>
          </div>
          <div className='card mt-3 w-100 border-secondary p-3' style={{height: "75px"}}>
            <div className='card' style={{height: "40px",width: '40px',background: '#222', borderRadius:'50%'}}>
            </div>
          </div> 
          <div className='card mt-3 w-100 border-secondary p-3' style={{height: "75px"}}>
            <div className='card' style={{height: "40px",width: '40px',background: '#222', borderRadius:'50%'}}>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          
        </div>
  
      </div>
      
    </div>
  )
}

Voting.propTypes = {}

export default Voting;
