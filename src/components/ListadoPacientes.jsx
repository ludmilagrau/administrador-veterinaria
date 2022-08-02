import Paciente from './Paciente';

export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <>
      <div className='md:w-1/2 lg:w-3/5'>

      {/*Texto condicional */}

      {pacientes.length > 0 ? (
      <>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
        <p className='text-xl mt-5 text-center mb-5'>
          Administra tus {''}
          <span className='text-pink-300 font-bold'>Pacientes y Citas</span>
        </p>
        <div id='listado' className='md:h-screen overflow-y-scroll -mt-3'>

          {pacientes.map(paciente => (
            <Paciente
            paciente = {paciente}
            key={paciente.id}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          
          ))}
      </div>
      </>) : (
      <>
        <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
        <p className='text-lg mt-5 text-center mb-5'>¡Agrega uno!</p>
        </>
        )}
        
        </div>
    </>
  )
}

export default ListadoPacientes;