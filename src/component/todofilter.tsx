import { filterType } from '../types/Todo'

interface TodoFiltersProps {
  activeItems: number;
  filterTodos: (type: filterType) => void;
  // onClear: () => void;
}

export function TodoFilters({
  activeItems,
  filterTodos,
  // onClear,
}: TodoFiltersProps) {
  return (
    <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
      <span>{activeItems} items left</span>
      <div className="flex gap-2">
        <button
          onClick={() => filterTodos(' all ')}
          className="px-2 py-1 rounded hover:bg-gray-100"
        >
          All
        </button>
        <button
          onClick={() => filterTodos('active ')}
          className="px-2 py-1 rounded hover:bg-gray-100"
        >
          Active
        </button>
        <button
          onClick={() => filterTodos('completed')}
          className="px-2 py-1 rounded hover:bg-gray-100"
        >
          Completed
        </button>
      </div>
      <button
        // onClick={() => onClear()}
        className="text-red-500 hover:text-red-600 transition-colors duration-200"
      >
        Clear completed
      </button>
    </div>
  );
}
