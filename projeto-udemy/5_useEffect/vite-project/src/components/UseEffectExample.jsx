import {useState, useEffect} from 'react'

const UseEffectExample = () => {

    //sem dependências

    useEffect(() => {
        console.log("Rodou1")
    })
    

    // com dependÊncias vazias / array dep. vazio
    useEffect(() => {
        console.log("Rodou 2")
    }, []);


    

        // usetate ativa a re-renderização
        const [count, setCount] = useState(0)


        // com dependencias
    useEffect(() => {
        console.log("Rodou 3");
    }, [count]);
  return (
    <div>UseEffectExample
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>X</button>
    </div>
  )
}

export default UseEffectExample;