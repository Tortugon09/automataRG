import React, { useState } from 'react';
import axios from "axios";

function App() {
  const [palabra, setPalabra] = useState(''); // Estado para almacenar la palabra ingresada
  const [q0, setq0] = useState(false);
  const [q1, setq1] = useState(false);
  const [q2, setq2] = useState(false);
  const [q3, setq3] = useState(false);
  const [q4, setq4] = useState(false);
  const [q5, setq5] = useState(false);
  const [q6, setq6] = useState(false);
  const [q7, setq7] = useState(false);
  const [q8, setq8] = useState(false);
  const [q9, setq9] = useState(false);
  const [q10, setq10] = useState(false);
  const [q11, setq11] = useState(false);
  const [q12, setq12] = useState(false); // Estado para almacenar la palabra ingresada
  const [error, seterror] = useState(false); // Estado para almacenar la palabra ingresada


  const getPeticion = async (q) => {
    var dataReturn = 0
    await axios
        .post(`http://127.0.0.1:8000/${q}?palabra=${palabra}`)
        .then(({ data }) => {
            dataReturn = data
        }).catch(function (error){
            console.log(error)
        })
  return dataReturn
};

const automota = async () => {
  try {
    const inicializar = await getPeticion("q0");
    await getPeticion('q0') ? setq0(true) : seterror(true)
    var primerCaracter = ""
    var cuartoCaracter = ""
    var quintoCaracter = ""
    if (await inicializar == "q1") {
      getPeticion("q1")
      primerCaracter = await getPeticion("q1")
      await getPeticion("q1") ? setq1(true) : seterror(true)
      console.log('q1')
    }
    if (await inicializar == "q2" ) {
      getPeticion("q2")
      primerCaracter = await getPeticion("q2")
      await getPeticion("q2") ? setq2(true) : seterror(true)
      console.log('q2')
    }
    if (await inicializar == "q3" ) {
      primerCaracter = await getPeticion("q3")
      await getPeticion("q3") ? setq3(true) : seterror(true)
      console.log('q3')
    }
    if (await primerCaracter == "q4"){
      await getPeticion("q4") ? setq4(true) : seterror(true)
      console.log('q4')
    }
    if (await getPeticion("q4") && primerCaracter == "q4") {
      cuartoCaracter = await getPeticion("q5")
      await getPeticion("q5") ? setq5(true) : seterror(true)
      console.log('q5')
    }
    if (await cuartoCaracter == "q6") {
      quintoCaracter = await getPeticion("q6")
      await getPeticion("q6") ? setq6(true) : seterror(true)
      console.log('q6')
    }
    if (await cuartoCaracter == "q9") {
      quintoCaracter = await getPeticion("q9")
      await getPeticion("q9") ? setq9(true) : seterror(true)
      console.log('q9')
    }
    if (await cuartoCaracter == "q9" && await getPeticion("q9")) {
      await getPeticion("q10") ? setq10(true) : seterror(true)
      console.log('q10')
    }
    if (await getPeticion("q10")) {
      await getPeticion("q8") ? setq8(true) : seterror(true)
      console.log('q8')
    }
    if (await quintoCaracter == "q7") {
      await getPeticion("q7") ? setq7(true) : seterror(true)
      console.log('q7')
    }
    if (await getPeticion("q7")) {
      await getPeticion("q8") ? setq8(true) : seterror(true)
      console.log('q8')
    }
    if (await getPeticion("q8") && primerCaracter == "q4") {
      await getPeticion("q11") ? setq11(true) : seterror(true)
      console.log('q11')
    }
    if (await getPeticion("q11") && primerCaracter == "q4") {
      setq12(true)
      console.log('q12')
      console.log("termine todo y correcto")
      return true
    }
    
  } catch (error) {
    console.error(error);
  }
};
  const handleInputChange = (event) => {
    // Manejar cambios en el campo de entrada y actualizar el estado 'palabra'
    setPalabra(event.target.value);
  };
  const reiniciar = () => {
    setq1(false)
    setq2(false)
    setq3(false)
    setq4(false)
    setq5(false)
    setq6(false)
    setq7(false)
    setq8(false)
    setq9(false)
    setq10(false)
    setq11(false)
    setq12(false)
  }
  const handleButtonClick = async () => {
    // Manejar el clic en el botón y llamar a la función q0 con la palabra
    reiniciar()
    seterror(false)
    await automota()
    console.log(error)
    error ? reiniciar() : ""


  };

  return (
    <div className="App">
      <h1>Procesador de Palabras</h1>
      <input
        type="text"
        placeholder="Ingrese una palabra"
        value={palabra}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Procesar</button>
      <svg className='q0' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q0 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q1' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q1 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q2' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q2 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q3' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q3 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q4' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q4 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q5' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q5 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q6' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q6 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q7' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q7? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q8' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q8 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q11' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q11 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q12' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q12 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q9' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q9 ? "#D9D9D9" : "#000000"}/>
      </svg>
      <svg className='q10' xmlns="http://www.w3.org/2000/svg" width="73" height="73" viewBox="0 0 73 73" fill="none">
        <circle cx="36.5" cy="36.5" r="36.5" fill={q10 ? "#D9D9D9" : "#000000"}/>
      </svg>
    </div>
  );
}

export default App;