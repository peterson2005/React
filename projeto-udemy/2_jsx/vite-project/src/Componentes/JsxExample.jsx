import React from 'react'

const JsxExample = () => {


    const userName ="Peterson"

    const user = {
        name: "Ana",
        lastName: "Souza",
    }

    function getGreeting(name) {
        return `Olá ${name}`;
    }

    const userIsLoggedIn = true;
    const userRole = "admin";

    const users = [
        {id: 1, name:"João"},
        {id: 2, name:"Maria"},
        {id: 3, name:"Jack"}
    ];
  return (
    <div>
        <h2>Conteúdo que o usuário vai ver</h2>
        {/* Listando dados do usuário */}
        <p>O nome do usuário é: {userName}</p>

        <p>Usuário {user.name} {user.lastName}</p>
        <p>{37+40}</p>
        <p>{getGreeting(userName)}</p>
        {/*DIFERENÇAS DO HTML */}
        <div className="alguma-coisa"> Este cara</div>

        <button onClick={() => alert("Teste")}>X</button>

        <input type="text" placeholder='Digete algo' />

        {/* RENDERIZAÇÃO CONDICIONAL*/ }
        {userIsLoggedIn ? (<p>Caso: está logado</p>) : (<p>Caso: não está logado</p>)}
        
        <p>
            {userRole === "admin" && <p>Você é admin</p>}

            {/* Renderização de listas*/}
            <div>
                <h2>Lista de Usuários</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>
            </div>
        </p>
    </div>
  )
}

export default JsxExample;