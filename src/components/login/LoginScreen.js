import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContenxt'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

  const { dispatch } = useContext(AuthContext)


  const handleLogin = () => {
    //history.push('/'); // me lleva a otra direccion
    //history.replace('/'); // quita del historial cierta ruta, y pone otra
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({
      type: types.login,
      payload: {
        name: 'Daniel'
      }
    });
    history.replace(lastPath)
  }

  return (
    <div className='container mt-5'>
      <h1>Login</h1>

      <hr />

      <button 
        className='btn btn-info'
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  )
}
