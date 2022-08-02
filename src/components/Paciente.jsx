import React from 'react'

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombre, propietario, email, fecha, sintomas, id} = paciente;

  const handleEliminar = () => {
    const respuesta = confirm('¿Desea eliminar este paciente?')
    if(respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl' id='pacientes'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
        <span className= 'font-normal normal-case'>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
        <span className= 'font-normal normal-case'>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
        <span className= 'font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta: {''}
        <span className= 'font-normal normal-case'>{fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
        <span className= 'font-normal normal-case'>{sintomas}</span>
      </p>
      <div className='flex justify-end'>
        <button 
        onClick={() => setPaciente(paciente)}
        type='button' 
        className='transition-all py-1.5 px-8 rounded-xl  bg-white font-bold text-pink-400 border-2 border-pink-400 hover:bg-pink-400 hover:text-white mr-1'>
          Editar
          </button>
        <button 
        type='button' 
        className='transition-all py-1.5 px-8 rounded-xl bg-white font-bold text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white'
        onClick={handleEliminar}>
          Eliminar
        </button>
      </div>
    </div>
      )
}

export default Paciente;