import { useReducer } from "react";
import CreatePost from "./Post/CreateTodo";
import PostList from "./Post/TodoList";
import UserBar from "./user/UserBar";
import appReducer from "./reducer";
import { StateContext } from "./contexts";

function App() {
  const initalTodos = [];

  //const [user, setUser] = useState('');

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initalTodos,
  });

  //const [todos, setTodos] = useState(initalTodos);

  document.title = "Todo";

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}>
        <h1>Todo List</h1>

        <UserBar />
        <PostList />
        {state.user && <CreatePost />}
      </StateContext.Provider>
    </div>
  );
}

export default App;
