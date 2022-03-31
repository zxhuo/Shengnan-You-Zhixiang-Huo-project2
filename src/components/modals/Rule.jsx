import React from 'react'
import {  useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import Letter from '../games/Letter'

function Rule(props) {

  const [open, setOpen] = useState(false);
  return (
    <Modal
    basic
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    size='small'
    trigger={<Button>Rule</Button>}
  >
    <Header>
      HOW TO PLAY
    </Header>

    <Modal.Content>
      <div className='instructions'>
        <p>Guess the WORDLE in seven tries.</p>
        <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>

        <div className='examples'>
          <p><strong>EXAMPLE</strong></p>
          <div>

          <div>
            <p>The letter A is in the word and in the correct spot.</p>
            <div class="row">
              <div class="letter" id="correct">A</div>
              <div class="letter" >P</div>
              <div class="letter" >P</div>
              <div class="letter" >L</div>
              <div class="letter" >E</div>
            </div>
          </div>

            <p>The letter A is in the word but in the wrong spot.</p>
            <div class="row">
              <div class="letter" id="almost">A</div>
              <div class="letter" >P</div>
              <div class="letter" >P</div>
              <div class="letter" >L</div>
              <div class="letter" >E</div>
            </div>
          </div>

          <div>
            <p>The letter A is not in the word in any spot.</p>
            <div class="row">
              <div class="letter" id="error">A</div>
              <div class="letter" >P</div>
              <div class="letter" >P</div>
              <div class="letter" >L</div>
              <div class="letter" >E</div>
            </div>
          </div>
        </div>
      </div>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted onClick={() => setOpen(false)}>
        <Icon name='remove' /> Close
      </Button>
    </Modal.Actions>
  </Modal>
  )
}

export default Rule;