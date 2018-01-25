import React,{Component} from 'react';
import DefaultHeader from './DefaultHeader.js';

export default class GridHeader extends Component{
    getDefaultProps () {
        return {
            columnMetadata: [],
            onHeaderClick:()=>{}
        }
    }
    handleOnChange (event) {
        var selectedRows = this.props.selectedRows;
        if (!this.props.checkAll) {
            for (var i = 0; i < this.props.resultsOnPage; i++) {
                selectedRows[i] = {
                    rowId: i,
                    data: this.props.data[i]
                };
            }
        }
        else {
            selectedRows = {};
        }
        this.props.onChangeGrid(event, {
            checkAll: !this.props.checkAll,
            selectedRows: selectedRows,
            rerender: false
        });
    }
    handleHeaderClick (data, event) {
        this.props.onHeaderClick && this.props.onHeaderClick(data, event);
    }
    render () {
        var Header;
        var headerContainerClass;
        if (this.props.CustomHeader) {
            Header = this.props.CustomHeader;
            headerContainerClass = 'customHeaderContainer';
        }
        else {
            Header = DefaultHeader;
            headerContainerClass = 'defaultHeaderContainer';
        }

        var Header = this.props.CustomHeader ? this.props.CustomHeader : DefaultHeader;

        var headerContainer = <div className = 'checkbox-wrapper'>
                                 {this.props.showCheckbox && <input type='checkbox' className = 'checkboxContainer' checked={this.props.checkAll} value = {this.props.checkAll} onClick = {this.handleOnChange} />}
                                 <Header {...this.props} onHeaderClick = {this.handleHeaderClick}/>
                              </div>;

        var header = this.props.showHeader ? headerContainer : null;


        return (
            <div className={'headerContainer' + ' ' + headerContainerClass}>
                 {header}
            </div>
        )
    }
}

// export default GridHeader;