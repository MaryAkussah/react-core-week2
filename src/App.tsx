import TodoList from './components/TodoList'
import './App.css'
import Timer from './components/Timer'
import ToggleMessage from './components/ToggleMessage'
import UserList from "./components/userList";
import UserCard from './components/userCard'  
import SimpleForm from "./components/SimpleForm";

function App() {
  

  return (
   
      <div>
     <h1> Its week 2 actually!</h1>
     <Timer />
     <TodoList />
     <ToggleMessage />  
     <UserList />
     <UserCard name="Alice" role="Administrator" />
     <SimpleForm />

    </div>
     
   
  )
}

export default App
