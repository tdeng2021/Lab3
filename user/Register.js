import React,{useState} from 'react'

export default function Register({dispatch}) {
	const [ user, setUser ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ passwordRepeat, setPasswordRepeat ] = useState('')
	function processUser (evt) { setUser(evt.target.value) }
	function processPassword (evt) { setPassword(evt.target.value) }
	function processPasswordRepeat (evt) { setPasswordRepeat(evt.target.value) }


    return (
	    <form onSubmit={evt => {
			evt.preventDefault();
			dispatch({type: "REGISTER", user})
	
			}
		}>
	        <label htmlFor="register-username">User Name:</label>
			<input type="text" value={user} onChange={processUser} name="register-username" id="register-username" />


	        <label htmlFor="register-password">Password:</label>
			<input type="password" name="register-password" id="register-password" value={password} onChange={processPassword} />

	        <label htmlFor="register-password-again">Enter password again:</label>
			<input type="password" name="register-password-repeat" id="register-password-repeat" value={passwordRepeat} onChange={processPasswordRepeat}/>

			<input type="submit" value="Register" disabled=
			{username.length === 0 || password.length === 0 || password !== passwordRepeat} />
  
	    </form>
    )
}