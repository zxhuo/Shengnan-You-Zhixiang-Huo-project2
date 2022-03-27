import React from 'react'
import {  Link, useParams } from 'react-router-dom';

function home() {
  return (
    <div className='ui segment'>
      <div className='content'>
    <div className="ui middle aligned divided list ">
        <h1 className='ui large header'>Select Your Difficulty Level</h1>
        <div class="item">
          <div class="right floated content">
            <Link className='item ui button' to='/games/hard'>
              Select
            </Link>
            </div>
            <i class="chess king icon"></i>
            <div class="content ">
            Easy
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
          <Link className='item ui button' to='/games/hard'>
              Select
            </Link>
            </div>
            
            <i class="chess king icon"></i>
            <div class="ui large medium content ">
            Medium
          </div>
        </div>
        <div class="item">
          <div class="right floated content">
          <Link className='item ui button' to='/games/hard'>
              Select
              </Link>
              
            </div>
            <i class="chess king icon"></i>
            <div class="content">
          Hard
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default home;