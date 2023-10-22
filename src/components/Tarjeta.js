import React, { useState, useEffect } from 'react'

const Tarjeta = () => {

    const{personajes, setPersonajes} = useState([])
    
    useEffect(() => {
        console.log('useEffect')
        getPersonaje()
    }, [])

    const getPersonaje = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
          //  const users = await response.json()
        //    setPersonajes(users.id)
         //   console.log(response)
            .then(response => response.json())
            .then(json => console.log(json))
        } catch(error){
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Tarjeta</h2>
            <h3>Valor de la Tarjeta: {JSON.stringify(personajes)}</h3>
        </div>
    )
}

export default Tarjeta