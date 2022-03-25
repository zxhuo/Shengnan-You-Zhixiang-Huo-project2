import React from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Fragment } from 'react';

function Navigation() {
  let { level  } = useParams();
  let path = '/games/' + level;
  return (
    <Fragment>
        <div className='ui secondary pointing menu'>
          <Link to='/'>
            <div className='item'>Wordle</div>
          </Link>
          <div className='right menu'>
            <Link className='item' to='/rule'>
              RULE
            </Link>
           
          
          </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;