import React, { useEffect } from 'react'
import defaultValues from './utils/defaultValues'
import { useForm } from 'react-hook-form'
import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose, setFormAlertCheck,  setFormAlertEmpty, setUserName, setCreateUpdate}) => {

    const { register, handleSubmit, reset } = useForm()


    useEffect(() => {
        reset(updateInfo)

    }, [updateInfo])

    const submit = data => {
        if (email.value == "" || password.value == "" || last_name.value == "" || first_name.value == "" || birthday.value == "") {
            setFormAlertEmpty(false)
            setTimeout(() => {
                setFormAlertEmpty(true)
            }, 1500)

            setFormClose(false)
        } else {
            if (updateInfo) {
                setCreateUpdate(true)
                setFormAlertEmpty(true)
                updateUserById(updateInfo.id, data)
                setUpdateInfo()
                reset(defaultValues)
                setFormAlertCheck(false)
                setTimeout(() => {
                    setFormAlertCheck(true)
                }, 2000)
                setFormClose(true)

            } else {

                setCreateUpdate(false)
                createNewUser(data)
                reset(defaultValues)

                setFormAlertCheck(false)
                setTimeout(() => {
                    setFormAlertCheck(true)
                }, 2000)
                setFormClose(true)
                setUserName(first_name.value + " " + last_name.value)
            }
        }
    }

    const handleExit = () => {

        setFormClose(true)
        setUpdateInfo()
        reset(defaultValues)
    }

    return (
        <div className={`form-container ${formClose ? 'close' : ''}`}>
            <form className='form' onSubmit={handleSubmit(submit)}>
                <h3> {updateInfo ? 'Update User Info ' : 'Create New User'}</h3>
                <span onClick={handleExit} className='form_exit'>X</span>
                <div className='form_item' >
                    <label className='form_label' htmlFor="email">Email</label>
                    <input className='from_imput' {...register('email')} type="email" id='email' />
                </div>

                <div className='form_item' >
                    <label className='form_label' htmlFor="password">Password</label>
                    <input className='from_imput' {...register('password')} type="password" id='password' />
                </div>

                <div className='form_item' >
                    <label className='form_label' htmlFor="first_name">Firs Name</label>
                    <input className='from_imput' {...register('first_name')} type="text" id='first_name' />
                </div>

                <div className='form_item' >
                    <label className='form_label' htmlFor="last_name">Last Nname</label>
                    <input className='from_imput' {...register('last_name')} type="text" id='last_name' />
                </div>

                <div className='form_item' >
                    <label className='form_label' htmlFor="birthday">Birthday</label>
                    <input className='from_imput' {...register('birthday')} type="date" id='birthday' />
                </div>

                <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>

            </form>

        </div>
    )
}

export default FormUser