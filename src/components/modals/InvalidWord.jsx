import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { useGameContext } from '../../contexts/GameProvider'

function InvalidWord() {
  const {open, setOpen,warningType, col} = useGameContext();
  

  return (
   
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          onMount={()=>setTimeout(() => {
            setOpen(false)
          }, 1500)}
          size = 'mini'
          open={open}
        className='hide-slow'>
          <Modal.Content>
            <Modal.Description>
              <h3>
              {warningType === "1"
                        ? <p>Word is too short! Please try a {col} letter word! </p>
                        : <p> Not in word List! Please try a new word! </p>}
              </h3>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    
  )
}

export default InvalidWord