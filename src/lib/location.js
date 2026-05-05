import React, {createContext, useContext} from 'react'

const LocationContext = createContext(null)

export const LocationProvider = ({location, children}) => (
  <LocationContext.Provider value={location}>{children}</LocationContext.Provider>
)

export const useLocation = () => {
  const location = useContext(LocationContext)
  if (location == null) {
    throw new Error('useLocation must be used inside LocationProvider')
  }
  return location
}
