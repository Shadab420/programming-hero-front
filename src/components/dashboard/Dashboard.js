import React, { useState } from 'react';
import './Dashboard.scss';
import VideoPlayer from '../video-player/VideoPlayer';
import CollapsibleSidebar from '../collapsible-sidebar/CollapsibleSidebar';
import CollapsibleModules from '../collapsible-modules/CollapsibleModules';

const Dashboard = () => {

    const [videoLink, setVideoLink] = useState("http://www.youtube.com/embed/h3YVKTxTOgU");

    const modulesData = [
        {
            title: "Introduction",
            link: "https://www.youtube.com/watch?v=HE6iHgqlnBk"
        }
    ]

    const handleVideoLinkChange = (newLink) => {
        setVideoLink(newLink);
    }

    return (
        <div>
            <div className="columns is-centered course-div">
                <div className="column is-half">
                    <div>
                        <VideoPlayer src={videoLink}/>
                    </div>
                </div>
                <div className="column is-half">
                    <div className="content-div">
                        <h3 className="has-text-weight-semibold">Contents</h3>
                            <CollapsibleSidebar>

                            {
                                modulesData.map(module =>{
                                    
                                       return <CollapsibleModules module={module} handleVideoChange={handleVideoLinkChange}/>

                                    
                                })
                            }
                            </CollapsibleSidebar>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
