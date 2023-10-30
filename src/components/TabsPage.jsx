import React from 'react'

export default function TabsPage(props) {

    const cerrar = ()=>{
        alert('cerrar ventana')
    }

    const showWindow = {visibility: props.pages.length > 0? 'visible':'hidden' }
    //cabecera del tab 
    const Header =(props)=>{
        return (
            <li className="nav-item" >
                <a className={`nav-link ${props.active}`} data-bs-toggle="tab" href={`#${props.name}-${props.id}`}>
                    {props.name} 
                    <i className="pi pi-times closeTab" onClick={props.handleClick} style={{marginLeft:'20px', color:'red'}}></i>  
                </a> 
                
            </li>
        )
    }


    const Content = (props)=>{
        return (
            <div className={`tab-pane container-fluid ${props.active}`} id={`${props.name}-${props.id}` }>{props.content}</div>
        )
    }   


  return (
    <div style={{width: '100%'}}>
        <ul className="nav nav-tabs" style={showWindow}>
            {
                props.pages.map((item, x)=>{
                    return(
                        <Header key={x} name={item.name} id={item.id} handleClick={()=>{props.handleClick(item.id)}} active={ (x === 0 ?'active':'') } />
                    )
                })
            }
        </ul>
        <div className="tab-content" style={showWindow} >
            {
                props.pages.map((item,x)=>{
                    return(
                        <Content key={x} name={item.name} id={item.id} content={item.content} active={ (x === 0 ?'active':'') } >
                            { item.content }
                        </Content>
                    )
                })
            }
        </div>
    </div>

  )
}
