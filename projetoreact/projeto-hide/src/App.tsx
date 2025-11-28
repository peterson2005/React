

import { useState } from 'react';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';


export function App() {
  
  const [list, setList] = useState([
  {id: '1', label: 'Fazer café', complete: false},
  {id: '2', label: 'Fazer almoço', complete: false},
  {id: '3', label: 'Fazer janta', complete: false}
]);


  const handleAdd  = (value: string) => {
    setList([
          ...list, 
          { id: (list.length + 1).toString(), label: value, complete: false, }
        ]);
  }
  const handleRemove  = (id: string) => {
    setList([
      ...list.filter(item => item.id !== id),
    ])
                
  }
  
  const handleComplete  = (id: string) => {
    setList([
      ...list.map(item => ({
        ...item, complete: item.id === listItem.id ? true : item.complete
      }))
    ]);
  }
}




  return (
    <div>
      <InputAdd onAdd={handleAdd}/>
    

    
      <ol> 
        {list.map((listItem) => (
          <TodoItem
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onRemove={() => handleRemove(listItem.id)}
            onComplete={() => handleComplete(listItem.id)}
          />
        ))}
      </ol>
    </div>
  )




