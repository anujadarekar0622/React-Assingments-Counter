import React, { useState } from 'react'

const ColorPicker = () => {
    const [color,setColor] = useState('Red')

  return (
    <>
    <div>ColorPicker</div>
    <div style={{
        width:"200px",
        height:"100px",
        border:"1px solid black",
        backgroundColor:color
        }}>
            {color}
        </div>
        <button onClick={()=>setColor("Red")}>Red</button>
        <button onClick={()=>setColor("Green")}>Green</button>
        <button onClick={()=>setColor("Blue")}>Blue</button>
        <button onClick={()=>setColor("Yellow")}>Yellow</button>

    </>
  )
}

export default ColorPicker