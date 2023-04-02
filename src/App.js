
import React, { useState, CSSProperties, useEffect } from 'react'
import Task from './Components/Task'
import MoonLoader
  from "react-spinners/MoonLoader";

  import './index.css'



const override: CSSProperties = {
  // display: "block",
  // margin: "0 0",
  borderColor: "black",
  // backgroundColor:"rgba(0,0,0,0.2)",
  alignContent: 'center',
  alignSelf: 'center',


  alignItems: 'center'
};

function App() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#000");

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <div>
      <div  style={{ height: '100vh'  }}>
        {/* <div> */}
        {loading ?
          <div style={loader_background}>
            <div style={loderStyle_obj}>
              <MoonLoader color={color} loading={loading} cssOverride={override} size={35} />
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

export default App;

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



