import { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';

interface TodoInputProps{
    addTodo:(title:string)=>void;
}

export function TodoInput({addTodo}:TodoInputProps) {
    const [newTodo,setNewTodo] = useState('');
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if(newTodo.trim()){
            addTodo(newTodo.trim());
            setNewTodo('');
        }
    }
	return  (
		<form onSubmit = {handleSubmit} className='flex gap-2 mb-6'>
			<input
				type='text'
                value={newTodo}
                onChange={(e)=>setNewTodo(e.target.value)}
				placeholder='What needs to be done?'
				className='flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent'
			/>
			<button
				type='submit'
				className='bg-purple-500 text-black px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors duration-200 flex items-center gap-2'
			>
				<IoAddCircleOutline size={20} />
				Add
			</button>
		</form>
	);
}
