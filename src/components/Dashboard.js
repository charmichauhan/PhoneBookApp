import React from 'react';
import {findDOMNode} from 'react-dom';
import _ from 'underscore';
import Tabelify from './react-tabelify/Tabelify';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import { getById, logout, Delete, getAll} from "../actions/userActions";
import {bindActionCreators} from 'redux'
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

var tableData=[
    {
        firstName:'Charmi',
        lastName: 'Chauhan',
        DOB:'11/03/1995',
        PhoneNumber: '75895625541',
    },
    {
        firstName:'Suyash',
        lastName: "Modi",
        DOB:"12/05/1996",
        PhoneNumber: "457892345",
    },
    {
        firstName:'Tanuj',
        lastName: "Jain",
        DOB:"09/15/1994",
        PhoneNumber: "7584962658",
    },
    {
        firstName:'Karan',
        lastName: "Rajput",
        DOB:"11/16/1990",
        PhoneNumber: "9856254434",
    },
    {
        firstName:'Harsh',
        lastName: "Agrawal",
        DOB:"10/10/1995",
        PhoneNumber: "7833315256",
    },
    // {
    //     "firstName":4.2,
    //     "lastName": "Sanchit",
    //     "DOB":"Mathematics",
    //     "PhoneNumber": "BITS Pilani",
    // },
    // {
    //     "firstName":7.9,
    //     "lastName": "Rahul",
    //     "DOB":"Computer Science",
    //     "PhoneNumber": "BITS Pilani",
    // },
    // {
    //     "firstName":7.1,
    //     "lastName": "Ram",
    //     "DOB":"Electrical and Electronics",
    //     "PhoneNumber": "BITS Pilani",
    // },
    // {
    //     "firstName":8.9,
    //     "lastName": "Rohan",
    //     "DOB":"Electrical and Electronics",
    //     "PhoneNumber": "BITS Pilani",
    // },
    // {
    //     "firstName":3.9,
    //     "lastName": "Karshit",
    //     "DOB":"IT",
    //     "PhoneNumber": "BITS Pilani",
    // }

];

