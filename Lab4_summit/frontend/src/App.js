import { useEffect, useReducer } from "react";
import CreatePost from "./Post/CreateTodo";
import PostList from "./Post/TodoList";
import UserBar from "./user/UserBar";
import appReducer from "./reducer";
import { StateContext } from "./contexts";
import { useResource } from "react-request-hook";

function App() {
  const initalTodos = [];
  //const [user, setUser] = useState('');

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    todos: initalTodos,
  });

  //const [todos, setTodos] = useState(initalTodos);

  document.title = "Todo";

  const [todos, getTodos] = useResource(() => ({
    url: "/todos",
    method: "get",
  }));

  useEffect(getTodos, []);

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: "FETCH_TODOS", todos: todos.data.reverse() });
    }
  }, [todos]);

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
