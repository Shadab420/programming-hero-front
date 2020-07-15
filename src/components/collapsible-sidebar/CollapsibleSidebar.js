import React from "react";
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import './CollapsibleSidebar.scss';
import { FaCircle, FaPlus, FaMinus } from 'react-icons/fa';

class CollapsibleSidebar extends React.Component {
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
    return (
      <div className="collapsible-div">

        <div
          className={cx("collapsible__toggle", {
            "collapsible__toggle--active": this.state.isOpen1
          })}
          
        >
          <span className="milestone-heading">
            <h3 className="has-text-weight-semibold">Milestone 01</h3>
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

          <button className="button module-toggle-btn" onClick={() => this.toggle(1)}>
            { this.state.isOpen1 && <FaMinus /> }
            { !this.state.isOpen1 && <FaPlus/> }
          </button>
        </div>

        <Collapse
          isOpen={this.state.isOpen1}
          className={
            "collapsible__collapse collapsible__collapse--gradient " +
            (this.state.isOpen1 ? "collapsible__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen1 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="collapsible__content">

                  {this.props.children}

                <button onClick={() => this.toggle(1)} className="collapsible__button">
                  close
                </button>
              </div>
            </React.Fragment>
          )}
        />

        {/* module 2 */}

        <div
          className={cx("collapsible__toggle", {
            "collapsible__toggle--active": this.state.isOpen2
          })}
          
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
            "collapsible__collapse collapsible__collapse--gradient " +
            (this.state.isOpen2 ? "collapsible__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen2 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="collapsible__content">
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
                <button onClick={() => this.toggle(2)} className="collapsible__button">
                  close
                </button>
              </div>
            </React.Fragment>
          )}
        />
      
      
      {/* module 3 */}

      <div
          className={cx("collapsible__toggle", {
            "collapsible__toggle--active": this.state.isOpen3
          })}
          
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
            "collapsible__collapse collapsible__collapse--gradient " +
            (this.state.isOpen3 ? "collapsible__collapse--active" : "")
          }
          transition="height 800ms cubic-bezier(0.4, 0, 0.2, 1)"
          aria-hidden={this.state.isOpen3 ? "false" : "true"}
          elementType="article"
          render={collapseState => (
            <React.Fragment>
              <div className="collapsible__content">
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
                <button onClick={() => this.toggle(3)} className="collapsible__button">
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

export default CollapsibleSidebar;
