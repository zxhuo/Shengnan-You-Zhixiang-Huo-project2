import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { useGameContext } from '../../contexts/GameProvider'

function InvalidWord() {
  const {open, setOpen} = useGameContext();

  return (
   
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header>Notification</Modal.Header>
          <Modal.Content image>
            {/* <Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped /> */}
            <Modal.Description>
              <Header>Try Again</Header>
              <p>
                This is not a word!
              </p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              content="Got it"
              labelPosition='right'
              icon='checkmark'
              onClick={() => setOpen(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
    
  )
}

export default InvalidWord