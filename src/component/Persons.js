import React, { Component } from 'react';
import SearchBar from './SearchBar';
import PersonTable from './PersonTable'

class Persons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'firstName',
            sortDir: 'null',
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
         }
    }
    componentDidMount() {
        this.setState({persons: JSON.parse(localStorage.getItem("myData"))});
    }
    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };
    handleRowDel(person) {
        debugger
        var index = this.state.persons.indexOf(person);
        this.state.persons.splice(index, 1);
        this.setState(this.state.persons);
        console.log(this.state.persons)
        localStorage.setItem('myData', JSON.stringify(this.state.persons));
    };
    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var person = {
            id: id,
            firstName: "",
            lastName: "",
            DOB: '',
            PhoneNumber: "",
        }
        this.state.persons.push(person);
        this.setState(this.state.persons);
        localStorage.setItem('myData', JSON.stringify(this.state.persons));
    }
    handlePersonTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var persons = this.state.persons.slice();
        var newPersons = persons.map(function(person) {
            for (var key in person) {
                if (key === item.name && person.id === item.id) {
                    person[key] = item.value;
                }
            }
            return person;
        });
        this.setState({persons: newPersons});
        localStorage.setItem('myData', JSON.stringify(this.state.persons));
    };

    render() {
        // localStorage.setItem('myData', JSON.stringify(this.state.persons));
        return (
            <div>
                <SearchBar filterText={this.state.filterText}
                           onUserInput={this.handleUserInput.bind(this)}/>
                <PersonTable
                    sortBy={this.state.sortBy}
                    sortDir={this.state.sortDir}
                    onPersonTableUpdate={this.handlePersonTable.bind(this)}
                    onRowAdd={this.handleAddEvent.bind(this)}
                    onRowDel={this.handleRowDel.bind(this)}
                    persons={this.state.persons}
                    filterText={this.state.filterText}/>
            </div>
        );
    }
}

export default Persons;