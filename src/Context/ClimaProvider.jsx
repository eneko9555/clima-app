import { createContext, useState } from "react";
import axios from "axios"

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: ""
    })
    const [consultaClima, setConsultaClima] = useState()
    const [anim, setAnim] = useState(false)
    const [cargando, setCargando] = useState(false)
    const [alerta, setAlerta] = useState("")

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async () => {
        setAlerta("")
        try {
            setCargando(true)
            
            const apiKey = import.meta.env.VITE_API_KEY
            const { ciudad, pais } = busqueda

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}}&limit=1&appid=${apiKey}
            `
            const { data } = await axios(url)
            const { lat, lon } = data[0]
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
            const {data : clima} = await axios(urlClima)
            setConsultaClima(clima)
            setAnim(true)
            setCargando(false)
            
        } catch (error) {
            setAlerta("No hay Resultados")
            console.log(error);
        }
    }
   
    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                consultaClima,
                anim,
                cargando,
                alerta
            }}
        >{children}
        </ClimaContext.Provider>
    )
}
export {
    ClimaProvider
}
export default ClimaContext