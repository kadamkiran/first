import React from 'react'

function NewVideo(props) {
  return (
    <div className='video-container'>
        <div className='thumbnail'>

        </div>
        <div className="video-info">
            <div className="channel-image">
                <img src={props.image} alt="" />
            </div>
            <div className="channel-info">
                <h3 className='video-title'> Video title </h3>
                <p className="channel-name">ABCD</p>
                <p className="view-count"><span className='view'>1.1M</span>
                <span className='upload-date'>     12 hours ago</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewVideo