import React, { useState }from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import Rule from '../modals/Rule'

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