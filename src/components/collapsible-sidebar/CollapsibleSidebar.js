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
        <h3 className="has-text-weight-semibold">Milestone 0{this.props.id}</h3>
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

                {/* <button onClick={() => this.toggle(1)} className="collapsible__button">
                  close
                </button> */}
              </div>
            </React.Fragment>
          )}
        />
      
      </div>
  
    );
  }
}

export default CollapsibleSidebar;
