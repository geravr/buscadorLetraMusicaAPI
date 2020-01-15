import React, { useState } from 'react';

function Formulario({consultarAPILetra}) {

    const [busqueda, setBusqueda] = useState({
        artista : '',
        cancion : ''
    });

    //función para atualizar el state
    const actualizarState = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value,
            [e.target.name] : e.target.value
        })
    }

    //Cuando hacemos submit al form
    const handleSubmit = e => {
        e.preventDefault();
        consultarAPILetra(busqueda);
    }

    return (
        <div className="bg-info">
          <div className="container">
              <div className="row">
                  <form 
                    onSubmit={handleSubmit}
                    className="col card text-white bg-transparent  mb-5 pt-5 pb-2">
                      <fieldset>
                          <legend className="text-center">Buscador Letras Canciones</legend>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista" 
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción" 
                                        required
                                        onChange={actualizarState}
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-right">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;