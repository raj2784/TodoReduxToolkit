import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import Todos from "./components/Todos";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="text-3xl text-center font-bold underline text-white mt-7">
          <h2>React Redux Toolkit</h2>
          <AddTodo />
          <Todos />
        </div>
      </Provider>
      ;
    </>
  );
}
export default App;
