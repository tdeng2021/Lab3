import React from 'react'
import {useState} from 'react'

export default function Login({dispatch}) {
	const [user, setUser] = useState('')
	function processUser(evt){ setUser(evt.target.vualue)}
    return (
	    <form onSubmit={
			evt => {evt.preventDefault();
			dispatch({type: "LOGIN", user})}
		}>
		
	    <label htmlFor="login-username">User Name:</label>
	    <input type="text" name="login-username" id="login-username" value={user} onChange={processUser} />
	    <label htmlFor="login-password">Password:</label>
	    <input type="password" name="login-userid" id="login-password" />
        <input type="submit" value="Login" disable={user.length === 0} />
	    </form>
    )
}