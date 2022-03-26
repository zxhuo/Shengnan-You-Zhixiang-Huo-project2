import React from 'react'
import { Fragment, useState } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'


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