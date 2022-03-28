import React from 'react';
import { Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import Rule from './Rule'

function Navigation() {

  return (
    <Fragment>
        <div className='ui secondary pointing menu'>
          <Link to='/'>
            <div className='item'>Wordle</div>
          </Link>
          <div className='right menu'>
            <Rule />
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;