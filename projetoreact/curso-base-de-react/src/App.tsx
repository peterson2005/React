import { useState } from "react";
import { InputAdd } from "./components/ImputAdd";



export function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState([
    { id: '1', label: 'Fazer café', complete: false },
    { id: '2', label: 'Fazer Almoço', complete: false },
    { id: '3', label: 'Fazer janta', complete: false },
  ]);

  const handleAdd = (value: string) => {
     setList([...list,
    { id: (list.length + 1).toString(), complete: false, label: value }]);
}

return (

  <div>
    <InputAdd onAdd = {handleAdd}/>

    <ol>
      {list.map((listItem) => (
        <li key={listItem.id}>
          {listItem.label}
          {listItem.complete ? 'Concluído' : ''}

          <button
            onClick={() =>
              setList([...list.map(item => ({ ...item, complete: item.id === listItem.id ? true : item.complete }))])}>
            Feito
          </button>
          <button onClick={() => setList([...list.filter(item => item.id !== listItem.id)])}>x</button>
        </li>
      ))}
    </ol>
  </div>
)
}

