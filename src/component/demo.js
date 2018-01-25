// import React ,{PropTypes}from 'react';
// var FixedDataTable = require('fixed-data-table')
// var Table = FixedDataTable.Table;
// var Column = FixedDataTable.Column;
//
// var SortTypes = {
//     ASC: 'ASC',
//     DESC: 'DESC',
// };
//
// class MovieTable extends React.Component {
//     constructor(props){
//         super(props)
//         this.state ={
//             rows: [
//                 {title: "1Citizen Kane", rank: "1", year: "2000"},
//                 {title: "2The Shawshank Redemption", rank: "2", year: "1995"},
//                 {title: "3The Godfather", rank: "3", year: "1971"},
//                 {title: "4Citizen Kane", rank: "1", year: "1941"},
//                 {title: "5The Shawshank Redemption", rank: "2", year: "1940"},
//                 {title: "6The Godfather", rank: "3", year: "1934"}
//             ],
//             filteredRows: null,
//             filterBy: null,
//             sortBy: 'year',
//             sortDir: null,
//         };
//     }
//
//     componentWillMount() {
//         this._filterRowsBy(this.state.filterBy);
//     }
//
//     _rowGetter(rowIndex) {
//         debugger
//         console.log('ff',this.state.filteredRows)
//         return this.state.filteredRows[rowIndex];
//     }
//
//     _filterRowsBy(filterBy) {
//         var rows = this.state.rows.slice();
//         var filteredRows = filterBy ? rows.filter(function(row){
//             return row.title.toLowerCase().indexOf(filterBy.toLowerCase()) >= 0
//         }) : rows;
//
//         this.setState({
//             filteredRows,
//             filterBy,
//         });
//     }
//
//     _onFilterChange(e) {
//         this._filterRowsBy(e.target.value);
//     }
//
//     _sortRowsBy=(cellDataKey)=>{
//         var sortDir = this.state.sortDir;
//         var sortBy = cellDataKey;
//         if (sortBy === this.state.sortBy) {
//             sortDir = this.state.sortDir === SortTypes.ASC ? SortTypes.DESC : SortTypes.ASC;
//         } else {
//             sortDir = SortTypes.DESC;
//         }
//         console.log('ffff',this.state.filteredRows)
//
//         var rows = this.state.filteredRows.slice();
//         rows.sort(function(a, b){
//             var sortVal = 0;
//             if (a[sortBy] > b[sortBy]) {
//                 sortVal = 1;
//             }
//             if (a[sortBy] < b[sortBy]) {
//                 sortVal = -1;
//             }
//
//             if (sortDir === SortTypes.DESC) {
//                 sortVal = sortVal * -1;
//             }
//
//             return sortVal;
//         });
//
//         this.setState({
//             filteredRows: rows,
//             sortBy,
//             sortDir,
//         });
//     }
//
//
//     _renderHeader(label, cellDataKey) {
//         return (
//             <a href="#" onClick={()=>this._sortRowsBy.bind(null, cellDataKey)}>{label}</a>
//         );
//     }
//
//     render() {
//         var sortDirArrow = "";
//         if (this.state.sortDir !== null){
//             sortDirArrow = this.state.sortDir ===  SortTypes.DESC ? ' ↓' : ' ↑';
//         }
//         return (
//             <div>
//                 <label>filter by <input onChange={this._onFilterChange} /></label>
//                 <Table
//                     rowHeight={30}
//                      rowGetter={this._rowGetter}
//                      rowsCount={this.state.filteredRows.length}
//                     width={450}
//                     maxHeight={450}
//                     headerHeight={40}>
//                     <Column
//                          headerRenderer={this._renderHeader}
//                          label={'Movie Title' + (this.state.sortBy === 'title' ? sortDirArrow : '')}
//                         width={270}
//                         dataKey="title"
//                     />
//                     <Column
//                          headerRenderer={this._renderHeader}
//                          label={'Rank' + (this.state.sortBy === 'rank' ? sortDirArrow : '')}
//                         width={100}
//                         dataKey="rank"
//                     />
//                     <Column
//                          headerRenderer={this._renderHeader}
//                          label={'Year' + (this.state.sortBy === 'year' ? sortDirArrow : '')}
//                         width={80}
//                         dataKey="year"
//                     />
//                 </Table>
//             </div>
//         );
//     }
// }
//
// export default MovieTable

