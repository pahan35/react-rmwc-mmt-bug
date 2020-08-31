import {AppContextWrapper} from 'Components/AppContext.js'
import ContainerWithAd from 'Components/ContainerWithAd'
import React from 'react'

export default function App() {
  return (
    <AppContextWrapper>
      <ContainerWithAd />
    </AppContextWrapper>
  )
}
