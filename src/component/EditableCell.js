import React, { Component } from 'react';

class EditableCell extends React.Component {
    render() {
        debugger
        return (
            <td>
                <input type='text || number' name={this.props.cellData.type} id={this.props.cellData.id}
                       value={this.props.cellData.value} onChange={this.props.onPersonTableUpdate}/>
            </td>
        );
    }
}
export default  EditableCell