import React from 'react';
import {Table, Column, Cell} from 'fixed-data-table';

class MovieTable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows : [{"id":1,"first_name":"William","last_name":"Elliott","email":"welliott0@wisc.edu",
                "country":"Argentina","ip_address":"247.180.226.89"},
                {"id":2,"first_name":"Carl","last_name":"Ross","email":"cross1@mlb.com",
                    "country":"South Africa","ip_address":"27.146.70.36"},
                {"id":3,"first_name":"Jeremy","last_name":"Scott","email":"jscott2@cbsnews.com",
                    "country":"Colombia","ip_address":"103.52.74.225"},
                ],
            filteredDataList: this.rows,
            sortBy: 'id',
            sortDir: null
            // more data
        };
    }
    _renderHeader(label, cellDataKey) {
        console.log('cellDataKey',cellDataKey)
        return <div>
            <a onClick={this._sortRowsBy.bind(this, cellDataKey)}>{label}</a>
            <div>
                <br />
                <input style={{width:90+'%'}} onChange={this._onFilterChange.bind(this, cellDataKey)}/>
            </div>
        </div>;
    }

    _onFilterChange(cellDataKey, event) {
        debugger
        if (!event.target.value) {
            this.setState({
                filteredDataList: this.rows,
            });
        }
        var filterBy = event.target.value.toString().toLowerCase();
        var size = this.rows.length;
        var filteredList = [];
        for (var index = 0; index < size; index++) {
            var v = this.rows[index][cellDataKey];
            if (v.toString().toLowerCase().indexOf(filterBy) !== -1) {
                filteredList.push(this.rows[index]);
            }
        }
        this.setState({
            filteredDataList: filteredList,
        });
    }
    _sortRowsBy(cellDataKey) {
        debugger
        var sortDir = this.state.sortDir;
        var sortBy = cellDataKey;
        if (sortBy === this.state.sortBy) {
            sortDir = this.state.sortDir === 'ASC' ? 'DESC' : 'ASC';
        } else {
            sortDir = 'DESC';
        }
        var rows = this.state.filteredDataList.slice();
        rows.sort((a, b) => {
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

        this.setState({sortBy, sortDir, filteredDataList : rows});
    }
    render() {
        var sortDirArrow = '';
        if (this.state.sortDir !== null){
            sortDirArrow = this.state.sortDir === 'DESC' ? ' ↓' : ' ↑';
        }
        return <Table
            height={40+((this.state.rows.length+1) * 30)}
            width={1150}
            rowsCount={this.state.rows.length}
            rowHeight={30}
            headerHeight={30}
            rowGetter={function(rowIndex) {return this.state.rows[rowIndex]; }.bind(this)}>
            <Column dataKey="id" width={50}
                    label={'id' + (this.state.sortBy === 'id' ? sortDirArrow : '')}
                    headerRenderer={this._renderHeader.bind(this)}/>
            <Column dataKey="first_name" width={200}
                    label={'First Name' + (this.state.sortBy === 'first_name' ? sortDirArrow : '')}
                    headerRenderer={this._renderHeader.bind(this)}/>
            <Column  dataKey="last_name" width={200}
                     label={'Last Name' + (this.state.sortBy === 'last_name' ? sortDirArrow : '')}
                     headerRenderer={this._renderHeader.bind(this)}/>
            <Column  dataKey="email" width={400}
                     label={'Email' + (this.state.sortBy === 'email' ? sortDirArrow : '')}
                     headerRenderer={this._renderHeader.bind(this)}/>
            <Column  dataKey="country" width={300}
                     label={'Country' + (this.state.sortBy === 'country' ? sortDirArrow : '')}
                     headerRenderer={this._renderHeader.bind(this)}/>
        </Table>;
    }
}

export default MovieTable;