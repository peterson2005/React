
interface CardProps {
    titulo: string;
    descricao?: string;
}

const Card = ({ titulo, descricao }: CardProps) => {

    return (
        <div className="container-card" style={{ border: '2px solid red' }}>
            <h1>{titulo}</h1>
            {descricao && (
                <p>{descricao}</p>
            )}
        </div>
    );
}

export default Card;