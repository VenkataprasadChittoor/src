import React from 'react'
import ComponentA from './ComponentA'
const Provider=()=> {
  const UserContext=React.createContext();
  return (
    <div>
      <UserContext.Provider value="prasad">
      <ComponentA/>
      </UserContext.Provider>
    </div>
  )
}

export default Provider;
