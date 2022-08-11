import { createContext, useReducer} from "react";
import searchboxReducer from './SearchboxReducer'
import UserItem from '../../components/users/UserItem';

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
            q:text,
        })

        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?$
        {params}`,{
           
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            }

        },
        )
        
       
        const data = await response.json()
    
        dispatch({
        type: 'GET_USERS',
        payload: data,
       })
       }

  const setLoading = () => dispatch ({type:
'SET_LOADING'})

  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

    return <SearchboxContext.Provider value ={{

        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
    }}>
        {children}
    </SearchboxContext.Provider>

}
export default SearchboxContext