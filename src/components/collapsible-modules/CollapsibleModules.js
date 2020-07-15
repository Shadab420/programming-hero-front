import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import './CollapsibleModules.scss';
import { FaCircle, FaPlus, FaMinus } from 'react-icons/fa';

class CollapsibleModules extends React.Component {
  state = {
    isOpen1: false,
    isOpen2: false,
    isOpen3: false,
    spy3: {}
  };

  // const [stateObject, setObjectState] = useState({
  //   firstKey: '',
  //   secondKey: '',
  // });
  
  // setObjectState((prevState) => ({
  //   ...prevState,
  //   secondKey: 'value',
  // }));

  toggle = index => {
    let collapse = "isOpen" + index;

    this.setState(prevState => ({ [collapse]: !prevState[collapse] }));
  };

  render() {

    const { title, link } = this.props.module;

    return (
      <div className="collapsible-div">

        <div
          className={cx("collapsible2__toggle", {
            "collapsible2__toggle--active": this.state.isOpen1
          })}

          onClick={() => this.toggle(1)}
          
        >
          <span className="milestone-heading">
            <h3 className="has-text-weight-semibold">Module 01: Introduction</h3>
            <small>20min <FaCircle/> 1/2</small>
          </span>
          <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen1 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div>

        </div>

        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "collapsible2__collapse collapsible2__collapse--gradient " +
            (this.state.isOpen1 ? "collapsible2__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen1 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="collapsible2__content">

                  <div onClick={()=>{this.props.handleVideoChange(link)}}>
                      <h3>{title}</h3>
                  </div>

                {/* <button onClick={() => this.toggle(1)} className="collapsible2__button">
                  close
                </button> */}
              </div>
            </React.Fragment>
          )}
        />

        {/* module 2 */}

        <div
          className={cx("collapsible2__toggle", {
            "collapsible2__toggle--active": this.state.isOpen2
          })}
          
          onClick={() => this.toggle(2)}
        >
          <span className="milestone-heading">
            <h3 className="has-text-weight-semibold">Milestone 02</h3>
            <small>55 min <FaCircle/> 5 modules</small>
          </span>
          {/* <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen2 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div> */}

          <button className="button module-toggle-btn" onClick={() => this.toggle(2)}>
            { this.state.isOpen2 && <FaMinus /> }
            { !this.state.isOpen2 && <FaPlus/> }
          </button>
        </div>

        <Collapse
          isOpen={this.state.isOpen2}
          className={
            "collapsible2__collapse collapsible2__collapse--gradient " +
            (this.state.isOpen2 ? "collapsible2__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="collapsible2__content">
                <div>{collapseState}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <img
                  className="image"
                  alt="random"
                  src="https://source.unsplash.com/user/erondu/500x200"
                />
                <button onClick={() => this.toggle(2)} className="collapsible2__button">
                  close
                </button>
              </div>
            </React.Fragment>
          )}
        />
      
      
      {/* module 3 */}

      <div
          className={cx("collapsible2__toggle", {
            "collapsible2__toggle--active": this.state.isOpen3
          })}

          onClick={() => this.toggle(3)}
          
        >
          <span className="milestone-heading">
            <h3 className="has-text-weight-semibold">Milestone 03</h3>
            <small>55 min <FaCircle/> 5 modules</small>
          </span>
          {/* <div className="rotate90">
            <svg
              className={cx("icon", { "icon--expanded": this.state.isOpen2 })}
              viewBox="6 0 12 24"
            >
              <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
            </svg>
          </div> */}

          <button className="button module-toggle-btn" onClick={() => this.toggle(3)}>
            { this.state.isOpen3 && <FaMinus /> }
            { !this.state.isOpen3 && <FaPlus/> }
          </button>
        </div>

        <Collapse
          isOpen={this.state.isOpen3}
          className={
            "collapsible2__collapse collapsible2__collapse--gradient " +
            (this.state.isOpen3 ? "collapsible2__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen3 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="collapsible2__content">
                <div>{collapseState}</div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <img
                  className="image"
                  alt="random"
                  src="https://source.unsplash.com/user/erondu/500x200"
                />
                <button onClick={() => this.toggle(3)} className="collapsible2__button">
                  close
                </button>
              </div>
            </React.Fragment>
          )}
        />

        
      
      
      
      </div>



      
    );
  }
}

export default CollapsibleModules;
