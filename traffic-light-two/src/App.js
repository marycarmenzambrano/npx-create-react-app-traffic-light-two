import React, { useState } from "react";
import './App.css';

function App() {
  const [luz, setLuz] =useState ("");
  const [rojo, setRojo] = useState (false);
  const [amarillo, setAmarillo] = useState (false);
  const [verde, setVerde] = useState (false);

  return (
  <div className="container">
    <div className="tubo"></div>
    <div className="contenedor-semaforo">
      <div 
      className={'rojo ${rojo ===true ? luz : ""}'}
      onClick={() => {
      setLuz("luz");
      setRojo(!rojo);
      setAmarillo(false);
      setVerde(false);
      }}
      ></div>

      <div
       className={'amarillo ${amarillo === true ? luz : ""}'} 
       onClick={() => {
       setLuz("luz");
       setAmarillo(!amarillo);
       setRojo(false);
       setVerde(false);
       }}
       ></div>

      <div 
      className={'verde ${verde === true ? luz : ""}'} 
      onClick={() => {
      setLuz("luz");
      setVerde(!verde);
      setRojo(false);
      setAmarillo(false);
      }}
      
      
      ></div>


    </div> 
  </div>
  );
}

export default App;
