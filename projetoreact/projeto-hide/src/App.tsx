

import { useState, useEffect } from 'react';

import { TodoAPI } from './shared/api/TodoAPI.ts';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';
import { List } from './List.tsx';


TodoAPI.getAll().then(data => console.log('1', data));

TodoAPI.create({label: 'Fazer almoço', complete: false });
TodoAPI.create({label: 'Fazer lanche', complete: false });

TodoAPI.getAll().then(data => console.log('2', data));

TodoAPI.updateById('1', { label: 'Fazer janta', complete: false});

TodoAPI.getAll().then(data => console.log('3', data));
TodoAPI.deleteById('1');
TodoAPI.getAll().then(data => console.log('4', data));

export function App() {
  
  const [list, setList] = useState([
  {id: '1', label: 'Fazer café', complete: false},
  {id: '2', label: 'Fazer almoço', complete: false},
  {id: '3', label: 'Fazer janta', complete: false}
]);

  useEffect(() => {
    TodoAPI.getAll()
    .then(data => setList(data));
  }, []);



  const handleAdd  = (value: string) => {
    TodoAPI.create({ label: value, complete: false})
    .then(data => {
      setList([...list,data]);
    })

    
  }
  const handleRemove  = (id: string) => {
    setList([
      ...list.filter(item => item.id !== id),
    ])
                
  }
  
  const handleComplete  = (id: string) => {
    setList([
      ...list.map(item => ({
        ...item, complete: item.id === id? true: item.complete
      }))
    ]);
  }




  return (
    <div>
      <InputAdd onAdd={handleAdd}/>
    
      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}

            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}

            onRemove={() => handleRemove(listItem.id)}
            onComplete={() => handleComplete(listItem.id)}
          />
        ))}
      </List>
    </div>
  )
}



