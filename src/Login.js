import React from 'react'

function Login() {
  return (
    <div clasName = 'd-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className = 'bg-white p-3 rounded w-25'/>
        <form action= "">
            <div className = 'mb-3'>
                <label htmlFor="email">Email</label>
                <input type ="email" placeholder='Enter the Email' className='form-control rounded-0'/>
            </div>
            <div className = 'mb-3'>
                <label htmlFor="password">Password</label>
                <input type ="password" placeholder='Enter the PassWord' className='form-control rounded-0'/>
            </div>
            <button className = 'btn btn-success w-100'>Log in</button>

            <p>You are agree to our trems and Policy</p>
            <button className = 'btn btn-deafult border w-100 bg-light'>Create Account</button>
        </form>
    </div>
  )
}

export default Login

