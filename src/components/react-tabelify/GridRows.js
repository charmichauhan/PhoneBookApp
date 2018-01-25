import React from 'react';
import GridRow from './GridRow.js';
// var data=
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
//         ]
class GridRows extends React.Component{
    getDefaultProps () {
        return ({
            data: [],
            columnMetadata: [],
            onRowClick:()=>{},
            onChangeGrid:()=>{}
        });
    }

    render () {
        console.log('gridrows=', this.props.data);
        var rowclassName = this.props.CustomRow ? 'customRowContainer' : 'defaultRowContainer';
        rowclassName += this.props.showCheckbox ? ' showCheck' : '';
        var rows = this.props.data.map((item, index)=> {
            return (
                <GridRow {...this.props}
                         rowId={index}
                         data={item}
                         key={index} className={rowclassName + ' row-' + index}
                />
            );
        });
        return (
            <div className={'gridRowsContainer' + (this.props.fixedHeight ? ' defaultScrollHeight' : '')}
                 style={Number.isInteger(this.props.fixedHeight) ? {
                     overflowY: 'scroll',
                     height: this.props.fixedHeight
                 } : {}}>
                 {rows}
            </div>
        );
    }
}

export default GridRows;
