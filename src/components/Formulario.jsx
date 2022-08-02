import {useState, useEffect} from 'react'
import Error from './Error';

export const Formulario = ({setPacientes, pacientes, setPaciente, paciente}) => {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);

    }
  }, [paciente])


  const generarId = () => {
    
    const id = Math.random().toString(36).substring(2); 
    return id;

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true);
    }else{
      setError(false);
      
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id: generarId()
      }

      if(paciente.id) {

        objetoPaciente.id = paciente.id;
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados);
        setPaciente({});

      } else {

        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente]);

      }

      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
    }
  }
  
  return (
    <>
      <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='font-black text-3xl text-center'>Seguimiento de pacientes</h2>
        <p className='text-lg mt-5 text-center mb-5'>Añade pacientes y {''}
        <span className='text-pink-300 font-bold'>Administralos</span>
        </p>

        <form 
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        onSubmit={handleSubmit}
        >
        {error && <Error>Todos los campos son obligatorios</Error>}
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la mascota</label>
            <input
            id='mascota'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-pink-300'
            type='text' 
            placeholder='Nombre de la mascota'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre del propietario</label>
            <input
            id='propietario'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-pink-300'
            type='text' 
            placeholder='Nombre del propietario'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
            <input
            id='email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-pink-300'
            type='email' 
            placeholder='Contacto propietario'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
            <input
            id='alta'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-pink-300'
            type='date'
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas</label>
            <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md focus:outline-pink-300'
            placeholder='Describe los síntomas'
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
            />
          </div>

          <input
            type='submit'
            className='bg-pink-300 w-full p-3 text-white uppercase font-bold hover:bg-pink-400 cursor-pointer transition-all'
            value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          />
        </form>
      </div>
    </>
  )
}


export default Formulario;