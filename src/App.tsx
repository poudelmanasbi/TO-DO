import './App.css';
import { TodoList } from './component/todo/todoList';
import { TodoInput } from './component/todo/TodoInput';
import { useState } from 'react';
import { Todo } from './types/Todo';
import { TodoFilters } from './component/todofilter';

function App() {

  const [todos,setTodos] = useState<Todo[]>([
    {
      id: 1,
      title:'Learn React',
      completed:false,
    },
  ]);

  const [filter,setFilter] = useState('all');

  const addTodo = (title:string)=>{
    setTodos([
      ...todos,//spread operator(... bhaneko)
      {id:todos.length?todos[todos.length-1].id+1:1,title,completed:false},
    ])
  }
  const deleteTodo = (id:number)=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
  }

  const toggleTodo = (id:number)=>{
    const newTodos =todos.map((todo)=>{
      if(id===todo.id){
        todo.completed = !todo.completed
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const activeCounts = todos.filter((todo)=>todo.completed === false).length

  const filterTodos = ()=>{
    if(filter === 'active'){
      return todos.filter((todo)=>todo.completed === false);
    }

    if(filter === 'completed'){
      return todos.filter((todo)=>todo.completed === true)
    }

    return todos;
  }
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md mx-auto'>
            <div className='bg-white rounded-lg shadow-xl overflow-hidden'>
                <div className='px-6 py-8'>
                    <h1 className='text-3xl font-bold text-gray-900 text-center mb-8'>
                        Todo List
                    </h1>
        <TodoInput addTodo={addTodo}/>
        {
          filterTodos().length && (
            <TodoList
            todos={filterTodos()}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
            />
          )
        }
        <TodoFilters
        activeItems={activeCounts}
        filterTodos={setFilter}
        />

					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

