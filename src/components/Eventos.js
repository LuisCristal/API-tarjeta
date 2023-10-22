import React,{useState} from 'react'

const Eventos = () => {

    const[titulo, setTitulo] = useState('Titulo desde estado')
    const[contador, setContador] = useState(0)
    const[nombre, setNombre] = useState('')
    
    const aumentar = () =>{
        setContador(contador + 1)
    }

    const disminuir = () =>{
        setContador(contador - 1)
        if(contador === -5){
            alert('La temperatura es muy baja para el cultivo')
        }
    }


    const handleInput = (e) =>{
        setNombre(e.target.value)
    }

    const capturarNombre = (e) =>{
        e.preventDefault()
        alert(`El nombre es ${nombre}`)
    }

  return (
    <div>
        <hr/>
        <h3 className='text-info'>1- Manejo de Eventos - Cambiar Titulo</h3>
        <h4 className='bg-danger text-white'>{titulo}</h4>
        <button type="button" className="btn btn-success"  onClick={()=>setTitulo('Titulo cambiado desde evento')}>Cambiar titulo</button>
        <hr/>
        <h3 className='text-info'>2- Manejo de Eventos - Contador</h3>
        <h3>{contador}</h3>
        <button type="button" className="btn btn-danger" onClick={aumentar}>Aumentar (+) </button>
        <button type="button" className="btn btn-warning mx-2" onClick={disminuir}>Disminuir (-) </button>
        <hr/>
        <h3 className='text-info'>3- Manejo de Eventos - Input</h3>
        <div>
            <input
                className='form-control'
                type='text'
                placeholder='Ingrese su nombre'
                value={nombre}
                onChange={handleInput}

            />
        </div>
        <p className=''>El nombre es: <span className='bg-success text-white' >{nombre}</span> </p>
        <hr/>
        <button type="button" className="btn btn-primary" onClick={capturarNombre}>Enviar</button>
    </div>
    
  )
}

export default Eventos
