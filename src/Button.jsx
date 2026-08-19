import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <button>{props.name}</button>
  )
}

Button.defaultProps = {
    name : "Default"
}

export default Button