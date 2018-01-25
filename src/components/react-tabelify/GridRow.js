import React,{Component} from 'react';
import DefaultRow from './DefaultRow.js';

class GridRow extends Component{

    handleOnChange (event) {
        var selectedRows = this.props.selectedRows;
        if (selectedRows[this.props.rowId]) {
            delete selectedRows[this.props.rowId];
        }
        else {
            selectedRows[this.props.rowId] = {
                rowId: this.props.rowId,
                data: this.props.data
            };
        }
        this.props.onChangeGrid(event, {
            selectedRows: selectedRows
        })
    }
    render () {
        console.log('=gridrow',this.props.data)
        const checked = this.props.selectedRows[this.props.rowId] ? true : false;
        const Row = this.props.CustomRow ? this.props.CustomRow : DefaultRow;
        return (
            <div className={'checkbox-wrapper ' + this.props.className + (checked ? ' checked' : '')}>
                {this.props.showCheckbox &&
                <input type='checkbox' className='checkboxContainer' checked={checked} onChange={this.handleOnChange}/>}
                {/*<Row {...this.props}*/}
                     {/*className=''*/}
                     {/*style={{}}*/}
                     {/*checked={checked}*/}
                {/*/>*/}
            </div>
        );
    }
}
export default GridRow;
