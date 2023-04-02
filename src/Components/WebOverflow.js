
import React, { useState, CSSProperties, useEffect } from 'react'
import Task from './Task'
import MoonLoader
  from "react-spinners/MoonLoader";



function WebOverflow(props) {
    const {color,loading,CSSProperties}=props
  return (
    <div style={{}}>
         <div  style={{ height: '100vh'  }}>
        {/* <div> */}
        {loading ?
          <div style={loader_background}>
            <div style={loderStyle_obj}>
              <MoonLoader color={color} loading={loading} CSSProperties={CSSProperties} size={35} />
            </div>
          </div>
          :
          <div className='web_view'>
            <Task />
          </div>
        }
      </div>
    </div>
  )
}

export default WebOverflow;
const loderStyle_obj = {
    alignContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: '48vw',
    paddingTop: '45vh'
  }
  
  const loader_background = {
    height: '100vh',
    with: '100vw',
    margin: '0px',
    padding: '0px',
    // width:'100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
  
  }
