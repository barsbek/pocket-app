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
         onClick={(e) => this.props.selectAll(e)}></button>
        <button className="group-action-bookmark-all"
         onClick={(e) => this.props.bookmarkAll(e)}></button>
        {/* <button className="group-action-reset-selects">
          reset selection
        </button>
        <button className="group-action-bookmark-all">
          bookmark all
        </button>
        <button className="group-action-reset-bookmarks">
          reset bookmarks
        </button> */}
      </div>
    )
  }
}

export default GroupAction;