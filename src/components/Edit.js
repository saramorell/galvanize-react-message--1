import React, { Component } from 'react';

class Edit extends Component {


  onSubmit = (e) => {
    e.preventDefault()
    this.props.editMessage(this.props.messageToEdit.id, e.target.message.value, e.target.name.value)
  }

  render() {
    console.log(this.props.messageToEdit.id)
    return (
      <div>
        <form className="row" onSubmit={ () => this.onSubmit }>
          <div className="col-sm">
            <input type="text" className="form-control" name="name" id="name" defaultValue={this.props.messageToEdit.name} />
            </div>
          <div className="col-sm">
            <input type="text" className="form-control" name="message" defaultValue={this.props.messageToEdit.message} id="message" />
          </div>
          <button type="submit" className="btn btn-secondary">submit</button>
        </form>

      </div>
    )
    }
}

export default Edit;
