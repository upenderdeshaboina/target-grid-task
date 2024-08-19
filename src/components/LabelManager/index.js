import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import {v4 as uuid} from 'uuid'
import './index.css'

class LabelManager extends Component {
    state = {
      newLabelName: ''
    };
  

  handleChange = (e) => {
    this.setState({ newLabelName: e.target.value });
  }

  handleAddLabel = (e) => {
    e.preventDefault();
    const newLabel = {
      id: uuid(),
      name: this.state.newLabelName
    };
    this.props.addLabel(newLabel);
    this.setState({ newLabelName: '' });
  }

  render() {
    return (
      <Popup trigger={<button>Add Label</button>} modal>
        {close => (
          <div className="label-modal">
            <form onSubmit={(e) => { this.handleAddLabel(e); close(); }} className='label-form'>
              <input
                type="text"
                placeholder="Enter your Label"
                value={this.state.newLabelName}
                onChange={this.handleChange}
                required
                className='input-el'
              />
              
              <button type="submit" className='save-btn'>Save</button>
            </form>
          </div>
        )}
      </Popup>
    );
  }
}

export default LabelManager;
