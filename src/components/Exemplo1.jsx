import { useEffect, useState } from "react"

export function Exemplo1() {

    const [numero, setNumero] = useState(0)

    useEffect(() => {
        alert("A página carregou!")
    }, [numero])

    return (
        <section>
            <h2>Exemplo 1</h2>

            <div>
                <p>Número: {numero}</p>
                <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
            </div>
        </section>
    )
}