import React from "react";
import {updateStatus} from "../../../../redux/profileReducer";

class ProfileStatus extends React.Component {

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  state = {
    editMode: false,
    status: this.props.status
  }

  handleFocus(e) {
    e.target.select()
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <>
        <span>Status: </span>
        {this.state.editMode
          ? <input onChange={this.onStatusChange} autoFocus={true} onFocus={this.handleFocus} onBlur={this.deactivateEditMode} value={this.state.status} type="text"/>
          : <span onDoubleClick={this.activateEditMode}>{this.props.status ? this.props.status : 'No status'}</span>}
      </>
    )
  }
}

export default ProfileStatus