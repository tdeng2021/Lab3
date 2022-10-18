//import React from 'react'

export default function Logout({user, dispatch}) {
    
    return (

	    <form onSubmit={evt => {
            evt.preventDefault();
            dispatch({type: "LOGOUT"});
            }
        }>
  	        Currently logged in as: <b>{user}</b>
                <input type="submit" value="Logout" />
	    </form>
    )
}