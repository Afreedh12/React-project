import React from 'react'

const heading= {
    fontSize:'72px',
    color:'blue'
}

function inLine() {
  return (
    <div>
        <h1 className='error'>error</h1>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default inLine
