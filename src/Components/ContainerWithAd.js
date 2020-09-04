import AdSlot1 from 'Components/AdSlot1'
import AdSlotInfinite from 'Components/AdSlotInfinite'
import {Button, Card} from 'mdc'
import React, {Fragment, useState} from 'react'

function Pages({pages}) {
  const renderedPages = []
  for (let i = 1; i <= pages; i += 1) {
    renderedPages.push(
      <Fragment key={i}>
        Page {i}
        <AdSlotInfinite />
      </Fragment>,
    )
  }
  return renderedPages
}

export default function ContainerWithAd() {
  const [open, setOpen] = useState(true)
  const [pages, setPages] = useState(1)
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
      <Pages pages={pages} />
      <Button onClick={() => setPages(prevPages => prevPages + 1)}>
        Add page
      </Button>
    </Card>
  )
}
