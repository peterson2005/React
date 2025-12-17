import {useState} from 'react'

// useState = hooks

const UseStateComponent = () => {
    // varíavel de consulta, e uma de alteração, inicio o hook


    // Sempre que vamos alterar o valor de algo => useState
    // se é só somentente leitura => var, state
    const [count, setCount] = useState(0);


    const increment = () => {
        setCount((prevCount) => prevCount + 1 );
        console.log(count);
    }

    const [user, setUser] = useState({
        name: "nome",
        age: 25,
        hobbies: ["Leitura", "Programação"],
    })

    const UpdateUserAge = () => {
        setUser((prevUser) => (
            {
                ...prevUser, 
                age: prevUser.age + 1,
            }
        ))
    }
    return (
    <div>
        <h2>Contador</h2>
        <p>Você clicou {count} vezes</p>
        <button onClick={increment}>Incrementar</button>

        <p>Nome: {user.name} e idade: {user.age}</p>
        <button onClick={UpdateUserAge}>Incrementar Idade</button>
    </div>
  )
}

export default UseStateComponent;