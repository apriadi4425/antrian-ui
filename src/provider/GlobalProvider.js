import { createContext } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({children}) => {

    const GlobalState = {}
    return(
        <GlobalContext.Provider value={GlobalState}>
            {children}
        </GlobalContext.Provider>
    )
}