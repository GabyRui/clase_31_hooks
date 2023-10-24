import React from 'react'
import { useState } from 'react';
import { Header } from './components/Header'

export const App = () => {

const [productos, setProductos] = useState([]);
const [nombre, setNombre] = useState('');
const [precio, setPrecio] = useState('');
const [cantidad, setCantidad] = useState('');
const [categoria, setCategoria] = useState('');
const [marca, setMarca] = useState('');


//Añadir botón

const handle = (e) => {
    e.preventDefault();
    
  const compras = {id: Date.now(), nombre, precio, cantidad, categoria, marca};
  setProductos([...productos, compras]);
  setPrecio ('');
  setDescription ('');
  setCategoria ('');
  setMarca ('');
  };

  //Eliminar botón

  const handleDelete = (element) => {
    const nuevasCompras = productos.filter(compra => compra.id != element);
    setProductos(nuevasCompras);
  };

  //-------------------------------------

  return (
    <section className='contenedor'>
      <Header/>
      <form onSubmit={handle}>

        <div>
          <label htmlFor=""> Ingresa producto </label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>

        <div>
          <label htmlFor=""> Ingresar cantidad </label>
          <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)} placeholder='máximo: 10 productos' />
        </div>

        <div>
          <label htmlFor=""> Precio Total (S/. peruanos) : </label>
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder='S/.'/>
        </div>

        <div>
          <label htmlFor=""> Categoría : </label>
          <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder='Perfumería y ropa'/>
        </div>

        <div>
          <label htmlFor=""> Marca : </label>
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} placeholder='Avon, Armani y Dona Karan'/>
        </div>



        <div>
            <button type='submit' disabled={!nombre || !cantidad || !precio || !categoria || !marca} >Agregar producto</button>
        </div>
        {/* <button onClick={handle}>click</button> */}
      </form>

      {/* Lista de productos */}

      <hr />

      <div>
        <h3>Lista de productos</h3>

        {productos.length > 0 ? (

          productos.map((product) =>
          
          <li key={product.id}> {product.nombre} - {product.cantidad} - {product.precio} - {product.categoria} - {product.marca} <button onClick={() => handleDelete(product.id)} className='button_list'> Eliminar </button> </li>)

        ) : (
          <p>No hay productos en la lista</p>         
          )}

      </div>

    </section>
  )
}
