import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../Hooks/useClima"
import Spinner from "./Spinner"
import Error from "./Error"

const AppClima = () => {
  const { cargando, alerta, consultaClima } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {!alerta ?
          (cargando ? <Spinner /> : consultaClima?.name && <Resultado />)
          : (<Error>{alerta}</Error>)
        }
      </main>
    </>
  )
}

export default AppClima