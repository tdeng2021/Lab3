import React from 'react'
import useState from 'react'

export default function CreateTodoItem ({user, dispatch}) {
	const [title, addTitle] = useState('');
	const [text, addText] = useState('');

    return (
	    <form onSubmit={evt => {
			evt.preventDefault();
			dispatch({type:'CREATE_TODO', title, text, author:user, dispatch});
			}
		}>

	      <div>Author: <b>{user}</b></div>

	      <div>
	        <label htmlFor="create-todo-title">Title:</label>
	        <input type="text" name="create-todo-title" id="create-todo-title" 
			value = {tilte} onChange={(evt)=>addTitle(evt.target.value)}/>
	      </div>

	      <textarea value={text} onChange={(evt) => setText(evt.target.value)}/>
	      <input type="submit" value="Create Todo" />
	    </form>
            )
}