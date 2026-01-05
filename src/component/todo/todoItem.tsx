import {
	IoCheckmarkCircleOutline,
	IoEllipseOutline,
	IoTrashOutline,
} from 'react-icons/io5';
import { Todo } from '../../types/Todo';

interface TodoItemProps {
	todo: Todo;
    onDelete: (id:number)=> void;
	onToggle:(id: number)=> void;
    
}

export function TodoItem({ todo, onDelete, onToggle }: TodoItemProps) {
	return (
		<div className='flex items-center gap-3 p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors duration-200'>
			<button 
			onClick={()=> onToggle(todo.id)}
			className='text-gray-400 hover:text-purple-500 transition-colors duration-200'>
				{todo.completed ? (
					<IoCheckmarkCircleOutline className='text-green-500' size={20} />
				) : (
					<IoEllipseOutline size={20} />
				)}
			</button>
			<span
				className={`${
					todo.completed ? 'line-through text-gray-400' : 'text-gray-700'
				}`}
			>
				{todo.title}
			</span>
			<button onClick={() => onDelete(todo.id)}
            className='opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-all duration-200'>
				<IoTrashOutline size={18} />
			</button>
            </div>
	);
}


