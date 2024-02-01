import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from './utils';

const Notifications = () => {
  return (
    <div className='Notifications'>
        <button
          style={{position: 'absolute', top: '0.5rem', right: '0.1rem', color: '#3A3A3A', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer'}}
          aria-label='Close'
          onClick={console.log('Close button has been clicked')}
          >
          <img src={closeIcon} alt='Close' width='40px' />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          <li data="default">New course available</li>
          <li data="urgent">New resume available</li>
          <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
        </ul>
    </div>
  )
}

export default Notifications