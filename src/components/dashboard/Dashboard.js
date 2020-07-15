import React, { useState } from 'react';
import './Dashboard.scss';
import VideoPlayer from '../video-player/VideoPlayer';
import CollapsibleSidebar from '../collapsible-sidebar/CollapsibleSidebar';
import CollapsibleModules from '../collapsible-modules/CollapsibleModules';
import modulesData from '../../fakeData/fakeData';
import { FaArrowLeft, FaArrowRight, FaAngleRight, FaAngleLeft, FaExclamationTriangle } from 'react-icons/fa';


const Dashboard = () => {

    const [currentVideo, setCurrentVideo] = useState({ 
                                                module: modulesData[0], 
                                                video: modulesData[0].videos[0]
                                            });

    const [showModal, setShowModal] = useState(false);

    const handleVideoLinkChange = (selectedModule, selectedVideo) => {

        if(selectedVideo > selectedModule.videos.length) {
            alert('This is the last video of this module!');
            return;
        }
        else if(selectedVideo < 1){
            alert('This is the first video of this module!');
            return;
        }

        setCurrentVideo({
            module: selectedModule,
            video: selectedModule.videos.find(video => video.id === selectedVideo)
        });
    }


    return (
        <div>
            <div className="columns is-centered course-div">
                <div className="column is-half">
                    <div>
                        <VideoPlayer src={currentVideo.video.link}/>
                        
                        <div className="video-description-div">
                            <div className="columns is-vcentered">
                                <div className="column">
                                    <h3 className="has-text-weight-semibold"> {currentVideo.video.title} </h3>
                                </div>
                                <div className="columns column">
                                    <div className="column is-right">
                                        <button className="button prev-btn" 
                                            onClick={()=>{ handleVideoLinkChange(currentVideo.module, currentVideo.video.id-1)}}>
                                           <FaAngleLeft/> Previous
                                        </button>
                                    </div>
                                    
                                    <div className="column is-left">
                                        <button className="button next-btn"
                                            onClick={()=>{ handleVideoLinkChange(currentVideo.module, currentVideo.video.id+1)}}>
                                            Next <FaAngleRight/>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="video-description">
                                <p> { currentVideo.video.description } </p>
                            </div>

                            <div className="copyright-description">
                                <p onClick={() => {setShowModal(!showModal)}}><FaExclamationTriangle/> Copyright warning!</p>

                                { 
                                    showModal && (<div class="modal is-active" id="modal">
                                        <div class="modal-background"></div>
                                        <div class="modal-content">
                                            <p class="image is-4by3">
                                            <img src={require('../../assets/images/copyright-notice/copyright.png')} className="image copyright-img" alt="copyright image"/>
                                            </p>
                                        </div>
                                        <button class="modal-close is-large" aria-label="close" onClick={() => {setShowModal(!showModal)}}></button>
                                    </div>)
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="column is-half">
                    <div className="content-div">
                        <h3 className="has-text-weight-semibold">Contents</h3>

                        {
                            [1,2,3].map((n,idx) => {

                                return (
                                    <CollapsibleSidebar key={idx} id={n}>

                                    {
                                        modulesData.map(module =>{
                                            
                                            return <CollapsibleModules module={module} handleVideoChange={handleVideoLinkChange}/>

                                            
                                        })
                                    }
                                    </CollapsibleSidebar>
                                )

                            })
                        }
                            
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard
