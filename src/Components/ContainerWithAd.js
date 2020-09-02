import AdSlot1 from 'Components/AdSlot1'
import AppContext from 'Components/AppContext'
import {Button, Card} from 'mdc'
import React, {useContext, useState} from 'react'

export default function ContainerWithAd() {
  const {setUser} = useContext(AppContext)
  const [count, setCount] = useState(0)
  return (
    <Card>
      Count is {count}
      <AdSlot1 />
      <Button onClick={() => setUser({hasSubscription: true})}>
        Sign in as subscribed user
      </Button>
      <Button onClick={() => setCount(prevCount => prevCount + 1)}>
        Increase
      </Button>
    </Card>
  )
}
