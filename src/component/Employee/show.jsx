import React, { Component } from 'react'

class EmpShow extends Component {

    constructor(props) {
        super(props);
    }
  
    render() {
        return (<div>
            <div className="field-item">
                <img src={this.props.detailedObj.profilePhotoLink}></img>
            </div>
            <div className="field-item">
                <span className="title">Name: </span>
                <span>{this.props.detailedObj.firstName}</span>
                <span>{this.props.detailedObj.lastName}</span>
            </div>
            <div className="field-item">
                <span className="title">DOB: </span>
                <span>{this.props.detailedObj.dOB}</span>
            </div>
            <div className="field-item">
                <span className="title">Designation: </span>
                <span>{this.props.detailedObj.designation}</span>
            </div>
            <div className="field-item">
                <span className="title">Experience: </span>
                <span>{this.props.detailedObj.experience}</span>
            </div>
        </div>);
    }

}

export default EmpShow;