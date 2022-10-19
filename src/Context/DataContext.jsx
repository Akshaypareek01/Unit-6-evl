cpr

import React from 'react'
import { createContext } from 'react'

export const DataContext=createContext()

export const DataContextProvider = ({children}) => {

   


  return (
    <DataContext.Provider value={getData}>{children}</DataContext.Provider>
  )
}
