import {useState} from 'react'

const EventHandlingExamples = () => {

    const handleClick = () => {
        alert("Testando");
    };

    const handleGreet = (name) => {
        alert(`Olá ${name}`);
    };

    const [name, setName] = useState("");
    const handleSubmit = (e) => {

        e.preventDefault();
        alert(`enviado! ${name}`);
    };
  return (
    <div>
        <button onClick={() => alert("oi")}>X</button>
        <button onClick={handleClick}>X</button>
        <br />
        <button onClick={() => handleGreet("Giuseppe")}>Dizer olá Giuseppe</button>
        <button onClick={() => handleGreet("Pedro")}>Dizer olá Pedro</button>
        <br />
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Digite seu nome' />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default EventHandlingExamples