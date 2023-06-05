import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import useUserCrud from './hooks/useUserCrud'
import FormUser from './components/FormUser'
import AlertForm from './components/AlertForm'


function App() {
  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true) // cerrar en formulario
  const [formAlertCheck, setFormAlertCheck] = useState(true) //confirmacion de ingreso
  const [formAlertDelete, setFormAlertDelete] = useState(true)  //cerrar la alerta de Delete
  const [formAlertEmpty, setFormAlertEmpty] = useState(true) //alerta por capos vacios

  const [userId, setUserId] = useState()
  const [userName, setUserName] = useState()
  const [createUpdate, setCreateUpdate] = useState(true)


  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById,
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])

  const handleOpenForm = () => {
    setFormClose(false)
  }

  return (

    <div className='app'>
      <header className='app_header' >
        <h1>Users</h1>
        <button onClick={handleOpenForm}>Create new user</button>
      </header>

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        formClose={formClose}
        setFormClose={setFormClose}
        setFormAlertCheck={setFormAlertCheck}
        setFormAlertEmpty={setFormAlertEmpty}
        setUserName={setUserName}
        setCreateUpdate={setCreateUpdate}
      />

      <div className='app-user-contain'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              setFormAlertDelete={setFormAlertDelete}
              setUserId={setUserId}
              setFormClose={setFormClose}
              setUserName={setUserName}
            />
          ))
        }
      </div>

      <AlertForm
        formAlertCheck={formAlertCheck}
        formAlertDelete={formAlertDelete}
        formAlertEmpty={formAlertEmpty}
        userName={userName}
        createUpdate={createUpdate}
        setFormAlertDelete={setFormAlertDelete}
        userId={userId}
        deleteUserById={deleteUserById}
      />

    </div>
  )
}

export default App
