import React from 'react'
import NewVideo  from './NewVideo'
import vi1 from '../imges/yt.jpg'


function AllVideo() {

    const allVideoStyle = {
      display:"flex",
      flexWrap:"wrap",
      marginTop:"20px",
      justifyContent:"space-around"
    }

  return (
    <div style={allVideoStyle}>
    
    <NewVideo 
    image
    title="First video"
    channel="MyChannel" 
    />
    <NewVideo/>
    <NewVideo/>   
    </div>
  )
}

export default AllVideo