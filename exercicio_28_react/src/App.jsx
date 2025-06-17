import { useState } from "react";
import Tabela from "./components/Tabela";

function App() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    return (
        <>
            <header>
                <h1>Calculadora de IMC</h1>
            </header>
            <div className="container">
                <input
                    type="number"
                    placeholder="Peso (kg)"
                    onBlur={(event) => setPeso(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Altura (m)"
                    onBlur={(event) => setAltura(event.target.value)}
                />
                {peso > 0 && altura > 0 && (
                    <Tabela peso={peso} altura={altura} />
                )}
            </div>
        </>
    );
}

export default App;
