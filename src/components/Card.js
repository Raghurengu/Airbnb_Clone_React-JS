import React from 'react';
import star from '../images/star.png';



export const Card = (props) => {
  return (
      <div className='card'>
        <div className='rel'> <span className='badge'>{props.avl == 0 ? <p>UnAvailable</p> : <p>{props.avl}Left</p> }</span>
        <img src={props.img} className='zaf' /></div>
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


