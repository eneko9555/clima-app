import useClima from "../Hooks/useClima"
import { useState } from "react"

const Formulario = () => {

const {datosBusqueda, busqueda, consultarClima} = useClima()
const [error, setError] = useState()

const handleSubmit = e => {
    e.preventDefault()
    if(Object.values(busqueda).includes("")){
        setError(true)
        setTimeout(()=> {
        setError(false)
        },3500)
        return
    }
    setError(false)
    consultarClima()
}

return (
    <div className="contenedor">    
        <form
            onSubmit={handleSubmit}
        >
            {error && <p className="validate">Todos los campos son obligatorios</p>}
            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input type="text" id="ciudad" name="ciudad"  onChange={datosBusqueda}/>
            </div>
            <div className="campo">
                <label htmlFor="pais">País</label>
                <select id="pais" name="pais" onChange={datosBusqueda}>
                    <option value="">-- Seleccione un pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="ES">España</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>
            <input type="submit" value="Consultar Clima" />
        </form>
    </div>
  )
}
export default Formulario