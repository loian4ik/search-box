import {useState} from 'react'
import SearchboxContext from '../../context/searchbox/SearchboxContext'
import { useContext } from 'react';

function UserSearch() {
 const [text, setText] = useState('')

 const {users, searchUsers, clearUsers} = useContext(SearchboxContext)

 const handleChange = (e) => setText(e.target.value)

 const handleSubmit = (e) => {
    e.preventDefault()

    if (text === '') {
     alert('Please enter something')
    } else if( text !=='' && text.trim().length <= 3){
      alert('Text must be at least 3 characters')
    }  
    else {
       searchUsers(text)

       setText('')
    }
  }

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
    <div>
     <form onSubmit={handleSubmit}>
      <div className="form-control">
      <div className="relative">
      <input
      type='text'
      className='w-full pr-40 bg-base-100 input input-lg text-black'
      placeholder='Search'
      value={text}
      onChange={handleChange}
      />
      <button
      type='submit'
      className='absolute top-0 right-0 rounded-l-none 
      w-36 bg-secondary text-white btn btn-lg '>
      Go
    </button>
      </div>
      </div>
     </form>
     </div>
     {users.length > 0 && (<div>
      <button onClick={clearUsers} className='btn btn-ghost btn-lg'>Clear</button>
      </div>) } 
    </div>
  )
}

export default UserSearch
