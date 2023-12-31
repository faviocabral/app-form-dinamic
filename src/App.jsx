import React, {useState} from 'react'
import TabsPage from './components/TabsPage';
import Forms from './components/Forms'
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

export default function App() {
  const [ventana, setVentana]=useState([])
  //payload(objeto) que viene de la base datos 
  let forms2 = [ 
    {id: 1, col:2, campos: [
        {nombre:'id', tipo:'number' , disabled: false }, 
        {nombre:'nombre', tipo: 'text', disabled: false }, 
        {nombre:'apellido', tipo: 'text', disabled: false},
        {nombre:'telefono', tipo: 'text', disabled: false},
        {nombre:'tarea', tipo: 'textarea', disabled: false},
      ] 
    },
    {id: 2, col:2, campos: [
          {nombre:'id', tipo:'number' , disabled: false }, 
          {nombre:'nombre', tipo: 'text', disabled: false }, 
          {nombre:'direccion', tipo: 'text', disabled: false},
          {nombre:'telefono', tipo: 'text', disabled: false},
          {nombre:'tarea', tipo: 'textarea', disabled: false},
        ] 
    },
    {id: 3, col:2, campos: [
      {nombre:'id', tipo:'number' , disabled: true }, 
      {nombre:'nombre', tipo: 'text', disabled: false }, 
      {nombre:'pedido', tipo: 'text', disabled: false},
      {nombre:'area', tipo: 'text', disabled: false},
      {nombre:'tarea', tipo: 'textarea', disabled: false},
    ] 
  },
  {id: 4, col:2, campos: [
        {nombre:'id', tipo:'number' , disabled: true }, 
        {nombre:'nombre', tipo: 'text', disabled: false }, 
        {nombre:'ubicacion', tipo: 'text', disabled: false},
        {nombre:'tarea', tipo: 'textarea', disabled: false},
    ] 
  },
  
]

 //distribuimos en cuantas columnas vamos a mostrar en el formulario
  forms2 = forms2.map(item=>{
    return {
      ...item,
      distribucion: distribuir(item.col, item.campos) //agregamos un nuevo elemento al objeto 
      //con esto lo que vamos hacer es distribuir los campos segun las cantidad de columnas queremo mostrar 
    }
  })
  console.log(forms2)

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

  let pages = [
    {id: 1, name:'clientes', content: [<Forms key={1} form={forms2} id={1} />] },
    {id: 1, name:'clientes', content: [<Forms key={1} form={forms2} id={2} />] },
    {id: 3, name:'venta',    content: [<Forms key={3} form={forms2} id={3} />] },
  ]
  let pageWindows = [
    {id: 1, name:'cliente', content: [<Forms key={1} form={forms2} id={1} />]},
    {id: 2, name:'venta',  content: [<Forms key={2} form={forms2} id={2} />]},
    {id: 3, name:'presupuesto',  content: [<Forms key={3} form={forms2} id={3} />] },
    {id: 4, name:'proveedores',  content: [<Forms key={4} form={forms2} id={4} />] },
  ]

  const agregarVentana = (window)=>{
   
    let newWindow = (pageWindows.find(item=> item.name === window ))
    newWindow.id = ventana.length + 1
    setVentana( current=>[...current, newWindow])
  }
const cerrarVentana=(id)=>{
  if(!confirm('Esta seguro de cerrar ?')) return 
  console.log('entro para cerrar ventana .. ', ventana.filter(item=> item.id !== id ))
  let newWindow = (ventana.filter(item=> item.id !== id ))

  setVentana( newWindow )
}
  return (
    <>
      <div className="container-fluid">
        <h1 className="text-center mt-1 text-bold bg-info rounded text-white">Formulario Dinamico</h1>
        <div className="row">
          <div className="col-2 mt-2 d-flex justify-content-center">
          <ul className="list-group w-100">
            <a href="#" className="list-group-item active" onClick={()=>{alert(ventana.length)}}>MENU</a>
            <a href="#" className="list-group-item list-group-item-action" onClick={()=>{agregarVentana('cliente')}}> <i className="pi pi-user" style={{ fontSize: '1.2rem', marginRight:'5px' }}></i> Cliente </a>
            <a href="#" className="list-group-item list-group-item-action" onClick={()=>{agregarVentana('venta')}}> <i className="pi pi-shopping-bag" style={{ fontSize: '1.2rem', marginRight:'5px' }}></i> Ventas</a>
            <a href="#" className="list-group-item list-group-item-action" onClick={()=>{agregarVentana('presupuesto')}}><i className="pi pi-calculator" style={{ fontSize: '1.2rem', marginRight:'5px' }}></i> Presupuesto</a>
            <a href="#" className="list-group-item list-group-item-action" onClick={()=>{agregarVentana('proveedor')}}><i className="pi pi-truck" style={{ fontSize: '1.2rem', marginRight:'5px' }}></i> Proveedores</a>
          </ul> 
          </div>

          <div className="col-10">
            <div className="container-fluid mt-2 w3-border w3-padding w3-round ws-grey d-flex justify-content-arround">
              <TabsPage pages={ventana} handleClick={cerrarVentana} />
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
