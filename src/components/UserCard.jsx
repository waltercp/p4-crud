import React from 'react'
import './styles/userCard.css'


const UserCard = ({ user, setUpdateInfo, setFormAlertDelete,setUserId, setFormClose, setUserName}) => {

  const handleDelete = () => {
    setFormAlertDelete(false)
    setUserId(user.id)
    setUserName(user.first_name +" "+ user.last_name)
  };

  const handleUpdate = () => {
    setFormClose(false)
    setUpdateInfo(user)
    setUserName(user.first_name +" "+ user.last_name)
  }

  return (
    <article className='user'>
      <h2>{user.first_name} {user.last_name} </h2>

      <ul className='user_list'>
        <li className='user_item'>
          <span>Email</span>
          <span>{user.email}</span>
        </li>
        <li className='user_list'>
          <span>Birthday</span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <footer className='user_footer'>
        <button onClick={handleDelete}> <i className='bx bx-trash  user_icon'> </i></button>
        <button onClick={handleUpdate}><i className='bx bx-edit-alt user_icon'></i> </button>
      </footer>
    </article>
  )
}

export default UserCard