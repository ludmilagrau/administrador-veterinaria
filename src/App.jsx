import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import {useEffect, useState} from 'react';
function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 flex">
        <Formulario 
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App