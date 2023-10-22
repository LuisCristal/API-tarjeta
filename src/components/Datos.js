import React from 'react'

const Datos = () => {


  //----- Logica de negocio (variables, constantes, funciones, etc) -----
  const name = 'Yoni Edilzar Escobar'

  const contarCaracteres = (cadena) => {
    return cadena.length
  }

  const alumnos = [
    { id: 1, name: 'Mario Cifuentes', age: 30 },
    { id: 2, name: 'Jorge Enrique', age: 32 },
    { id: 3, name: 'Jorge Enrique', age: 32 },
  ]

  const activo = true

  const arrayLprog = ['PHP', 'JavaScript', 'Python', 'Java', 'C#']

  const fecha = new Date()

  return (
    <div>
      <h1> variable String:  {name}</h1>
      <h2> operaciones - suma es {120 + 120}</h2>
      <h3> funcion: El nombre: {name} tiene : {contarCaracteres(name)} Caracteres  </h3>
      <h4> condicionales: {JSON.stringify(activo)} </h4>
      <h4> alumnos con Json.stringify: {JSON.stringify(alumnos)}</h4>
      <h4> Array de lenguajes de Programacion {arrayLprog}</h4>
      <h4>fecha {fecha.toDateString()}</h4>
      <hr />
      <h2>Lista de alumnos</h2>

      <ul>
        {
          alumnos.map((alumno) => {
            return <li key={alumno.id}>Nombre: {alumno.name} - {alumno.age} años </li>
          })
        }
      </ul>

    </div>
  )
}

export default Datos
