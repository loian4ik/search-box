import { createContext, useReducer} from "react";
import searchboxReducer from './SearchboxReducer'


const SearchboxContext = createContext()

const SEARCHBOX_URL = process.env.REACT_APP_SEARCHBOX_URL

export const SearchboxProvider = ({children}) => {

    const initialState = {
        users: [],
        loading: false,
    }
     const [state, dispatch] = useReducer(searchboxReducer, initialState)

       
     
     const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
         q: text,   
         })
          

     const response = await fetch(`${SEARCHBOX_URL}comments?${params}`,
       
        )
        
       
    const data = await response.json()
    
        dispatch({
        type: 'GET_USERS',
        payload: data,
       })
       }

       const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  const setLoading = () => dispatch ({type:
'SET_LOADING'})


    return (
    <SearchboxContext.Provider value ={{

        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
    }}>
        {children}
    </SearchboxContext.Provider>
    )

}
export default SearchboxContext