var columnMetadata = [
    {
        "columnName": "firstName",
        "displayName": "firstName",
    },
    {
        "columnName": "lastName",
        "displayName": "lastName"
    },
    {
        "columnName": "Phone Number",
        "displayName": "Phone Number",
    },
    {
        "columnName": "DOB",
        "displayName": "DOB",
    }
];

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            newData:[
                {
                firstName:'Charmi',
                lastName: 'Chauhan',
                DOB:'11/03/1995',
                PhoneNumber: '75895625541',
            },
                {
                    firstName:'Suyash',
                    lastName: "Modi",
                    DOB:"12/05/1996",
                    PhoneNumber: "457892345",
                },
                {
                    firstName:'Tanuj',
                    lastName: "Jain",
                    DOB:"09/15/1994",
                    PhoneNumber: "7584962658",
                },
                {
                    firstName:'Karan',
                    lastName: "Rajput",
                    DOB:"11/16/1990",
                    PhoneNumber: "9856254434",
                },
                {
                    firstName:'Harsh',
                    lastName: "Agrawal",
                    DOB:"10/10/1995",
                    PhoneNumber: "7833315256",
                },],
            query:'',
            filteredData: tableData,
            // tableConfig: {
            //     columnMetadata: columnMetadata,
            //     currentPage: 1,
            //     showCheckbox:false,
            //     data:
            //         [
            //             {
            //                 "firstName":"charmi",
            //                 "lastName": "chauhan",
            //                 "DOB":"11/03/1995",
            //                 "Phone Number": 75895625541,
            //             },
            //             {
            //                 "firstName":7.9,
            //                 "lastName": "Suyash",
            //                 "DOB":"Electrical and Electronics",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":7.4,
            //                 "lastName": "Tanuj",
            //                 "DOB":"Electrical and Electronics",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":9.7,
            //                 "lastName": "Karan",
            //                 "DOB":"Computer Science",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":7.2,
            //                 "lastName": "Harsh",
            //                 "DOB":"Information Systems",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":4.2,
            //                 "lastName": "Sanchit",
            //                 "DOB":"Mathematics",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":7.9,
            //                 "lastName": "Rahul",
            //                 "DOB":"Computer Science",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":7.1,
            //                 "lastName": "Ram",
            //                 "DOB":"Electrical and Electronics",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":8.9,
            //                 "lastName": "Rohan",
            //                 "DOB":"Electrical and Electronics",
            //                 "Phone Number": "BITS Pilani",
            //             },
            //             {
            //                 "firstName":3.9,
            //                 "lastName": "Karshit",
            //                 "DOB":"IT",
            //                 "Phone Number": "BITS Pilani",
            //             }
            //
            //         ],
            //     onChangeGrid: this.onChangeGrid,
            //     selectedRows: {},
            //     onRowClick: this.onRowClick,
            //     resultsPerPage: 10,
            //     CustomRow: require('./react/CustomRow.js'),
            //     CustomHeader: require('./react/CustomHeader.js'),
            //     // showHeader:true,
            //     localSearch: true,
            //     fixedHeight:100,
            //     width: '1000px'
            // }
        };
        this.onChangeGrid = this.onChangeGrid.bind(this);
    }

    onChangeGrid(event, data) {
        var tableConfig = this.state.tableConfig;
        _.extend(tableConfig, data);
        this.setState({
            tableConfig: tableConfig
        });
    }
    componentDidMount(){
        debugger
        this.props.getAll()
    }
    handleDeleteUser(_id) {
        debugger
        return (e) => this.props.Delete(_id);
    }
    handleUpdateUser(_id){
        debugger;
        history.push('/editProfile')
        // return (e) => this.props.update(_id);
    }

    doSearch(query){
        debugger
        console.log('tableData==', tableData)
        // var queryResult=[];
        // tableData.forEach(function(person){
        //     console.log('name========',person.firstName)
        //     console.log('person----',person.firstName.toLowerCase().indexOf(queryText))
        //     if(person.firstName.toLowerCase().indexOf(queryText) !== -1)
        //         console.log('=====',queryResult.push(person))
        //         console.log('queryResult', queryResult)
        //         queryResult.push(person);
        // });
        this.setState({
            query:query,
            // filteredData: queryResult
        })
    }
    handleRowDel(person) {
        var index = this.state.newData.indexOf(person);
        this.state.newData.splice(index, 1);
        this.setState(this.state.newData);
    };
    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var person = {
            id: id,
            firstName: "",
            lastName: "",
            DOB: "",
            PhoneNumber: ''
        }
        this.state.newData.push(person);
        this.setState(this.state.newData);
    }

    handlePersonTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var persons = this.state.newData.slice();
        var newPersons = persons.map(function(person) {
            for (var key in person) {
                if (key === item.name && person.id === item.id) {
                    person[key] = item.value;
                }
            }
            return person;
        });
        this.setState({persons:newPersons});
         console.log(this.state.newData);
    };

     getName(name) {
        console.log('namesplit',name.split(' ').slice(-1)[0])
        return name.split(' ').slice(-1)[0]
    }
    sort_by_column(data, key, column, direction) {
        debugger
        const a = this.getName(a[key]);
        const b = this.getName(b[key]);
        // sorts column id
         var r = data.sort(function(a, b) {
             if (direction === 'asc'){
             if ( a >= b ) {
                 return 1;
             } else if ( a < b) {
                 return -1;
             }
                return 0;
            };
        })
        // flips order if direction descending.
            if (direction === 'desc') r.reverse();
            return r;
    }

    render() {
        const {user, users} = this.props;
        return (
            <div className="InstantBox">
                <SearchBox query={this.state.query} onUserInput={this.doSearch.bind(this)}/>
                <DisplayTable onPersonTableUpdate={this.handlePersonTable.bind(this)}
                              onRowAdd={this.handleAddEvent.bind(this)} 
                              onRowDel={this.handleRowDel.bind(this)}
                              newData={this.state.newData}
                              // data={this.state.filteredData}
                              query={this.state.query}/>
                {/*<Tabelify style={{margin:'30px'}} {...this.state.tableConfig} />*/}
                <div className="col-md-6 col-md-offset-3">
                {/*<form>*/}
                    {/*<button className="btn btn-primary"*/}
                             {/*style={{position: 'absolute', top: '0px', right: '0px'}}*/}
                            {/*onClick={ ()=> {this.props.logout()}}>LogOut</button>*/}
                    {/*<br/><br/>*/}
                {/*</form>*/}
                {/*<table id="customers">*/}
                     {/*<tr>*/}
                         {/*<th>First lastName</th>*/}
                         {/*<th>Last lastName</th>*/}
                         {/*<th>DOB </th>*/}
                         {/*<th>Phone Number </th>*/}
                     {/*</tr>*/}
                     {/*<tr>*/}
                         {/*<td >*/}
                             {/*{users.loading && <em>Loading users...</em>}*/}
                             {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                             {/*{users.items &&*/}
                            {/*<div>*/}
                                {/*{users.items.map((user, index) =>*/}
                                    {/*<div key={user._id}>*/}
                                        {/*<br/>*/}
                                        {/*{user.firstName}*/}
                                    {/*</div>*/}
                                {/*)}*/}
                            {/*</div>*/}
                            {/*}*/}
                         {/*</td>*/}
                         {/*<td>*/}
                             {/*{users.loading && <em>Loading users...</em>}*/}
                             {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                             {/*{users.items &&*/}
                            {/*<div>*/}
                                {/*{users.items.map((user, index) =>*/}
                                    {/*<div key={user._id}>*/}
                                        {/*<br/>*/}
                                        {/*{user.lastName}*/}
                                       {/*</div>*/}
                                {/*)}*/}
                            {/*</div>*/}
                            {/*}*/}
                         {/*</td>*/}
                         {/*<td>*/}
                             {/*{users.loading && <em>Loading users...</em>}*/}
                             {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                             {/*{users.items &&*/}
                             {/*<div>*/}
                                 {/*{users.items.map((user, index) =>*/}
                                     {/*<div key={user._id}>*/}
                                         {/*<br/>*/}
                                         {/*{user.DOB}*/}
                                     {/*</div>*/}
                                 {/*)}*/}
                             {/*</div>*/}
                             {/*}*/}
                         {/*</td>*/}
                         {/*<td >*/}
                             {/*{users.loading && <em>Loading users...</em>}*/}
                             {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                             {/*{users.items &&*/}
                             {/*<div>*/}
                                 {/*{users.items.map((user, index) =>*/}
                                     {/*<div key={user._id}>*/}
                                         {/*<br/>*/}
                                         {/*{user.PhoneNumber}*/}
                                     {/*</div>*/}
                                 {/*)}*/}
                             {/*</div>*/}
                             {/*}*/}
                         {/*</td>*/}
                         {/*<td>*/}
                             {/*{users.loading && <em>Loading users...</em>}*/}
                             {/*{users.error && <span className="text-danger">ERROR: {users.error}</span>}*/}
                             {/*{users.items &&*/}
                            {/*<div>*/}
                                {/*{users.items.map((user, index) =>*/}
                                    {/*<div key={user._id}>*/}
                                        {/*<br/>*/}
                                        {/*{*/}
                                            {/*user.deleting ? <em> - Deleting...</em>*/}
                                                {/*: user.deleteError ?*/}
                                                {/*<span className="text-danger"> - ERROR: {user.deleteError}</span>*/}
                                                {/*: <span> <a onClick={this.handleDeleteUser(user._id)}>*/}
                                                    {/*<i class="fa fa-trash-o"></i>*/}
                                                                {/*</a></span>*/}
                                        {/*}*/}
                                    {/*</div>*/}
                                {/*)}*/}
                            {/*</div>*/}
                            {/*}*/}
                         {/*</td>*/}
                         {/*<td>*/}
                             {/*{users.loading && <em>Loading users...</em>}*/}
                             {/*{users.error && <span classlastName="text-danger">ERROR: {users.error}</span>}*/}
                             {/*{users.items &&*/}
                                {/*<div>*/}
                                    {/*{users.items.map((user, index) =>*/}
                                        {/*<div key={user._id}>*/}
                                            {/*<br/>*/}
                                            {/*{*/}
                                                {/*user.loading ? <em> - Updating...</em>*/}
                                                    {/*: user.Error ?*/}
                                                    {/*<span classlastName="text-danger"> - ERROR: {user.Error}</span>*/}
                                                    {/*: <span> <a onClick={this.handleUpdateUser(user._id)}>*/}
                                                                {/*<i class="fa fa-edit"></i>*/}
                                                                    {/*</a></span>*/}
                                            {/*}*/}
                                        {/*</div>*/}
                                    {/*)}*/}
                                {/*</div>*/}
                                {/*}*/}
                         {/*</td>*/}
                     {/*</tr>*/}
                 {/*</table>*/}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {  users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getById, logout, getAll, Delete}, dispatch);
}
export default connect(mapStateToProps, {getById, logout, getAll, Delete} )(Dashboard)

class DisplayTable extends React.Component {
    deleteRow = (index) => {
        debugger
        const newRows = this.state.rows.slice(0, index).concat(this.state.rows.slice(index + 1));
        console.log('newRows',newRows)
        this.setState({
            rows: newRows,
        });
    };
    updateRow=(index)=>{
        console.log('update')
    }
    render(){
        //making the rows to display
        var rows=[];
        tableData.forEach(function(person, index) {
            rows.push(<tr><td>{person.firstName}</td><td>{person.lastName}</td><td>{person.DOB}</td><td>{person.PhoneNumber}</td>
                <td><i class="fa fa-trash-o" onClick={() => { this.deleteRow(index); }}></i></td>
                <td><i class="fa fa-edit" onClick={() => { this.updateRow(index); }}></i></td></tr>)
        });
        //returning the table
        return(
            <div className="col-md-6 col-md-offset-3">
            <table id="customers">
                <thead>
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>DOB</th>
                    <th>PhoneNumber</th>
                </tr>
                </thead>
                {/*<th>*/}
                    {/*<tr>*/}
                    {/*/!*<Link onClick={this.props.sort_by_column}><th>firstName</th></Link>*!/*/}
                    {/*/!*<Link onClick={this.sort_by_column}><th>lastName</th></Link>*!/*/}
                    {/*/!*<Link onClick={this.sort_by_column}><th>DOB</th></Link>*!/*/}
                    {/*/!*<Link onClick={this.sort_by_column}><th>PhoneNumber</th></Link>*!/*/}
                    {/*</tr>*/}
                {/*</th>*/}
                <tbody>
                {rows}
                </tbody>
            </table>
            </div>
        );
    }
}
class SearchBox extends React.Component {
    doSearch(){
        debugger
        console.log('this----',this)
       this.props.onUserInput(this.refs.searchInput.value);
        // this.props.doSearch(query);
    }
    render(){
        return <input type="text" ref="searchInput" placeholder="Search..."
                      value={this.props.query} onChange={this.doSearch.bind(this)}/>
    }
}