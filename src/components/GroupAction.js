import React, {Component} from 'react';

import './GroupAction.css';

class GroupAction extends Component {
  render() {
    const groupClasses = [
      "group-action",
      this.props.show ? 'active' : null
    ].join(' ');

    return (
      <div className={groupClasses}>
        <button className="group-action-select-all"
         onClick={this.props.selectAll}></button>
        <button className="group-action-bookmark-all"
         onClick={this.props.bookmarkAll}></button>
      </div>
    )
  }
}

export default GroupAction;