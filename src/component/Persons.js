import React, { Component } from 'react';
import PersonRow from './PersonRow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateData, addData, deleteData, allData} from '../actions/userActions';

export const persons=[
    {
        id: 1,
        PhoneNumber: '1548953365',
        lastName: 'Chauhan',
        DOB: '03/11/1995',
        firstName: 'Charmi'
    }, {
        id: 2,
        PhoneNumber: '9852654425',
        lastName: 'Rajput',
        DOB: '05/10/1998',
        firstName: 'Drisha'
    }, {
        id: 3,
        PhoneNumber: '4578956625',
        lastName: 'Jain',
        DOB: '03/05/1996',
        firstName: 'Ayaan'
    }, {
        id: 4,
        PhoneNumber: '4587845563',
        lastName: 'Agrawal',
        DOB: '09/03/1992',
        firstName: 'Ram'
    }, {
        id: 5,
        PhoneNumber: '7895896625',
        lastName: 'Rathi',
        DOB: '06/11/1991',
        firstName: 'Tia'
    }, {
        id: 6,
        PhoneNumber: '9568456523',
        lastName: 'Chauhan',
        DOB: '03/11/1996',
        firstName: 'Raj'
    }
]

class Persons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterlastName: "",
            filterDOB: "",
            filterPhoneNumber: "",
            filterText: "",
            persons: [
                {
                    id: 1,
                    PhoneNumber: '1548953365',
                    lastName: 'Chauhan',
                    DOB: '03/11/1995',
                    firstName: 'Charmi'
                }, {
                    id: 2,
                    PhoneNumber: '9852654425',
                    lastName: 'Rajput',
                    DOB: '05/10/1998',
                    firstName: 'Drisha'
                }, {
                    id: 3,
                    PhoneNumber: '4578956625',
                    lastName: 'Jain',
                    DOB: '03/05/1996',
                    firstName: 'Ayaan'
                }, {
                    id: 4,
                    PhoneNumber: '4587845563',
                    lastName: 'Agrawal',
                    DOB: '09/03/1992',
                    firstName: 'Ram'
                }, {
                    id: 5,
                    PhoneNumber: '7895896625',
                    lastName: 'Rathi',
                    DOB: '06/11/1991',
                    firstName: 'Tia'
                }, {
                    id: 6,
                    PhoneNumber: '9568456523',
                    lastName: 'Chauhan',
                    DOB: '03/11/1996',
                    firstName: 'Raj'
                }
            ],
            sortBy: null,
            sortDir: null,
            // myData: JSON.parse(localStorage.getItem('myData'))
        }
        this.onPersonTableUpdate=this.handlePersonTable.bind(this);
        this.onRowAdd=this.handleAddEvent.bind(this);
        this.onRowDel=this.handleRowDel.bind(this);
        this.handleUserInput=this.handleUserInput.bind(this);
        this.handleLNInput=this.handleLNInput.bind(this);
        this.handleDOBInput=this.handleDOBInput.bind(this);
        this.handlePNInput=this.handlePNInput.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.changeFilterlName=this.changeFilterlName.bind(this);
        this.changeFilterDOB=this.changeFilterDOB.bind(this);
        this.changeFilterPhone=this.changeFilterPhone.bind(this);
        this._sortRowsBy=this._sortRowsBy.bind(this)
    }
    // componentDidMount() {
    //     this.setState({persons: JSON.parse(localStorage.getItem("myData"))});
    // }
    componentWillMount() {
        // localStorage.getItem(JSON.stringify('myData'));
        console.log('this==',this)
        this.setState({this:localStorage.getItem(JSON.stringify('myData'))})
    }
    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    }
    handleLNInput(filterlastName) {
        this.setState({filterlastName: filterlastName});
    };
    handleDOBInput(filterDOB) {
        this.setState({filterDOB: filterDOB});
    };
    handlePNInput(filterPhoneNumber) {
        this.setState({filterPhoneNumber: filterPhoneNumber});
    };
    handleRowDel(person) {
        debugger;
        // this.props.deleteData();
        var item = JSON.parse(localStorage.getItem('myData'))
        console.log('item',item)
        var index = item.persons.indexOf(person);
        item.persons.splice(index, 1);
        // this.setState(this.state);
        // console.log(this.state.persons)
        // this.setState({allData: JSON.parse(localStorage.getItem('myData'))})
        localStorage.setItem('myData', JSON.stringify(item));
    };
    handleAddEvent() {
        debugger
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        console.log('id',id)
        var person = {
            id: id,
            firstName: "",
            lastName: "",
            DOB: '',
            PhoneNumber: "",
        }
        var item = JSON.parse(localStorage.getItem('myData'))
        item.persons.push(person);
        this.setState(item);
        localStorage.setItem('myData', JSON.stringify(item));
        // this.props.addData();
    }
    handlePersonTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var data = JSON.parse(localStorage.getItem('myData'))

        var persons = data.persons.slice();
        var newPersons = persons.map(function(person) {
            for (var key in person) {
                if (key === item.name && person.id === item.id) {
                    person[key] = item.value;
                }
            }
            return person;
        });
        this.setState({persons: newPersons});
        console.log('persons',this.state.persons)
        console.log('dataHAndle',data)
        localStorage.setItem('myData', JSON.stringify(data));
    };
    handleChange() {
        this.handleUserInput(this.refs.filterInput.value);
    }
    changeFilterlName = () => {
        this.handleLNInput(this.refs.filterLNInput.value);
    }
    changeFilterDOB = () => {
        this.handleDOBInput(this.refs.filterDOBInput.value);
    }
    changeFilterPhone = () => {
        this.handlePNInput(this.refs.filterPNInput.value);
    }
    _sortRowsBy=(cellDataKey)=>{
        debugger
        var self = this;
        console.log('cellData',cellDataKey)
        var sortDir = this.state.sortDir;
        console.log('sortDir',sortDir)
        var sortBy = cellDataKey;
        console.log('sortBy',sortBy)
        if (sortBy === this.state.sortBy) {
            sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
        }
        else {
            sortDir = 'DESC';
        }
        var data = JSON.parse(localStorage.getItem('myData'))
        console.log('data',data)
        var rows = data.persons.slice();
        var rows1 = rows.sort(function(a, b){
            var sortVal = 0;
            console.log('sortBya===',a[sortBy]);
            console.log('sortByb===',b[sortBy]);
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
        console.log('rows1', rows1)
        self.setState({
            persons : rows1,
            sortBy,
            sortDir
        });
        data.persons=rows1;
        console.log('data.persons', data.persons);
        console.log('data', data);
        localStorage.setItem('myData', JSON.stringify(data))
    };

    render() {
        // localStorage.clear()
        var data = JSON.parse(localStorage.getItem('myData'))
        localStorage.setItem('myData', JSON.stringify(data));
        var onPersonTableUpdate = this.onPersonTableUpdate;
        var rowDel = this.onRowDel;
        const self = this;
        debugger
        var item = JSON.parse(localStorage.getItem('myData'));
        var person = item.persons.map(function(person) {
            if ( ( person.firstName.indexOf(self.state.filterText) || person.lastName.indexOf(self.state.filterlastName)
                || person.DOB.indexOf(self.state.filterDOB) || person.PhoneNumber.indexOf(self.state.filterPhoneNumber))  === -1)
            {return}

            else return (<PersonRow onPersonTableUpdate={onPersonTableUpdate} person={person} onDelEvent={rowDel.bind(this)} key={person.id}/>)
        });

        var sortDirArrow = "";
        console.log('this.state.sortDir',this.state.sortDir)
        if (this.state.sortDir !== null) {
            sortDirArrow = this.state.sortDir === 'DESC' ? ' ↓' : ' ↑';
            console.log('sortDirArrow', sortDirArrow)
        }
        return (
            <div>
                <h2>PhoneBook Application</h2>

                <div>
                    <button type="button" onClick={this.onRowAdd} className="btn btn-success pull-right">Add</button>
                    <br/><br/>
                    <table id="customers">

                        <tr>
                            <a onClick={()=>this._sortRowsBy('firstName')}><th>{'First Name' + (this.state.sortBy === 'firstName' ? sortDirArrow : '')}</th></a>
                            <a onClick={()=>this._sortRowsBy('lastName')}><th>{'Last Name' + (this.state.sortBy === 'lastName' ? sortDirArrow : '')}</th></a>
                            <a onClick={()=>this._sortRowsBy('DOB')}><th>{'DOB' + (this.state.sortBy === 'DOB' ? sortDirArrow : '')}</th></a>
                            <a onClick={()=>this._sortRowsBy('PhoneNumber')}><th>{'Phone Number' + (this.state.sortBy === 'PhoneNumber' ? sortDirArrow : '')}</th></a>
                        </tr>
                        <tr>
                            <td>
                                <input className="cellContainer" type="text" placeholder="Search firstName..." value={this.state.filterText}
                                       ref="filterInput" onChange={this.handleChange.bind(this)}/>
                                <input className="cellContainer" type="text" placeholder="Search lastName..." value={this.state.filterlastName}
                                       ref="filterLNInput" onChange={this.changeFilterlName.bind(this)}/>
                                <input className="cellContainer" type="date" placeholder="Search DOB..." value={this.state.filterDOB}
                                       ref="filterDOBInput" onChange={this.changeFilterDOB.bind(this)}/>
                                <input className="cellContainer" type="number" placeholder="Search PhoneNumber..." value={this.state.filterPhoneNumber} pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                                       ref="filterPNInput" onChange={this.changeFilterPhone.bind(this)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {person}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.data,
        currentData: state.currentData
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({updateData, addData, deleteData, allData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);