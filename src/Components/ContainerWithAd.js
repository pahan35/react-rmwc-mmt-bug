import AdSlot1 from 'Components/AdSlot1'
import AppContext from 'Components/AppContext'
import {Button, Card} from 'mdc'
import React, {useContext} from 'react'

export default function ContainerWithAd() {
  const {setUser} = useContext(AppContext)
  return (
    <Card>
      <AdSlot1 />
      <Button onClick={() => setUser({hasSubscription: true})}>
        Sign in as subscribed user
      </Button>
    </Card>
  )
}
