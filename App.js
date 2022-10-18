import './App.css';

import UserBar from './user/UserBar';
import CreateTodoItem from './todo/CreateTodoItem';
import TodoList from './todo/TodoList.js';

import {useReducer} from 'react';
import appReducer from './reducer';

function App(){
    const initTodos = []
    const [state, dispatch] = userReducer(appReducer,{
        user: '',
        todos: initTodos
    })

    return(
        <div>
            <UserBar user={state.user} dispatch={dispatch} />
            <TodoList todos ={state.todos} />
            {state.user && <CreateTodoItem user={state.user} todos={state.todos} dispatch={dispatch} /> }
        </div>
    )



}

//    const todos = [
//	{
//	    title:"Todo item #1", 
//            description:"Description:  Some new todo description",
//            dateCreated: "{dateCreated}",
//            complete:"Completed todo item",
//            dateCompleted:"{dateCompleted}"
//	},
//
//	{
//	    title:"Todo item #2", 
// //           description:"Description:  Another new todo description",
//            dateCreated: "{dateCreated}",
//            complete:"Completed todo item",
//            dateCompleted:"{dateCompleted}"
//	},

//	{
//	    title:"Todo item #3", 
//            description:"Description:  Still another new todo description",
//            dateCreated: "{dateCreated}",
//            complete:"Completed todo item",
//            dateCompleted:"{dateCompleted}"
//	}
//    ]
//   
//    return (
//       <div>
//         <UserBar />
//           <br/><br/><hr/><br/><br/>
//	 <CreateTodoItem user="Ting Deng" />
//	 <TodoList todos={todos} />  
//       </div>
//    )	    	
//}


 
export default App;
