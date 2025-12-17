// Componente Pai

//Importar o componente filho
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Hello Wolrod</h1>
        {/* Utilizando o componente importado no JSX */}
        <FunctionalComponent />

        <ClassComponent />
        <PropsExample nome="Matheus" idade={20}/>
      </div>
    </>
  )
}

export default App
