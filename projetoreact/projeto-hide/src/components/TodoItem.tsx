
interface ITodoItemProps {
    id: string;
    label: string; 
    complete: boolean;
    onRemove(): void;
    onComplete(): void;
}


export const TodoItem = ({ id, label, complete, onRemove, onComplete}: ITodoItemProps) => {

    return (
        <li key={id}>
            {label}
            {complete ? ' Concluído ' : ''}

            <button 
            onClick={onComplete}>
             C
            </button>
            <button onClick={onRemove}>
              X
            </button>
          </li>
    )
}



