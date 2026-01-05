import { TodoItem } from './todoItem';
import { Todo } from '../../types/Todo';

interface TodoListProps {
	todos: Todo[];
	onDelete: (id: number) => void;
	onToggle: (id: number) => void;
}

export function TodoList({ todos,onDelete, onToggle }: TodoListProps) {
	return (
		<div className='space-y-2'>
			{todos.map((todo) => (
				<TodoItem 
				key={todo.id} 
				todo={todo}
				onDelete={onDelete}
				onToggle={onToggle}
				/>
			))}
		</div>
	);
}