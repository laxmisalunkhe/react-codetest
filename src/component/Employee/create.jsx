import React, { Component } from 'react'
import { get, set } from 'lodash'

class EmpCreate extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.setFieldValue = this.setFieldValue.bind(this)
    }

    setFieldValue(e) {
        const {name, value} = e.target;
        const newObj = this.props.newObj;
        newObj[name] = value;
        console.log(newObj, '3****')
        this.setState({newObjCopy: newObj});
    }
  
    render() {
        return (<div>
            <h2 className="text-center">Add New</h2>
            <form>
                <div className="form-group">
                    <label>First Name</label><br/>
                    <input type="text" onChange={this.setFieldValue} name="firstName"></input>
                </div>
                <div className="form-group">
                    <label>Last Name</label><br/>
                    <input type="text" onChange={this.setFieldValue} name="lastName"></input>
                </div>
                <div className="form-group">
                    <label>Profile Photo Link</label><br/>
                    <input type="text" onChange={this.setFieldValue} name="profilePhotoLink"></input>
                </div>
                <div className="form-group">
                    <label>DOB</label><br/>
                    <input type="text" onChange={this.setFieldValue} name="doB"></input>
                </div>
                <div className="form-group">
                    <label>Designation</label><br/>
                    <input type="text" onChange={this.setFieldValue} name="designation"></input>
                </div>
                <div className="form-group">
                    <label>Experience</label><br/>
                    <input type="text" onChange={this.setFieldValue} name="Experience"></input>
                </div>
                <div className="form-action">
                    <button type="button" onClick={() => {this.props.saveHandler(this.state)}}>Save</button>
                </div>
            </form>
        </div>);
    }

}

export default EmpCreate;