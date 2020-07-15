import React from 'react';
import './Dashboard.scss';
import VideoPlayer from '../video-player/VideoPlayer';


const Dashboard = () => {
    return (
        <div>
            <div className="columns is-vcentered is-centered course-div">
                <div className="column is-two-thirds">
                    <div>
                        <VideoPlayer src="http://www.youtube.com/embed/h3YVKTxTOgU"/>
                    </div>
                </div>
                <div className="column is-one-thirds">
                    content
                </div>
            </div>
        </div>
    )
}

export default Dashboard
