import React, { useState } from 'react'

const Cell = ({value,cellFunc}) => {

  return (
    <div>
        <button className='tableCell' onClick={cellFunc}>
          {value}
        </button>
    </div>
  )
}

export default Cell