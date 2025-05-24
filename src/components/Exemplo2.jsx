import { useState, useEffect} from "react"
import axios from "axios"

export function Exemplo2() {
    const [cep, setCep] = useState("")
    const [logradouro, setLograudoro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
        if (cep.length === 8) {
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                setLograudoro(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
                setEstado(response.data.estado)
                setUf(response.data.uf)
            })
        }
    }, [cep])

    return (
        <section>
            <h2>Exemplo 2: Busca Endereço</h2>

            <input type="number" placeholder="Digite o seu CEP:" onChange={(input) => setCep(input.target.value)} />

            {cep.length === 8 && (
                <>
                  <h3>informações do endereço:</h3>
                  <ul>
                    <li>Rua: {logradouro}</li>
                    <li>Bairro: {bairro}</li>
                    <li>Cidade: {cidade}</li>
                    <li>Estado: {estado}</li>
                    <li>Uf: {uf}</li>
                  </ul>  
                </>
            )}
        </section>
    )
}