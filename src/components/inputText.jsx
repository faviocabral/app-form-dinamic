import React from 'react'

export default function InputText(props) {
  return (
    <input type={props.tipo} key={props.name} className="form-control m-1" placeholder={`Enter ${props.placeholder}`} name={props.name} disabled={props.estado} />
  )
}
