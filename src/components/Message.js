import React, { Component } from 'react';

class Message extends Component {


    render() {

        return (
          <div>
            <div className="list-group">
              <div className="list-group-item">
                <div className="row">

                  <div id="name" className="col-md-2 ">{this.props.name}</div>
                  <div id="message" className="col-md-8 ">{this.props.message}</div>
                  <button id="delete" className="col-md-1 btn" onClick={()=>this.props.deleteMessage(this.props.id)}>delete</button>
                  <button id="edit" className="col-md-1 btn">edit</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default Message;
