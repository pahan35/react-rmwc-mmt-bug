import AppContext from 'Components/AppContext'
import React, {useContext, useEffect, useRef} from 'react'

export default function MMTSlot({infiniteSlotId, slotId, ...props}) {
  const {user} = useContext(AppContext)
  const adSlotRef = useRef()
  const infiniteSlotRef = useRef()
  useEffect(() => {
    // imitate DOM modifying by ad script
    setTimeout(() => {
      const ad = document.createElement('center')
      adSlotRef.current.parentNode.appendChild(ad)
      ad.appendChild(adSlotRef.current)
    }, 350)
  }, [])
  useEffect(() => {
    if (!infiniteSlotId) {
      return
    }
    // CHECKME(pavlo): Do we need to pass defined classname or global object is enough?
    window.mmtInfSc9945fff5ad15 = window.mmtInfSc9945fff5ad15 || {}
    const {mmtInfSc9945fff5ad15} = window
    mmtInfSc9945fff5ad15.cmd = mmtInfSc9945fff5ad15.cmd || []
    mmtInfSc9945fff5ad15.cmd.push(infiniteSlotRef.current)
  }, [infiniteSlotId])
  useEffect(() => {
    window.$MMT = window.$MMT || {}
    const {$MMT} = window
    $MMT.cmd = $MMT.cmd || []
    $MMT.cmd.push(() => {
      $MMT.display.slots.push([slotId])
    })
  }, [slotId])
  if (user && user.hasSubscription) {
    return null
  }
  return (
    <>
      I am ad slot #{slotId}
      <div ref={adSlotRef} id={`mmt-${slotId}`} {...props} />
      {infiniteSlotId && (
        <div ref={infiniteSlotRef} className={infiniteSlotId} />
      )}
    </>
  )
}
