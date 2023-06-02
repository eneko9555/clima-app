import useClima from "../Hooks/useClima"

const Resultado = () => {
    const { consultaClima, anim } = useClima()
    const { name, main } = consultaClima
    // Grados Kelvin
    const kelvin = 273.15
    return (
        <>
                <div className={` contenedor_Resultado ${anim ? "anim" : ""}`} >
                    <h2>Clima en {name}</h2>
                    <p className="pAnim">{parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>
                    <p className="pAnim"> Temperatura Mínima: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span></p>
                    <p className="pAnim"> Temperatura Máxima: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span></p>
                </div>
        </>
    )
}
export default Resultado