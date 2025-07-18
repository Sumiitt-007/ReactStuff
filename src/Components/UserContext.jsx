import React, { Children } from 'react'
import { createContext, useState } from 'react'

// Skipping the createContext thing for now.

const UserContext = createContext();

const UserProvider = ({children}) => {
  const[user, setUser] = useState({name : "Silva Zoldyck"})

  const updateUser = (newName) => {

    setUser({name : newUpdate})
  }

  return <UserContext.Provider value={{user, updateUser}}>
      {children}
  </UserContext.Provider>
}

export {UserContext,UserProvider};