import { useState } from "preact/hooks";

export default function Greeting({messager}){
    const randomMessager = () => messager[Math.floor(Math.random() * messager.length)];

    const [greeting, setGreting] = useState(messager[0]);

    return(
        <div>
            <h3>{greeting} ¡Gracias por tu visita!</h3>
            <button onClick={() => setGreting(randomMessager())}>
                Nuevo saludo
            </button>
        </div>
    )
}