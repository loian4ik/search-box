import PropTypes from 'prop-types'

function UserItem({user: {name, email, body} }) {
  
  return   (
    
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
            <h2 className='card-title text bg-secondary'>{email}</h2>
          <h2 className='card-title'>{name}</h2>
          <h2 className='card-title text bg-base-300'>{body}</h2>
          
        </div>
      </div>
    </div>
  )


}


UserItem.propTypes = { 
 user: PropTypes.object.isRequired,
}

export default UserItem
