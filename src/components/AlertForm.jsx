import React from 'react'
import './styles/alertForm.css'

const AlertForm = ({formAlertCheck, formAlertDelete, formAlertEmpty, userName, createUpdate, setFormAlertDelete, userId, deleteUserById }) => {

  const handleDelete = () => {
    deleteUserById(userId)
    setFormAlertDelete(true)
  }
  const alertExit = () => {
    setFormAlertDelete(true)
  }

  return (
    <div>
      <div className={`formAlertContainer ${formAlertCheck ? '' : 'alertCorrect'}`}>
        <div className='formAlert'>
          <img src="/iconCheck.png" alt="" />
          <h3> El Usuario <span className='userName'>{userName}</span>  a sido {createUpdate ? "actualizado" : "creado"} correctamente</h3>
        </div>
      </div>

      <div className={`formAlertContainerDelete ${formAlertDelete ? '' : 'alertDelete'}`}>
        <div className='formAlertDelete'>
          <button onClick={alertExit} className='formAlerExit'>x</button>
          <h3>Eliminar Usuario</h3>
          <p>El Usuario <span  className='userName'>{userName}</span> sera eliminado</p>
          <button onClick={handleDelete} className='btn_Delete'>Aceptar</button>
        </div>
      </div>

      <div className={`formAlertContainer ${formAlertEmpty ? '' : 'alertCorrect'}`}>
        <div className='formAlert'>
          <img src="/iconError.png" alt="" />
          <h3>Debe completar todas las areas del Formulario</h3>
        </div>
      </div>
    </div>
  )
}

export default AlertForm