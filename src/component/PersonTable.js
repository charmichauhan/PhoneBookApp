
import React, { Component } from 'react';
import PersonRow from './PersonRow';
import {Link} from 'react-router';

// var sortDir1='';

class PersonTable extends React.Component {
    // componentDidMount() {
    //     this.setState({persons: JSON.parse(localStorage.getItem("myData"))});
    // }
    _sortRowsBy=(cellData)=>{
        debugger
        console.log('cellData',cellData)
        var sortDir = 'ASC';
        var sortBy = cellData;
        console.log('this.props.sortBy', this.props.sortBy)
        if (this.props.sortBy) {
            sortDir = this.props.sortDir === 'ASC' ? 'DESC' : 'ASC';
        } else {
            sortDir = 'DESC';
        }
        console.log('this.props.persons', this.props.persons)
        var rows = this.props.persons.slice();
        rows.sort(function(a, b){
            var sortVal = 0;
            if (a[sortBy] > b[sortBy]) {
                sortVal = 1;
            }
            if (a[sortBy] < b[sortBy]) {
                sortVal = -1;
            }
            if (sortDir === 'DESC') {
                sortVal = sortVal * -1;
            }
            return sortVal;
        });
        this.setState({
            // filteredRows: rows,
            sortBy,
            sortDir,
        });
        console.log('sortDir',sortDir)
        console.log('sortBy',this.props.sortBy)
        console.log('this.props',this.props)
        // localStorage.setItem('myData', JSON.stringify(this.props))
    };
    // _renderHeader(label, cellDataKey) {
    //     return <div>
    //         <a onClick={this._sortRowsBy.bind(this, cellDataKey)}>{label}</a>
    //     </div>;
    // }
    render() {
        var onPersonTableUpdate = this.props.onPersonTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        console.log( ' this.props.persons',this.props.persons)
        var person = this.props.persons.map(function(person) {
            if ( (person.firstName || person.DOB || person.lastName || person.PhoneNumber).indexOf(filterText)  === -1 ) {
                return;
            }
            else return (<PersonRow onPersonTableUpdate={onPersonTableUpdate} person={person} onDelEvent={rowDel.bind(this)} key={person.id}/>)
        });
        var sortDirArrow = "";
        console.log('this.props.sortDir',this.props.sortDir)
        if (this.props.sortDir !== null){
            sortDirArrow = this.props.sortDir ===  'DESC' ? ' ↓' : ' ↑';
            console.log('sortDirArrow',sortDirArrow)
        }
        return (
            <div>
                <button type="button" onClick={this.props.onRowAdd} className="btn btn-success pull-right">Add</button>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <a onClick={this._sortRowsBy.bind('firstName')}><th>{'First Name' + (this.props.sortBy === 'firstName' ? sortDirArrow : '')}</th></a>
                        <a onClick={this._sortRowsBy.bind('lastName')}><th>{'Last Name' + (this.props.sortBy === 'lastName' ? sortDirArrow : '')}</th></a>
                        <a onClick={this._sortRowsBy.bind('DOB')}><th>{'DOB' + (this.props.sortBy === 'DOB' ? sortDirArrow : '')}</th></a>
                        <a onClick={this._sortRowsBy.bind('PhoneNumber')}><th>{'Phone Number' + (this.props.sortBy === 'PhoneNumber' ? sortDirArrow : '')}</th></a>
                    </tr>
                    </thead>
                    <tbody>
                    {person}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PersonTable