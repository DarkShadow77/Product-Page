import React, { useContext, useState } from 'react'
import { createContext } from 'react';


export const MyContext = createContext("");
export const useContextHook = () => useContext(MyContext);

const AppContext = ({ children }) => {
  const [cart, setCart] = useState([])

  return (
    <div>
      <MyContext.Provider value={{cart, setCart}}>
        {children}
      </MyContext.Provider>
    </div>
  )
}

export default AppContext