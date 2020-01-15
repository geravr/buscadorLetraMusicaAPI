import React, {useState, useEffect, Fragment } from 'react';
import axios from 'axios'
import Formulario from './components/Formulario'
import Cancion from './components/Cancion'
import Informacion from './components/Informacion'


function App() {
  // Utilizar useState con 3 states diferentes
  const [artista, setArtista] = useState('');
  const [letra, setLetra] = useState([]);
  const [info, setInfo] = useState({});

  //Método para consultar la API de letras de canciones
  const consultarAPILetra = async busqueda => {
      const {artista, cancion} = busqueda;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      console.log(url)

      //consultar la API
      const resultado = await axios(url);

      //Almacenar artista en el state
      setArtista(artista);

      //Almacenar letra en el state
      setLetra(resultado.data.lyrics);
  }

  //Método para consultar la API de información
  const consultarAPIInfo = async artista => {
    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const resultado = await axios(url);
  
      //Almacenar info del artista en el state
      setInfo(resultado.data.artists[0]);
    }
  }

  useEffect(
    () => {
      consultarAPIInfo(artista);
    }, [artista]
  )

  return ( 
    <Fragment>

      <Formulario
      consultarAPILetra={consultarAPILetra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion
            info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion
            letra={letra}
            />
          </div>
        </div>
      </div>

    </Fragment>
   );
}
 
export default App;