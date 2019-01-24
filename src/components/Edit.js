import React, { Component } from 'react';

class Edit extends Component {

  render() {
    return (
      <div>
        <form className="row" >
          <div className="col-sm">
            <input type="text" className="form-control" name="name" id="name" />
            </div>
          <div className="col-sm">
            <input type="text" className="form-control" name="message" id="message" />
          </div>
          <button type="submit" className="btn btn-secondary">submit</button>
        </form>

      </div>
    )
    }
}

export default Edit;
