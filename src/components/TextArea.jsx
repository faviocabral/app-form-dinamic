import React from 'react'

export default function TextArea(props) {
  return (
    <textarea className="form-control m-1" rows="3" id={props.name} placeholder={`Enter ${props.placeholder}`} name={props.name} disabled={props.estado}></textarea>
  )
}
