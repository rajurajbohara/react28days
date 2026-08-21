import React from 'react'

const Button = (props) => {
    console.log(props)
  return (
    <button>{props.name}</button>
  )
}

// Button.defaultProps = {
//     name : "Default"
// }

// Button.propTypes = {
//     name: PropTypes.string.easyRequired
// }

export default Button