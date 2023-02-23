import React from 'react';
import star from '../images/star.png';



export const Card = (props) => {
  return (
      <div className='card'>
      <img src={props.img} className='zaf' />
        <div className='stats'>
          <img src={star} className='star' />
          <span className='bold'>{props.rating}</span>
          <span className='grey'>({props.revcount}) &middot; {props.country}</span>
        </div>
        <div>
          <p>{props.title}</p>
          <p><span className='bold'>From &#8377; {props.price}</span> / person</p>
        </div>
      </div>
    )
}


