import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Fragment } from 'react';

function Navigation() {
  return (
    <Fragment>
        <div className='navigation'>
          <Link to='/'>
            <div className='nav-name'>Wordle</div>
          </Link>
          <div className='links'>
            <Link className='nav-link' to='/rule'>
              RULE
            </Link>
            <Link className='nav-link' to='/easy'>
              EASY
            </Link>
            <Link className='nav-link' to='/medium'>
              MEDIUM
            </Link>
            <Link className='nav-link' to='/hard'>
              HARD
            </Link>
          </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;