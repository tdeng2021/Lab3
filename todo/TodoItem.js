//import React from 'react'
import TodoItem from './TodoItem'
import {useState} from 'react'

const curTime = new Date(data.now()).toString()

export default function TodoList({title, text, author, dispatch}){
  const [complete, setComplete] = useState(false);
  return (
    <div>
    <h3>{title}</h3>
    <div>{text}</div>
    <br />
    <i>Written by <b>{author}</b></i>
    <div>Created on: {timeNow}</div>
    <div>
    <label id={title}></label>    

    <input type="checkbox" value={false} onChange={(evt)=>setComplete(evt.target.value)} onClick={(evt)=>{ evt.preventDefault();
        if(!complete){
            dispatch({type: "TOGGLE_TODO", complete, title})
            setComplete(true);
        }
        else{
            dispatch({type: "TOGGLE_TODO", complete, title})
            setComplete(false);
        }        
        
    }
    }/>
    <br/>
    <input type="submit" value="Delete" onClick={(evt)=>{ evt.preventDefault();
        
        dispatch({type: "DELETE_TODO", title})
    }} />
    </div>
    
    
    </div>
    )
    }




// ({todos = []}) {
//    return (
//      <div>
//	 {todos.map((t, i) => <TodoItem {...t} key={'todo-' + i} />)}
//      </div>
//    )
//}