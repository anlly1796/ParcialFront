import { useState } from "react";
import Card from "./Card";
import style from './index.module.css'

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [name, setName]=useState('')
  const [error, setError]=useState('')
  const [apellido, setApellido]= useState('')
  const [mensaje, setMensaje]=useState('')
  const [btn, setBtn]=useState(true)


  const handleName = (e)=>{
    let value1 = e.target.value;
    
    
    if(value1.length>3 && value1.trim()==value1 ){
      setName(value1)
      setError('')
      
      
    }
    else{
      setError('El nombre no cumple con los requerimientos')
      
      

    }
    if(name&& apellido){
      setBtn(false)
    }
    

  }

  const handleSurName = (e)=>{
    let value2 = e.target.value;
    if(value2.length>6){
      setApellido(value2)
      setError('')
      

    }
    else{
      setError('Los apellidos deben contener al menos seis caracteres')
      

    }
    if(name&& apellido){
      setBtn(false)
    }

  }

  const handleSubmit = (e)=>{
  
    e.preventDefault();
    setMensaje(`Bienvenido!! ${name} ${apellido}`)


  }

  return (
    <>
    <div className="App">
      <h1 className={style.titulo}>Datos usuario</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <input className={style.input} type="text" placeholder="Ingrese su nombre" onChange={handleName}></input>
        </div>
        <div>
        <input type="text" placeholder="Ingrese sus apellidos" onChange={handleSurName}></input>
        </div>
        <div>
          <button className={style.button} disabled = {btn} type="submit" >Enviar</button>
        </div>

      </form>
      <p className={style.p}>{error}</p>
    </div>
    <Card mensaje={mensaje}/>
    </>
  );
}

export default App;
