import './App.css';
import { TodoCounter } from './ToDoCounter';
import { TodoSearch } from './ToDoSearch';
import { TodoItems } from './TodoItems';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Tomar el sol', completed: true},
  { text: 'Tomar un curso de Platzi', completed: false},
  { text: 'Cortar cebolla', completed: true},
];

function App() {
  return (
    <>
      <TodoCounter 
        completados={1}
        totales={3}
      />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItems 
          key={todo.text} 
          text={todo.text}
          completed={todo.text}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;