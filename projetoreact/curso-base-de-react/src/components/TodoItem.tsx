
interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;
}

export const TodoItem = ({ id, label, complete}: ITodoItemProps) => {

    return (

        <li key={id}>
          {label}
          {complete ? 'Concluído' : ''}

          <button
            onClick={() =>
              setList([...list.map(item => ({ ...item, complete: item.id === id ? true : item.complete }))])}>
            Feito
          </button>
          <button onClick={() => setList([...list.filter(item => item.id !== id)])}>x</button>
        </li>
    )
}