import { useRef } from 'react'

function App () {
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchRef.current.value)
  }

  return (
    <section className='container'>
      <h4 className='text-center'>Buscardor de peliculas</h4>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            ref={searchRef}
            type='search'
            placeholder='Nombre de la pelicula'
            className='form-control'
          />
          <button className='btn-primary'>Buscar</button>
        </div>
      </form>
    </section>
  )
}

export default App
