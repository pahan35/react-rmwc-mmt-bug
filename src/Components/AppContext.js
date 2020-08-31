import React, {useState} from 'react'

const initialUser = {hasSubscription: false}

const AppContext = React.createContext({setUser: () => {}, user: initialUser})

export function AppContextWrapper({children}) {
  const [user, setUser] = useState(initialUser)
  return (
    <AppContext.Provider value={{setUser, user}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
