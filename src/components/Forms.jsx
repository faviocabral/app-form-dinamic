import React from 'react'
import InputText from './inputText'
import TextArea from './TextArea'

export default function Forms(props) {

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
    props.form.filter(item=> item.id === props.id).map((item,x)=>{
      return(
        <div className="card m-1" key={x}>
          <div className="card-header text-bold">Form 00{item.id}</div>
          <div className="body">
            <form className="p-4" onSubmit={handleSubmit}>
              <div className="content">
                {
                  //iteramos las filas x campos segun formato de columnas ... 
                  item.distribucion.map((fila,x)=>{
                    return (
                      <div className="row" key={x}>
                        {
                          //iteramos los campos segun formato de columnas ... 
                          fila.map((campo,x)=>{
                            return (
                              <div className="col" key={x}>
                                {
                                  (campo.tipo === 'textarea')?
                                    <TextArea key={x} name={campo.nombre} placeholder={campo.nombre} estado={campo.disabled} />
                                  : <InputText key={x} tipo={campo.tipo}  placeholder={campo.nombre} name={campo.nombre} estado={campo.disabled} />
                                }
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

  )
}
