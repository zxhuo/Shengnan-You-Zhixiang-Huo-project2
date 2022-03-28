import React from 'react'
import {  Link } from 'react-router-dom';

function home() {
  return (
    <div className='ui segment'>
      <div className='content'>
    <div className="ui middle aligned divided list ">
        <h1 className='ui large header'>Select Your Difficulty Level</h1>
        <div className="item">
          <div className="right floated content">
            <Link className='item ui button' to='/games/easy'>
              Select
            </Link>
            </div>
            <i className="chess king icon"></i>
            <div className="content ">
            Easy
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
          <Link className='item ui button' to='/games/medium'>
              Select
            </Link>
            </div>
            
            <i className="chess king icon"></i>
            <div className="ui large medium content ">
            Medium
          </div>
        </div>
        <div className="item">
          <div className="right floated content">
          <Link className='item ui button' to='/games/hard'>
              Select
              </Link>
              
            </div>
            <i className="chess king icon"></i>
            <div className="content">
          Hard
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default home;