import React,{useState,useEffect} from 'react';
import './App.css';
//importing component
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //STATE
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos,setFilteredTodos] = useState([]);

  //RUN ONCE WHEN THE APP START
  useEffect(()=>{
    getLocalTodos()
  },[])
   //USE EFFECT
   useEffect(()=>{
    filterHandler()
    saveLocalTodos();
  },[todos,status])

  //FUNCTION
  const filterHandler = () => {
    switch(status){
      case 'completed' :
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted' :
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
        //HARUS ADA DEFAULT VALUE AGAR TIDAK ERROR
        default:
          setFilteredTodos(todos)
          break;
    }
  }

  //SAVE TO LOCAL 
  const saveLocalTodos = () => {
      localStorage.setItem('todos',JSON.stringify(todos))  
  }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]))
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos')) 
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1 className="">To-Do List Project </h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <TodoList todos={todos} setTodos={setTodos}  filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;

