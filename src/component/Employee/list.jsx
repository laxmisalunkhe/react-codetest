import React, { Component } from 'react'
import EmpCreate from './create';
import EmpShow from './show';

class EmpList extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    addNewEmployeeHandler() {
        this.defaultObj = {
            "firstName" : "",
            "lastName" : "",  
            "dOB" : "",  
            "designation" : "",  
            "profilePhotoLink" : "",  
            "experience" : ""
        }
    }
  
    render() {
        return (<div>
            <h3>Employee List</h3>
            <div>
                <span>Add New</span>
                <button onClick={this.addNewEmployeeHandler()}>New</button>
            </div>
            
            <EmpCreate saveHandler={this.props.saveNewObj} newObj={this.defaultObj}></EmpCreate>
            <ul>
                {this.props.list.map(entry => {
                    return (<EmpShow detailedObj={entry}></EmpShow>)
                })}
            </ul>
        </div>);
    }

}

export default EmpList;