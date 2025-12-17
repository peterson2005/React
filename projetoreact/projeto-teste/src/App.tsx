import { useState } from 'react';
import Card from './Card';
import './styles.css'

export const App = () => {

  const [count, setCount] = useState(0);
  let count2 = 0;
  setInterval(() => {
    console.log('count', count)
    console.log('count2', count2)
  }, 500);


  return (

    <div>
      <Card titulo="Teste" descricao={'4'}  />
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>
      <button onClick={() => setCount(count2 = count2 + 1)}>
        {count2}
      </button>
    </div>

  )
}



