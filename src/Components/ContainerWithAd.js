import AdSlot1 from 'Components/AdSlot1'
import {Button, Card} from 'mdc'
import React, {useState} from 'react'

export default function ContainerWithAd() {
  const [open, setOpen] = useState(true)
  return (
    <Card>
      {open && (
        <aside>
          I&apos;m sidebar
          <AdSlot1 />
        </aside>
      )}
      <Button onClick={() => setOpen(prevOpen => !prevOpen)}>
        {open ? 'Hide' : 'Show'} Sidebar
      </Button>
    </Card>
  )
}
