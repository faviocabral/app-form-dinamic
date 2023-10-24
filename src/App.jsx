import React from 'react'
import InputText from './components/inputText'

export default function App() {

  //payload(objeto) que viene de la base datos 
  let forms = [     
    {id: 1, col:3, campos: ['id', 'nombre' , 'apellido' , 'telefono' ] },
    {id: 2, col:2, campos: ['id', 'nombre' , 'apellido'  ] },
    {id: 3, col:2, campos: ['id', 'nombre'   ] },
  ]
  //distribuimos en cuantas columnas vamos a mostrar en el formulario
  forms = forms.map(item=>{
    return {
      ...item,
      distribucion: distribuir(item.col, item.campos) //agregamos un nuevo elemento al objeto 
      //con esto lo que vamos hacer es distribuir los campos segun las cantidad de columnas queremo mostrar 
    }
  })

  //funcion de distribucion de columnas 
  function distribuir(col, campos ){
    let valor = [], i = 0 , f = col 
    while(campos.slice(i,f).length ){
      valor.push(campos.slice(i,f))
      i= i + col //inicio - rango
      f= f + col //fin - rango 
    }
    return valor 
  }

  //para enviar los datos a la base datos ... 
  const handleSubmit = (event) => {
    event.preventDefault();
    //capturamos los datos del formulario... 
    const data = new FormData(event.target);
    const payload = JSON.stringify(Object.fromEntries(data))
    //mostramos datos en pantalla
    alert(payload);
    //mostramos datos en consola
    console.log(payload)
  }


  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center mt-1 text-bold bg-info rounded text-white">Formulario Dinamico</h1>
        <div className="container-fluid mt-5 w3-border w3-padding w3-round ws-grey d-flex flex-wrap justify-content-arround">
          {
            //iteramos los formularios n... 
            forms.map(item=>{
              return(
                <div className="card m-2">
                  <div className="card-header text-bold">Formulario 00{item.id}</div>
                  <div className="body">
                    <form className="p-4" key={item.id}  onSubmit={handleSubmit}>
                      <div className="content">
                        {
                          //iteramos las filas x campos segun formato de columnas ... 
                          item.distribucion.map(fila=>{
                            return (
                              <div className="row">

                                {
                                  //iteramos los campos segun formato de columnas ... 
                                  fila.map(campo=>{
                                    return (
                                      <div className="col">
                                        <InputText key={campo} placeholder={campo} name={campo}/>
                                      </div>
                                    )
                                  })
                                }

                              </div>
                            )
                          })
                        }
                      </div>
                      <div className="col d-flex flex-row-reverse mt-4">
                      <button type="submit" className="btn btn-primary">Enviar</button>
                      <button type="reset" className="btn btn-secondary" style={{marginRight:'10px'}}>Cancelar</button>
                      </div>
                    </form>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
