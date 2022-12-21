import React, { useContext } from 'react';

import { Context } from '../context';
import { useRouter } from 'next/dist/client/router';
import axios from 'axios';

export default function Auth() {
  const { setUsername, setSecret } = useContext(Context);

  return (
    <div className='background'>
      <div className='auth-container'>
        <form onSubmit={e => e.preventDefault()} className='auth-form'>
          <div className='auth-title'>PKG Chat</div>

          <div className='input-container'>
            <input
              type='email'
              placeholder='Email'
              className='text-input'
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              className='text-input'
              onChange={e => setSecret(e.target.value)}
            />

            <button type='submit' className='submit-button'>
              Login / Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
