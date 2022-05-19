import "./App.css";

function App() {
    return (
        <div className="App">
            <div id="header">
                <h1>Listado de Pókemon</h1>
                <div id="search-and-add">
                    <input type="text" placeholder="Buscar"></input>
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
            <form id="create-pokemon">
                <div id="fields">
                    <label htmlFor="name">Nombre:</label>
                    <input name="name" type="text"></input>
                    <label htmlFor="image">Imágen:</label>
                    <input name="image" type="text" placeholder="URL"></input>
                    <label htmlFor="attack">Ataque:</label>
                    <input name="attack" type="range" min={0} max={100} step={1}></input>
                    <label htmlFor="defense">Defensa:</label>
                    <input name="defense" type="range" min={0} max={100} step={1}></input>
                </div>
                <div id="buttons">
                    <button>Guardar</button>
                    <button>Cancelar</button>
                </div>
            </form>
        </div>
    );
}

export default App;
