import React, { Component } from 'react'
import employeeList from './employeeList.json';
import EmpList from './list';
import { get } from 'lodash';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            employeeList: employeeList
        };
        this.saveNewObj = this.saveNewObj.bind(this);
    }

    saveNewObj(newState) {
        const updatedList = this.state.employeeList.concat([get(newState, 'newObjCopy', {})])
        this.setState({employeeList: updatedList});
    }

  
    render() {
        return (<div>
            <h2 className="text-center">Employee CRUD</h2>
            <EmpList list={this.state.employeeList} saveNewObj={this.saveNewObj}></EmpList>
        </div>);
    }

}

export default Employee;