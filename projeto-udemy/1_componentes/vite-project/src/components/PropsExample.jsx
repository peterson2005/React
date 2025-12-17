import React from 'react'

export const PropsExample = ({nome, idade}) => {
  return (
    <div>
        <h3>Olá {nome}</h3>
        <p>Eu tenho {idade} anos</p>
    </div>
  )
}

export default PropsExample;