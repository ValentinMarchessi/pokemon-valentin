import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <div id="header">
        <h1>Listado de Pókemon</h1>
        <div id="search-and-add">
          <input type="text" placeholder='Buscar'></input>
          <button>Nuevo</button>
        </div>
      </div>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
        {/* pokemon => <tr>{pokemon}</tr> */}
      </table>
      <div id="new-pokemon">
        <form>
          <label htmlFor='name'>Nombre:</label>
          <input name="name" type="text"></input>
          <label htmlFor='image'>Imágen:</label>
          <input name="image" type="text" placeholder='URL'></input>
        </form>
      </div>
    </div>
  )
}

export default App
